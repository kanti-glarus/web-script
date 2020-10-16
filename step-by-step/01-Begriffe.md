# Web: Begriffe

| [zurück](../README.md) | [vorwärts][1] |
| --- | --- |

**Einleitung**

Zum Start möchten wir ein paar allgemeine Begriffe klären. Du darfst gerne jederzeit zurückkommen und nachschauen, wenn du irgendwo auf einen neuen Begriff stösst.

## Internet

Das Internet ist das globale Netzwerk von Computern und Rechnern auf der ganzen Welt.
Über das Internet werden verschiedene Dienste bereitgestellt, wie zum Beispiel Email oder das World Wide Web.
Die einzelnen Rechner im Internet - oder auch Mobiltelefone, die via Antenne mit dem Internet verbunden sind - können über das Internet kommunizieren und Daten austauschen.

## World Wide Web

Das World Wide Web ist der Teil vom Internet, der mit Hilfe von Webseiten kommuniziert. Jede Webseite ist Teil vom World Wide Web und das World Wide Web umfasst alle Webseiten.
Webseiten kommunizieren über die Protokolle HTTP und HTTPS, so werden Daten zwischen Servern und Browsern ausgetauscht.
Jedes Mal wenn du auf einer Webseite "unterwegs" bist, bewegst du dich im WWW. 

## Darknet

Das Darknet ist ein spezifischer Teil vom Internet. Ein Zugriff ist nur über spezielle Eingangstore möglich und die Kommunikation findet grösstenteils verschlüsselt und anonym statt.
Eine normale Webseite im World Wide Web weiss im Normalfall, von welcher IP-Adresse aus du eine Webseite abrufst. Im Darknet wird die IP-Adresse verschleiert, da der Zugang über verschiedene Server umgeleitet wird.
Die Anonymität im Darknet ermöglicht es, illegale Geschäfte anzubieten und zu tätigen. Das Darknet ist sozusagen der Schwarzmarkt vom Internet.

## Email

Neben dem World Wide Web gibt es im Internet Dienste wie den Emailversand. Emails sind die Briefpost vom Internet.
Mit einem Email kannst du Texte von einer Emailadresse an eine andere Emailadresse verschicken.

## IP-Adresse

Jeder Zugriff ins Internet erfolgt über einen Anschluss. Zum Beispiel über das LAN-Kabel oder über WLAN oder über dein Mobiltelefon. Damit jeder dieser Anschlüsse Daten senden und empfangen kann,
benötigt jeder Anschluss eine Adresse. Im Internet ist das die IP-Adresse.
Bei den IP-Adressen gibt es zwei verbreitete Formate:

- IPv4
- IPv6

### IPv4
Das ist die vierte Version der IP-Adresse. Sie setzt sich aus vier Zahlen von 0-255 (1 Byte) zusammen.
Mit diesen 4 Bytes sind 2<sup>32</sup> Möglichkeiten verfügbar, sprich es gibt maximal 4'294'967'296 Adressen. Weil das nicht mehr ausreicht, wurde das Format weiterentwickelt: IPv6

Beispiel: `203.0.113.195`

### IPv6
Das ist die sechste Version der IP-Adresse. Diese Variante hat die Aufgabe, dass viel mehr Adressen verfügbar sind, sie besteht deshalb aus 128 Bits. Folglich gibt es 2<sup>128</sup> Möglichkeiten.
Dargestellt werden IPv6-Adressen in der Form von `8` Blöcken, die durch ein `:` getrennt werden. Jeder Block besteht aus 4 Hexadezimalzahlen oder 16 Bits.

Beispiel: `2001:0db8:85a3:0000:0000:8a2e:0370:7344`

## Domain

Weil sich niemand Hunderte IP-Adressen merken kann, wurden Domains eingeführt. Jede Domain (zum Beispiel `www.kanti-glarus.ch`) ist im Hintergrund mit einer IP-Adresse verknüpft, welche dem Server der Webseite zugeordnet ist.
So muss man nur die Domain kennen und erreicht damit die Webseite, die dann auf dem Computer mit der entsprechenden IP-Adresse abgelegt ist.

## Webseite

Eine Webseite wird oft mit dem Web-Auftritt einer Firma oder Person oder Sache gleichgestellt. Eigentlich ist eine Webseite eine Sammlung von Dokumenten, die von Browsern dargestellt werden können.
Meist sind das Hyper-Text-Dokumente, die dann von Browsern und den Usern vor den Browsern gelesen werden können.
Webseiten können Bild, Text, Video, Ton und viele weitere Elemente enthalten.

## Browser

