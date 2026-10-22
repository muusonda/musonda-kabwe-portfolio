const projects = {
  uj: {
    title: "University of Johannesburg",
    kicker: "Brand identity / Annual report",
    summary: "A visual identity route for a university ready to own its place among Africa's leading institutions.",
    task: "Build a visual identity inspired by the positioning statement ‘The Future Re-imagined’.",
    services: "Concept, logo, layout, typography, visual language, social templates, PowerPoint templates, CI guidelines."
  },
  aeci: {
    title: "AECI",
    kicker: "Brand identity / Integrated report",
    summary: "A unified identity direction for a mining and agriculture company on the verge of a major merger.",
    task: "Create a human-to-human brand identity that aligns stakeholders and expresses responsible progress.",
    services: "Concept, logo, layout, typography, visual language, annual report and integrated-report design."
  },
  supersonic: {
    title: "SuperSonic",
    kicker: "Brand identity / Telecoms",
    summary: "A distinctive identity for MTN's new fibre provider, connected to its parent brand without becoming a copy.",
    task: "Create a fresh, ownable identity for a fast-moving telecoms challenger.",
    services: "Concept, naming, logo, typography, visual language, social templates and CI guidelines."
  }
};

const dialog = document.querySelector('.project-dialog');
const closeDialog = () => dialog?.close();

document.querySelectorAll('[data-project]').forEach((card) => {
  card.addEventListener('click', () => {
    const project = projects[card.dataset.project];
    if (!project || !dialog) return;
    dialog.querySelector('[data-dialog-kicker]').textContent = project.kicker;
    dialog.querySelector('[data-dialog-title]').textContent = project.title;
    dialog.querySelector('[data-dialog-summary]').textContent = project.summary;
    dialog.querySelector('[data-dialog-task]').textContent = project.task;
    dialog.querySelector('[data-dialog-services]').textContent = project.services;
    dialog.showModal();
  });
});
dialog?.querySelector('.dialog-close')?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-toggle__icon').textContent = open ? '×' : '+';
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.querySelector('.menu-toggle__icon').textContent = '+';
}));
