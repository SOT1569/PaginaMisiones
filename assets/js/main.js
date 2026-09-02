/* =========================================================
   Misiones · Landing — interacciones
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Año en el footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Placeholder para imágenes que aún no llegaron ----------
     Los <img> no admiten ::after, así que si una imagen no carga la
     reemplazamos por un SVG generado con su texto alternativo.        */
  function placeholder(label, dark) {
    var bg = dark ? '#1a4a2e' : '#e6f2ea';
    var fg = dark ? '#7ed4a4' : '#4a6255';
    var stripe = dark ? '#173f27' : '#eaf4ee';
    var txt = (label || 'Imagen pendiente').replace(/[<>&]/g, '');
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
      '<defs><pattern id="p" width="48" height="48" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">' +
      '<rect width="48" height="48" fill="' + bg + '"/><rect width="24" height="48" fill="' + stripe + '"/></pattern></defs>' +
      '<rect width="800" height="600" fill="url(#p)"/>' +
      '<text x="400" y="300" font-family="Segoe UI, system-ui, sans-serif" font-size="26" fill="' + fg + '" ' +
      'text-anchor="middle" dominant-baseline="middle">' + txt + '</text>' +
      '<text x="400" y="336" font-family="Segoe UI, system-ui, sans-serif" font-size="15" fill="' + fg + '" ' +
      'text-anchor="middle" dominant-baseline="middle" opacity="0.7">imagen pendiente</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  document.querySelectorAll('img[data-img]').forEach(function (img) {
    img.addEventListener('error', function handle() {
      img.removeEventListener('error', handle);
      var dark = img.dataset.img === 'hero' || img.dataset.img === 'areas';
      img.src = placeholder(img.getAttribute('alt') || '', dark);
      img.classList.add('img-placeholder');
    });
  });

  /* ---------- Contadores animados ---------- */
  function formatNum(n) {
    return n.toLocaleString('es-AR');
  }
  function animateCount(el) {
    var target = parseInt(el.dataset.count, 10) || 0;
    var suffix = el.dataset.suffix || '';
    var dur = 1600;
    var start = performance.now();
    function finalValue() { el.textContent = formatNum(target) + suffix; }
    function tick(now) {
      var t = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formatNum(Math.round(target * eased)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // Red de seguridad: si la pestaña se oculta y rAF se pausa,
    // igual dejamos el número final correcto.
    setTimeout(finalValue, dur + 150);
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reveal + disparo de contadores ---------- */
  var revealTargets = document.querySelectorAll(
    '.section-head, .split-text, .split-media, .stat, .species-card, .on-dark, .closing .wrap'
  );

  if ('IntersectionObserver' in window && !reduceMotion) {
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        var counter = entry.target.querySelector('.stat-num[data-count]');
        if (counter && !counter.dataset.done) {
          counter.dataset.done = '1';
          animateCount(counter);
        }
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.stat-num[data-count]').forEach(function (el) {
      el.textContent = formatNum(parseInt(el.dataset.count, 10) || 0) + (el.dataset.suffix || '');
    });
  }

  /* ---------- Sombra del header al hacer scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 6px 24px -14px rgba(26,74,46,.4)' : 'none';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mapa interactivo (Leaflet) ---------- */
  var mapEl = document.getElementById('map');
  if (mapEl && window.L) {
    var map = L.map(mapEl, {
      center: [-26.9, -54.35],   // centro aproximado de Misiones
      zoom: 7,
      minZoom: 5,
      maxZoom: 16,
      scrollWheelZoom: false,     // se activa al hacer clic (no secuestra el scroll)
      attributionControl: true
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; colaboradores de <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    map.on('focus', function () { map.scrollWheelZoom.enable(); });
    map.on('blur', function () { map.scrollWheelZoom.disable(); });

    // Al entrar en viewport el contenedor puede haber cambiado de tamaño.
    if ('IntersectionObserver' in window) {
      var mo = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { map.invalidateSize(); mo.disconnect(); } });
      });
      mo.observe(mapEl);
    }
  }
})();
