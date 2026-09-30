# Byteex

A responsive loungewear landing page built with Nuxt 3, TypeScript, SCSS and Sanity.

[Design in Figma](https://www.figma.com/design/y2Hafb1Z2whk4tNLfnt9YD/Byteex---Standard-Development-Test--Copy-?node-id=0-1)

## Run locally

Use Node.js 22.17 or newer.

```sh
npm ci
cp .env.example .env
npm run dev
```

Open http://localhost:3000. Without Sanity settings, the page uses the sample content in `data/page.ts`.

To use the existing CMS, set these values in `.env`:

```dotenv
NUXT_SANITY_PROJECT_ID=7hzrxnec
NUXT_SANITY_DATASET=production
```

The dataset is public, so reading content needs no token. Requests to Sanity run on the server. If a request fails, the page falls back to the sample content. `/api/page` reports its source as `sanity`, `local` or `fallback`.

## Edit content

```sh
cd sanity
npm ci
cp .env.example .env
```

Set `SANITY_STUDIO_PROJECT_ID=7hzrxnec` and `SANITY_STUDIO_DATASET=production` in `sanity/.env`, then run:

```sh
npx sanity login
npm run dev
```

Open http://localhost:3333, select **Landing page**, and publish your changes. The storefront reads published content on new page requests; Sanity's CDN may briefly cache updates. If Studio requests CORS access, allow its local origin in the Sanity project's API settings.

The existing dataset already contains the page. For an empty dataset, `npm run import:content` in `sanity/` uploads the sample content and images using your CLI login. It will not overwrite an existing page. Keep credentials in local `.env` files, which Git ignores.

## Project structure

- `app.vue` fetches content and composes the page.
- `components/landing/` contains the page sections and their interactive state.
- `components/` contains shared controls, icons, the header and product gallery.
- `assets/scss/` contains fonts, shared variables, base styles and section styles. Each section's responsive rules live in the same file.
- `types/content.ts` describes the page's data contract.
- `server/api/page.get.ts` fetches published Sanity content.
- `sanity/` contains the standalone Studio, schema and import scripts.

## Checks

```sh
npm run typecheck
npm run build
npm run preview
```

To build the editor separately, run `npm run build --prefix sanity`.

## Scope

The page includes a product gallery, mobile carousels and an FAQ accordion. CTA buttons lead to the collection gallery; checkout is not part of this implementation. Sofia Pro and the product images come from the supplied design assets. Placeholder copy is retained from the mockup.

Sanity Studio has unresolved transitive dependency advisories. Review `npm audit --prefix sanity` before deploying the editor. The storefront and Studio have separate dependency trees.
