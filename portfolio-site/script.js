const copyLink = document.querySelector('[data-copy-email]');

copyLink?.addEventListener('click', async (event) => {
  event.preventDefault();
  const email = copyLink.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    const label = copyLink.querySelector('[data-copy-label]');
    if (label) {
      const original = label.textContent;
      label.textContent = 'Copied';
      window.setTimeout(() => { label.textContent = original; }, 1400);
    }
  } catch {
    window.location.href = 'mailto:' + email;
  }
});

document.querySelectorAll('img').forEach((image) => {
  if (!image.hasAttribute('decoding')) image.decoding = 'async';
});
