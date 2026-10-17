/* ====================================================
   Garabito Carrocería – Main JavaScript
   ==================================================== */

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
const onScroll = () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close menu clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.btn-nav)');

const highlightNav = () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
};
window.addEventListener('scroll', highlightNav, { passive: true });

/* ---- Scroll reveal ---- */
const revealElements = document.querySelectorAll(
  '.service-card, .process-step, .gallery-item, .testimonial-card, .value-item, .contact-item, .about-visual, .about-content'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling elements
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const delay = siblings.indexOf(entry.target) * 80;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Math.min(delay, 400));
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* ---- Stats counter animation ---- */
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const raw   = counter.textContent.replace(/[^0-9]/g, '');
    const prefix = counter.textContent.replace(/[0-9]/g, '').startsWith('+') ? '+' : '';
    const suffix = counter.textContent.endsWith('%') ? '%' : '';
    const target = parseInt(raw, 10);
    let current  = 0;
    const step   = Math.ceil(target / 50);
    const timer  = setInterval(() => {
      current = Math.min(current + step, target);
      counter.textContent = prefix + current + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

/* ---- Contact form (WhatsApp redirect) ---- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const name    = document.getElementById('name').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const waNumber = '523315843784';
    const text = encodeURIComponent(
      `¡Hola Reparaciones Garabito! Me interesa solicitar una cotización:\n\n` +
      `👤 Nombre: ${name}\n` +
      `📱 Teléfono: ${phone}\n` +
      `🔧 Servicio: ${service}\n` +
      `📝 Detalle: ${message}`
    );

    // Show success state
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Redirigiendo a WhatsApp...';
    btn.disabled = true;
    btn.style.background = '#25D366';

    setTimeout(() => {
      window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
      contactForm.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.style.background = '';
    }, 800);
  });
}

/* ---- Smooth scroll for all anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- Active nav highlight style injection ---- */
const navStyle = document.createElement('style');
navStyle.textContent = `.nav-links a.active { color: #fff !important; }
.nav-links a.active::after { width: 100%; }
.nav-links a:not(.btn-nav) { position: relative; }
.nav-links a:not(.btn-nav)::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0;
  width: 0; height: 2px;
  background: var(--blue);
  transition: width 0.3s ease;
}
.nav-links a:not(.btn-nav):hover::after { width: 100%; }`;
document.head.appendChild(navStyle);

/* ---- Antes & Después Interactive Toggles ---- */
const badgeLabels = {
  '1': {
    'antes': 'Antes: Abolladura',
    'despues': 'Después: 100% Restaurado'
  },
  '2': {
    'antes': 'Antes: Golpe en Puerta',
    'despues': 'Después: Línea Perfecta'
  },
  '3': {
    'antes': 'Antes: Impacto Trasero',
    'proceso': 'En Proceso: Lámpara PDR',
    'despues': 'Resultado Final Impecable'
  }
};

document.querySelectorAll('.ba-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const job = btn.dataset.job;
    const target = btn.dataset.target;
    const card = btn.closest('.ba-card');
    if (!card) return;

    // Toggle active button in this card
    card.querySelectorAll('.ba-btn').forEach(b => {
      b.classList.remove('active');
      b.classList.remove('is-success');
    });
    btn.classList.add('active');
    if (target === 'despues') {
      btn.classList.add('is-success');
    }

    // Toggle images
    const images = card.querySelectorAll('.ba-img');
    images.forEach(img => {
      if (img.dataset.type === target) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    // Update badge text and style
    const badge = card.querySelector('.ba-tag-badge');
    if (badge) {
      badge.className = 'ba-tag-badge ' + (target === 'despues' ? 'despues' : (target === 'proceso' ? 'proceso' : 'antes'));
      if (badgeLabels[job] && badgeLabels[job][target]) {
        badge.textContent = badgeLabels[job][target];
      }
    }
  });
});

/* ---- Lightbox Modal for Gallery Images ---- */
const lightbox = document.getElementById('baLightbox');
const lightboxImg = document.getElementById('baLightboxImg');
const lightboxCaption = document.getElementById('baLightboxCaption');
const lightboxClose = document.getElementById('baLightboxClose');

if (lightbox && lightboxImg) {
  document.querySelectorAll('.ba-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.dataset.caption || img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('ba-lightbox-content')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ---- FAQ Accordion ---- */
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    if (!item) return;
    const isCurrentlyActive = item.classList.contains('active');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.faq-question').forEach(q => q.setAttribute('aria-expanded', 'false'));

    // If it wasn't open, open it
    if (!isCurrentlyActive) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

