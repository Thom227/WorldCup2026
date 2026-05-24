// Shrink header on scroll
window.addEventListener('scroll', () => {
  const h = document.getElementById('site-header');
  const h1 = document.getElementById('header-h1');
  if (!h || !h1) return;
  if (window.scrollY > 40) {
    h.style.paddingTop = '0.6rem';
    h.style.paddingBottom = '0.6rem';
    h1.style.fontSize = '1.2rem';
  } else {
    h.style.paddingTop = '1.5rem';
    h.style.paddingBottom = '1.5rem';
    h1.style.fontSize = '1.75rem';
  }
});

const GROUPS={
  A:['Mexico','Zuid-Afrika','Zuid-Korea','Tsjechië'],
  B:['Canada','Qatar','Bosnië-Herzegovina','Zwitserland'],
  C:['Brazilië','Marokko','Haïti','Schotland'],
  D:['VS','Paraguay','Australië','Turkije'],
  E:['Duitsland','Curaçao','Ivoorkust','Ecuador'],
  F:['Nederland','Japan','Zweden','Tunesië'],
  G:['België','Egypte','Iran','Nieuw-Zeeland'],
  H:['Spanje','Kaapverdië','Saoedi-Arabië','Uruguay'],
  I:['Frankrijk','Senegal','Irak','Noorwegen'],
  J:['Argentinië','Algerije','Oostenrijk','Jordanië'],
  K:['Portugal','DR Congo','Oezbekistan','Colombia'],
  L:['Engeland','Kroatië','Ghana','Panama'],
};

const MATCHES=[
  {d:'11 jun',t:'21:00',g:'A',h:'Mexico',a:'Zuid-Afrika'},
  {d:'12 jun',t:'04:00',g:'A',h:'Zuid-Korea',a:'Tsjechië'},
  {d:'12 jun',t:'21:00',g:'B',h:'Canada',a:'Bosnië-Herzegovina'},
  {d:'13 jun',t:'03:00',g:'D',h:'VS',a:'Paraguay'},
  {d:'13 jun',t:'21:00',g:'B',h:'Qatar',a:'Zwitserland'},
  {d:'14 jun',t:'00:00',g:'C',h:'Brazilië',a:'Marokko'},
  {d:'14 jun',t:'03:00',g:'C',h:'Haïti',a:'Schotland'},
  {d:'14 jun',t:'06:00',g:'D',h:'Australië',a:'Turkije'},
  {d:'14 jun',t:'19:00',g:'E',h:'Duitsland',a:'Curaçao'},
  {d:'14 jun',t:'22:00',g:'F',h:'Nederland',a:'Japan'},
  {d:'15 jun',t:'01:00',g:'E',h:'Ivoorkust',a:'Ecuador'},
  {d:'15 jun',t:'04:00',g:'F',h:'Zweden',a:'Tunesië'},
  {d:'15 jun',t:'18:00',g:'H',h:'Spanje',a:'Kaapverdië'},
  {d:'15 jun',t:'21:00',g:'G',h:'België',a:'Egypte'},
  {d:'16 jun',t:'00:00',g:'H',h:'Saoedi-Arabië',a:'Uruguay'},
  {d:'16 jun',t:'03:00',g:'G',h:'Iran',a:'Nieuw-Zeeland'},
  {d:'16 jun',t:'21:00',g:'I',h:'Frankrijk',a:'Senegal'},
  {d:'17 jun',t:'00:00',g:'I',h:'Irak',a:'Noorwegen'},
  {d:'17 jun',t:'03:00',g:'J',h:'Argentinië',a:'Algerije'},
  {d:'17 jun',t:'06:00',g:'J',h:'Oostenrijk',a:'Jordanië'},
  {d:'17 jun',t:'19:00',g:'K',h:'Portugal',a:'DR Congo'},
  {d:'17 jun',t:'22:00',g:'L',h:'Engeland',a:'Kroatië'},
  {d:'18 jun',t:'01:00',g:'L',h:'Ghana',a:'Panama'},
  {d:'18 jun',t:'04:00',g:'K',h:'Oezbekistan',a:'Colombia'},
  {d:'18 jun',t:'18:00',g:'A',h:'Tsjechië',a:'Zuid-Afrika'},
  {d:'18 jun',t:'21:00',g:'B',h:'Zwitserland',a:'Bosnië-Herzegovina'},
  {d:'19 jun',t:'00:00',g:'B',h:'Canada',a:'Qatar'},
  {d:'19 jun',t:'03:00',g:'A',h:'Mexico',a:'Zuid-Korea'},
  {d:'19 jun',t:'21:00',g:'D',h:'VS',a:'Australië'},
  {d:'20 jun',t:'00:00',g:'C',h:'Schotland',a:'Marokko'},
  {d:'20 jun',t:'03:00',g:'C',h:'Brazilië',a:'Haïti'},
  {d:'20 jun',t:'06:00',g:'D',h:'Turkije',a:'Paraguay'},
  {d:'20 jun',t:'19:00',g:'F',h:'Nederland',a:'Zweden'},
  {d:'20 jun',t:'22:00',g:'E',h:'Duitsland',a:'Ivoorkust'},
  {d:'21 jun',t:'02:00',g:'E',h:'Ecuador',a:'Curaçao'},
  {d:'21 jun',t:'06:00',g:'F',h:'Tunesië',a:'Japan'},
  {d:'21 jun',t:'18:00',g:'H',h:'Spanje',a:'Saoedi-Arabië'},
  {d:'21 jun',t:'21:00',g:'G',h:'België',a:'Iran'},
  {d:'22 jun',t:'00:00',g:'H',h:'Uruguay',a:'Kaapverdië'},
  {d:'22 jun',t:'03:00',g:'G',h:'Nieuw-Zeeland',a:'Egypte'},
  {d:'22 jun',t:'19:00',g:'J',h:'Argentinië',a:'Oostenrijk'},
  {d:'22 jun',t:'23:00',g:'I',h:'Frankrijk',a:'Irak'},
  {d:'23 jun',t:'02:00',g:'I',h:'Noorwegen',a:'Senegal'},
  {d:'23 jun',t:'05:00',g:'J',h:'Jordanië',a:'Algerije'},
  {d:'23 jun',t:'19:00',g:'K',h:'Portugal',a:'Oezbekistan'},
  {d:'23 jun',t:'22:00',g:'L',h:'Engeland',a:'Ghana'},
  {d:'24 jun',t:'01:00',g:'L',h:'Panama',a:'Kroatië'},
  {d:'24 jun',t:'04:00',g:'K',h:'Colombia',a:'DR Congo'},
  {d:'24 jun',t:'21:00',g:'B',h:'Zwitserland',a:'Canada'},
  {d:'24 jun',t:'21:00',g:'B',h:'Bosnië-Herzegovina',a:'Qatar'},
  {d:'25 jun',t:'00:00',g:'C',h:'Marokko',a:'Haïti'},
  {d:'25 jun',t:'00:00',g:'C',h:'Schotland',a:'Brazilië'},
  {d:'25 jun',t:'03:00',g:'A',h:'Zuid-Afrika',a:'Zuid-Korea'},
  {d:'25 jun',t:'03:00',g:'A',h:'Tsjechië',a:'Mexico'},
  {d:'25 jun',t:'22:00',g:'E',h:'Curaçao',a:'Ivoorkust'},
  {d:'25 jun',t:'22:00',g:'E',h:'Ecuador',a:'Duitsland'},
  {d:'26 jun',t:'01:00',g:'F',h:'Japan',a:'Zweden'},
  {d:'26 jun',t:'01:00',g:'F',h:'Tunesië',a:'Nederland'},
  {d:'26 jun',t:'04:00',g:'D',h:'Paraguay',a:'Australië'},
  {d:'26 jun',t:'04:00',g:'D',h:'Turkije',a:'VS'},
  {d:'26 jun',t:'21:00',g:'I',h:'Noorwegen',a:'Frankrijk'},
  {d:'26 jun',t:'21:00',g:'I',h:'Senegal',a:'Irak'},
  {d:'27 jun',t:'02:00',g:'H',h:'Kaapverdië',a:'Saoedi-Arabië'},
  {d:'27 jun',t:'02:00',g:'H',h:'Uruguay',a:'Spanje'},
  {d:'27 jun',t:'05:00',g:'G',h:'Egypte',a:'Iran'},
  {d:'27 jun',t:'05:00',g:'G',h:'Nieuw-Zeeland',a:'België'},
  {d:'27 jun',t:'23:00',g:'L',h:'Kroatië',a:'Ghana'},
  {d:'27 jun',t:'23:00',g:'L',h:'Panama',a:'Engeland'},
  {d:'28 jun',t:'01:30',g:'K',h:'Colombia',a:'Portugal'},
  {d:'28 jun',t:'01:30',g:'K',h:'DR Congo',a:'Oezbekistan'},
  {d:'28 jun',t:'04:00',g:'J',h:'Algerije',a:'Oostenrijk'},
  {d:'28 jun',t:'04:00',g:'J',h:'Jordanië',a:'Argentinië'},
];

const POINTS={
  groep: {stand:8,winnaar:4,gelijk:4,plek:0,kampioen:0},
  r32:   {stand:12,winnaar:8,gelijk:8,plek:4,kampioen:0},
  af:    {stand:15,winnaar:11,gelijk:11,plek:7,kampioen:0},
  kf:    {stand:20,winnaar:16,gelijk:16,plek:13,kampioen:0},
  hf:    {stand:25,winnaar:19,gelijk:19,plek:16,kampioen:0},
  finale:{stand:30,winnaar:35,gelijk:30,plek:28,kampioen:50},
};

const VERLENGING_NOTE=`<strong>Let op:</strong> De stand telt tot 90 minuten. Als je 1–1 voorspeld hebt en het wordt verlenging na 1–1, telt dit als een <em>juiste stand</em>. Wordt het verlenging na 2–2 en heb je 1–1 voorspeld, dan ontvang je punten voor <em>gelijkspel</em>. Een land mag niet meerdere keren worden ingevuld in dezelfde ronde.`;

