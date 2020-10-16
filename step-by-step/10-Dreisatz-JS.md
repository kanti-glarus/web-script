# Web: Styling

| [zurück](./9-Dreisatz-CSS.md) | [vorwaerts][1] |
| --- | --- |

## CSS

![Badge](https://img.shields.io/static/v1?label=Aufgabe&message=Du%20bist%20dran&color=orange)

- Überlege dir, wie die Berechnung des Dreisatzes ausschaut
- Finde heraus, wie die Rechnung gestartet werden kann, wenn der Button geklickt wird
- Lies für die Berechnung die drei Input-Felder aus
- Führe die Rechnung aus und 
- Setze das Resultat ins Resultate-Feld ein.
- Füge alle neuen Styles in dein `style.css` ein.

Hier folgen ein paar Hinweise.

<details>
<summary>Button finden</summary>

```javascript
const button = document.getElementById('button');
```
</details>

<details>
<summary>Funktion ausführen bei Klick</summary>

```javascript
button.onclick = function () {
    console.log('click');
}
```
</details>

<details>
<summary>Wert auslesen</summary>

```javascript
const wert = document.getElementById('input').value;
```
</details>

---

<details>
<summary>Lösungsvorschlag</summary>

```javascript
function berechneDreisatz() {
    const zahl1 = document.getElementById('zahl-1').value;
    const zahl2 = document.getElementById('zahl-2').value;
    const zahl3 = document.getElementById('zahl-3').value;

    const resultat = zahl3 * zahl2 / zahl1;

    document.getElementById('solution').value = resultat;
}

const calculate = document.getElementById('calculate');

calculate.onclick = berechneDreisatz;
```

Bei dieser Aufgabe gibt es nicht die eine Lösung. Aber immer einen Lösungsvorschlag.
</details>

---

Wir sind fertig. Auf der [Abschlussseite][1] findest du die Zusammenfassung: [Schritt 11: Abschluss][1]

[1]: 11-Abschluss.md
