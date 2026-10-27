import { cp, mkdir, rm } from 'node:fs/promises';
const files = ['index.html', 'privacy.html', 'styles.css', 'script.js', 'phone-popup.js', 'robots.txt', '.htaccess', 'assets'];
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of files) await cp(file, `dist/${file}`, { recursive: true });
console.log('Built dist/ — upload its contents, including .htaccess, to Hostinger public_html.');