const R32=[
  {id:'r32_0', d:'28 jun',t:'21:00',lb:'2e Gr.A – 2e Gr.B',   s1:{type:'w2',g:'A'},s2:{type:'w2',g:'B'}},
  {id:'r32_1', d:'29 jun',t:'19:00',lb:'1e Gr.C – 2e Gr.F',   s1:{type:'w1',g:'C'},s2:{type:'w2',g:'F'}},
  {id:'r32_2', d:'29 jun',t:'22:30',lb:'1e Gr.E – beste 3e',  s1:{type:'w1',g:'E'},s2:{type:'b3',g:'?'}},
  {id:'r32_3', d:'30 jun',t:'03:00',lb:'1e Gr.F – 2e Gr.C',   s1:{type:'w1',g:'F'},s2:{type:'w2',g:'C'}},
  {id:'r32_4', d:'30 jun',t:'19:00',lb:'2e Gr.E – 2e Gr.I',   s1:{type:'w2',g:'E'},s2:{type:'w2',g:'I'}},
  {id:'r32_5', d:'30 jun',t:'23:00',lb:'1e Gr.I – beste 3e',  s1:{type:'w1',g:'I'},s2:{type:'b3',g:'?'}},
  {id:'r32_6', d:'1 jul', t:'03:00',lb:'1e Gr.A – beste 3e',  s1:{type:'w1',g:'A'},s2:{type:'b3',g:'?'}},
  {id:'r32_7', d:'1 jul', t:'18:00',lb:'1e Gr.L – beste 3e',  s1:{type:'w1',g:'L'},s2:{type:'b3',g:'?'}},
  {id:'r32_8', d:'1 jul', t:'22:00',lb:'1e Gr.G – beste 3e',  s1:{type:'w1',g:'G'},s2:{type:'b3',g:'?'}},
  {id:'r32_9', d:'2 jul', t:'02:00',lb:'1e Gr.D – beste 3e',  s1:{type:'w1',g:'D'},s2:{type:'b3',g:'?'}},
  {id:'r32_10',d:'2 jul', t:'21:00',lb:'1e Gr.H – 2e Gr.J',   s1:{type:'w1',g:'H'},s2:{type:'w2',g:'J'}},
  {id:'r32_11',d:'3 jul', t:'01:00',lb:'2e Gr.K – 2e Gr.L',   s1:{type:'w2',g:'K'},s2:{type:'w2',g:'L'}},
  {id:'r32_12',d:'3 jul', t:'05:00',lb:'1e Gr.B – beste 3e',  s1:{type:'w1',g:'B'},s2:{type:'b3',g:'?'}},
  {id:'r32_13',d:'3 jul', t:'20:00',lb:'2e Gr.D – 2e Gr.G',   s1:{type:'w2',g:'D'},s2:{type:'w2',g:'G'}},
  {id:'r32_14',d:'4 jul', t:'00:00',lb:'1e Gr.J – 2e Gr.H',   s1:{type:'w1',g:'J'},s2:{type:'w2',g:'H'}},
  {id:'r32_15',d:'4 jul', t:'03:30',lb:'1e Gr.K – beste 3e',  s1:{type:'w1',g:'K'},s2:{type:'b3',g:'?'}},
];
const AF=[
  {id:'af_0',d:'4 jul', t:'19:00',from:[0,2]},{id:'af_1',d:'4 jul', t:'23:00',from:[1,4]},
  {id:'af_2',d:'5 jul', t:'22:00',from:[3,5]},{id:'af_3',d:'6 jul', t:'02:00',from:[6,7]},
  {id:'af_4',d:'6 jul', t:'21:00',from:[10,11]},{id:'af_5',d:'7 jul',t:'02:00',from:[8,9]},
  {id:'af_6',d:'7 jul', t:'18:00',from:[13,15]},{id:'af_7',d:'7 jul',t:'22:00',from:[12,14]},
];
const KF=[
  {id:'kf_0',d:'9 jul',t:'22:00',from:[0,1]},{id:'kf_1',d:'10 jul',t:'21:00',from:[4,5]},
  {id:'kf_2',d:'11 jul',t:'23:00',from:[2,3]},{id:'kf_3',d:'12 jul',t:'03:00',from:[6,7]},
];
const HF=[
  {id:'hf_0',d:'14 jul',t:'21:00',from:[0,1]},{id:'hf_1',d:'15 jul',t:'21:00',from:[2,3]},
];

let groupStandings={};

// ── HELPERS ──────────────────────────────────────────────────────────────────
function slotLabel(s){return s.type==='w1'?`1e Gr.${s.g}`:s.type==='w2'?`2e Gr.${s.g}`:'Beste 3e';}

// drawWinners stores the manually chosen winner for drawn matches
const drawWinners = {};

function getWinner(id){
  if (drawWinners[id]) return drawWinners[id];
  const sh=document.getElementById(id+'_sh'),sa=document.getElementById(id+'_sa');
  const th=document.getElementById(id+'_h'),ta=document.getElementById(id+'_a');
  if(!sh||sh.value===''||sa.value==='') return null;
  const h=+sh.value,a=+sa.value;
  if(h>a) return th?.value||null;
  if(a>h) return ta?.value||null;
  return null;
}

function onScoreChange(input){
  const id = input.id.replace(/_s[ha]$/,'');
  const sh = document.getElementById(id+'_sh');
  const sa = document.getElementById(id+'_sa');
  const th = document.getElementById(id+'_h');
  const ta = document.getElementById(id+'_a');
  const bar = document.getElementById(id+'_dwbar');
  const btnH = document.getElementById(id+'_dwh');
  const btnA = document.getElementById(id+'_dwa');
  if(!sh||!sa||!bar) return;

  const hv = sh.value, av = sa.value;

  const neutral = 'font-size:.85rem;font-weight:600;padding:.6rem 1rem;border-radius:.6rem;border:1.5px solid #d0c5af;background:#f8f9fa;color:#191c1d;cursor:pointer;text-align:left;width:100%;transition:all .2s';
  if(btnH) btnH.style.cssText = neutral;
  if(btnA) btnA.style.cssText = neutral;

  if(hv===''||av===''){
    bar.style.display='none';
    delete drawWinners[id];
    if(btnH) btnH.textContent = 'Thuis';
    if(btnA) btnA.textContent = 'Uit';
    return;
  }

  if(+hv===+av){
    if(btnH) btnH.textContent = th?.value || 'Thuis';
    if(btnA) btnA.textContent = ta?.value || 'Uit';
    bar.style.display = 'block';
  } else {
    bar.style.display = 'none';
    delete drawWinners[id];
    if(btnH) btnH.textContent = 'Thuis';
    if(btnA) btnA.textContent = 'Uit';
  }
}

function setDrawWinner(btn){
  const bar  = btn.parentElement.parentElement;
  const id   = bar.id.replace('_dwbar','');
  const isH  = btn.id === id+'_dwh';
  const th   = document.getElementById(id+'_h');
  const ta   = document.getElementById(id+'_a');
  const btnH = document.getElementById(id+'_dwh');
  const btnA = document.getElementById(id+'_dwa');

  drawWinners[id] = isH ? (th?.value||'Thuis') : (ta?.value||'Uit');

  const winnerStyle = 'font-size:.85rem;font-weight:700;padding:.6rem 1rem;border-radius:.6rem;border:2px solid #2e7d32;background:#e8f5e9;color:#1b5e20;cursor:pointer;text-align:left;width:100%;transition:all .2s';
  const loserStyle  = 'font-size:.85rem;font-weight:400;padding:.6rem 1rem;border-radius:.6rem;border:1.5px solid #e0e0e0;background:#f5f5f5;color:#bbb;cursor:pointer;text-align:left;width:100%;transition:all .2s;text-decoration:line-through';

  if(isH){
    btnH.style.cssText = winnerStyle;
    btnA.style.cssText = loserStyle;
    btnH.textContent = '✓ ' + (th?.value||'Thuis');
    btnA.textContent = ta?.value||'Uit';
  } else {
    btnA.style.cssText = winnerStyle;
    btnH.style.cssText = loserStyle;
    btnA.textContent = '✓ ' + (ta?.value||'Uit');
    btnH.textContent = th?.value||'Thuis';
  }
  saveState();
}

function setFilled(id,val){
  const el=document.getElementById(id);
  if(!el) return;
  el.value=val||'';
  el.classList.toggle('filled',!!val);
  if(id.endsWith('_h')||id.endsWith('_a')){
    const matchId = id.slice(0,-2);
    const side = id.endsWith('_h')?'h':'a';
    const btn = document.getElementById(matchId+'_dw'+side);
    if(btn) btn.textContent = val||( side==='h'?'Thuis':'Uit');
  }
}

function flashOk(id){
  const el=document.getElementById(id);
  if(!el) return;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),3000);
}

function pboxHTML(pts,note=''){
  const rows=[];
  if(pts.winnaar) rows.push(`<div class="pitem"><div class="val">${pts.winnaar}</div><div class="lbl">Land op winst</div></div>`);
  if(pts.stand)   rows.push(`<div class="pitem"><div class="val">${pts.stand}</div><div class="lbl">Juiste stand</div></div>`);
  if(pts.gelijk)  rows.push(`<div class="pitem"><div class="val">${pts.gelijk}</div><div class="lbl">Gelijkspel</div></div>`);
  if(pts.plek)    rows.push(`<div class="pitem"><div class="val">${pts.plek}</div><div class="lbl">Plek juist</div></div>`);
  rows.push(`<div class="pitem"><div class="val">0</div><div class="lbl">Niks goed</div></div>`);
  if(pts.kampioen) rows.push(`<div class="pitem" style="border:1px solid rgba(115,92,0,.4)"><div class="val">${pts.kampioen}</div><div class="lbl">Kampioen</div></div>`);
  return `<div class="pbox"><div class="pbox-title">Puntenverdeling</div><div class="pbox-grid">${rows.join('')}</div>${note?`<div class="pbox-note">${note}</div>`:''}</div>`;
}

// ── STANDINGS ────────────────────────────────────────────────────────────────
function calcStandings(){
  const st={};
  Object.keys(GROUPS).forEach(g=>{st[g]={};GROUPS[g].forEach(t=>{st[g][t]={pts:0,gf:0,ga:0,p:0}})});
  MATCHES.forEach((m,i)=>{
    const hi=document.querySelector(`input[data-i="${i}"][data-side="h"]`);
    const ai=document.querySelector(`input[data-i="${i}"][data-side="a"]`);
    if(!hi||!ai||hi.value===''||ai.value==='') return;
    const h=+hi.value,a=+ai.value,g=m.g;
    st[g][m.h].gf+=h;st[g][m.h].ga+=a;st[g][m.h].p++;
    st[g][m.a].gf+=a;st[g][m.a].ga+=h;st[g][m.a].p++;
    if(h>a) st[g][m.h].pts+=3;
    else if(h===a){st[g][m.h].pts++;st[g][m.a].pts++;}
    else st[g][m.a].pts+=3;
  });
  groupStandings={};
  Object.keys(st).forEach(g=>{
    groupStandings[g]=Object.entries(st[g])
      .map(([n,s])=>({n,...s,gd:s.gf-s.ga}))
      .sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf||a.n.localeCompare(b.n));
  });
}

// ── TRIGGER FUNCTIONS ────────────────────────────────────────────────────────
function triggerR32(){
  calcStandings();

  const allThirds = [];
  Object.keys(GROUPS).forEach(g => {
    const order = getDisplayOrder(g);
    if (!order || order.length < 3) return;
    const name = order[2];
    const st = groupStandings[g];
    const teamSt = st ? st.find(t => t.n === name) : null;
    allThirds.push({
      g, n: name,
      pts: teamSt ? teamSt.pts : 0,
      gd:  teamSt ? teamSt.gd  : 0,
      gf:  teamSt ? teamSt.gf  : 0,
    });
  });

  allThirds.sort((a,b) => b.pts-a.pts || b.gd-a.gd || b.gf-a.gf || a.n.localeCompare(b.n));
  const best8 = allThirds.slice(0, 8);
  const best8groups = best8.map(t => t.g);
  const best8teams  = {};
  best8.forEach(t => { best8teams[t.g] = t.n; });

  const winnerCols = ['A','B','D','E','G','I','K','L'];
  const mapping = getThirdPlaceMapping(best8groups);

  R32.forEach(m => {
    const getTeam = slot => {
      if (slot.type === 'w1') return getDisplayOrder(slot.g)[0] || '';
      if (slot.type === 'w2') return getDisplayOrder(slot.g)[1] || '';
      const winnerSlot = (slot === m.s1) ? m.s2 : m.s1;
      const winnerGroup = winnerSlot.g;
      if (!mapping) return 'Beste 3e';
      const colIdx = winnerCols.indexOf(winnerGroup);
      if (colIdx === -1) return 'Beste 3e';
      const facedGroup = mapping[colIdx][1];
      return best8teams[facedGroup] || ('Nr.3 Gr.' + facedGroup);
    };
    setFilled(m.id + '_h', getTeam(m.s1));
    setFilled(m.id + '_a', getTeam(m.s2));
  });

  flashOk('ok-r32');
}

