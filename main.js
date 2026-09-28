/* ============================================
   MAIN.JS — Shared interactive behaviours
   ============================================ */
(function () {
  'use strict';

  /* ── CURSOR ── */
  const cur  = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  if (cur && ring) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top  = my + 'px';
    });
    (function lerp() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(lerp);
    })();

    const hoverSel = 'a, button, [data-hover], input, textarea, select, label';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverSel)) document.body.classList.add('hovering');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverSel)) document.body.classList.remove('hovering');
    });
    document.addEventListener('mousedown', () => document.body.classList.add('clicking'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('clicking'));
    document.addEventListener('mouseleave', () => {
      cur.style.opacity = '0'; ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cur.style.opacity = '1'; ring.style.opacity = '0.6';
    });
  }

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.reveal:not(.in)')
          );
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('in'), Math.min(idx, 5) * 75);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── MARQUEE BUILDER ── */
  window.buildMarquee = function (id, items, reverse) {
    const el = document.getElementById(id);
    if (!el) return;
    const html = items.map(t =>
      `<span class="marquee-item">${t}</span><span class="marquee-dot">◆</span>`
    ).join('');
    el.innerHTML = html + html;
    if (reverse) el.classList.add('rev');
  };

  /* ── ACTIVE NAV ── */
  let page = window.location.pathname.split('/').pop();
  if (!page || page === '') page = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active'); // clear any hardcoded active first
    const href = a.getAttribute('href');
    if (href === page) {
      a.classList.add('active');
    }
  });

  /* ── MOBILE HAMBURGER ── */
  const ham = document.querySelector('.nav-hamburger');
  const nl  = document.querySelector('.nav-links');
  if (ham && nl) {
    ham.addEventListener('click', () => {
      const open = nl.style.display === 'flex';
      nl.style.display = open ? 'none' : 'flex';
      nl.style.flexDirection = 'column';
      nl.style.position = 'fixed';
      nl.style.top = 'var(--nav-h)';
      nl.style.left = '0'; nl.style.right = '0';
      nl.style.background = 'rgba(8,8,16,0.97)';
      nl.style.padding = '2rem 1.5rem';
      nl.style.borderBottom = '1px solid rgba(240,237,232,0.08)';
    });
  }

})();