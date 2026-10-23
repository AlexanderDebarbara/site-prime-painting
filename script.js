'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { if (!menu) return; menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('is-open'); }
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('is-open', open); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('#service-select').value = link.dataset.service; }));
const comparisonDescriptions = { '1': ['Kitchen before refinishing, with dark wood cabinets', 'Kitchen after refinishing, with bright white cabinets'], '3': ['Bathroom vanity before refinishing, with white cabinet doors', 'Bathroom vanity after refinishing, with dark cabinet doors'], '4': ['Hallway before painting, with yellow textured walls', 'Hallway after painting, with light neutral walls'] };
document.querySelectorAll('[data-comparison]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-comparison]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  const id = button.dataset.comparison;
  [['before-image', 'antes', 0], ['after-image', 'depois', 1]].forEach(([imageId, prefix, index]) => { const img = document.getElementById(imageId); img.src = `assets/images/${prefix}${id}.webp`; img.alt = comparisonDescriptions[id][index]; });
}));
const cards = [...document.querySelectorAll('.project-card')];
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  document.querySelector('.gallery').classList.toggle('filtered', category !== 'all');
  document.querySelector('#gallery-status').textContent = `Showing ${cards.filter(card => !card.hidden).length} projects: ${button.textContent}.`;
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
  lightboxImage.src = `assets/images/${card.dataset.image}.webp`;
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
  const message = `Hi Prime Painting! My name is ${name}.\n\nProject location: ${location}\nService: ${values.get('service')}\n\n${details}\n\nI'd like to discuss an estimate. Thank you!`;
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
