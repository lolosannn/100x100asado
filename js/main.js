// ============================================================
// 100x100 ASADO — interacciones
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Menú hamburguesa ----
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ---- Tabs (propuesta gastronómica, versión desktop) ----
  document.querySelectorAll('.tabs').forEach(tabs => {
    const buttons = tabs.querySelectorAll('.tabs__btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        buttons.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        tabs.querySelectorAll('.tabs__panel').forEach(panel => {
          panel.classList.toggle('is-active', panel.id === `tab-${target}`);
        });
      });
    });
  });

  // ---- Acordeones (FAQ) ----
  document.querySelectorAll('.acc-item__head').forEach(head => {
    head.addEventListener('click', () => {
      const isOpen = head.getAttribute('aria-expanded') === 'true';

      // cierra los demás dentro del mismo acordeón
      const accordion = head.closest('.accordion');
      accordion.querySelectorAll('.acc-item__head').forEach(otherHead => {
        if (otherHead !== head) otherHead.setAttribute('aria-expanded', 'false');
      });

      head.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // ---- Año dinámico en el footer ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Formulario de presupuesto ----
  const form = document.getElementById('presupuestoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: conectar con backend / servicio de email real.
      alert('¡Gracias! Recibimos tu consulta y te vamos a responder dentro de las 24 hs.');
      form.reset();
    });
  }

});
