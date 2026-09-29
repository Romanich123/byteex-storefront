# Byteex storefront

Responsive implementation of the supplied Byteex Figma design using **Nuxt 3, Vue 3, TypeScript, SCSS, and Sanity**.

## Local development

Requires Node.js 22.17+.

```sh
npm install
npm run dev
```

Open http://localhost:3000. With no Sanity configuration, the page uses the design content in `data/page.ts`, so the preview runs independently of a CMS account.

```sh
npm run typecheck
npm run build
npm run preview
```

## Sanity setup

1. Create a project at https://www.sanity.io/manage with a `production` dataset.
2. Copy `.env.example` to `.env` and enter the project ID and dataset. Public datasets need no read token. A private dataset needs a read-only server token in `NUXT_SANITY_READ_TOKEN`.
3. In `sanity/`, copy `.env.example` to `.env` and set the matching project ID and dataset.
4. Run `npm install` and `npm run dev` inside `sanity/` to start Studio.
5. Add Studio's local origin (normally http://localhost:3333) to the project's permitted CORS origins if required. Storefront reads are server-side.
6. Create a temporary write token and import the supplied content from the repository root:

```sh
read -s SANITY_WRITE_TOKEN
export SANITY_WRITE_TOKEN
node --env-file=.env --experimental-strip-types scripts/seed-sanity.mjs
unset SANITY_WRITE_TOKEN
```

The importer uploads the local design assets and creates the landing-page document. It refuses to overwrite an existing document. Revoke the temporary token afterward. Content changes in Studio are retrieved on new page requests (subject to Sanity CDN caching).

Tokens remain server-side. Do not add tokens to public runtime config or commit `.env` files. If Sanity is unavailable, the API serves local content so the page remains usable. The API response `source` distinguishes `sanity`, `local`, and `fallback`.

## Features and scope

- Desktop and mobile layouts based on the provided references.
- Keyboard-accessible outfit gallery with thumbnail selection.
- Mobile step and review carousels; FAQ accordion with ARIA state.
- Responsive community imagery, optimized WebP assets, explicit image dimensions, and lazy loading below the fold.
- Reusable CTA and icon components; SCSS breakpoints and reduced-motion support.
- CTA buttons scroll to the collection gallery. No checkout, payment, or backend order creation is included in this landing-page design.
- Placeholder copy and brand claims are preserved from the supplied design. Replace them with approved content in Sanity before a commercial launch.

## Structure

- `app.vue`: page sections
- `components/`: reusable UI and gallery
- `assets/scss/main.scss`: responsive styles
- `data/page.ts`: local reference content
- `server/api/page.get.ts`: server-side Sanity content query
- `sanity/`: standalone content Studio and schema
- `scripts/seed-sanity.mjs`: initial content and image import

## Design notes

Source: https://www.figma.com/design/y2Hafb1Z2whk4tNLfnt9YD/Byteex---Standard-Development-Test--Copy-?node-id=0-1

Original image exports are preserved outside this repository; optimized assets here are derived from them. The supplied mobile screenshots are visual references. Font metrics and any assets absent from the export need final confirmation against Figma inspection; this is not claimed to be a pixel-perfect match yet.

## Verification

- Nuxt TypeScript check and production build pass.
- Sanity Studio production build passes with placeholder project configuration; live CMS access/import remains untested until a real project is connected.
- Browser checks at 320, 428, 768, and 1465 CSS pixels: no horizontal page overflow after the tablet logo fix.
- Verified gallery selection, mobile step/review controls, FAQ expansion, and CTA anchor navigation. No browser console errors were observed in the tested page.
- The storefront dependency audit reported zero vulnerabilities. The standalone Studio dependency tree still reports 13 transitive advisories (1 low, 8 moderate, 4 high); compatible updates did not clear them. Review upstream fixes before deploying Studio. No forced dependency overrides have been added.
- Exact Figma typography is not available from the image exports. Outfit is bundled locally as an approximation; final pixel-level matching requires the original font and inspect values.