Ein Computerprogramm, dass Webseiten darstellen kann. Zum Beispiel "Google Chrome" oder "Firefox".

## HTML

HTML ist eine textbasierte Sprache für die Strukturierung von Inhalten auf einer Webseite. So können Bilder und Verlinkungen, sowie Text und weitere Elemente strukturiert in einem Dokument gespeichert und verarbeitet werden.
Webseiten basieren auf HTML-Dokumenten, die von Browsern ausgegeben werden können.
Bei einem Teil der HTML-Dokumente wird vorgegeben, wie diese strukturiert sein müssen. Beim ganzen Inhalt der Webseite gibt es aber nur wenig Einschränkungen und Vorschriften.

Beispiel eines HTML-Dokumentes:

```html
<html>
    <head>
        <title>Das ist der Titel der Webseite</title>
    </head>
    <body>
        <h1>Webseite</h1>
        <img src="https://via.placeholder.com/350x150">
        <p>Das ist der Text zum Bild</p>
    </body>
</html>
```

## CSS

Mit HTML werden Texte und Inhalte strukturiert. Mit CSS werden diese Inhalte formatiert und die Darstellung kann verändert werden.
So definiert das Beispiel im HTML, dass ein Element ein Titel ist, danach folgt ein Bild und dann ein Text dazu.
Mit CSS kann nun die Schriftart, Grösse, Farbe des Textes, die Abstände, und vieles mehr definiert werden.

Beispiel einer CSS-Datei:

```css
h1 {
    font-size: 20px;
    font-family: Arial, sans-serif;
}

body {
    margin: 0;
    padding: 0;
}
```

## Javascript

Mit Javascript kann eine Webseite nun *programmiert* werden. So definiert HTML den Inhalt und CSS das Aussehen, mit Javascript können nun Berechnungen durchgeführt werden und Inhalte verändert oder animiert werden.
CSS und HTML sind relativ statische Dokumente, Javascript bringt die Dynamik in eine Webseite.

Beispiel einer Javascript-Datei:

```javascript
function halloWelt() {
	alert('Hello World');
}

window.onload = halloWelt;
```

## Server

Der Server ist ein Computer, der mit dem Internet verbunden ist und auf dem Internet-spezifische Programme laufen.
Jede Webseite wird von einem Server bereitgestellt, was nichts anderes ist als ein spezielles Programm oder ein spezielles Betriebssystem, das aber auf einem "normalen" Computer läuft.
Wenn du auf deinem Computer eine Webseite bereitstellst und diese vom Internet aus erreichbar ist, wird dein Computer zum Server.

## Protokolle

Die Kommunikation über das Internet ist streng geregelt, sonst wüssten Computer gar nicht, wie sie miteinander "sprechen" können.
Für die verschiedenen Arten der Kommunikation gibt es eigene Protokolle.

## HTTP

Das Standardprotokoll für die Übertragung von Webseiten. Heisst soviel wie "HyperTextTransferProtokoll", also das Protokoll um HyperTexte (HTML-Dokumente) über das Internet zu transferieren.
Dank HTTP sind Webseiten erreichbar.

Du erkennst das Protokoll beim Aufruf einer Webseite:

- `http://www.google.ch`
- `https://www.google.ch`

## HTTPS

Eine erweitertes Protokoll zu HTTP, nämlich das "Sichere HyperTextTransferProtokoll". Webseiten, die mit dem HTTPS-Protokoll übertragen werden, werden verschlüsselt übermittelt.
So sieht ein Beobachter zwar, dass zwischen deinem Browser und dem Webserver Daten übertragen werden, kann aber nicht mitlesen, was in den Daten steht, da diese verschlüsselt sind.
Du erkennst sichere Webseiten am kleinen Schloss in der Adresszeile von deinem Browser. Moderne Browser warnen dich, wenn du eine nicht-sichere Webseite (spricht HTTP) öffnen möchtest.
Bankenwebseiten, Online-Zahlungen, Seiten mit persönlichen Daten (Logins etc) solltest du nur über HTTPS aufrufen.

Du erkennst das Protokoll beim Aufruf einer Webseite:

- `http://www.google.ch`
- `https://www.google.ch`

## FTP

FTP ist das "FileTransferProtokoll", also das Protokoll um Dateien zu übertragen. Um eine Webseite (oder zumindest die Dateien der Webseite) auf einem Server abzulegen, brauchst du das FileTransferProtokoll. Auch hier gibt es standardmässig das SFTP, das die Übertragung verschlüsselt.

---
**Alles klar?**
Nun gehts weiter mit den Programmen, die zum Starten benötigst: [Schritt 2: Vorbereitung][1]


[1]: 02-Vorbereitung.md