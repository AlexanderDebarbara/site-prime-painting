import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
for (const page of ['index.html', 'privacy.html']) {
  const html = await readFile(page, 'utf8');
  assert.match(html, /<html lang="en">/);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: duplicate IDs`);
  for (const [, link] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|tel:|sms:|data:)/.test(link) || link === '#') continue;
    if (link.startsWith('#')) assert(ids.includes(link.slice(1)), `${page}: missing anchor ${link}`);
    else await access(link.split('#')[0]);
  }
  for (const [, data] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(data);
}
console.log('Passed: local links, assets, section anchors, unique IDs, language and structured data.');
