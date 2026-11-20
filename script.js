const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.member-card, .album, .story blockquote').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(24px)';
  element.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(element);
});

const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
  const icon = playButton.querySelector('.play-icon');
  const playing = playButton.classList.toggle('playing');
  icon.textContent = playing ? 'Ⅱ' : '▶';
  playButton.lastChild.textContent = playing ? ' PAUSE' : ' LISTEN NOW';
});