function triggerAF(){
  AF.forEach(m=>{setFilled(m.id+'_h',getWinner(R32[m.from[0]].id)||'');setFilled(m.id+'_a',getWinner(R32[m.from[1]].id)||'');});
  flashOk('ok-af');
}
function triggerKF(){
  KF.forEach(m=>{setFilled(m.id+'_h',getWinner(AF[m.from[0]].id)||'');setFilled(m.id+'_a',getWinner(AF[m.from[1]].id)||'');});
  flashOk('ok-kf');
}
function triggerHF(){
  HF.forEach(m=>{setFilled(m.id+'_h',getWinner(KF[m.from[0]].id)||'');setFilled(m.id+'_a',getWinner(KF[m.from[1]].id)||'');});
  flashOk('ok-hf');
}
function triggerFinale(){
  const w0=getWinner('hf_0'),w1=getWinner('hf_1');
  setFilled('fin_h',w0||'');setFilled('fin_a',w1||'');
  const hf0h=document.getElementById('hf_0_h')?.value||'',hf0a=document.getElementById('hf_0_a')?.value||'';
  const hf1h=document.getElementById('hf_1_h')?.value||'',hf1a=document.getElementById('hf_1_a')?.value||'';
  setFilled('tf_h',w0?(w0===hf0h?hf0a:hf0h):'');
  setFilled('tf_a',w1?(w1===hf1h?hf1a:hf1h):'');
  flashOk('ok-fin');
}
function triggerKampioen(){
  const w=getWinner('fin');
  const el=document.getElementById('champion');
  if(el&&w){el.textContent=w;el.classList.add('text-primary');}
  flashOk('ok-champ');
}

// ── BUILD MATCHES ────────────────────────────────────────────────────────────
function buildMatches(){
  const grid=document.getElementById('mgrid');
  const byG={};
  MATCHES.forEach((m,i)=>{if(!byG[m.g])byG[m.g]=[];byG[m.g].push({...m,i})});
  Object.keys(GROUPS).forEach(g=>{
    const isNL=g==='F';
    const c=document.createElement('div');
    c.className='bg-white rounded-2xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-shadow'+(isNL?' nl-highlight':'');
    c.innerHTML=`<div class="bg-surface-container-low px-6 py-4 flex justify-between items-center border-b border-outline-variant">
        <h3 class="text-xl font-bold tracking-tight">GROEP ${g}</h3>
        <span class="text-[10px] font-bold opacity-40 tracking-[0.2em]">11 – 28 JUN</span>
      </div><div id="ml-${g}" class="divide-y divide-outline-variant/30"></div>`;
    grid.appendChild(c);
    const list=c.querySelector('#ml-'+g);
    (byG[g]||[]).forEach(m=>{
      const nl=m.h==='Nederland'||m.a==='Nederland';
      const r=document.createElement('div');
      r.className='p-5 hover:bg-surface-container-lowest transition-all group'+(nl?' bg-primary-container/5':'');
      r.innerHTML=`<div class="flex items-center justify-between mb-3 text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 group-hover:opacity-80 transition-opacity">
          <span>${m.d}</span><span>${m.t}</span></div>
        <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div class="text-right text-sm font-semibold truncate ${m.h==='Nederland'?'nl-text':''} text-on-surface">${m.h}</div>
          <div class="flex items-center gap-2">
            <input type="number" min="0" max="99" data-i="${m.i}" data-side="h" placeholder="–"
              class="w-10 h-10 rounded-lg bg-surface-container-low border border-outline-variant text-center font-bold text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all outline-none text-sm placeholder:opacity-40">
            <span class="text-on-surface-variant opacity-30 font-bold">:</span>
            <input type="number" min="0" max="99" data-i="${m.i}" data-side="a" placeholder="–"
              class="w-10 h-10 rounded-lg bg-surface-container-low border border-outline-variant text-center font-bold text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all outline-none text-sm placeholder:opacity-40">
          </div>
          <div class="text-left text-sm font-semibold truncate ${m.a==='Nederland'?'nl-text':''} text-on-surface">${m.a}</div>
        </div>`;
      list.appendChild(r);
    });
  });
}

// ── BUILD KNOCKOUT ────────────────────────────────────────────────────────────
function koMatch(m,placeholders){
  const id=m.id;
  return `<div class="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm" id="${id}">
    <div class="bg-surface-container-low px-4 py-3 border-b border-outline-variant flex justify-between items-center">
      <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">${m.lb||''}</span>
      <span class="text-[10px] font-bold text-primary opacity-80 uppercase tracking-widest">${m.d} · ${m.t}</span>
    </div>
    <div class="p-5 space-y-3">
      <div class="flex items-center gap-3">
        <input type="text" class="kti flex-1 bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-xs font-bold text-on-surface outline-none focus:border-primary-container transition-all" id="${id}_h" placeholder="${placeholders[0]}">
        <input type="number" min="0" max="99" class="w-12 h-12 bg-white border border-outline-variant rounded-xl text-center font-bold text-lg focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface" id="${id}_sh" placeholder="&ndash;" oninput="onScoreChange(this)">
      </div>
      <div class="text-center text-[10px] font-black opacity-10 uppercase tracking-[0.5em] text-on-surface">Versus</div>
      <div class="flex items-center gap-3">
        <input type="text" class="kti flex-1 bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-xs font-bold text-on-surface outline-none focus:border-primary-container transition-all" id="${id}_a" placeholder="${placeholders[1]}">
        <input type="number" min="0" max="99" class="w-12 h-12 bg-white border border-outline-variant rounded-xl text-center font-bold text-lg focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface" id="${id}_sa" placeholder="&ndash;" oninput="onScoreChange(this)">
      </div>
      <div id="${id}_dwbar" style="display:none;border-top:1px solid #e1e3e4;padding:.75rem 1rem;background:#fffde7">
        <div style="font-size:.7rem;font-weight:700;color:#735c00;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem">Winnaar na verlenging / strafschoppen</div>
        <div style="display:flex;flex-direction:column;gap:.4rem">
          <button id="${id}_dwh" onclick="setDrawWinner(this)" style="font-size:.85rem;font-weight:600;padding:.6rem 1rem;border-radius:.6rem;border:1.5px solid #d0c5af;background:#f8f9fa;color:#191c1d;cursor:pointer;text-align:left;width:100%;transition:all .2s">Thuis</button>
          <button id="${id}_dwa" onclick="setDrawWinner(this)" style="font-size:.85rem;font-weight:600;padding:.6rem 1rem;border-radius:.6rem;border:1.5px solid #d0c5af;background:#f8f9fa;color:#191c1d;cursor:pointer;text-align:left;width:100%;transition:all .2s">Uit</button>
        </div>
      </div>
    </div>
  </div>`;
}

function buildKO(){
  const cont=document.getElementById('kocont');
  const createRound=(title,date,btnId,pts,note,matchesHtml,cols=4,triggerFn='')=>{
    const sec=document.createElement('div');
    sec.className='space-y-6';
    sec.innerHTML=`
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-center gap-6">
          <span class="bg-white border-2 border-primary-container px-8 py-3 rounded-xl text-2xl font-bold text-primary shadow-sm">${title}</span>
          <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-50">${date}</span>
        </div>
        ${triggerFn?`<div class="flex items-center gap-4 no-print">
          <button onclick="${triggerFn}" class="flex items-center gap-3 bg-white hover:bg-surface-container-low text-on-surface border border-outline-variant rounded-full px-6 py-2.5 text-[10px] font-bold tracking-widest transition-all hover:border-primary active:scale-95 shadow-sm">
            <span class="material-symbols-outlined text-sm">auto_fix_high</span> VUL AUTOMATISCH IN
          </button>
          <span class="auto-ok" id="ok-${btnId}"><span class="material-symbols-outlined text-sm">check_circle</span></span>
        </div>`:''}
      </div>
      ${pboxHTML(pts,note)}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-8">${matchesHtml}</div>`;
    return sec;
  };

  cont.appendChild(createRound('Ronde van 32','28 jun – 4 jul','r32',POINTS.r32,VERLENGING_NOTE,R32.map(m=>koMatch(m,[slotLabel(m.s1),slotLabel(m.s2)])).join(''),4,'triggerR32()'));
  cont.appendChild(createRound('Achtste finales','4 – 7 jul','af',POINTS.af,VERLENGING_NOTE,AF.map((m,i)=>koMatch({...m,lb:`Duel ${m.from[0]+1} vs Duel ${m.from[1]+1}`},[`Winnaar ${m.from[0]+1}`,`Winnaar ${m.from[1]+1}`])).join(''),4,'triggerAF()'));
  cont.appendChild(createRound('Kwartfinales','9 – 12 jul','kf',POINTS.kf,VERLENGING_NOTE,KF.map(m=>koMatch({...m,lb:`AF ${m.from[0]+1} vs AF ${m.from[1]+1}`},[`Winnaar AF ${m.from[0]+1}`,`Winnaar AF ${m.from[1]+1}`])).join(''),2,'triggerKF()'));
  cont.appendChild(createRound('Halve finales','14 – 15 jul','hf',POINTS.hf,VERLENGING_NOTE,HF.map(m=>koMatch({...m,lb:`KF ${m.from[0]+1} vs KF ${m.from[1]+1}`},[`Winnaar KF ${m.from[0]+1}`,`Winnaar KF ${m.from[1]+1}`])).join(''),2,'triggerHF()'));

  const duo=document.createElement('div');
  duo.className='grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12';
  duo.appendChild(createRound('Troostfinale','18 jul','tf',POINTS.finale,VERLENGING_NOTE,koMatch({id:'tf',d:'18 jul',t:'23:00',lb:'3e / 4e plaats'},['Verliezer HF 1','Verliezer HF 2']),1));
  const finNote=`${VERLENGING_NOTE}<br><br><strong style="color:#735c00">Kampioenswinnaar (50 pt):</strong> Je kunt ook een al uitgevallen land kiezen als eindwinnaar. Vul dit in het speciale vak onderaan in.`;
  duo.appendChild(createRound('Grote Finale','19 jul · New York','fin',POINTS.finale,finNote,koMatch({id:'fin',d:'19 jul',t:'00:00',lb:'FINALE'},['Winnaar HF 1','Winnaar HF 2']),1,'triggerFinale()'));
  cont.appendChild(duo);

  const champ=document.createElement('div');
  champ.className='pt-20';
  champ.innerHTML=`<div class="max-w-2xl mx-auto bg-white border-2 border-primary-container rounded-[2.5rem] p-12 text-center shadow-xl relative overflow-hidden group">
    <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50"></div>
    <h2 class="text-5xl font-bold text-primary mb-4 tracking-tight">🏆 WERELDKAMPIOEN 2026</h2>
    <p class="text-on-surface-variant font-bold tracking-[0.3em] text-[10px] uppercase opacity-60 mb-10">Jouw voorspelling voor de eindwinnaar (50 punten indien correct)</p>
    <div class="flex flex-col items-center gap-8">
      <div class="text-4xl font-bold tracking-wider text-on-surface min-h-[4rem] transition-all duration-500" id="champion">—</div>
      <div class="w-full max-w-sm space-y-4">
        <input type="text" id="kampioen-vrijkeuze" class="w-full bg-surface-container-low border-2 border-outline-variant rounded-xl px-6 py-4 text-center font-bold text-xl text-on-surface outline-none focus:border-primary-container transition-all placeholder:opacity-40 placeholder:text-sm"
          placeholder="Of kies zelf een (uitgevallen) land..."
          oninput="document.getElementById('champion').textContent=this.value||'—'">
        <div class="flex flex-col items-center gap-3 no-print">
          <button onclick="triggerKampioen()" class="bg-primary-container text-on-primary-container font-bold px-10 py-4 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-3 uppercase tracking-widest text-xs">
            <span class="material-symbols-outlined">military_tech</span> BEPAAL OP BASIS VAN FINALE
          </button>
          <span class="auto-ok" id="ok-champ"><span class="material-symbols-outlined text-sm">verified</span> Voorspelling voltooid</span>
        </div>
      </div>
    </div>
  </div>`;
  cont.appendChild(champ);
}

