// Rocket Station — interactions

// 1. Sticky nav state (homepage only)
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// 2. Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
reveals.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
  revealIO.observe(el);
});

// 3. Animated stat counters
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dur = 1600;
  let start;
  const step = (ts) => {
    if (start === undefined) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    const val = Math.round(easeOut(p) * target);
    el.textContent = val.toLocaleString('en-US') + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const statIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      statIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat__num').forEach((el) => statIO.observe(el));

// 4. FAQ accordion (faq.html)
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const open = item.classList.toggle('is-open');
    answer.style.maxHeight = open ? answer.scrollHeight + 'px' : null;
  });
});
