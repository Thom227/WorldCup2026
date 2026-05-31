#!/usr/bin/env node
// Run: node build.js
// Reads  : submissions/*.json + data/results.json + data/matches.json
// Writes : data/dashboard-data.json  (safe to commit — no future predictions, no bonus answers)
'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// LOAD DATA
// ---------------------------------------------------------------------------
const results = JSON.parse(fs.readFileSync('data/results.json', 'utf8'));
const schedule = JSON.parse(fs.readFileSync('data/matches.json', 'utf8'));

const submissionFiles = fs.readdirSync('submissions')
  .filter(f => f.endsWith('.json'));

if (submissionFiles.length === 0) {
  console.error('No submission files found in submissions/');
  process.exit(1);
}

const submissions = submissionFiles.map(f => {
  try {
    const sub = JSON.parse(fs.readFileSync(path.join('submissions', f), 'utf8'));
    sub._file = f;
    return sub;
  } catch (e) {
    console.warn(`Skipping ${f}: ${e.message}`);
    return null;
  }
}).filter(Boolean);

// ---------------------------------------------------------------------------
// SCORING CONSTANTS (must match dashboard.html)
// ---------------------------------------------------------------------------
const BONUS_PTS = {b1:15, b2:15, b3:25, b4:25, b5:30, b8:30, b9:30};

const KO_POINTS = {
  r32:    {stand:12, winnaar:8,  gelijk:8,  plek:4},
  af:     {stand:15, winnaar:11, gelijk:11, plek:7},
  kf:     {stand:20, winnaar:16, gelijk:16, plek:13},
  hf:     {stand:25, winnaar:19, gelijk:19, plek:16},
  finale: {stand:30, winnaar:35, gelijk:30, plek:28},
};

// ---------------------------------------------------------------------------
// SCORING HELPERS
// ---------------------------------------------------------------------------
function outcome(h, a) {
  if (h > a) return 'h';
  if (a > h) return 'a';
  return 'd';
}

function scoreGroupMatch(pH, pA, rH, rA) {
  let pts = 0;
  if (outcome(pH, pA) === outcome(rH, rA)) pts += 4;
  if (pH === rH && pA === rA) pts += 8;
  return pts;
}

function scoreStandings(predicted, actual) {
  let pts = 0;
  for (let i = 0; i < 4; i++) {
    if (predicted[i] && actual[i] &&
        predicted[i].trim().toLowerCase() === actual[i].trim().toLowerCase()) {
      pts += 5;
    }
  }
  return pts;
}

function roundFromId(id) {
  if (id === 'fin' || id === 'tf') return 'finale';
  const prefix = id.split('_')[0];
  return KO_POINTS[prefix] ? prefix : 'r32';
}

function scoreKoMatch(pSH, pSA, rSH, rSA, pHTeam, pATeam, rHTeam, rATeam, round) {
  const pts  = KO_POINTS[round] || KO_POINTS.r32;
  const pH   = parseInt(pSH, 10);
  const pA   = parseInt(pSA, 10);
  if (isNaN(pH) || isNaN(pA)) return 0;

  const homeMatch = !!(pHTeam && rHTeam && norm(pHTeam) === norm(rHTeam));
  const awayMatch = !!(pATeam && rATeam && norm(pATeam) === norm(rATeam));

  let total = 0;

  // +plek per team predicted in the correct slot
  if (homeMatch) total += pts.plek;
  if (awayMatch) total += pts.plek;

  // +winnaar/gelijk only when the correct winning team was predicted
  const predOut = outcome(pH, pA);
  const realOut = outcome(rSH, rSA);
  if (predOut === realOut) {
    if      (predOut === 'h' && homeMatch) total += pts.winnaar;
    else if (predOut === 'a' && awayMatch) total += pts.winnaar;
    else if (predOut === 'd' && homeMatch && awayMatch) total += pts.gelijk;
  }

  // +stand for exact score (score numbers only, teams irrelevant)
  if (pH === rSH && pA === rSA) total += pts.stand;

  return total;
}

function norm(v) { return (v || '').toString().trim().toLowerCase(); }

function scoreBonus(sub, res) {
  const rb = res.bonus || {};
  const sb = sub.bonus || {};
  let pts = 0;

  // b1 player name, b2/b3 country, b5 player name — text exact match
  ['b1','b2','b3','b5'].forEach(k => {
    if (rb[k] != null && norm(sb[k]) === norm(rb[k])) pts += BONUS_PTS[k];
  });

  // b4: minute of fastest goal — exact
  if (rb.b4 != null) {
    const na = parseFloat(sb.b4), nb = parseFloat(rb.b4);
    if (!isNaN(na) && !isNaN(nb) && na === nb) pts += BONUS_PTS.b4;
  }

  // b8: yellow cards in entire tournament — ±3 tolerance
  if (rb.b8 != null) {
    const na = parseFloat(sb.b8), nb = parseFloat(rb.b8);
    if (!isNaN(na) && !isNaN(nb) && Math.abs(na - nb) <= 3) pts += BONUS_PTS.b8;
  }

  // b9: goals in entire tournament — ±5 tolerance
  if (rb.b9 != null) {
    const na = parseFloat(sb.b9), nb = parseFloat(rb.b9);
    if (!isNaN(na) && !isNaN(nb) && Math.abs(na - nb) <= 5) pts += BONUS_PTS.b9;
  }

  return pts;
}

