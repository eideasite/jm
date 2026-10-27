# Jeyamohan Manoharan Portfolio

A responsive personal portfolio built with Vue 3 and Vite.

The design uses a fast, responsive, sketchbook-inspired grid with square, triangular, and pyramid accents. It opens in a jet-black theme, with a light-theme toggle. Blue, green, red, and yellow accents follow the same set order across cards, project rows, and skill tags. Motion stays small and smooth, and respects reduced-motion preferences.

## Development

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup. `npm start` is also available as an alias.

## Production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Portfolio content

Project records and collaborator details are kept in `src/data/projects.js`. Profile photographs, the WhatsApp QR code, and downloadable documents are served from `public/assets/`.

The contact form prepares a message in the visitor's default email app. Document-request details are validated in the browser only; they are not sent to or stored by this static site.
