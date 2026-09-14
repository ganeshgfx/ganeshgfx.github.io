// ── Typewriter / Role Ticker ──────────────────────────────────────────────────
const roles = [
  "Filmmaker",
  "VFX Artist",
  "Tech Lead",
  "Cinematographer",
  "3D Artist",
  "Web Developer",
  "Motion Designer",
  "Brand Strategist",
  "Creative Director",
];

const tickerEl = document.getElementById("role-ticker");
let roleIdx = 0;
let charIdx = 0;
let deleting = false;

function type() {
  const current = roles[roleIdx];
  if (deleting) {
    tickerEl.textContent = current.substring(0, charIdx--);
    if (charIdx < 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(type, 350);
      return;
    }
    setTimeout(type, 40);
  } else {
    tickerEl.textContent = current.substring(0, charIdx++);
    if (charIdx > current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 80);
  }
}
type();

// ── Noise Canvas ─────────────────────────────────────────────────────────────
const canvas = document.getElementById("noise-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let frameCount = 0;
function drawNoise() {
  frameCount++;
  if (frameCount % 3 === 0) {
    const w = canvas.width;
    const h = canvas.height;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 20 | 0;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 30;
    }
    ctx.putImageData(imageData, 0, 0);
  }
  requestAnimationFrame(drawNoise);
}
drawNoise();

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
revealEls.forEach((el) => io.observe(el));

// ── Smooth nav scroll ─────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    const tog = document.getElementById("nav-toggle");
    if (tog) tog.checked = false;
  });
});

// ── Nav hide/show + border on scroll ─────────────────────────────────────────
let lastScroll = 0;
const nav = document.querySelector("nav");
window.addEventListener(
  "scroll",
  () => {
    const cur = window.scrollY;
    if (cur > lastScroll && cur > 100) nav.classList.add("nav-hidden");
    else nav.classList.remove("nav-hidden");
    if (cur > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
    lastScroll = cur;
  },
  { passive: true }
);

// ── Current year ──────────────────────────────────────────────────────────────
const yearEl = document.getElementById("current-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
