/* ============================================================
   CHOP SUEY INTERNACIONAL - SCRIPT.JS
   Vanilla JavaScript (ES6) - Sin dependencias externas
============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     1. PRELOADER: goteo + desvanecido
  --------------------------------------------------------- */
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hide-preloader');

      setTimeout(() => {
        preloader.classList.add('done');
        document.body.style.overflow = 'auto';
      }, 950);
    }, 1600);
  });

  document.body.style.overflow = 'hidden';

  /* ---------------------------------------------------------
     2. HEADER: cambia de estilo al hacer scroll
  --------------------------------------------------------- */
  const header = document.getElementById('header');

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------------------------------------------------------
     3. MENÚ HAMBURGUESA (responsive)
  --------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  /* ---------------------------------------------------------
     4. TABS DEL MENÚ (Todos, Entradas, Arroces, Tallarines, Bebidas)
  --------------------------------------------------------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.menu-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        if (target === 'todos') {
          panel.classList.add('active');
        } else {
          panel.classList.toggle('active', panel.dataset.panel === target);
        }
      });
    });
  });

  /* ---------------------------------------------------------
     5. ANIMACIÓN DE PLATILLOS AL AGREGAR AL PEDIDO
     (feedback visual en el botón)
  --------------------------------------------------------- */
  const addButtons = document.querySelectorAll('.btn-add');

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const originalText = btn.textContent;
      btn.textContent = '✓ Agregado';
      btn.style.background = '#1f7a3d';
      btn.style.borderColor = '#1f7a3d';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 1400);
    });
  });

  /* ---------------------------------------------------------
     6. SCROLL REVEAL (aparición suave de secciones)
  --------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.dish-card, .section-heading, .about-grid, .menu-tabs, .category-header, .menu-item'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => revealObserver.observe(el));

});
