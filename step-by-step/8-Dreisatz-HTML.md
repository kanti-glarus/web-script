# Web: HTML-Elemente

| [zurück](./7-Grundgeruest.md) | [vorwärts][1] |
| --- | --- |

## HTML

![Badge](https://img.shields.io/static/v1?label=Aufgabe&message=Du%20bist%20dran&color=orange)

- Anhand deiner Skizze weisst du nun ungefähr, welche HTML-Elemente wir benötigen
- Füge alle HTML-Elemente in dein `index.html` ein.

<details>
<summary>Lösungsvorschlag</summary>

```html
    <h1>Dreisatz berechnen</h1>
    <p>Fülle die orangen Felder aus. Lasse anschliessend die vierte Zahl berechnen.</p>

    <div class="dreisatz">
        <div class="number">
            <label for="zahl-1">Zahl 1</label>
            <input value="" placeholder="20" id="zahl-1" class="number -input" type="number" />
        </div>
        <div class="number">
            <label for="zahl-2">Zahl 2</label>
            <input value="" placeholder="80" id="zahl-2" class="number -input" type="number" />
        </div>
        <div class="number">
            <label for="zahl-3">Zahl 3</label>
            <input value="" placeholder="10" id="zahl-3" class="number -input" type="number" />
        </div>
        <div class="number">
            <label for="solution">Resultat</label>
            <input value="" readonly id="solution" class="number -solution" type="number" />
        </div>
    </div>

    <div>
        <button type="submit" id="calculate">Berechnen</button>
    </div>
```

Bei dieser Aufgabe gibt es nicht die eine Lösung. Aber immer einen Lösungsvorschlag.
</details>

---

Das HTML ist nun vorbereitet, jetzt müssen wir es via [CSS][1] gestalten: [Schritt 9: CSS][1]

[1]: 9-Dreisatz-CSS.md
