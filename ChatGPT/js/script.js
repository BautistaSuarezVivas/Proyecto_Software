const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    menuCards.forEach(card => {
      const visible = filter === 'todos' || card.dataset.category === filter;
      card.classList.toggle('hidden', !visible);
    });
  });
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensaje = document.querySelector('#mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    status.textContent = 'Por favor, completá todos los campos.';
    status.className = 'form-status error';
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = 'Revisá el formato del correo electrónico.';
    status.className = 'form-status error';
    return;
  }

  status.textContent = `¡Gracias, ${nombre}! Recibimos tu mensaje.`;
  status.className = 'form-status success';
  form.reset();
});

document.querySelector('.back-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
