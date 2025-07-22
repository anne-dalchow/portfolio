
> English version below!

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


---
---
<br>
<br>

# Portfolio Project

## Project Overview
This project was built with Angular 19 (Standalone API) and TypeScript.

## Technical Details
- **Framework:** Angular 19 (Standalone)
- **Language:** TypeScript
- **Styling:** SCSS
- **Internationalization:** ngx-translate, translation files in `/public/i18n/`
- **Routing:** Angular Router, configuration in `app.routes.ts`
- **Assets:** Images and icons are located in `/public/images/`
- **HTTP:** Angular HttpClient for translation loader

## Structure
- `src/app/` – Main application and components
- `src/shared/components/` – Reusable components (e.g. Button, Language Toggle)
- `public/images/` – Project images, icons, logos
- `public/i18n/` – Translation files (de.json, en.json)

## Special Features
- **Language Switch:** The selected language is stored in LocalStorage and retained when navigating between pages.
- **Scroll Behavior:** Scrolling to the top on navigation is handled manually in the root component.
- **Carousel:** Testimonials are displayed as an endless carousel with animation.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. The app will be available at `http://localhost:4200`.

## Production Build
```bash
npm run build
```
The built project will be in the `dist/` folder.

## Additional Notes
- To add new translations, simply extend the JSON files in `/public/i18n/`.
- New projects/testimonials can be managed in the respective service files.

---
Questions or issues? Just comment in the code or create an issue!