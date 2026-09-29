import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2026-09-29' });
const config = client.config();
process.env.NUXT_SANITY_PROJECT_ID = config.projectId;
process.env.NUXT_SANITY_DATASET = config.dataset;
process.env.SANITY_WRITE_TOKEN = config.token;
try {
  await import('../../scripts/seed-sanity.mjs');
} finally {
  delete process.env.SANITY_WRITE_TOKEN;
}
