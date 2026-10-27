'use strict';

const phoneDialog = document.querySelector('#phone-dialog');
let phoneDialogTrigger = null;

document.querySelectorAll('[data-phone-popup]').forEach(link => {
  link.addEventListener('click', event => {
    if (!phoneDialog || typeof phoneDialog.showModal !== 'function') return;
    event.preventDefault();
    phoneDialogTrigger = link;
    phoneDialog.showModal();
  });
});

document.querySelector('#close-phone-dialog')?.addEventListener('click', () => phoneDialog.close());
phoneDialog?.addEventListener('click', event => {
  if (event.target !== phoneDialog) return;
  const bounds = phoneDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) phoneDialog.close();
});
phoneDialog?.addEventListener('close', () => phoneDialogTrigger?.focus());
