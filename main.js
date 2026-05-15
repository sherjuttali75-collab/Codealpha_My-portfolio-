// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .skill-block, .project-row, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
});

// ── SCROLL PROGRESS ──
const prog = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  prog.style.width = (window.scrollY / total * 100) + '%';
});

// ── REVEAL ON SCROLL ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── STAGGER hero left on load ──
document.querySelector('.hero-left').style.animation = 'none';
window.addEventListener('load', () => {
  document.querySelector('.hero-left').style.opacity = '0';
  document.querySelector('.hero-left').style.transform = 'translateY(24px)';
  requestAnimationFrame(() => {
    document.querySelector('.hero-left').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    document.querySelector('.hero-left').style.opacity = '1';
    document.querySelector('.hero-left').style.transform = 'none';
  });
});
