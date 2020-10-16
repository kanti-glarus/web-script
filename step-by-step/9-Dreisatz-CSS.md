# Web: Styling

| [zurück](./8-Dreisatz-HTML.md) | [vorwärts][1] |
| --- | --- |

## CSS

![Badge](https://img.shields.io/static/v1?label=Aufgabe&message=Du%20bist%20dran&color=orange)

- Gestalte die HTML-Elemente anhand deiner Skizze
- Füge alle neuen Styles in dein `style.css` ein.

<details>
<summary>Lösungsvorschlag</summary>

```css
body {
    background: beige;
    margin: 0;
    font-family: Verdana, Arial, sans-serif;
}

h1,
p {
    margin: 20px;
}

.dreisatz {
    width: 480px;
}

.dreisatz:after {
    clear: both;
    content: '';
    display: table;
}

.box {
    width: 200px;
    margin: 20px;
    float: left;
}

.box.-right {
    margin-left: 260px;
}

.number,
.button {
    width: 166px;
    padding: 15px;
    margin: 0;
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
}

.number.-input {
    background-color: rgba(255, 165, 0, 0.2);
    border: 2px solid #ffa500;
}

.number.-solution {
    background-color: rgba(34, 184, 34, 0.2);
    border: 2px solid #22b822;
}

.button {
    background-color: beige;
    border: 2px solid #000;
    margin-top: 20px;
    width: 200px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 500ms, color 500ms;
}

.button:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: beige;
}

.label {
    font-size: 8px;
    margin: 0 0 5px 5px;
    line-height: 20px;
    text-transform: uppercase;
}
```

Bei dieser Aufgabe gibt es nicht die eine Lösung. Aber immer einen Lösungsvorschlag.
</details>

---

Nun sieht unser Projekt bereits fertig aus, aber die Berechnung im [Javascript][1] fehlt noch: [Schritt 10: Javascript][1]

[1]: 10-Dreisatz-JS.md
