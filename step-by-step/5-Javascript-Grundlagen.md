# Web: Javascript-Grundlagen

| [zurück](./4-CSS-Grundlagen.md) | [vorwärts][1] |
| --- | --- |

## Einbindung

Wie beim CSS kann das Javascript verschieden eingebunden werden.

- `head`-Bereich als Datei
- `body`-Bereich als Datei
- `body`-Bereich als Inline-Elemente

Dateien, die im `head`-Bereich eingebunden werden, werden sogleich geladen. Die Dateien im `body`-Bereich werden erst geladen, nachdem der Inhalt geladen wurde.
Inline-Elemente werden gemeinsam mit dem Inhalt geladen und ausgeführt.

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="script" href="link/zum/javascript/header/script.js" />
    </head>
    <body>
        <!-- Inhalt -->
        <!-- Das ist übrigens ein Kommentar -->
        
        <script>
            console.log('Hello World');
        </script>

        <script src="link/zum/javascript/body/script.js"></script>
    </body>
</html>
```

## Programmieren

Mit Javascript kann so ziemlich alles programmiert werden, das im Web gemacht wird. Es gibt inzwischen sogar Server-Systeme, die nur mit Javascript programmiert wurden und bei denen Javascript sozusagen das Betriebssystem ist.
Deshalb macht es wenig Sinn, hier alle Funktionen aufzuzeigen.

Dennoch schauen wir uns 3 Dinge an.

### Konsole

Die Konsole ist die Ausgabe für das Programm. Möchtest du test-weise eine Nachricht ausgeben oder eine Variable anzeigen, kannst du diese in der `console` ausgeben.

```javascript
console.log('was immer du ausgeben möchtest');
```

### Variablen und Funktionen

Beim Programmieren benötigst du sehr oft Variabeln und Funktionen. Im folgenden Beispiel wird nach dem Laden der Webseite die Breite und Höhe der Webseite berechnet und ausgegeben.

```javascript
let width = 0;
let height = 0;

function getWindowSize() {
  width = window.innerWidth;
  height = window.innerHeight;

  console.log('Breite: ' + width);
  console.log('Höhe: ' + height);
}

window.onload = getWindowSize;
```

## Änderungen an der Webseite

Mit Hilfe vom `document`-Element kann via Javascript das ganze HTML-Dokument verändert werden.

```html
<div class="box" id="box-1"></div>
```

```javascript
const box = document.getElementById('box-1');

box.style.backgroundColor = 'green';
box.innerHTML = '<p>Das ist ein Text</p>';
```

---

## Ausprobieren

![Badge](https://img.shields.io/badge/Aufgabe-Ausprobieren-orange)

- Du findest bei den [Beispielen](../examples) ein [Javascript-Beispiel](../examples/javascript-grundlagen).
- Lade den Ordner herunter und öffne das `index.html` im Browser.
- Öffne nun die Dokumente im Editor und schau dir die HTML und Javascript Grundlagen an.
- Ausprobieren!

Du merkst vielleicht, dass in Javascript ganz viele Dinge möglich sind (eigentlich Alles).
Deshalb macht es Sinn, zuerst zu überlegen was man umsetzen möchte und erst dann herauszufinden, wie man das macht.

---

**Supergeil!**

Inhalt und Formatierung und Dynamische Veränderung sind nun möglich.

Am Besten erstellen wir nun ein kleines Projekt. Dazu gibt es ebenfalls eine Anleitung: [Schritt 6: Projektanleitung][1]

[1]: 6-Projektanleitung.md
