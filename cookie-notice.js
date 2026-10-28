// The site has no optional tracking. Remember only that this notice was acknowledged.
(() => {
  const storageKey = 'prime-painting-privacy-notice-v1';
  const readChoice = () => { try { return localStorage.getItem(storageKey); } catch { return null; } };
  const saveChoice = () => { try { localStorage.setItem(storageKey, 'acknowledged'); } catch { /* The notice can still be dismissed for this page. */ } };
  const notice = document.createElement('aside');
  notice.className = 'cookie-notice';
  notice.setAttribute('aria-label', 'Cookie and privacy notice');
  notice.hidden = true;
  notice.innerHTML = '<div><strong>Cookie & privacy notice</strong><p>We don’t use advertising or analytics cookies. We save your acknowledgement on this device so this notice stays closed. Our hosting provider may use essential technology to keep the site working. <a href="privacy.html">Read our privacy notice</a>.</p></div><button type="button" class="button cookie-notice-button">Got it</button>';
  document.body.append(notice);
  if (!readChoice()) notice.hidden = false;
  notice.querySelector('button').addEventListener('click', () => { saveChoice(); notice.hidden = true; });
  document.querySelectorAll('[data-cookie-notice]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    notice.hidden = false;
    notice.querySelector('button').focus();
  }));
})();
