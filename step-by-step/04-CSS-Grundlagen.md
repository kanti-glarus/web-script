# Web: CSS-Grundlagen

| [zurück](03-HTML-Grundlagen.md) | [vorwärts][1] |
| --- | --- |

## CSS

Was heisst eigentlich CSS?

*Cascading Style Sheets*

CSS ist die Formatiersprache für HTML-Dokumente.

## Verlinkung

CSS wird normalerweise in einem separaten Dokument verfasst und dieses Dokument auf allen Seiten der Webseite eingefügt. So sehen alle Webseiten gleich aus, egal wo der User sich befindet.
Dazu wird in jeder HTML-Datei im `head`-Bereich wie folgt eine Datei verlinkt:

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="link/zur/css/datei.css" />
    </head>
    <body>
        <!-- Inhalt -->
        <!-- Das ist übrigens ein Kommentar -->
    </body>
</html>
```

## Aufbau

Mit CSS wird immer ein einzelnes Element oder eine Element-Gruppe angesprochen.
Wir unterscheiden zwischen Typ, Klasse und ID.

```html
<div class="box" id="box-1">
    Diese Box wird grün eingefärbt und erhält einen Schwarzen Rahmen.
</div>
```

### Typ

![Badge](https://img.shields.io/badge/Typ-Ausnahme-orange)

Wir können mit `div` alle Elemente vom Typ `<div>` formatieren:

```css
div {
    background-color: green;
    border: 1px solid #000000;
}
```

Es werden nun ALLE `div`-Elemente formatiert.

### Klasse

![Badge](https://img.shields.io/badge/Klasse-Standard-brightgreen)

Wir können mit `.box` alle Elemente mit der Klasse `box` formatieren:

```css
.box {
    background-color: green;
    border: 1px solid #000000;
}
```

### Id

![Badge](https://img.shields.io/badge/Id-Ausnahme-orange)

Oder wir sprechen mit `#box-1` das Element mit der Id `box-1` formatieren. Eine HTML-ID sollte in jedem HTML-Dokument maximal einmal auftauchen. Es erscheint aber leider keine Fehlermeldung, wenn die Id mehrmals verwendet wird.

```css
#box-1 {
    background-color: green;
    border: 1px solid #000000;
}
``` 

## Einzelne Element ansprechen

Oftmals kommt es vor, dass nur ein einzelnes Element oder mehrere Elemente einer Klasse in einem bestimmten Zusammenhang formatiert werden sollen.
Zum Beispiel erhält jeder Link die Klasse `link`, aber für die Navigation möchte ich die Links anders formatieren als die normalen Links auf der Seite.

### Variante A: Verschachtelung nutzen

Das möchten wir an folgendem Beispiel anschauen:
```html
<div>
    <p>Irgendein Text mit einem <a href="#" class="link">Link A</a>.</p>
    <nav class="navigation">
        <a href="#" class="link">Link B</a>
        <a href="#" class="link">Link C</a>
    </nav>
</div>
```

Und nun das entsprechende CSS dazu:
```css
.link {
    /* Formatieren von allen Links */
    text-decoration: none;
    color: blue;
}

.navigation .link {
    /* Formatieren von den Links im Element .navigation */
    color: green;
}
```

### Variante B: Inner HTML nutzen

HTML-Elemente können direkt im HTML angepasst werden.

Jedem HTML-Element kann mit dem `style`-Attribut ein Style hinzugefügt werden:

```html
<a href="#" style="color: #ff9900;"></a>
```

## Formatierung

Wir schauen uns nun ein paar Dinge an, die formatiert werden können.

### Position

```css
div {
    top: 10px;
    bottom: 20px;
    left: 30px;
    right: 40px;
    position: absolute;
    position: fixed;
    position: relative;
}
```

Elemente können wie folgt positioniert werden:

- `fixed`: Fix im Bezug auf das Browserfenster
- `absolute`: Absolut im Bezug auf den gesamten Webseiteninhalt
-  `relative`: Relativ im Bezug auf das Eltern-Element

Je nach Wahl haben die Optionen `top`, `bottom`, `left` und `right` werden diese berücksichtigt oder gar nicht erst angeschaut.

### Grösse
 
```css
div {
    width: 100px;
    height: 200px;
}
```