// ---------------------------------------------------------------------------
// BUILD SCHEDULE LOOKUP  (matchId → date/teams)
// ---------------------------------------------------------------------------
const matchDateById  = {};
const matchTeamsById = {};
schedule.forEach(m => {
  matchDateById[m.id]  = m.date;
  matchTeamsById[m.id] = { home: m.home, away: m.away };
});

// ---------------------------------------------------------------------------
// HUMAN-READABLE SUMMARY
// ---------------------------------------------------------------------------
const BONUS_LABELS = {
  b1: 'Welke Nederlandse speler scoort ons eerste doelpunt?',
  b2: 'Welk land scoort de meeste doelpunten in de groepsfase?',
  b3: 'Welk land ontvangt als eerste een rode kaart?',
  b4: 'In welke minuut valt het snelste doelpunt?',
  b5: 'Wie wordt topscorer van het WK?',
  b8: 'Hoeveel gele kaarten vallen er in het gehele toernooi? (±3 telt)',
  b9: 'Hoeveel goals vallen er in het gehele toernooi? (±5 telt)',
};
const KO_ROUND_LABEL = { r32: 'Ronde van 32', af: 'Achtste finale', kf: 'Kwartfinale', hf: 'Halve finale', tf: 'Troostfinale', fin: 'Finale' };
const KO_IDS = [
  ...Array.from({length:16}, (_, i) => `r32_${i}`),
  ...Array.from({length:8},  (_, i) => `af_${i}`),
  ...Array.from({length:4},  (_, i) => `kf_${i}`),
  'hf_0', 'hf_1', 'tf', 'fin',
];