// Columns: winners of groups A,B,D,E,G,I,K,L → which 3rd-place team they face
const MATRIX={"ABCDEFGH":["3C","3G","3E","3D","3A","3F","3B","3H"],"ABCDEFGI":["3C","3G","3E","3D","3A","3F","3B","3I"],"ABCDEFGJ":["3C","3G","3J","3D","3A","3F","3B","3E"],"ABCDEFGK":["3C","3G","3E","3D","3A","3F","3B","3K"],"ABCDEFGL":["3C","3G","3E","3D","3A","3F","3L","3B"],"ABCDEFHI":["3H","3E","3B","3C","3A","3F","3D","3I"],"ABCDEFHJ":["3H","3J","3B","3C","3A","3F","3D","3E"],"ABCDEFHK":["3H","3E","3B","3C","3A","3F","3D","3K"],"ABCDEFHL":["3H","3E","3B","3C","3A","3F","3L","3D"],"ABCDEFIJ":["3C","3J","3B","3D","3A","3F","3E","3I"],"ABCDEFIK":["3C","3E","3B","3D","3A","3F","3I","3K"],"ABCDEFIL":["3C","3E","3B","3D","3A","3F","3L","3I"],"ABCDEFJK":["3C","3J","3B","3D","3A","3F","3E","3K"],"ABCDEFJL":["3C","3J","3E","3D","3A","3F","3L","3B"],"ABCDEFKL":["3C","3E","3B","3D","3A","3F","3L","3K"],"ABCDEGHI":["3H","3G","3E","3C","3A","3D","3B","3I"],"ABCDEGHJ":["3H","3G","3J","3C","3A","3D","3B","3E"],"ABCDEGHK":["3H","3G","3E","3C","3A","3D","3B","3K"],"ABCDEGHL":["3H","3G","3E","3C","3A","3D","3L","3B"],"ABCDEGIJ":["3E","3G","3J","3C","3A","3D","3B","3I"],"ABCDEGIK":["3E","3G","3B","3C","3A","3D","3I","3K"],"ABCDEGIL":["3E","3G","3B","3C","3A","3D","3L","3I"],"ABCDEGJK":["3E","3G","3J","3C","3A","3D","3B","3K"],"ABCDEGJL":["3E","3G","3J","3C","3A","3D","3L","3B"],"ABCDEGKL":["3E","3G","3B","3C","3A","3D","3L","3K"],"ABCDEHIJ":["3H","3J","3B","3C","3A","3D","3E","3I"],"ABCDEHIK":["3H","3E","3B","3C","3A","3D","3I","3K"],"ABCDEHIL":["3H","3E","3B","3C","3A","3D","3L","3I"],"ABCDEHJK":["3H","3J","3B","3C","3A","3D","3E","3K"],"ABCDEHJL":["3H","3J","3E","3C","3A","3D","3L","3B"],"ABCDEHKL":["3H","3E","3B","3C","3A","3D","3L","3K"],"ABCDEIJK":["3E","3J","3B","3C","3A","3D","3I","3K"],"ABCDEIJL":["3E","3J","3B","3C","3A","3D","3L","3I"],"ABCDEIKL":["3E","3I","3B","3C","3A","3D","3L","3K"],"ABCDEJKL":["3E","3J","3B","3C","3A","3D","3L","3K"],"ABCDFGHI":["3H","3G","3B","3C","3A","3F","3D","3I"],"ABCDFGHJ":["3H","3G","3J","3C","3A","3F","3D","3B"],"ABCDFGHK":["3H","3G","3B","3C","3A","3F","3D","3K"],"ABCDFGHL":["3H","3G","3B","3C","3A","3F","3L","3D"],"ABCDFGIJ":["3C","3G","3J","3D","3A","3F","3B","3I"],"ABCDFGIK":["3C","3G","3B","3D","3A","3F","3I","3K"],"ABCDFGIL":["3C","3G","3B","3D","3A","3F","3L","3I"],"ABCDFGJK":["3C","3G","3J","3D","3A","3F","3B","3K"],"ABCDFGJL":["3C","3G","3J","3D","3A","3F","3L","3B"],"ABCDFGKL":["3C","3G","3B","3D","3A","3F","3L","3K"],"ABCDFHIJ":["3H","3J","3B","3C","3A","3D","3F","3I"],"ABCDFHIK":["3H","3B","3F","3C","3A","3D","3I","3K"],"ABCDFHIL":["3H","3B","3F","3C","3A","3D","3L","3I"],"ABCDFHJK":["3H","3J","3B","3C","3A","3D","3F","3K"],"ABCDFHJL":["3H","3J","3B","3C","3A","3D","3L","3F"],"ABCDFHKL":["3H","3B","3F","3C","3A","3D","3L","3K"],"ABCDFIJK":["3C","3J","3B","3D","3A","3F","3I","3K"],"ABCDFIJL":["3C","3J","3B","3D","3A","3F","3L","3I"],"ABCDFIKL":["3C","3I","3B","3D","3A","3F","3L","3K"],"ABCDFJKL":["3C","3J","3B","3D","3A","3F","3L","3K"],"ABCDGHIJ":["3H","3G","3J","3C","3A","3D","3B","3I"],"ABCDGHIK":["3H","3G","3B","3C","3A","3D","3I","3K"],"ABCDGHIL":["3H","3G","3B","3C","3A","3D","3L","3I"],"ABCDGHJK":["3H","3G","3J","3C","3A","3D","3B","3K"],"ABCDGHJL":["3H","3G","3J","3C","3A","3D","3L","3B"],"ABCDGHKL":["3H","3G","3B","3C","3A","3D","3L","3K"],"ABCDGIJK":["3I","3G","3J","3C","3A","3D","3B","3K"],"ABCDGIJL":["3I","3G","3J","3C","3A","3D","3L","3B"],"ABCDGIKL":["3I","3G","3B","3C","3A","3D","3L","3K"],"ABCDGJKL":["3C","3G","3J","3B","3A","3D","3L","3K"],"ABCDHIJK":["3H","3J","3B","3C","3A","3D","3I","3K"],"ABCDHIJL":["3H","3J","3B","3C","3A","3D","3L","3I"],"ABCDHIKL":["3H","3I","3B","3C","3A","3D","3L","3K"],"ABCDHJKL":["3H","3J","3B","3C","3A","3D","3L","3K"],"ABCDIJKL":["3I","3J","3B","3C","3A","3D","3L","3K"],"ABCEFGHI":["3H","3G","3E","3C","3A","3F","3B","3I"],"ABCEFGHJ":["3H","3G","3J","3C","3A","3F","3B","3E"],"ABCEFGHK":["3H","3G","3E","3C","3A","3F","3B","3K"],"ABCEFGHL":["3H","3G","3E","3C","3A","3F","3B","3L"],"ABCEFGIJ":["3C","3G","3J","3B","3A","3F","3E","3I"],"ABCEFGIK":["3C","3G","3E","3B","3A","3F","3I","3K"],"ABCEFGIL":["3C","3G","3E","3B","3A","3F","3L","3I"],"ABCEFGJK":["3C","3G","3J","3B","3A","3F","3E","3K"],"ABCEFGJL":["3C","3G","3J","3B","3A","3F","3L","3E"],"ABCEFGKL":["3C","3G","3E","3B","3A","3F","3L","3K"],"ABCEFHIJ":["3H","3J","3B","3C","3A","3F","3E","3I"],"ABCEFHIK":["3H","3E","3B","3C","3A","3F","3I","3K"],"ABCEFHIL":["3H","3E","3B","3C","3A","3F","3L","3I"],"ABCEFHJK":["3H","3J","3B","3C","3A","3F","3E","3K"],"ABCEFHJL":["3H","3J","3E","3C","3A","3F","3L","3B"],"ABCEFHKL":["3H","3E","3B","3C","3A","3F","3L","3K"],"ABCEFIJK":["3C","3J","3E","3B","3A","3F","3I","3K"],"ABCEFIJL":["3C","3J","3E","3B","3A","3F","3L","3I"],"ABCEFIKL":["3C","3E","3I","3B","3A","3F","3L","3K"],"ABCEFJKL":["3C","3J","3E","3B","3A","3F","3L","3K"],"ABCEGHIJ":["3H","3G","3J","3C","3A","3B","3E","3I"],"ABCEGHIK":["3H","3G","3E","3C","3A","3B","3I","3K"],"ABCEGHIL":["3H","3G","3E","3C","3A","3B","3L","3I"],"ABCEGHJK":["3H","3G","3J","3C","3A","3B","3E","3K"],"ABCEGHJL":["3H","3G","3J","3C","3A","3B","3L","3E"],"ABCEGHKL":["3H","3G","3E","3C","3A","3B","3L","3K"],"ABCEGIJK":["3E","3G","3J","3C","3A","3B","3I","3K"],"ABCEGIJL":["3E","3G","3J","3C","3A","3B","3L","3I"],"ABCEGIKL":["3E","3G","3I","3C","3A","3B","3L","3K"],"ABCEGJKL":["3E","3G","3J","3C","3A","3B","3L","3K"],"ABCEHIJK":["3H","3J","3E","3C","3A","3B","3I","3K"],"ABCEHIJL":["3H","3J","3E","3C","3A","3B","3L","3I"],"ABCEHIKL":["3H","3E","3I","3C","3A","3B","3L","3K"],"ABCEHJKL":["3H","3J","3E","3C","3A","3B","3L","3K"],"ABCEIJKL":["3E","3J","3I","3C","3A","3B","3L","3K"],"ABCFGHIJ":["3H","3G","3J","3C","3A","3F","3B","3I"],"ABCFGHIK":["3H","3G","3B","3C","3A","3F","3I","3K"],"ABCFGHIL":["3H","3G","3B","3C","3A","3F","3L","3I"],"ABCFGHJK":["3H","3G","3J","3C","3A","3F","3B","3K"],"ABCFGHJL":["3C","3G","3J","3B","3A","3F","3L","3H"],"ABCFGHKL":["3H","3G","3B","3C","3A","3F","3L","3K"],"ABCFGIJK":["3C","3G","3J","3B","3A","3F","3I","3K"],"ABCFGIJL":["3C","3G","3J","3B","3A","3F","3L","3I"],"ABCFGIKL":["3C","3G","3I","3B","3A","3F","3L","3K"],"ABCFGJKL":["3C","3G","3J","3B","3A","3F","3L","3K"],"ABCFHIJK":["3H","3J","3B","3C","3A","3F","3I","3K"],"ABCFHIJL":["3H","3J","3B","3C","3A","3F","3L","3I"],"ABCFHIKL":["3H","3I","3B","3C","3A","3F","3L","3K"],"ABCFHJKL":["3H","3J","3B","3C","3A","3F","3L","3K"],"ABCFIJKL":["3C","3J","3I","3B","3A","3F","3L","3K"],"ABCGHIJK":["3H","3G","3J","3C","3A","3B","3I","3K"],"ABCGHIJL":["3H","3G","3J","3C","3A","3B","3L","3I"],"ABCGHIKL":["3H","3G","3I","3C","3A","3B","3L","3K"],"ABCGHJKL":["3H","3G","3J","3C","3A","3B","3L","3K"],"ABCGIJKL":["3I","3G","3J","3C","3A","3B","3L","3K"],"ABCHIJKL":["3H","3J","3I","3C","3A","3B","3L","3K"],"ABDEFGHI":["3H","3G","3E","3D","3A","3F","3B","3I"],"ABDEFGHJ":["3H","3G","3J","3D","3A","3F","3B","3E"],"ABDEFGHK":["3H","3G","3E","3D","3A","3F","3B","3K"],"ABDEFGHL":["3H","3G","3E","3D","3A","3F","3L","3B"],"ABDEFGIJ":["3E","3G","3J","3D","3A","3F","3B","3I"],"ABDEFGIK":["3E","3G","3B","3D","3A","3F","3I","3K"],"ABDEFGIL":["3E","3G","3B","3D","3A","3F","3L","3I"],"ABDEFGJK":["3E","3G","3J","3D","3A","3F","3B","3K"],"ABDEFGJL":["3E","3G","3J","3D","3A","3F","3L","3B"],"ABDEFGKL":["3E","3G","3B","3D","3A","3F","3L","3K"],"ABDEFHIJ":["3H","3J","3B","3D","3A","3F","3E","3I"],"ABDEFHIK":["3H","3E","3B","3D","3A","3F","3I","3K"],"ABDEFHIL":["3H","3E","3B","3D","3A","3F","3L","3I"],"ABDEFHJK":["3H","3J","3B","3D","3A","3F","3E","3K"],"ABDEFHJL":["3H","3J","3E","3D","3A","3F","3L","3B"],"ABDEFHKL":["3H","3E","3B","3D","3A","3F","3L","3K"],"ABDEFIJK":["3E","3J","3B","3D","3A","3F","3I","3K"],"ABDEFIJL":["3E","3J","3B","3D","3A","3F","3L","3I"],"ABDEFIKL":["3E","3I","3B","3D","3A","3F","3L","3K"],"ABDEFJKL":["3E","3J","3B","3D","3A","3F","3L","3K"],"ABDEGHIJ":["3H","3G","3J","3D","3A","3B","3E","3I"],"ABDEGHIK":["3H","3G","3E","3D","3A","3B","3I","3K"],"ABDEGHIL":["3H","3G","3E","3D","3A","3B","3L","3I"],"ABDEGHJK":["3H","3G","3J","3D","3A","3B","3E","3K"],"ABDEGHJL":["3H","3G","3J","3D","3A","3B","3L","3E"],"ABDEGHKL":["3H","3G","3E","3D","3A","3B","3L","3K"],"ABDEGIJK":["3E","3G","3J","3D","3A","3B","3I","3K"],"ABDEGIJL":["3E","3G","3J","3D","3A","3B","3L","3I"],"ABDEGIKL":["3E","3G","3I","3D","3A","3B","3L","3K"],"ABDEGJKL":["3E","3G","3J","3D","3A","3B","3L","3K"],"ABDEHIJK":["3H","3J","3E","3D","3A","3B","3I","3K"],"ABDEHIJL":["3H","3J","3E","3D","3A","3B","3L","3I"],"ABDEHIKL":["3H","3E","3I","3D","3A","3B","3L","3K"],"ABDEHJKL":["3H","3J","3E","3D","3A","3B","3L","3K"],"ABDEIJKL":["3E","3J","3I","3D","3A","3B","3L","3K"],"ABDFGHIJ":["3H","3G","3J","3D","3A","3F","3B","3I"],"ABDFGHIK":["3H","3G","3B","3D","3A","3F","3I","3K"],"ABDFGHIL":["3H","3G","3B","3D","3A","3F","3L","3I"],"ABDFGHJK":["3H","3G","3J","3D","3A","3F","3B","3K"],"ABDFGHJL":["3H","3G","3J","3D","3A","3F","3L","3B"],"ABDFGHKL":["3H","3G","3B","3D","3A","3F","3L","3K"],"ABDFGIJK":["3I","3G","3B","3D","3J","3F","3A","3K"],"ABDFGIJL":["3I","3G","3B","3D","3A","3F","3L","3J"],"ABDFGIKL":["3I","3G","3B","3D","3A","3F","3L","3K"],"ABDFGJKL":["3J","3G","3B","3D","3A","3F","3L","3K"],"ABDFHIJK":["3H","3J","3B","3D","3A","3F","3I","3K"],"ABDFHIJL":["3H","3J","3B","3D","3A","3F","3L","3I"],"ABDFHIKL":["3H","3I","3B","3D","3A","3F","3L","3K"],"ABDFHJKL":["3H","3J","3B","3D","3A","3F","3L","3K"],"ABDFIJKL":["3I","3J","3B","3D","3A","3F","3L","3K"],"ABDGHIJK":["3H","3G","3J","3D","3A","3B","3I","3K"],"ABDGHIJL":["3H","3G","3J","3D","3A","3B","3L","3I"],"ABDGHIKL":["3H","3G","3I","3D","3A","3B","3L","3K"],"ABDGHJKL":["3H","3G","3J","3D","3A","3B","3L","3K"],"ABDGIJKL":["3I","3G","3J","3D","3A","3B","3L","3K"],"ABDHIJKL":["3H","3J","3I","3D","3A","3B","3L","3K"],"ABEFGHIJ":["3H","3G","3J","3B","3A","3F","3E","3I"],"ABEFGHIK":["3H","3G","3E","3B","3A","3F","3I","3K"],"ABEFGHIL":["3H","3G","3E","3B","3A","3F","3L","3I"],"ABEFGHJK":["3H","3G","3J","3B","3A","3F","3E","3K"],"ABEFGHJL":["3H","3G","3J","3B","3A","3F","3L","3E"],"ABEFGHKL":["3H","3G","3E","3B","3A","3F","3L","3K"],"ABEFGIJK":["3E","3G","3J","3B","3A","3F","3I","3K"],"ABEFGIJL":["3E","3G","3J","3B","3A","3F","3L","3I"],"ABEFGIKL":["3E","3G","3I","3B","3A","3F","3L","3K"],"ABEFGJKL":["3E","3G","3J","3B","3A","3F","3L","3K"],"ABEFHIJK":["3H","3J","3E","3B","3A","3F","3I","3K"],"ABEFHIJL":["3H","3J","3E","3B","3A","3F","3L","3I"],"ABEFHIKL":["3H","3E","3I","3B","3A","3F","3L","3K"],"ABEFHJKL":["3H","3J","3E","3B","3A","3F","3L","3K"],"ABEFIJKL":["3E","3J","3I","3B","3A","3F","3L","3K"],"ABEGHIJK":["3E","3G","3J","3B","3A","3H","3I","3K"],"ABEGHIJL":["3E","3G","3J","3B","3A","3H","3L","3I"],"ABEGHIKL":["3E","3G","3I","3B","3A","3H","3L","3K"],"ABEGHJKL":["3E","3G","3J","3B","3A","3H","3L","3K"],"ABEGIJKL":["3E","3J","3I","3B","3A","3G","3L","3K"],"ABEHIJKL":["3E","3J","3I","3B","3A","3H","3L","3K"],"ABFGHIJK":["3H","3G","3J","3B","3A","3F","3I","3K"],"ABFGHIJL":["3H","3G","3J","3B","3A","3F","3L","3I"],"ABFGHIKL":["3H","3G","3I","3B","3A","3F","3L","3K"],"ABFGHJKL":["3H","3G","3J","3B","3A","3F","3L","3K"],"ABFGIJKL":["3I","3G","3J","3B","3A","3F","3L","3K"],"ABFHIJKL":["3H","3J","3I","3B","3A","3F","3L","3K"],"ABGHIJKL":["3H","3J","3I","3B","3A","3G","3L","3K"],"ACDEFGHI":["3H","3G","3E","3C","3A","3F","3D","3I"],"ACDEFGHJ":["3H","3G","3J","3C","3A","3F","3D","3E"],"ACDEFGHK":["3H","3G","3E","3C","3A","3F","3D","3K"],"ACDEFGHL":["3H","3G","3E","3C","3A","3F","3L","3D"],"ACDEFGIJ":["3C","3G","3J","3D","3A","3F","3E","3I"],"ACDEFGIK":["3C","3G","3E","3D","3A","3F","3I","3K"],"ACDEFGIL":["3C","3G","3E","3D","3A","3F","3L","3I"],"ACDEFGJK":["3C","3G","3J","3D","3A","3F","3E","3K"],"ACDEFGJL":["3C","3G","3J","3D","3A","3F","3L","3E"],"ACDEFGKL":["3C","3G","3E","3D","3A","3F","3L","3K"],"ACDEFHIJ":["3H","3J","3F","3C","3A","3D","3E","3I"],"ACDEFHIK":["3H","3E","3F","3C","3A","3D","3I","3K"],"ACDEFHIL":["3H","3E","3F","3C","3A","3D","3L","3I"],"ACDEFHJK":["3H","3J","3E","3C","3A","3F","3D","3K"],"ACDEFHJL":["3H","3J","3F","3C","3A","3D","3L","3E"],"ACDEFHKL":["3H","3E","3F","3C","3A","3D","3L","3K"],"ACDEFIJK":["3C","3J","3E","3D","3A","3F","3I","3K"],"ACDEFIJL":["3C","3J","3E","3D","3A","3F","3L","3I"],"ACDEFIKL":["3C","3E","3I","3D","3A","3F","3L","3K"],"ACDEFJKL":["3C","3J","3E","3D","3A","3F","3L","3K"],"ACDEGHIJ":["3H","3G","3J","3C","3A","3D","3E","3I"],"ACDEGHIK":["3H","3G","3E","3C","3A","3D","3I","3K"],"ACDEGHIL":["3H","3G","3E","3C","3A","3D","3L","3I"],"ACDEGHJK":["3H","3G","3J","3C","3A","3D","3E","3K"],"ACDEGHJL":["3H","3G","3J","3C","3A","3D","3L","3E"],"ACDEGHKL":["3H","3G","3E","3C","3A","3D","3L","3K"],"ACDEGIJK":["3E","3G","3J","3C","3A","3D","3I","3K"],"ACDEGIJL":["3E","3G","3J","3C","3A","3D","3L","3I"],"ACDEGIKL":["3E","3G","3I","3C","3A","3D","3L","3K"],"ACDEGJKL":["3E","3G","3J","3C","3A","3D","3L","3K"],"ACDEHIJK":["3H","3J","3E","3C","3A","3D","3I","3K"],"ACDEHIJL":["3H","3J","3E","3C","3A","3D","3L","3I"],"ACDEHIKL":["3H","3E","3I","3C","3A","3D","3L","3K"],"ACDEHJKL":["3H","3J","3E","3C","3A","3D","3L","3K"],"ACDEIJKL":["3E","3J","3I","3C","3A","3D","3L","3K"],"ACDFGHIJ":["3H","3G","3J","3C","3A","3F","3D","3I"],"ACDFGHIK":["3H","3G","3F","3C","3A","3D","3I","3K"],"ACDFGHIL":["3H","3G","3F","3C","3A","3D","3L","3I"],"ACDFGHJK":["3H","3G","3J","3C","3A","3F","3D","3K"],"ACDFGHJL":["3C","3G","3J","3D","3A","3F","3L","3H"],"ACDFGHKL":["3H","3G","3F","3C","3A","3D","3L","3K"],"ACDFGIJK":["3C","3G","3J","3D","3A","3F","3I","3K"],"ACDFGIJL":["3C","3G","3J","3D","3A","3F","3L","3I"],"ACDFGIKL":["3C","3G","3I","3D","3A","3F","3L","3K"],"ACDFGJKL":["3C","3G","3J","3D","3A","3F","3L","3K"],"ACDFHIJK":["3H","3J","3F","3C","3A","3D","3I","3K"],"ACDFHIJL":["3H","3J","3F","3C","3A","3D","3L","3I"],"ACDFHIKL":["3H","3F","3I","3C","3A","3D","3L","3K"],"ACDFHJKL":["3H","3J","3F","3C","3A","3D","3L","3K"],"ACDFIJKL":["3C","3J","3I","3D","3A","3F","3L","3K"],"ACDGHIJK":["3H","3G","3J","3C","3A","3D","3I","3K"],"ACDGHIJL":["3H","3G","3J","3C","3A","3D","3L","3I"],"ACDGHIKL":["3H","3G","3I","3C","3A","3D","3L","3K"],"ACDGHJKL":["3H","3G","3J","3C","3A","3D","3L","3K"],"ACDGIJKL":["3I","3G","3J","3C","3A","3D","3L","3K"],"ACDHIJKL":["3H","3J","3I","3C","3A","3D","3L","3K"],"ACEFGHIJ":["3H","3G","3J","3C","3A","3F","3E","3I"],"ACEFGHIK":["3H","3G","3E","3C","3A","3F","3I","3K"],"ACEFGHIL":["3H","3G","3E","3C","3A","3F","3L","3I"],"ACEFGHJK":["3H","3G","3J","3C","3A","3F","3E","3K"],"ACEFGHJL":["3H","3G","3J","3C","3A","3F","3L","3E"],"ACEFGHKL":["3H","3G","3E","3C","3A","3F","3L","3K"],"ACEFGIJK":["3E","3G","3J","3C","3A","3F","3I","3K"],"ACEFGIJL":["3E","3G","3J","3C","3A","3F","3L","3I"],"ACEFGIKL":["3E","3G","3I","3C","3A","3F","3L","3K"],"ACEFGJKL":["3E","3G","3J","3C","3A","3F","3L","3K"],"ACEFHIJK":["3H","3J","3E","3C","3A","3F","3I","3K"],"ACEFHIJL":["3H","3J","3E","3C","3A","3F","3L","3I"],"ACEFHIKL":["3H","3E","3I","3C","3A","3F","3L","3K"],"ACEFHJKL":["3H","3J","3E","3C","3A","3F","3L","3K"],"ACEFIJKL":["3E","3J","3I","3C","3A","3F","3L","3K"],"ACEGHIJK":["3E","3G","3J","3C","3A","3H","3I","3K"],"ACEGHIJL":["3E","3G","3J","3C","3A","3H","3L","3I"],"ACEGHIKL":["3E","3G","3I","3C","3A","3H","3L","3K"],"ACEGHJKL":["3E","3G","3J","3C","3A","3H","3L","3K"],"ACEGIJKL":["3E","3J","3I","3C","3A","3G","3L","3K"],"ACEHIJKL":["3E","3J","3I","3C","3A","3H","3L","3K"],"ACFGHIJK":["3H","3G","3J","3C","3A","3F","3I","3K"],"ACFGHIJL":["3H","3G","3J","3C","3A","3F","3L","3I"],"ACFGHIKL":["3H","3G","3I","3C","3A","3F","3L","3K"],"ACFGHJKL":["3H","3G","3J","3C","3A","3F","3L","3K"],"ACFGIJKL":["3I","3G","3J","3C","3A","3F","3L","3K"],"ACFHIJKL":["3H","3J","3I","3C","3A","3F","3L","3K"],"ACGHIJKL":["3H","3J","3I","3C","3A","3G","3L","3K"],"ADEFGHIJ":["3H","3G","3J","3D","3A","3F","3E","3I"],"ADEFGHIK":["3H","3G","3E","3D","3A","3F","3I","3K"],"ADEFGHIL":["3H","3G","3E","3D","3A","3F","3L","3I"],"ADEFGHJK":["3H","3G","3J","3D","3A","3F","3E","3K"],"ADEFGHJL":["3H","3G","3J","3D","3A","3F","3L","3E"],"ADEFGHKL":["3H","3G","3E","3D","3A","3F","3L","3K"],"ADEFGIJK":["3E","3G","3J","3D","3A","3F","3I","3K"],"ADEFGIJL":["3E","3G","3J","3D","3A","3F","3L","3I"],"ADEFGIKL":["3E","3G","3I","3D","3A","3F","3L","3K"],"ADEFGJKL":["3E","3G","3J","3D","3A","3F","3L","3K"],"ADEFHIJK":["3H","3J","3E","3D","3A","3F","3I","3K"],"ADEFHIJL":["3H","3J","3E","3D","3A","3F","3L","3I"],"ADEFHIKL":["3H","3E","3I","3D","3A","3F","3L","3K"],"ADEFHJKL":["3H","3J","3E","3D","3A","3F","3L","3K"],"ADEFIJKL":["3E","3J","3I","3D","3A","3F","3L","3K"],"ADEGHIJK":["3E","3G","3J","3D","3A","3H","3I","3K"],"ADEGHIJL":["3E","3G","3J","3D","3A","3H","3L","3I"],"ADEGHIKL":["3E","3G","3I","3D","3A","3H","3L","3K"],"ADEGHJKL":["3E","3G","3J","3D","3A","3H","3L","3K"],"ADEGIJKL":["3E","3J","3I","3D","3A","3G","3L","3K"],"ADEHIJKL":["3E","3J","3I","3D","3A","3H","3L","3K"],"ADFGHIJK":["3H","3G","3J","3D","3A","3F","3I","3K"],"ADFGHIJL":["3H","3G","3J","3D","3A","3F","3L","3I"],"ADFGHIKL":["3H","3G","3I","3D","3A","3F","3L","3K"],"ADFGHJKL":["3H","3G","3J","3D","3A","3F","3L","3K"],"ADFGIJKL":["3I","3G","3J","3D","3A","3F","3L","3K"],"ADFHIJKL":["3H","3J","3I","3D","3A","3F","3L","3K"],"ADGHIJKL":["3H","3J","3I","3D","3A","3G","3L","3K"],"AEFGHIJK":["3E","3G","3J","3F","3A","3H","3I","3K"],"AEFGHIJL":["3E","3G","3J","3F","3A","3H","3L","3I"],"AEFGHIKL":["3E","3G","3I","3F","3A","3H","3L","3K"],"AEFGHJKL":["3E","3G","3J","3F","3A","3H","3L","3K"],"AEFGIJKL":["3E","3J","3I","3F","3A","3G","3L","3K"],"AEFHIJKL":["3E","3J","3I","3F","3A","3H","3L","3K"],"AEGHIJKL":["3E","3J","3I","3A","3H","3G","3L","3K"],"AFGHIJKL":["3H","3J","3I","3F","3A","3G","3L","3K"],"BCDEFGHI":["3C","3G","3B","3D","3H","3F","3E","3I"],"BCDEFGHJ":["3H","3G","3B","3C","3J","3F","3D","3E"],"BCDEFGHK":["3C","3G","3B","3D","3H","3F","3E","3K"],"BCDEFGHL":["3C","3G","3B","3D","3H","3F","3L","3E"],"BCDEFGIJ":["3C","3G","3B","3D","3J","3F","3E","3I"],"BCDEFGIK":["3C","3G","3B","3D","3E","3F","3I","3K"],"BCDEFGIL":["3C","3G","3B","3D","3E","3F","3L","3I"],"BCDEFGJK":["3C","3G","3B","3D","3J","3F","3E","3K"],"BCDEFGJL":["3C","3G","3B","3D","3J","3F","3L","3E"],"BCDEFGKL":["3C","3G","3B","3D","3E","3F","3L","3K"],"BCDEFHIJ":["3C","3J","3B","3D","3H","3F","3E","3I"],"BCDEFHIK":["3C","3E","3B","3D","3H","3F","3I","3K"],"BCDEFHIL":["3C","3E","3B","3D","3H","3F","3L","3I"],"BCDEFHJK":["3C","3J","3B","3D","3H","3F","3E","3K"],"BCDEFHJL":["3C","3J","3B","3D","3H","3F","3L","3E"],"BCDEFHKL":["3C","3E","3B","3D","3H","3F","3L","3K"],"BCDEFIJK":["3C","3J","3B","3D","3E","3F","3I","3K"],"BCDEFIJL":["3C","3J","3B","3D","3E","3F","3L","3I"],"BCDEFIKL":["3C","3E","3B","3D","3I","3F","3L","3K"],"BCDEFJKL":["3C","3J","3B","3D","3E","3F","3L","3K"],"BCDEGHIJ":["3H","3G","3B","3C","3J","3D","3E","3I"],"BCDEGHIK":["3E","3G","3B","3C","3H","3D","3I","3K"],"BCDEGHIL":["3E","3G","3B","3C","3H","3D","3L","3I"],"BCDEGHJK":["3H","3G","3B","3C","3J","3D","3E","3K"],"BCDEGHJL":["3H","3G","3B","3C","3J","3D","3L","3E"],"BCDEGHKL":["3E","3G","3B","3C","3H","3D","3L","3K"],"BCDEGIJK":["3E","3G","3B","3C","3J","3D","3I","3K"],"BCDEGIJL":["3E","3G","3B","3C","3J","3D","3L","3I"],"BCDEGIKL":["3E","3G","3B","3C","3I","3D","3L","3K"],"BCDEGJKL":["3E","3G","3B","3C","3J","3D","3L","3K"],"BCDEHIJK":["3E","3J","3B","3C","3H","3D","3I","3K"],"BCDEHIJL":["3E","3J","3B","3C","3H","3D","3L","3I"],"BCDEHIKL":["3E","3I","3B","3C","3H","3D","3L","3K"],"BCDEHJKL":["3E","3J","3B","3C","3H","3D","3L","3K"],"BCDEIJKL":["3E","3J","3B","3C","3I","3D","3L","3K"],"BCDFGHIJ":["3H","3G","3B","3C","3J","3F","3D","3I"],"BCDFGHIK":["3C","3G","3B","3D","3H","3F","3I","3K"],"BCDFGHIL":["3C","3G","3B","3D","3H","3F","3L","3I"],"BCDFGHJK":["3H","3G","3B","3C","3J","3F","3D","3K"],"BCDFGHJL":["3C","3G","3B","3D","3H","3F","3L","3J"],"BCDFGHKL":["3C","3G","3B","3D","3H","3F","3L","3K"],"BCDFGIJK":["3C","3G","3B","3D","3J","3F","3I","3K"],"BCDFGIJL":["3C","3G","3B","3D","3J","3F","3L","3I"],"BCDFGIKL":["3C","3G","3B","3D","3I","3F","3L","3K"],"BCDFGJKL":["3C","3G","3B","3D","3J","3F","3L","3K"],"BCDFHIJK":["3C","3J","3B","3D","3H","3F","3I","3K"],"BCDFHIJL":["3C","3J","3B","3D","3H","3F","3L","3I"],"BCDFHIKL":["3C","3I","3B","3D","3H","3F","3L","3K"],"BCDFHJKL":["3C","3J","3B","3D","3H","3F","3L","3K"],"BCDFIJKL":["3C","3J","3B","3D","3I","3F","3L","3K"],"BCDGHIJK":["3H","3G","3B","3C","3J","3D","3I","3K"],"BCDGHIJL":["3H","3G","3B","3C","3J","3D","3L","3I"],"BCDGHIKL":["3H","3G","3B","3C","3I","3D","3L","3K"],"BCDGHJKL":["3H","3G","3B","3C","3J","3D","3L","3K"],"BCDGIJKL":["3I","3G","3B","3C","3J","3D","3L","3K"],"BCDHIJKL":["3H","3J","3B","3C","3I","3D","3L","3K"],"BCEFGHIJ":["3H","3G","3B","3C","3J","3F","3E","3I"],"BCEFGHIK":["3E","3G","3B","3C","3H","3F","3I","3K"],"BCEFGHIL":["3E","3G","3B","3C","3H","3F","3L","3I"],"BCEFGHJK":["3H","3G","3B","3C","3J","3F","3E","3K"],"BCEFGHJL":["3H","3G","3B","3C","3J","3F","3L","3E"],"BCEFGHKL":["3E","3G","3B","3C","3H","3F","3L","3K"],"BCEFGIJK":["3E","3G","3B","3C","3J","3F","3I","3K"],"BCEFGIJL":["3E","3G","3B","3C","3J","3F","3L","3I"],"BCEFGIKL":["3E","3G","3B","3C","3I","3F","3L","3K"],"BCEFGJKL":["3E","3G","3B","3C","3J","3F","3L","3K"],"BCEFHIJK":["3E","3J","3B","3C","3H","3F","3I","3K"],"BCEFHIJL":["3E","3J","3B","3C","3H","3F","3L","3I"],"BCEFHIKL":["3E","3I","3B","3C","3H","3F","3L","3K"],"BCEFHJKL":["3E","3J","3B","3C","3H","3F","3L","3K"],"BCEFIJKL":["3E","3J","3B","3C","3I","3F","3L","3K"],"BCEGHIJK":["3E","3J","3B","3C","3H","3G","3I","3K"],"BCEGHIJL":["3E","3J","3B","3C","3H","3G","3L","3I"],"BCEGHIKL":["3E","3G","3B","3C","3I","3H","3L","3K"],"BCEGHJKL":["3E","3J","3B","3C","3H","3G","3L","3K"],"BCEGIJKL":["3E","3J","3B","3C","3I","3G","3L","3K"],"BCEHIJKL":["3E","3J","3B","3C","3I","3H","3L","3K"],"BCFGHIJK":["3H","3G","3B","3C","3J","3F","3I","3K"],"BCFGHIJL":["3H","3G","3B","3C","3J","3F","3L","3I"],"BCFGHIKL":["3H","3G","3B","3C","3I","3F","3L","3K"],"BCFGHJKL":["3H","3G","3B","3C","3J","3F","3L","3K"],"BCFGIJKL":["3I","3G","3B","3C","3J","3F","3L","3K"],"BCFHIJKL":["3H","3J","3B","3C","3I","3F","3L","3K"],"BCGHIJKL":["3H","3J","3B","3C","3I","3G","3L","3K"],"BDEFGHIJ":["3H","3G","3B","3D","3J","3F","3E","3I"],"BDEFGHIK":["3E","3G","3B","3D","3H","3F","3I","3K"],"BDEFGHIL":["3E","3G","3B","3D","3H","3F","3L","3I"],"BDEFGHJK":["3H","3G","3B","3D","3J","3F","3E","3K"],"BDEFGHJL":["3H","3G","3B","3D","3J","3F","3L","3E"],"BDEFGHKL":["3E","3G","3B","3D","3H","3F","3L","3K"],"BDEFGIJK":["3E","3G","3B","3D","3J","3F","3I","3K"],"BDEFGIJL":["3E","3G","3B","3D","3J","3F","3L","3I"],"BDEFGIKL":["3E","3G","3B","3D","3I","3F","3L","3K"],"BDEFGJKL":["3E","3G","3B","3D","3J","3F","3L","3K"],"BDEFHIJK":["3E","3J","3B","3D","3H","3F","3I","3K"],"BDEFHIJL":["3E","3J","3B","3D","3H","3F","3L","3I"],"BDEFHIKL":["3E","3I","3B","3D","3H","3F","3L","3K"],"BDEFHJKL":["3E","3J","3B","3D","3H","3F","3L","3K"],"BDEFIJKL":["3E","3J","3B","3D","3I","3F","3L","3K"],"BDEGHIJK":["3E","3J","3B","3D","3H","3G","3I","3K"],"BDEGHIJL":["3E","3J","3B","3D","3H","3G","3L","3I"],"BDEGHIKL":["3E","3G","3B","3D","3I","3H","3L","3K"],"BDEGHJKL":["3E","3J","3B","3D","3H","3G","3L","3K"],"BDEGIJKL":["3E","3J","3B","3D","3I","3G","3L","3K"],"BDEHIJKL":["3E","3J","3B","3D","3I","3H","3L","3K"],"BDFGHIJK":["3H","3G","3B","3D","3J","3F","3I","3K"],"BDFGHIJL":["3H","3G","3B","3D","3J","3F","3L","3I"],"BDFGHIKL":["3H","3G","3B","3D","3I","3F","3L","3K"],"BDFGHJKL":["3H","3G","3B","3D","3J","3F","3L","3K"],"BDFGIJKL":["3I","3G","3B","3D","3J","3F","3L","3K"],"BDFHIJKL":["3H","3J","3B","3D","3I","3F","3L","3K"],"BDGHIJKL":["3H","3J","3B","3D","3I","3G","3L","3K"],"BEFGHIJK":["3E","3J","3B","3F","3H","3G","3I","3K"],"BEFGHIJL":["3E","3J","3B","3F","3H","3G","3L","3I"],"BEFGHIKL":["3E","3G","3B","3F","3I","3H","3L","3K"],"BEFGHJKL":["3E","3J","3B","3F","3H","3G","3L","3K"],"BEFGIJKL":["3E","3J","3B","3F","3I","3G","3L","3K"],"BEFHIJKL":["3E","3J","3B","3F","3I","3H","3L","3K"],"BEGHIJKL":["3E","3J","3I","3B","3H","3G","3L","3K"],"BFGHIJKL":["3H","3J","3B","3F","3I","3G","3L","3K"],"CDEFGHIJ":["3C","3G","3J","3D","3H","3F","3E","3I"],"CDEFGHIK":["3C","3G","3E","3D","3H","3F","3I","3K"],"CDEFGHIL":["3C","3G","3E","3D","3H","3F","3L","3I"],"CDEFGHJK":["3C","3G","3J","3D","3H","3F","3E","3K"],"CDEFGHJL":["3C","3G","3J","3D","3H","3F","3L","3E"],"CDEFGHKL":["3C","3G","3E","3D","3H","3F","3L","3K"],"CDEFGIJK":["3C","3G","3E","3D","3J","3F","3I","3K"],"CDEFGIJL":["3C","3G","3E","3D","3J","3F","3L","3I"],"CDEFGIKL":["3C","3G","3E","3D","3I","3F","3L","3K"],"CDEFGJKL":["3C","3G","3E","3D","3J","3F","3L","3K"],"CDEFHIJK":["3C","3J","3E","3D","3H","3F","3I","3K"],"CDEFHIJL":["3C","3J","3E","3D","3H","3F","3L","3I"],"CDEFHIKL":["3C","3E","3I","3D","3H","3F","3L","3K"],"CDEFHJKL":["3C","3J","3E","3D","3H","3F","3L","3K"],"CDEFIJKL":["3C","3J","3E","3D","3I","3F","3L","3K"],"CDEGHIJK":["3E","3G","3J","3C","3H","3D","3I","3K"],"CDEGHIJL":["3E","3G","3J","3C","3H","3D","3L","3I"],"CDEGHIKL":["3E","3G","3I","3C","3H","3D","3L","3K"],"CDEGHJKL":["3E","3G","3J","3C","3H","3D","3L","3K"],"CDEGIJKL":["3E","3G","3I","3C","3J","3D","3L","3K"],"CDEHIJKL":["3E","3J","3I","3C","3H","3D","3L","3K"],"CDFGHIJK":["3C","3G","3J","3D","3H","3F","3I","3K"],"CDFGHIJL":["3C","3G","3J","3D","3H","3F","3L","3I"],"CDFGHIKL":["3C","3G","3I","3D","3H","3F","3L","3K"],"CDFGHJKL":["3C","3G","3J","3D","3H","3F","3L","3K"],"CDFGIJKL":["3C","3G","3I","3D","3J","3F","3L","3K"],"CDFHIJKL":["3C","3J","3I","3D","3H","3F","3L","3K"],"CDGHIJKL":["3H","3G","3I","3C","3J","3D","3L","3K"],"CEFGHIJK":["3E","3G","3J","3C","3H","3F","3I","3K"],"CEFGHIJL":["3E","3G","3J","3C","3H","3F","3L","3I"],"CEFGHIKL":["3E","3G","3I","3C","3H","3F","3L","3K"],"CEFGHJKL":["3E","3G","3J","3C","3H","3F","3L","3K"],"CEFGIJKL":["3E","3G","3I","3C","3J","3F","3L","3K"],"CEFHIJKL":["3E","3J","3I","3C","3H","3F","3L","3K"],"CEGHIJKL":["3E","3J","3I","3C","3H","3G","3L","3K"],"CFGHIJKL":["3H","3G","3I","3C","3J","3F","3L","3K"],"DEFGHIJK":["3E","3G","3J","3D","3H","3F","3I","3K"],"DEFGHIJL":["3E","3G","3J","3D","3H","3F","3L","3I"],"DEFGHIKL":["3E","3G","3I","3D","3H","3F","3L","3K"],"DEFGHJKL":["3E","3G","3J","3D","3H","3F","3L","3K"],"DEFGIJKL":["3E","3G","3I","3D","3J","3F","3L","3K"],"DEFHIJKL":["3E","3J","3I","3D","3H","3F","3L","3K"],"DEGHIJKL":["3E","3J","3I","3D","3H","3G","3L","3K"],"DFGHIJKL":["3H","3G","3I","3D","3J","3F","3L","3K"],"EFGHIJKL":["3E","3J","3I","3F","3H","3G","3L","3K"]};

