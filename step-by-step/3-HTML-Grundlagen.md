# Web: HTML-Grundlagen

| [zurück](./2-Vorbereitung.md) | [vorwärts][1] |
| --- | --- |

## Struktur

HTML-Dokumente sind in 2 Bereiche aufgeteilt:

- `head`
- `body`

### `head`
Im `head`-Bereich sind die Kopfdaten des Dokumentes abgelegt. Sie helfen dem Browser, die Webseite darzustellen.
Die Inhalte aus diesem Bereich werden aber selber nicht auf der Webseite dargestellt.

### `body`
Im `body`-Bereich sind die Inhalte der Webseite abgelegt. Diese werden anschliessend auf der Webseite dargestellt,
sofern sie nicht ausgeblendet werden.

![Badge](https://img.shields.io/badge/Aufgabe-Ausprobieren-orange)

1) Öffne die Webseite [kanti-glarus.ch](https://kanti-glarus.ch) in einem neuen Browserfenster
2) Öffne nun die Entwickler-Umgebung und schau den Quellcode der Webseite an:
    1) Google Chrome: Rechtsklick und dann "Untersuchen"
    2) Firefox: Rechsklick und dann "Element untersuchen"
3) Schau dir die Inhalte vom `body`- und vom `head`-Bereich an.


## Aufbau

HTML-Dokumente sind strukturiert, das heisst es ist vorgegeben, wie diese mit Inhalt gefüllt werden müssen.
Die Inhalte werden als einzelne Elemente strukturiert, welche aus folgenden Elementen bestehen:

- Name, zum Beispiel `body`, `div`, `p` oder `h1`
- Attribute ohne Wert, zum Beispiel `selected`
- Attribute mit Wert, zum Beispiel `value="1"`
- Inhalt
- Abschluss, jeweils den Namen, aber mit einem `/` davor

Jedes einzelne Element wird zuerst geöffnet (`<name...>`) und nach dem Inhalt wieder geschlossen (`</name>`).
Die Elemente werden dann so dargestellt:

```
<name AttributOhneWert Attribut="mit-wert">Inhalt</name>
```

Hier ein paar Beispiele, wie das ausschauen kann:

```html
<p>Hier kommt irgendein Inhaltstext hinein</p>
<p hidden>Dieser versteckt ist anhand der Attribute wohl versteckt</p>
<p class="small">Dieser Text hat die Klasse "small" erhalten</p>
```

Es gibt Elemente, die inhaltslos sind, diese kann man direkt beim Öffnen mit einem `/>` schliessen:

```html
<input id="firstname" type="text" value="Vorname" />
<br/>
```

Die meisten Elemente, die einen Inhalt zulassen, können beliebige andere Elemente aufnehmen.
So werden Inhalte strukturiert, gebündelt und verschachtelt:

```html
<div id="login-box">
    <h1>Willkommen!</h1>
    <p>Bitte logge dich ein</p>
    <div>
        <label>Username</label>
        <input type="text" name="username" value="Username"/>
    </div>
    <div>
        <label>Passwort</label>
        <input type="password" name="password" value="Passwort"/>
    </div>
</div>
```

### Aufbau HTML-Dokument

HTML-Dokumente sind immer gleich aufgebaut. Auch hier wird mit ähnlicher Verschachtelung gearbeitet.

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Daten für den Browser, die nicht dargestellt werden -->
    </head>
    <body>
        <!-- Inhalt -->
        <!-- Das ist übrigens ein Kommentar -->
    </body>
</html>
```

## HTML-Elemente

Eine komplette Übersicht aller erlaubten HTML-Elemente ("Tags") findest du [hier](https://www.w3schools.com/tags/default.asp).

Die allerwichtigsten möchten wir hier aber auflisten und erläutern.

```html
<div>Standard-Box für Inhalte</div>

<h1>Überschrift 1</h1>

<h2>Überschrift 2</h2>

<p>Standard-Paragraph für Text-Inhalte</p>

<ul>
    <li>Eine</li>
    <li>Auflistung</li>
    <li>mit</li>
    <li>einzelnen</li>
    <li>Punkten (unnummeriert)</li>
</ul>

<ol>
    <li>Eine</li>
    <li>Aufzählung</li>
    <li>mit</li>
    <li>Nummern (oder Buchstaben...)</li>
</ol>

<form action="/link-zur-verarbeitung">
    Ein Formular, damit verschiedene User-Inputs verarbeitet werden können.
</form>

<input>
Ein User-Input-Feld für kurze Eingaben durch den User

<button>Ein Knopf zum drücken</button>

<textarea>Grösseres Textfeld für die Usereingabe</textarea>

<select name="dropdown">
  <option value="">Dropdown</option>
  <option value="">Element</option>
  <option value="">für eine</option>
  <option value="">User-Auswahl</option>
</select>

<img src="https://via.placeholder.com/350x150" />
Ein Bild mit der Bildquelle.
```
---

## Ausprobieren

![Badge](https://img.shields.io/badge/Aufgabe-Ausprobieren-orange)

- Du findest bei den [Beispielen](../examples) ein [leeres HTML-Dokument](../examples/leeres-html.html).
- Lade das Dokument herunter und öffne es im Browser. Es sollte leer sein.
- Öffne das Dokument im Editor und füge HTML-Elemente ein
- Ausprobieren!

---

**Sehr gut!**

Du hast deine erste HTML-Seite erstellt. Nun gehts weiter mit [CSS][1]: [Schritt 4: CSS-Grundlagen][1]


[1]: CSS-Grundlagen.md
