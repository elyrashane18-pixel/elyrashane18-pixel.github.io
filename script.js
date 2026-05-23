// TreeRoots - script.js


// 1. SIGN UP FORM
function handleSignup() {
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const event = document.getElementById('event').value;

  if (!name) {
    alert('Please enter your name.');
    return;
  }
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  if (!event) {
    alert('Please choose an event.');
    return;
  }

  const responseBox = document.getElementById('form-response');
  const formEl      = document.getElementById('signup-form');

  responseBox.innerHTML = `
    <strong>You're signed up, ${name}.</strong><br/><br/>
    We've got you down for <strong>${event}</strong>.
    Check <strong>${email}</strong> for a confirmation with everything you need to know.
    We'll also send a reminder the week before so you don't forget.<br/><br/>
    See you out there.
  `;

  responseBox.classList.remove('hidden');
  formEl.style.display = 'none';
  responseBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// 2. BACK TO TOP BUTTON
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// 3. ANIMATED NUMBER COUNTERS
function animateCounter(el) {
  const target    = parseInt(el.getAttribute('data-target'));
  const duration  = 2000;
  const stepTime  = 20;
  const steps     = duration / stepTime;
  const increment = target / steps;
  let current     = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, stepTime);
}

const counterEls = document.querySelectorAll('.big-num[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

counterEls.forEach(el => counterObserver.observe(el));


// 4. MOBILE NAV TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.textContent = navLinks.classList.contains('open') ? 'Close' : 'Menu';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.textContent = 'Menu';
  });
});
