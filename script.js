(function () {
  'use strict';

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Intro animation (video-style staggered reveal) -----
  var hero = document.querySelector('.hero-intro');
  if (hero) {
    var items = hero.querySelectorAll('.anim-item');
    var delays = [0, 280, 480, 720, 960, 1200]; // ms

    function revealItem(el, delay) {
      setTimeout(function () {
        el.classList.add('reveal');
      }, delay);
    }

    // Slight delay before starting so page paint is ready
    setTimeout(function () {
      items.forEach(function (el) {
        var d = el.getAttribute('data-delay');
        var idx = d !== null ? parseInt(d, 10) : 0;
        var delay = delays[Math.min(idx, delays.length - 1)] || 0;
        revealItem(el, delay);
      });
    }, 150);
  }

  // ----- Optional: photo scale-in (extra polish) -----
  var photoWrap = document.querySelector('.intro-photo-wrap');
  if (photoWrap) {
    photoWrap.style.opacity = '0';
    photoWrap.style.transform = 'scale(0.92)';
    setTimeout(function () {
      photoWrap.style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
      photoWrap.style.opacity = '1';
      photoWrap.style.transform = 'scale(1)';
    }, 400);
  }

  // ----- Nav active state on scroll -----
  var sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    var scrollY = window.pageYOffset;
    var navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      var top = section.offsetTop - 100;
      var height = section.offsetHeight;
      if (id && scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
  // ----- Typing effect -----
  var roleEl = document.querySelector('.intro-role');
  if (roleEl) {
    var roles = ["User-Focused Engineer", "Problem Solver", "Backend Developer", "Full-Stack Enthusiast"];
    var roleIdx = 0;
    var charIdx = 0;
    var isDeleting = false;
    var typeSpeed = 100;

    function type() {
      var currentRole = roles[roleIdx];

      if (isDeleting) {
        roleEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 50;
      } else {
        roleEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeSpeed = 500; // Pause before new word
      }

      setTimeout(type, typeSpeed);
    }

    // Start typing after initial delay
    setTimeout(type, 1000);
  }

})();