function buildReadableText(sub) {
  const lines = [];

  lines.push(`Deelnemer : ${sub.naam || '—'}`);
  lines.push(`E-mail    : ${sub.email || '—'}`);
  lines.push(`Kampioen  : ${sub.kampioen || '—'}`);

  // Group matches
  const groupLines = [];
  for (let i = 0; i < 72; i++) {
    const h = sub.scores?.[`${i}-h`], a = sub.scores?.[`${i}-a`];
    if (h == null || h === '' || a == null || a === '') continue;
    const teams = matchTeamsById[String(i)];
    const matchStr = teams ? `${teams.home} – ${teams.away}` : `Match ${i}`;
    groupLines.push(`  ${matchStr.padEnd(40)} ${h}–${a}`);
  }
  lines.push('');
  lines.push(`GROEPSWEDSTRIJDEN (${groupLines.length}/72)`);
  lines.push(...groupLines);

  // Standings
  lines.push('');
  lines.push('POULEVOLGORDE');
  const groups = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  groups.forEach(g => {
    const order = sub.standings?.[g];
    if (order?.length) lines.push(`  Groep ${g}: ${order.join(' > ')}`);
  });

  // KO
  const koLines = [];
  KO_IDS.forEach(id => {
    const h  = sub.koFields?.[`${id}_h`],  a  = sub.koFields?.[`${id}_a`];
    const sh = sub.koFields?.[`${id}_sh`], sa = sub.koFields?.[`${id}_sa`];
    if (!h && !a) return;
    const prefix = (id === 'tf' || id === 'fin') ? id : id.split('_')[0];
    const num    = (id === 'tf' || id === 'fin') ? '' : ` #${parseInt(id.split('_')[1], 10) + 1}`;
    const label  = `${KO_ROUND_LABEL[prefix] || id}${num}`;
    const score  = (sh != null && sh !== '' && sa != null && sa !== '') ? `  ${sh}–${sa}` : '';
    koLines.push(`  ${label.padEnd(22)} ${h || '?'} – ${a || '?'}${score}`);
  });
  if (koLines.length) {
    lines.push('');
    lines.push('KNOCK-OUT FASE');
    lines.push(...koLines);
  }

  // Bonus
  lines.push('');
  lines.push('BONUSVRAGEN');
  ['b1','b2','b3','b4','b5','b8','b9'].forEach(k => {
    const val = sub.bonus?.[k];
    if (val != null && val !== '') lines.push(`  ${BONUS_LABELS[k]}\n    → ${val}`);
  });

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// PROCESS EACH SUBMISSION
// ---------------------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

const rows = submissions.map(sub => {
  const groupScores   = results.groupScores   || {};
  const groupStandings = results.groupStandings || {};
  const koResults      = results.ko             || {};

  let groepPts     = 0, groepMatches    = 0;
  let standenPts   = 0, standenGroepen  = 0;
  let koPts        = 0, koMatches       = 0;
  let todayPts     = 0;
  const history    = [];

  // Group matches
  for (const [idxStr, actual] of Object.entries(groupScores)) {
    if (idxStr === '_comment' || idxStr === '_example') continue;
    const idx  = parseInt(idxStr, 10);
    const pH   = parseInt(sub.scores?.[`${idx}-h`], 10);
    const pA   = parseInt(sub.scores?.[`${idx}-a`], 10);
    if (isNaN(pH) || isNaN(pA)) continue;

    const pts  = scoreGroupMatch(pH, pA, actual.h, actual.a);
    groepPts  += pts;
    groepMatches++;

    const matchInfo = schedule.find(m => m.id === String(idx));
    history.push({
      matchId:    String(idx),
      date:       matchInfo ? matchInfo.date : null,
      home:       matchInfo ? matchInfo.home : `Match ${idx} Thuis`,
      away:       matchInfo ? matchInfo.away : `Match ${idx} Uit`,
      round:      'group',
      predictedH: pH,
      predictedA: pA,
      actualH:    actual.h,
      actualA:    actual.a,
      pts,
    });

    if (matchInfo && matchInfo.date === today) todayPts += pts;
  }

  // Group standings
  for (const [group, actualOrder] of Object.entries(groupStandings)) {
    if (group === '_comment' || group === '_example') continue;
    const predictedOrder = sub.standings?.[group];
    if (predictedOrder) {
      standenPts     += scoreStandings(predictedOrder, actualOrder);
      standenGroepen++;
    }
  }

  // KO matches
  for (const [id, actual] of Object.entries(koResults)) {
    if (id === '_comment' || id === '_example') continue;
    if (actual.sh == null) continue;

    const round   = roundFromId(id);
    const pSH     = sub.koFields?.[`${id}_sh`];
    const pSA     = sub.koFields?.[`${id}_sa`];
    const pHTeam  = sub.koFields?.[`${id}_h`];
    const pATeam  = sub.koFields?.[`${id}_a`];
    const pts     = scoreKoMatch(pSH, pSA, actual.sh, actual.sa, pHTeam, pATeam, actual.h, actual.a, round);
    koPts       += pts;
    koMatches++;

    const matchInfo = schedule.find(m => m.id === id);
    history.push({
      matchId:    id,
      date:       matchInfo ? matchInfo.date : null,
      home:       sub.koFields?.[`${id}_h`] || matchInfo?.label || id,
      away:       sub.koFields?.[`${id}_a`] || '',
      actualHome: actual.h,
      actualAway: actual.a,
      round,
      predictedH: parseInt(pSH, 10),
      predictedA: parseInt(pSA, 10),
      actualH:    actual.sh,
      actualA:    actual.sa,
      pts,
    });

    if (matchInfo && matchInfo.date === today) todayPts += pts;
  }

  // Kampioen bonus (50 pts) — scored but never exposed in the output
  const finResult = koResults.fin;
  if (finResult && finResult.sh != null && sub.kampioen) {
    const champion = finResult.sh > finResult.sa ? finResult.h : finResult.a;
    if (champion && norm(sub.kampioen) === norm(champion)) {
      koPts    += 50;
      todayPts += 50; // only matters if the final is today
    }
  }

  const bonusPts = scoreBonus(sub, results);
  const totaal   = groepPts + standenPts + koPts + bonusPts;

  // Sort history chronologically
  history.sort((a, b) => (a.date || '').localeCompare(b.date || ''));

  return {
    naam:   sub.naam  || sub._file.replace('.json', ''),
    scores: { groep: groepPts, groepMatches, standen: standenPts, standenGroepen, ko: koPts, koMatches, bonus: bonusPts, totaal },
    todayPts,
    history,
  };
});

// Sort leaderboard
rows.sort((a, b) => b.scores.totaal - a.scores.totaal || a.naam.localeCompare(b.naam, 'nl'));

// ---------------------------------------------------------------------------
// BUILD PLAYED RESULTS (safe to expose — these are already played)
// ---------------------------------------------------------------------------
const played = {};
for (const [idx, actual] of Object.entries(results.groupScores || {})) {
  if (idx === '_comment' || idx === '_example') continue;
  played[idx] = { h: actual.h, a: actual.a };
}
for (const [id, actual] of Object.entries(results.ko || {})) {
  if (id === '_comment' || id === '_example' || actual.sh == null) continue;
  played[id] = { h: actual.h, a: actual.a, sh: actual.sh, sa: actual.sa };
}

// ---------------------------------------------------------------------------
// WRITE OUTPUT
// ---------------------------------------------------------------------------
const output = {
  generatedAt:  new Date().toISOString(),
  phase:        results.phase        || 'pre',
  lastUpdated:  results.lastUpdated  || null,
  played,
  leaderboard:  rows,
};

fs.writeFileSync('data/dashboard-data.json', JSON.stringify(output, null, 2), 'utf8');
console.log(`data/dashboard-data.json written — ${rows.length} participant(s), phase: ${output.phase}`);

// Write human-readable summary per participant (local only, gitignored)
submissions.forEach(sub => {
  const slug = (sub.naam || sub._file.replace('.json', ''))
    .toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  fs.writeFileSync(path.join('submissions', `${slug}-leesbaar.txt`), buildReadableText(sub), 'utf8');
});
console.log(`${submissions.length} leesbaar.txt file(s) written to submissions/`);