function getThirdPlaceMapping(best8groups) {
  const key = best8groups.slice().sort().join('');
  return MATRIX[key] || null;
}

function getThirdPlaceTeam(groupLetter, best8groups, best8teams) {
  const mapping = getThirdPlaceMapping(best8groups);
  if (!mapping) return 'Beste 3e';
  const winnerOrder = ['A','B','D','E','G','I','K','L'];
  const idx = winnerOrder.indexOf(groupLetter);
  if (idx === -1) return 'Beste 3e';
  const faces = mapping[idx];
  const facedGroup = faces[1];
  return best8teams[facedGroup] || ('Nr.3 Gr.' + facedGroup);
}

// ── STANDINGS STATE & DRAG DROP ──────────────────────────────────────────────
const manualOrder = {};

function getDisplayOrder(g) {
  if (manualOrder[g]) return manualOrder[g];
  const st = groupStandings[g];
  if (st && st.length) return st.map(t => t.n);
  return GROUPS[g].slice();
}

function saveManualOrder(g, order) { manualOrder[g] = order.slice(); }

function makeRow(g, teamName, idx, total) {
  const rk = idx + 1;
  const isNL = teamName === 'Nederland';
  const badgeClass = ['rs1','rs2','rs3','rs4'][idx] || 'rs4';
  const through = rk<=2 ? '<span class="standing-badge badge-through">✓ Door</span>'
                : rk===3 ? '<span class="standing-badge badge-third">? 3e</span>' : '';
  const st = groupStandings[g];
  const teamSt = st ? st.find(t => t.n === teamName) : null;
  const pts = teamSt ? teamSt.pts : '–';
  const gd  = teamSt ? (teamSt.gd >= 0 ? '+'+teamSt.gd : teamSt.gd) : '–';
  const row = document.createElement('div');
  row.className = 'standing-row';
  row.draggable = true;
  row.dataset.team = teamName;
  row.dataset.group = g;
  row.innerHTML = `
    <span class="drag-handle no-print">⠿</span>
    <span class="rank-badge-s ${badgeClass}">${rk}</span>
    <span class="standing-team-name${isNL?' nl-text':''}">${teamName}</span>
    <span class="standing-stats"><span class="stat-pts">${pts}</span><span class="stat-sep">·</span><span class="stat-gd">${gd}</span></span>
    ${through}
    <div class="arrow-btns no-print">
      <button class="arrow-btn" onclick="moveRow(this,'up')">▲</button>
      <button class="arrow-btn" onclick="moveRow(this,'down')">▼</button>
    </div>`;
  return row;
}

