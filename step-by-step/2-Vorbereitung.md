# Web: Vorbereitung

| [zurück](./1-Begriffe.md) | [vorwärts](tbd) |
| --- | --- |

## Installationen

Um eine Webseite zu erstellen, benötigen wir folgende Programme:

- [Browser](#browser)
- [Editor](#editor)
- [FTP-Client](#ftp)

---

### <a name="browser">Browser</a>
Webseiten werden meist in einem Browser dargestellt und können da betrachtet und getestet werden.

Moderne Browser sind:

#### Google Chrome

![Badge](https://img.shields.io/badge/Browser-sicher-brightgreen)

- [Download](https://www.google.com/intl/de/chrome/)
- Wird von der Firma "Google LLC" entwickelt
- Seit 2012 marktführend
- Grösstenteils öffentlich einsehbar im Projekt Chromium

#### Firefox

![Badge](https://img.shields.io/badge/Browser-sicher-brightgreen)

- [Download](https://www.mozilla.org/de/firefox/new/)
- Wird vom Projekt Mozilla entwickelt
- Gehört zu den verbreitesten Browsern
- freie Software, [GNU General Public License](https://de.wikipedia.org/wiki/GNU_General_Public_License)

#### Weitere Browser

- **Safari** von Apple
- **Microsoft Edge** von Microsoft
- **Opera Browser**
- **Tor-Browser** vom torproject für den anonymisierten Zugang ins Internet

#### Veraltete Browser

![Badge](https://img.shields.io/badge/Browser-unsicher-red)

<details>
<summary>Einblenden</summary>

- Internet Explorer
- Netscape
- Mosaic

Diese Browser sollten nicht verwendet werden, da sie nicht mehr den neusten Sicherheitsanforderungen entsprechen.
</details>

---

### <a name="editor">Editoren</a>

Webseiten können nicht direkt im Browser bearbeitet werden. Die Bearbeitung ist oft am einfachsten,
wenn man diese in einem *Texteditor* durchführt.
Noch einfacher ist die Entwicklung in einer Entwicklungsumgebung,
das ist ein starker Texteditor, der "mitdenkt" und Webseiten (oder ganze Softwareprojekte) "interpretieren" kann.

#### Notepad / Editor

![Badge](https://img.shields.io/badge/Editor-Texteditor-yellow)

Einfacher Texteditor der in der Windows-Umgebung bereits installiert ist.
Kein Highlighting für die bessere Lesbarkeit von der Programmiersprache.

Editor ist auf den Schulcomputern bereits vorinstalliert.

#### Sublime Text 3

![Badge](https://img.shields.io/badge/Editor-Texteditor-yellow)

Texteditor, der einfach und gut ist. Highlighting je nach Programmiersprache.
Dieser Editor kann auf den Schulcomputern leider nicht installiert werden.

#### Visual Studio Code

![Badge](https://img.shields.io/badge/Editor-Entwicklungsumgebung-blue)

Entwicklungsumgebung von Microsoft. Kann mit diversen Ergänzungen (Extensions) erweitert werden.
Funktioniert nicht nur für Webseiten sondern auch für Python-Projekte und weitere Software-Projekte.
Kann auf den Schulcomputern via [Download](https://code.visualstudio.com/download) installiert werden.

#### WebStorm

![Badge](https://img.shields.io/badge/Editor-Entwicklungsumgebung-blue)

Entwicklungsumgebung von Jetbrains. Kann mit diversen Ergänzungen (Extensions) erweitert werden.
Spezialisiert für die Programmierung von Webseiten und Webprojekten die mit Javascript arbeiten.
Kann auf den Schulcomputern via [Download](https://www.jetbrains.com/de-de/webstorm/) installiert werden.
Die Nutzung von Jetbrains-Software ist kostenpflichtig, für Schülerinnen, Schüler und Studierende gibt es eine Gratislizenz.
Dazu muss zuerst eine [Anmeldung](https://www.jetbrains.com/shop/eform/students) mit der persönlichen Emailadresse der Schule durchgeführt werden. 

#### PhpStorm

![Badge](https://img.shields.io/badge/Editor-Entwicklungsumgebung-blue)

Entwicklungsumgebung von Jetbrains. Kann mit diversen Ergänzungen (Extensions) erweitert werden.
Spezialisiert für die Programmierung von Webapplikationen und Webprojekten die auf PHP basieren.
Kann auf den Schulcomputern via [Download](https://www.jetbrains.com/de-de/phpstorm/) installiert werden.
Die Nutzung von Jetbrains-Software ist kostenpflichtig, für Schülerinnen, Schüler und Studierende gibt es eine Gratislizenz.
Dazu muss zuerst eine [Anmeldung](https://www.jetbrains.com/shop/eform/students) mit der persönlichen Emailadresse der Schule durchgeführt werden. 

---

### <a name="ftp">FTP-Client</a>

Damit Webseiten öffentlich verfügbar sind, müssen sie auf einem Server abgelegt werden. Dieser ist ständig mit dem Internet verbunden
und die abgelegte Webseite ist immer erreichbar.
Damit die Dateien auf dem Server abgelegt werden können, gibt es die Möglichkeit, sich via *FTP* mit dem Server zu verbinden.
Dazu muss einerseits der Server eine FTP-Verbindung zulassen, andererseits musst du einen FTP-Client haben.
Mit dem FTP-Client und den nötigen Zugangsdaten kannst du dich mit dem Server verbinden und die Dateien der Webseite auf dem Server ablegen.

#### Cyberduck

Mit Cyberduck kannst du dich mit verschiedensten Servern verbinden, unter anderem auch mit den normalen
FTP-Servern.
Hier findest du den [Download](https://cyberduck.io/). Auf den Schulcomputern gibt es im Moment aber keine Möglichkeit, das Programm zu installieren. 