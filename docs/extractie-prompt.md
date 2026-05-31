# Deelnemer toevoegen — WK 2026 Poule

## Primaire flow (JSON via e-mail)

Inzendingen komen automatisch binnen via Web3Forms. De e-mail bevat een veld `submission` met de volledige JSON.

1. Open de e-mail van de deelnemer
2. Kopieer de inhoud van het `submission` veld (alles tussen de accolades `{ ... }`)
3. Sla op als `submissions/<voornaam-achternaam>.json` (lowercase, koppelteken)
4. `node build.js` — genereert ook `submissions/<naam>-leesbaar.txt` voor verificatie
5. Commit en push `data/dashboard-data.json`

> Als de JSON niet opgemaakt is: plak in Claude met `Zet dit om naar nette JSON, output alleen de JSON:` voor de JSON.

---

## Fallback: deelnemer heeft alleen een PDF gestuurd

Open [claude.ai](https://claude.ai), upload de PDF en plak de prompt hieronder erbij. Kopieer de JSON-output en sla op als hierboven.

---

## Extractie-prompt (alleen bij PDF)

```
I have attached a WK 2026 Poule prediction form (PDF). Extract all predictions and output a single valid JSON object matching the schema below exactly. Output only the JSON — no explanation.

Rules:
- Use the participant's name and email exactly as written on the form.
- "scores": keyed by match index 0–71. Each entry has "-h" (home score) and "-a" (away score) as strings. Omit blank matches.
- "standings": for each group A–L, list all 4 teams in predicted finishing order (1st to 4th).
- "koFields": keyed by match ID. Each match has "_h" (home team), "_a" (away team), "_sh" (home score), "_sa" (away score) as strings. Omit blank fields.
- "kampioen": predicted world champion.
- "bonus": answers to bonus questions b1–b9. Omit blank answers.
- Use Dutch team/player names exactly as printed on the form.

---

GROUP STAGE MATCHES (0–71):
0: Mexico – Zuid-Afrika
1: Zuid-Korea – Tsjechië
2: Canada – Bosnië-Herzegovina
3: VS – Paraguay
4: Qatar – Zwitserland
5: Brazilië – Marokko
6: Haïti – Schotland
7: Australië – Turkije
8: Duitsland – Curaçao
9: Nederland – Japan
10: Ivoorkust – Ecuador
11: Zweden – Tunesië
12: Spanje – Kaapverdië
13: België – Egypte
14: Saoedi-Arabië – Uruguay
15: Iran – Nieuw-Zeeland
16: Frankrijk – Senegal
17: Irak – Noorwegen
18: Argentinië – Algerije
19: Oostenrijk – Jordanië
20: Portugal – DR Congo
21: Engeland – Kroatië
22: Ghana – Panama
23: Oezbekistan – Colombia
24: Tsjechië – Zuid-Afrika
25: Zwitserland – Bosnië-Herzegovina
26: Canada – Qatar
27: Mexico – Zuid-Korea
28: VS – Australië
29: Schotland – Marokko
30: Brazilië – Haïti
31: Turkije – Paraguay
32: Nederland – Zweden
33: Duitsland – Ivoorkust
34: Ecuador – Curaçao
35: Tunesië – Japan
36: Spanje – Saoedi-Arabië
37: België – Iran
38: Uruguay – Kaapverdië
39: Nieuw-Zeeland – Egypte
40: Argentinië – Oostenrijk
41: Frankrijk – Irak
42: Noorwegen – Senegal
43: Jordanië – Algerije
44: Portugal – Oezbekistan
45: Engeland – Ghana
46: Panama – Kroatië
47: Colombia – DR Congo
48: Zwitserland – Canada
49: Bosnië-Herzegovina – Qatar
50: Marokko – Haïti
51: Schotland – Brazilië
52: Zuid-Afrika – Zuid-Korea
53: Tsjechië – Mexico
54: Curaçao – Ivoorkust
55: Ecuador – Duitsland
56: Japan – Zweden
57: Tunesië – Nederland
58: Paraguay – Australië
59: Turkije – VS
60: Noorwegen – Frankrijk
61: Senegal – Irak
62: Kaapverdië – Saoedi-Arabië
63: Uruguay – Spanje
64: Egypte – Iran
65: Nieuw-Zeeland – België
66: Kroatië – Ghana
67: Panama – Engeland
68: Colombia – Portugal
69: DR Congo – Oezbekistan
70: Algerije – Oostenrijk
71: Jordanië – Argentinië

---

KO ROUND MATCH IDs:
Ronde van 32: r32_0 through r32_15
Achtste finales: af_0 through af_7
Kwartfinales: kf_0 through kf_3
Halve finales: hf_0, hf_1
Troostfinale: tf
Finale: fin

---

BONUS QUESTION IDs:
b1 = Welke Nederlandse speler scoort ons eerste doelpunt? (15 pts)
b2 = Welk land scoort de meeste doelpunten in de groepsfase? (15 pts)
b3 = Welk land ontvangt als eerste een rode kaart? (25 pts)
b4 = In welke minuut valt het snelste doelpunt? (25 pts)
b5 = Wie wordt topscorer van het WK? (50 pts)
b6 = Hoeveel eigen doelpunten vallen er op het gehele WK? (25 pts)
b7 = Tijdens welke wedstrijd valt de eerste strafschop? (bijv. "Nederland - Japan") (25 pts)
b8 = Welk land verzamelt de meeste gele kaarten? (25 pts)
b9 = Hoeveel goals vallen er in de groepsfase? (±5 telt) (25 pts)

---

OUTPUT SCHEMA:
{
  "naam": "",
  "email": "",
  "kampioen": "",
  "scores": {
    "0-h": "", "0-a": "",
    "1-h": "", "1-a": ""
  },
  "standings": {
    "A": ["", "", "", ""],
    "B": ["", "", "", ""],
    "C": ["", "", "", ""],
    "D": ["", "", "", ""],
    "E": ["", "", "", ""],
    "F": ["", "", "", ""],
    "G": ["", "", "", ""],
    "H": ["", "", "", ""],
    "I": ["", "", "", ""],
    "J": ["", "", "", ""],
    "K": ["", "", "", ""],
    "L": ["", "", "", ""]
  },
  "koFields": {
    "r32_0_h": "", "r32_0_a": "", "r32_0_sh": "", "r32_0_sa": ""
  },
  "bonus": {
    "b1": "",
    "b2": "",
    "b3": "",
    "b4": "",
    "b5": "",
    "b6": "",
    "b7": "",
    "b8": "",
    "b9": ""
  }
}
```