Die Grössenangabe sollte eigentlich selbsterklärend sein, kann aber neben `px` noch verschiedene weitere Einheiten haben. Es gibt dazu eine [Übersicht der Einheiten](https://www.w3schools.com/cssref/css_units.asp). 

### Schrift

Hier eine kleine Übersicht, wie die Schrift verändert werden kann:

```css
div {
    font-weight: bold;
    font-size: 20px;
    font-family: Arial;
    text-align: right;
    font-style: italic;
}
```

Wie bei allen Optionen gibt es auch hier eine ziemlich gute [Übersicht](https://www.w3schools.com/cssref/pr_font_font.asp).

### Farben

Das Farbsystem im Web basiert auf dem RGB-System.
Farben werden im Format `Rot-Grün-Blau` definiert und jede Farbe auf dem Bildschirm kann mit seinem Rot-Anteil, Grün-Anteil und Blau-Anteil definiert werden.
Diese Anteile können die Werte `0` bis `255` einnehmen und werden anschliessend wie folgt dargestellt:

```css
div {
    color: rgb(0, 192, 255);
}
``` 

Durchgesetzt hat sich die Hexadezimaldarstellung mit 6 Ziffern, die ersten beiden stehen für den Rot-Wert, dann folgt der Blau-Wert und abgeschlossen wird mit dem Grün-Wert:

```css
div {
    color: #00C0FF;
}
```

Eingefärbt werden kann die Schriftfarbe, die Hintergrundfarbe und der Rahmen. Weiter sind [140 Farbcodes](https://www.w3schools.com/colors/colors_names.asp) auch als Namen definiert worden.

```css
div {
    color: green;
    background-color: aliceblue;
    border: 5px solid indianred;
}
```

Eine kleine Test-Umgebung für Hexadezimal-Farben findest du in [diesem Codepen](https://codepen.io/btemperli/pen/NWNdRGe).

### Anordnung & Abstände

Normale Webseiten-Elemente sind immer vertikal angeordnet. Unter jedem `div` folgt gleich das nächste `div`, ohne Abstand.
Mit CSS können Elemente nebeneinander angeordnet werden:

```css
div {
    float: left;
}
```

Abstände können entweder ausserhalb der Elemente gesetzt werden, das wäre das `margin`.

```css
div {
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-top: 40px;
}

div {
    /* shortcut: top right bottom left */
    margin: 40px 20px 30px 10px;
}
```

Oder die Abstände werden innerhalb des Elements gesetzt, das wäre dann das `padding`.

```css
div {
    padding-left: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-top: 40px;
}

div {
    /* shortcut: top right bottom left */
    padding: 40px 20px 30px 10px;
}
```

Anordnungen können im modernen Web auch mit Hilfe der Optionen [grid](https://www.w3schools.com/cssref/pr_grid.asp) und [flex](https://www.w3schools.com/cssref/css3_pr_flex.asp) definiert werden. Dazu finden sich im WWW diverse [Anleitungen](https://medium.com/sketch-app-sources/css-grid-einf%C3%BChrung-in-5-minuten-verstehen-und-in-sketch-umsetzen-9e9e8a16b07e)
und [Cheat-Sheets](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### Mobile & Responsive

Damit Webseiten auf Mobile und auf Desktop-Bildschirmen gut ausschauen, gibt es die `@media`-Regel.
Damit können für spezifische Webseitenformate eigene Styles definiert werden.

Am Besten versuchst du das gleich selber online: [@Media-Rule bei w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp).

So können für einzelne Bildschirmgrössen separate Regeln definiert werden.

```css
body {
    font-size: 10px;
}

@media only screen and (min-width: 620px) {
    body {
        font-size: 14px;
    }   
}

@media only screen and (min-width: 1200px) {
    body {
        font-size: 18px;
    }   
}
```

Im obigen Beispiel wird definiert, dass die Schriftgrösse `10px` beträgt.
Auf Bildschirmen mit einer Mindestbreite von `620px` wird die Schriftgrösse auf `14px` vergrössert.
Auf Bildschirmen ab `1200px` wird die Schriftgrösse `18px` betragen.

Nun hast du auch eine wichtige Regel gelernt: mit Einträgen weiter unten in der Datei können bestehende Einträge überschrieben werden.
Die CSS-Dokumente werden immer von oben nach unten interpretiert und späte Einträge überschreiben frühere Einträge.

Eine zweite wichtige Regel die sich durchgesetzt hat, ist die **Mobile-First-Rule**. Webseiten sollten immer so programmiert werden, dass sie auf kleinen Bildschirmen gut ausschauen. Danach werden Anpassungen für die grossen Bildschirme definiert. 

### Animationen

Eigentlich haben wir ja gesagt, dass Animationen und Bewegungen mit Javascript umgesetzt werden.
Aber bereits in CSS sind einige Dinge animierbar. Eine kleine Einführung findest du bei den [Freunden von W3Schools](https://www.w3schools.com/css/css3_animations.asp).

### Weitere Optionen

Du solltest nun einen kleinen Überblick über CSS-Funktionen haben.
Du findest im Internet eine grosse und [detaillierte Übersicht](https://www.w3schools.com/cssref/default.asp).

---

## Ausprobieren

![Badge](https://img.shields.io/badge/Aufgabe-Ausprobieren-orange)

- Du findest bei den [Beispielen](../examples) ein [CSS-Beispiel](../examples/css-grundlagen).
- Lade den Ordner herunter und öffne das `index.html` im Browser.
- Öffne nun die Dokumente im Editor und schau dir die HTML und CSS Grundlagen an.
- Ausprobieren!

---

**Yippi-ay-yeah!**

Deine HTML-Seite kann nun formatiert werden. Nun gehts weiter mit [Javascript][1]: [Schritt 5: Javascript-Grundlagen][1]


[1]: 05-Javascript-Grundlagen.md
