# AI Extractie Prompt — WK 2026 Poule

Gebruik dit wanneer een deelnemer alleen een PDF heeft opgestuurd (geen JSON).

## Stappen

1. Open [claude.ai](https://claude.ai) of ChatGPT (met bestandsupload)
2. Upload de PDF van de deelnemer
3. Kopieer de volledige prompt hieronder en plak deze erbij
4. Kopieer de JSON-output
5. Sla op als `submissions/<voornaam-achternaam>.json`
6. Voeg de bestandsnaam toe aan `submissions/index.json`

---

## Prompt (kopieer alles hieronder)

```
I have attached a WK 2026 Poule prediction form (PDF). Extract all predictions and output a single valid JSON object matching the schema below exactly. Do not include any explanation — output only the JSON.

Rules:
- Use the participant's name and email exactly as written on the form.
- "scores": keyed by match index 0–71 (see match list below). Each entry has "-h" (home score) and "-a" (away score) as strings. Omit a match if the score is blank.
- "standings": for each group A–L, list all 4 teams in the predicted finishing order (1st to 4th) as they appear in the "Poulevolgorde" section.
- "koFields": keyed by match ID (see KO list below). Each match has "_h" (home team), "_a" (away team), "_sh" (home score), "_sa" (away score) as strings. Omit fields that are blank.
- "kampioen": the predicted world champion (free text field at the bottom).
- "bonus": answers to the 10 bonus questions (b1–b10b). Omit blank answers.
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
b1 = Welke Nederlandse speler scoort ons eerste doelpunt? (25 pts)
b2 = Welk land ontvangt als eerste een rode kaart? (20 pts)
b3 = Welk land scoort de meeste doelpunten in de groepsfase? (20 pts)
b4 = Hoeveel goals vallen er in de groepsfase? (15 pts)
b5 = Wie wordt topscorer van het toernooi? (35 pts)
b6 = Welke keeper houdt de meeste clean sheets? (30 pts)
b7 = Welk land ontvangt de meeste gele kaarten? (20 pts)
b8 = Hoeveel goals vallen er in het hele toernooi? (20 pts)
b9 = Welk land valt uit via penalty's in de knock-out fase? (25 pts)
b10a = Finalist 1 (eerste van de twee finalisten) (20 pts)
b10b = Finalist 2 (tweede van de twee finalisten) (20 pts)

---

OUTPUT SCHEMA:
{
  "naam": "",
  "email": "",
  "kampioen": "",
  "scores": {
    "0-h": "", "0-a": "",
    ...
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
    "r32_0_h": "", "r32_0_a": "", "r32_0_sh": "", "r32_0_sa": "",
    ...
  },
  "bonus": {
    "b1": "",
    "b2": "",
    ...
  }
}
```

---

## Na extractie

- Controleer de naam in `naam` — gebruik die als bestandsnaam: `voornaam-achternaam.json` (lowercase, spaties als koppelteken)
- Voeg de bestandsnaam toe aan `submissions/index.json`
- Push naar GitHub → dashboard herberekent automatisch