function moveRow(btn, dir) {
  const row = btn.closest('.standing-row');
  const list = row.closest('.sortable-list');
  const g = list.dataset.group;
  const rows = [...list.querySelectorAll('.standing-row')];
  const idx = rows.indexOf(row);
  if (dir==='up' && idx>0) list.insertBefore(row, rows[idx-1]);
  else if (dir==='down' && idx<rows.length-1) list.insertBefore(rows[idx+1], row);
  rebuildRanks(list, g);
}

function rebuildRanks(list, g) {
  const rows = [...list.querySelectorAll('.standing-row')];
  saveManualOrder(g, rows.map(r => r.dataset.team));
  rows.forEach((row, i) => {
    const rk = i+1;
    row.querySelector('.rank-badge-s').className = 'rank-badge-s ' + (['rs1','rs2','rs3','rs4'][i]||'rs4');
    row.querySelector('.rank-badge-s').textContent = rk;
    const teamName = row.dataset.team;
    const st = groupStandings[g];
    const teamSt = st ? st.find(t => t.n === teamName) : null;
    const ptsEl = row.querySelector('.stat-pts');
    const gdEl  = row.querySelector('.stat-gd');
    if (ptsEl) ptsEl.textContent = teamSt ? teamSt.pts : '–';
    if (gdEl)  gdEl.textContent  = teamSt ? (teamSt.gd>=0?'+'+teamSt.gd:teamSt.gd) : '–';
    let through = row.querySelector('.standing-badge');
    if (through) through.remove();
    const arrowDiv = row.querySelector('.arrow-btns');
    if (rk<=2) { const s=document.createElement('span');s.className='standing-badge badge-through';s.textContent='✓ Door';arrowDiv?row.insertBefore(s,arrowDiv):row.appendChild(s); }
    else if (rk===3) { const s=document.createElement('span');s.className='standing-badge badge-third';s.textContent='? 3e';arrowDiv?row.insertBefore(s,arrowDiv):row.appendChild(s); }
  });
  saveState();
}

