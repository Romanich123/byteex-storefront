export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: { sanityProjectId: '', sanityDataset: 'production', sanityReadToken: '' },
  app: { head: { title: 'Byteex — Comfort, naturally.', htmlAttrs: { lang: 'en' }, meta: [{ name: 'description', content: 'Beautiful, consciously made loungewear for day or night. Find your everyday comfort with Byteex.' }], link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }] } }
})
