# Portfolio Projekt

## Projektübersicht
Dieses Projekt ist mit Angular 19 (Standalone API) und TypeScript erstellt worden.

## Technische Details
- **Framework:** Angular 19 (Standalone)
- **Sprache:** TypeScript
- **Styling:** SCSS
- **Internationalisierung:** ngx-translate, Übersetzungsdateien in `/public/i18n/`
- **Routing:** Angular Router, Konfiguration in `app.routes.ts`
- **Assets:** Bilder und Icons liegen in `/public/images/`
- **HTTP:** Angular HttpClient für Übersetzungs-Loader

## Struktur
- `src/app/` – Hauptanwendung und Komponenten
- `src/shared/components/` – Wiederverwendbare Komponenten (z.B. Button, Language-Toggle)
- `public/images/` – Projektbilder, Icons, Logos
- `public/i18n/` – Übersetzungsdateien (de.json, en.json)

## Besonderheiten
- **Sprachumschaltung:** Die gewählte Sprache wird im LocalStorage gespeichert und beim Seitenwechsel beibehalten.
- **Scroll-Verhalten:** Das Scrollen nach oben bei Navigation wird in der Root-Komponente manuell umgesetzt.
- **Carousel:** Testimonials werden als endloses Carousel mit Animation angezeigt.

## Starten des Projekts
1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. Entwicklungsserver starten:
   ```bash
   npm start
   ```
3. Die App ist unter `http://localhost:4200` erreichbar.

## Build für Produktion
```bash
npm run build
```
Das gebaute Projekt liegt im `dist/`-Ordner.

## Weitere Hinweise
- Für neue Übersetzungen einfach die JSON-Dateien in `/public/i18n/` erweitern.
- Neue Projekte/Testimonials können in den jeweiligen Service-Dateien gepflegt werden.

---
Fragen oder Probleme? Einfach im Code kommentieren oder Issues anlegen!