function initDrag(list, g) {
  let dragSrc = null;
  list.addEventListener('dragstart', e => {
    dragSrc = e.target.closest('.standing-row');
    if (dragSrc) dragSrc.classList.add('dragging');
    if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
  });
  list.addEventListener('dragend', () => {
    list.querySelectorAll('.standing-row').forEach(r => r.classList.remove('dragging','drag-over'));
  });
  list.addEventListener('dragover', e => {
    e.preventDefault();
    const target = e.target.closest('.standing-row');
    list.querySelectorAll('.standing-row').forEach(r => r.classList.remove('drag-over'));
    if (target && target !== dragSrc) target.classList.add('drag-over');
  });
  list.addEventListener('drop', e => {
    e.preventDefault();
    const target = e.target.closest('.standing-row');
    if (!target || target === dragSrc || !dragSrc) return;
    const rows = [...list.querySelectorAll('.standing-row')];
    if (rows.indexOf(dragSrc) < rows.indexOf(target)) list.insertBefore(dragSrc, target.nextSibling);
    else list.insertBefore(dragSrc, target);
    rebuildRanks(list, g);
  });
}

function renderStandings(){
  const grid=document.getElementById('sgrid');
  grid.innerHTML='';
  Object.keys(GROUPS).forEach(g=>{
    const isNL=g==='F';
    const order=getDisplayOrder(g);
    const card=document.createElement('div');
    card.className='bg-white rounded-2xl overflow-hidden border border-outline-variant shadow-sm'+(isNL?' nl-highlight':'');
    card.dataset.group=g;
    const hdr=document.createElement('div');
    hdr.className='bg-surface-container-low px-6 py-4 flex justify-between items-center border-b border-outline-variant';
    hdr.innerHTML=`<h3 class="text-xl font-bold tracking-tight">GROEP ${g}</h3>
      <span class="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">${GROUPS[g].join(' · ')}</span>`;
    card.appendChild(hdr);
    const list=document.createElement('div');
    list.className='sortable-list';
    list.dataset.group=g;
    order.forEach((teamName,i)=>{list.appendChild(makeRow(g,teamName,i,order.length));});
    card.appendChild(list);
    grid.appendChild(card);
    initDrag(list,g);
  });
}

