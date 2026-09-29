import { getCliClient } from 'sanity/cli';
const client = getCliClient({ apiVersion: '2026-09-29' });
const page = await client.getDocument('byteex-landing-page');
if (!page) throw new Error('Landing page not found');
const updates = {};
for (const field of ['gallery', 'benefits', 'steps', 'reviews', 'faqs', 'impact']) {
  if (page[field]?.some(item => !item._type)) {
    updates[field] = page[field].map(item => ({ ...item, _type: item._type || 'object' }));
  }
}
if (Object.keys(updates).length) {
  await client.patch(page._id).ifRevisionId(page._rev).set(updates).commit();
}
console.log('Sanity array item types verified.');
