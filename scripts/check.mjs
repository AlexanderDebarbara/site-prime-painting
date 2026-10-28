import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const canonicalUrls = {
  'index.html': 'https://primepaintingorlando.com/',
  'privacy.html': 'https://primepaintingorlando.com/privacy.html'
};
for (const page of ['index.html', 'privacy.html']) {
  const html = await readFile(page, 'utf8');
  assert.match(html, /<html lang="en">/);
  assert(html.includes(`<link rel="canonical" href="${canonicalUrls[page]}">`), `${page}: missing canonical URL`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: duplicate IDs`);
  for (const [, link] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|tel:|sms:|mailto:|data:)/.test(link) || link === '#') continue;
    if (link.startsWith('#')) assert(ids.includes(link.slice(1)), `${page}: missing anchor ${link}`);
    else await access(link.split(/[?#]/)[0]);
  }
  for (const [, data] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(data);
}
const sitemap = await readFile('sitemap.xml', 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(sitemapUrls, Object.values(canonicalUrls), 'Sitemap URLs must match canonical URLs');
const robots = await readFile('robots.txt', 'utf8');
assert(robots.includes('Sitemap: https://primepaintingorlando.com/sitemap.xml'), 'robots.txt must point to the sitemap');
console.log('Passed: local links, assets, section anchors, unique IDs, language and structured data.');