function triggerStandings(){
  calcStandings();
  Object.keys(GROUPS).forEach(g=>{delete manualOrder[g];});
  renderStandings();
  flashOk('ok-standings');
}

// ── PERSISTENCE ──────────────────────────────────────────────────────────────
const LS_KEY = 'wk2026';
let _loadingState = false;

function saveState() {
  if (_loadingState) return;
  const state = {
    naam: document.getElementById('naam')?.value || '',
    email: document.getElementById('email')?.value || '',
    kampioen: document.getElementById('kampioen-vrijkeuze')?.value || '',
    scores: {},
    koFields: {},
    manualOrder: {...manualOrder},
    drawWinners: {...drawWinners},
  };
  document.querySelectorAll('input[data-i][data-side]').forEach(el => {
    if (el.value !== '') state.scores[`${el.dataset.i}-${el.dataset.side}`] = el.value;
  });
  document.querySelectorAll('#kocont input').forEach(el => {
    if (el.id && el.value !== '') state.koFields[el.id] = el.value;
  });
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch {}
  flashOk('ok-saved');
}

function loadState() {
  let state;
  try { state = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); } catch {}
  if (!state) return;
  _loadingState = true;

  const naam = document.getElementById('naam');
  if (naam && state.naam) {
    naam.value = state.naam;
    const pn = document.getElementById('print-naam');
    if (pn) pn.textContent = state.naam;
  }
  const email = document.getElementById('email');
  if (email && state.email) {
    email.value = state.email;
    const pe = document.getElementById('print-email');
    if (pe) pe.textContent = state.email;
  }

  if (state.scores) {
    Object.entries(state.scores).forEach(([key, val]) => {
      const [i, side] = key.split('-');
      const el = document.querySelector(`input[data-i="${i}"][data-side="${side}"]`);
      if (el) { el.value = val; el.classList.add('filled'); }
    });
  }

  if (state.manualOrder && Object.keys(state.manualOrder).length) {
    Object.assign(manualOrder, state.manualOrder);
    renderStandings();
  }

  if (state.koFields) {
    // Set all values first (names before scores so onScoreChange reads correct names)
    Object.entries(state.koFields).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) { el.value = val; el.classList.toggle('filled', true); }
    });
    // Trigger score change handlers after both _sh and _sa are populated
    Object.keys(state.koFields).forEach(id => {
      if (!id.endsWith('_sh')) return;
      const el = document.getElementById(id);
      if (el) onScoreChange(el);
    });
  }

  if (state.drawWinners) {
    Object.assign(drawWinners, state.drawWinners);
    const winnerStyle = 'font-size:.85rem;font-weight:700;padding:.6rem 1rem;border-radius:.6rem;border:2px solid #2e7d32;background:#e8f5e9;color:#1b5e20;cursor:pointer;text-align:left;width:100%;transition:all .2s';
    const loserStyle  = 'font-size:.85rem;font-weight:400;padding:.6rem 1rem;border-radius:.6rem;border:1.5px solid #e0e0e0;background:#f5f5f5;color:#bbb;cursor:pointer;text-align:left;width:100%;transition:all .2s;text-decoration:line-through';
    Object.entries(state.drawWinners).forEach(([id, winner]) => {
      const btnH = document.getElementById(id+'_dwh');
      const btnA = document.getElementById(id+'_dwa');
      const th   = document.getElementById(id+'_h');
      const ta   = document.getElementById(id+'_a');
      if (!btnH || !btnA) return;
      if (winner === (th?.value || '')) {
        btnH.style.cssText = winnerStyle; btnH.textContent = '✓ ' + winner;
        btnA.style.cssText = loserStyle;  btnA.textContent = ta?.value || 'Uit';
      } else {
        btnA.style.cssText = winnerStyle; btnA.textContent = '✓ ' + winner;
        btnH.style.cssText = loserStyle;  btnH.textContent = th?.value || 'Thuis';
      }
    });
  }

  if (state.kampioen) {
    const el = document.getElementById('kampioen-vrijkeuze');
    const champ = document.getElementById('champion');
    if (el) el.value = state.kampioen;
    if (champ) { champ.textContent = state.kampioen; champ.classList.add('text-primary'); }
  }

  _loadingState = false;
}

// ── INIT ──────────────────────────────────────────────────────────────────────
buildMatches();
buildKO();
renderStandings();
loadState();
document.getElementById('naam').addEventListener('input',function(){
  const el=document.getElementById('print-naam');
  if(el) el.textContent=this.value;
});
document.getElementById('email').addEventListener('input',function(){
  const el=document.getElementById('print-email');
  if(el) el.textContent=this.value;
});
// ── SCORE INPUT VALIDATION ────────────────────────────────────────────────────
function isScoreInput(el) {
  return el.tagName === 'INPUT' && el.type === 'number' &&
    !!(el.closest('#mgrid') || el.closest('#kocont'));
}

// Capture phase: runs before saveState and onScoreChange bubble handlers
document.addEventListener('keydown', e => {
  if (!isScoreInput(e.target)) return;
  if (['e','E','-','+','.'].includes(e.key)) e.preventDefault();
}, true);

document.addEventListener('input', e => {
  const el = e.target;
  if (!isScoreInput(el)) return;
  // Strip any non-digit characters, limit to 2 digits
  const cleaned = el.value.replace(/\D/g, '').slice(0, 2);
  if (el.value !== cleaned) el.value = cleaned;
}, true);

document.addEventListener('focusout', e => {
  const el = e.target;
  if (!isScoreInput(el) || el.value === '') return;
  const n = parseInt(el.value, 10);
  el.value = isNaN(n) ? '' : String(Math.min(99, Math.max(0, n)));
});

document.addEventListener('input', saveState);
