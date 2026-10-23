'use strict';
const cleanedPhotos = new Set(["antes1", "antes2", "antes3", "antes4", "antes5", "depois1", "depois2", "depois4", "depois5", "depois6", "portfolio7", "portfolio9", "portfolio10"]);
const projectPhoto = name => `assets/images/${cleanedPhotos.has(name) ? 'cleaned/' : ''}${name}.webp`;
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { if (!menu) return; menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('is-open'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('is-open', open); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('#service-select').value = link.dataset.service; }));
const comparisonDescriptions = {
  '1': ['Kitchen before refinishing, with dark wood cabinets', 'Kitchen after refinishing, with bright white cabinets'],
  '2': ['Kitchen before refinishing, with dark cabinets viewed from the sink', 'Kitchen after refinishing, with white cabinets viewed from the sink'],
  '3': ['Bathroom vanity before refinishing, with white cabinet doors', 'Bathroom vanity after refinishing, with dark cabinet doors'],
  '4': ['Hallway before painting, with yellow textured walls', 'Hallway after painting, with light neutral walls'],
  '5': ['Dining area before painting, with warm yellow walls', 'Dining area after painting, with light neutral walls'],
  '6': ['Kitchen before refinishing, with reddish wood cabinets', 'Kitchen after refinishing, with blue-green cabinets']
};
const comparisonTitles = {
  '1': 'From dark cabinets to bright white.',
  '2': 'A brighter kitchen, from another angle.',
  '3': 'A fresh finish for a bathroom vanity.',
  '4': 'A lighter, more welcoming hallway.',
  '5': 'A fresh backdrop for everyday dining.',
  '6': 'A new color story for kitchen cabinets.'
};
document.querySelectorAll('[data-comparison]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-comparison]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  const id = button.dataset.comparison;
  document.querySelector('#transformation-title').textContent = comparisonTitles[id];
  [['before-image', 'antes', 0], ['after-image', 'depois', 1]].forEach(([imageId, prefix, index]) => { const img = document.getElementById(imageId); img.src = projectPhoto(`${prefix}${id}`); img.alt = comparisonDescriptions[id][index]; });
  comparisonSlider.value = '50';
  comparison.style.setProperty('--reveal', '50%');
}));
const comparison = document.querySelector('.comparison');
const comparisonSlider = document.querySelector('#comparison-slider');
comparisonSlider.addEventListener('input', () => comparison.style.setProperty('--reveal', `${comparisonSlider.value}%`));
function revealAt(clientX) {
  const bounds = comparison.getBoundingClientRect();
  const value = Math.round(Math.max(0, Math.min(100, (clientX - bounds.left) / bounds.width * 100)));
  comparisonSlider.value = String(value);
  comparison.style.setProperty('--reveal', `${value}%`);
}
comparison.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  comparison.setPointerCapture(event.pointerId);
  revealAt(event.clientX);
});
comparison.addEventListener('pointermove', event => {
  if (comparison.hasPointerCapture(event.pointerId)) revealAt(event.clientX);
});
const cards = [...document.querySelectorAll('.project-card')];
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  document.querySelector('.gallery').classList.toggle('filtered', category !== 'all');
  document.querySelector('#gallery-status').textContent = `Showing ${cards.filter(card => !card.hidden).length} photos: ${button.textContent}.`;
}));
const lightbox = document.querySelector('#lightbox');
let lastProject;
let lightboxCards = [];
let photoIndex = 0;
const lightboxImage = document.querySelector('#lightbox-image');
const previousPhoto = document.querySelector('#previous-photo');
const nextPhoto = document.querySelector('#next-photo');
function showPhoto(index) {
  if (!lightboxCards.length) return;
  photoIndex = (index + lightboxCards.length) % lightboxCards.length;
  const card = lightboxCards[photoIndex];
  lightboxImage.src = projectPhoto(card.dataset.image);
  lightboxImage.alt = card.querySelector('img').alt;
  document.querySelector('#lightbox-caption').textContent = card.dataset.title;
  document.querySelector('#lightbox-counter').textContent = `${photoIndex + 1} / ${lightboxCards.length}`;
  previousPhoto.disabled = nextPhoto.disabled = lightboxCards.length < 2;
}
function closeLightbox() { lightbox.close(); }
cards.forEach(card => card.addEventListener('click', () => {
  lastProject = card;
  lightboxCards = cards.filter(item => !item.hidden);
  showPhoto(lightboxCards.indexOf(card));
  lightbox.showModal();
  document.body.style.overflow = 'hidden';
}));
previousPhoto?.addEventListener('click', () => showPhoto(photoIndex - 1));
nextPhoto?.addEventListener('click', () => showPhoto(photoIndex + 1));
lightbox?.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
let touchStart = null;
lightboxImage?.addEventListener('touchstart', event => {
  touchStart = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
}, { passive: true });
lightboxImage?.addEventListener('touchend', event => {
  if (!touchStart || event.touches.length) { touchStart = null; return; }
  const touch = event.changedTouches[0];
  const dx = touch.clientX - touchStart.x;
  const dy = touch.clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showPhoto(photoIndex + (dx < 0 ? 1 : -1));
}, { passive: true });
lightboxImage?.addEventListener('touchcancel', () => { touchStart = null; });
document.querySelector('#close-lightbox')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', event => { if (event.target === lightbox) { const rect = lightbox.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeLightbox(); } });
lightbox?.addEventListener('close', () => { touchStart = null; document.body.style.overflow = ''; lastProject?.focus(); });
const form = document.querySelector('#project-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(form);
  const name = values.get('name').trim(); const location = values.get('location').trim(); const details = values.get('details').trim();
  for (const field of ['name', 'location', 'details']) { const input = form.elements.namedItem(field); input.setCustomValidity(input.value.trim() ? '' : 'Please fill out this field.'); }
  if (!form.reportValidity()) return;
  const message = `Hi Prime Painting! My name is ${name}.\n\nProject location: ${location}\nService: ${values.get('service')}\n\n${details}\n\nI'd like to request a free estimate. Thank you!`;
  document.querySelector('#message-preview').value = message;
  document.querySelector('#sms-link').href = `sms:+16893055077?body=${encodeURIComponent(message)}`;
  document.querySelector('#message-result').hidden = false;
  document.querySelector('#copy-status').textContent = '';
  document.querySelector('#message-result').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
form?.addEventListener('input', event => { event.target.setCustomValidity?.(''); document.querySelector('#message-result').hidden = true; });
document.querySelector('#copy-message')?.addEventListener('click', async () => {
  const field = document.querySelector('#message-preview');
  try { await navigator.clipboard.writeText(field.value); document.querySelector('#copy-status').textContent = 'Copied! Paste this message into your messaging app.'; }
  catch { field.focus(); field.select(); document.querySelector('#copy-status').textContent = 'Select and copy the message above, then paste it into your messaging app.'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Progressive enhancement: content stays visible if motion or browser support is unavailable.
(() => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionPreference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const targets = [...document.querySelectorAll([
    '.hero-copy > *', '.hero-visual', '.specialty-card', '.section-heading > *',
    '.service-card', '.service-estimate', '.transformation-detail', '.transformation-cta', '.comparison',
    '.portfolio-profile', '.filters', '.project-card', '.about-photo', '.about-copy > *',
    '.process-grid > article', '.faq > div:first-child', '.faq-list > details',
    '.contact-copy > *', '.contact-form', '.footer-top', '.footer-bottom'
  ].join(','))];
  const running = new Map();
  const delays = new Map();
  // The hero unfolds more slowly; other sections keep a short stagger.
  targets.forEach(element => {
    const siblings = targets.filter(item => item.parentElement === element.parentElement);
    const isHero = Boolean(element.closest('.hero'));
    const index = siblings.indexOf(element);
    delays.set(element, isHero
      ? (element.matches('.hero-visual') ? 250 : 100 + index * 170)
      : Math.min(index, 3) * 60);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      observer.unobserve(element);
      if (motionPreference.matches || element.matches(':focus-within')) return;
      const isHero = Boolean(element.closest('.hero'));
      const animation = element.animate([
        { opacity: 0, translate: '0 20px' },
        { opacity: 1, translate: '0 0' }
      ], {
        duration: isHero ? 1400 : 650,
        delay: delays.get(element),
        easing: isHero ? 'cubic-bezier(0.25, 0.1, 0.25, 1)' : 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'backwards'
      });
      running.set(element, animation);
      const forget = () => running.delete(element);
      animation.addEventListener('finish', forget, { once: true });
      animation.addEventListener('cancel', forget, { once: true });
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  targets.forEach(element => observer.observe(element));

  // Keyboard users should never need to wait for an entrance animation.
  document.addEventListener('focusin', event => {
    targets.forEach(element => {
      if (element.contains(event.target)) {
        observer.unobserve(element);
        running.get(element)?.cancel();
      }
    });
  });
  motionPreference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    running.forEach(animation => animation.cancel());
    running.clear();
  });
})();
