/* =========================================================
   LÕI: lưu tiến độ, âm thanh, pháo giấy, đọc to, tiện ích
   ========================================================= */
(function(){
const D = window.DATA;
const KEY = (D.site && D.site.key) || 'lachanso-v1';

/* ---------- lưu trữ (chỉ trên máy) ---------- */
const def = { xp: 0, lessons: {}, checks: {}, prac: {}, game: { best: 0, plays: 0, board: [] }, law: { best: null }, name: '', cls: '', pledges: [], snd: true, font: 0, certTheme: 'dark' };
let st;
try { st = Object.assign({}, def, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch(e) { st = Object.assign({}, def); }
function save(){ try { localStorage.setItem(KEY, JSON.stringify(st)); } catch(e) {} }

/* ---------- tiện ích DOM ---------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const L = 'ABCDEFGH';

let tt;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2600); }
function announce(msg){ const l = $('#srLive'); l.textContent = ''; setTimeout(() => l.textContent = msg, 40); }

/* ---------- XP ---------- */
function addXP(n, why){
  st.xp += n; save(); refreshXP(true);
  if (why) toast('✓ ' + why);
}
function refreshXP(bump){
  const x = $('#xp'); if (!x) return;
  x.textContent = st.xp;
  if (bump) { x.classList.remove('bump'); void x.offsetWidth; x.classList.add('bump'); }
}

/* ---------- âm thanh (Web Audio, không cần tệp) ---------- */
let ctx = null;
function ac(){ if (!ctx) { const A = window.AudioContext || window.webkitAudioContext; if (A) ctx = new A(); } if (ctx && ctx.state === 'suspended') ctx.resume(); return ctx; }
function tone(f, t0, d, type, v){
  const c = ac(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain();
  o.type = type || 'triangle'; o.frequency.value = f;
  g.gain.setValueAtTime(0.0001, c.currentTime + t0);
  g.gain.exponentialRampToValueAtTime(v || 0.18, c.currentTime + t0 + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + d);
  o.connect(g); g.connect(c.destination); o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + d + 0.05);
}
const SND = {
  ok(){ if (!st.snd) return; tone(660, 0, .14); tone(880, .09, .22); },
  no(){ if (!st.snd) return; tone(220, 0, .22, 'sawtooth', .08); tone(180, .12, .25, 'sawtooth', .07); },
  tap(){ if (!st.snd) return; tone(520, 0, .06, 'sine', .08); },
  win(){ if (!st.snd) return; [523, 659, 784, 1046].forEach((f, i) => tone(f, i * .11, .3)); },
  tick(){ if (!st.snd) return; tone(1200, 0, .03, 'square', .03); },
  flip(){ if (!st.snd) return; tone(300, 0, .08, 'sine', .05); tone(500, .04, .08, 'sine', .04); }
};

/* ---------- pháo giấy ---------- */
function confetti(){
  const cv = $('#confetti'); if (!cv || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = cv.getContext('2d'), W = cv.width = innerWidth, H = cv.height = innerHeight;
  const cols = ['#22d3ee', '#2563eb', '#f97316', '#e11d48', '#16a34a', '#f59e0b', '#7c3aed'];
  const ps = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, s: 5 + Math.random() * 7, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[Math.floor(Math.random() * cols.length)] }));
  let f = 0;
  (function loop(){
    c.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; c.save(); c.translate(p.x, p.y); c.rotate(p.r); c.fillStyle = p.c; c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); c.restore(); });
    if (++f < 150) requestAnimationFrame(loop); else c.clearRect(0, 0, W, H);
  })();
}

/* ---------- đọc to (giọng tiếng Việt của máy) ---------- */
const TTS = {
  ok: 'speechSynthesis' in window,
  speaking: false,
  voice(){ const vs = speechSynthesis.getVoices(); return vs.find(v => /vi[-_]VN/i.test(v.lang)) || vs.find(v => /^vi/i.test(v.lang)); },
  say(text, onend){
    if (!this.ok) { toast('Trình duyệt chưa hỗ trợ đọc to'); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = 'vi-VN'; u.rate = 1; const v = this.voice(); if (v) u.voice = v;
    u.onend = () => { this.speaking = false; onend && onend(); };
    this.speaking = true; speechSynthesis.speak(u);
    if (!v) toast('Máy chưa có giọng đọc tiếng Việt, có thể đọc không chuẩn');
  },
  stop(){ if (this.ok) speechSynthesis.cancel(); this.speaking = false; }
};

/* ---------- hiện dần khi cuộn ---------- */
let io;
function reveal(root){
  if (!('IntersectionObserver' in window)) { $$('.reveal', root).forEach(e => e.classList.add('in')); return; }
  io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal', root).forEach(e => io.observe(e));
}

/* ---------- câu hỏi trắc nghiệm dùng chung ---------- */
function mcqHTML(q, key, idx){
  const ans = st.checks[key];
  const opts = q.o.map((o, i) => {
    let cls = 'opt';
    if (ans != null) { if (i === q.a) cls += ' right'; else if (i === ans) cls += ' wrong'; }
    return '<button class="' + cls + '" data-i="' + i + '"' + (ans != null ? ' disabled' : '') + '><span class="lt">' + L[i] + '</span><span>' + esc(o) + '</span></button>';
  }).join('');
  let fb = '';
  if (ans != null) fb = '<div class="fb ' + (ans === q.a ? 'ok' : 'no') + '">' + ICON(ans === q.a ? 'check' : 'alert') + '<div><b>' + (ans === q.a ? 'Chính xác! ' : 'Chưa đúng. ') + '</b>' + esc(q.e || '') + '</div></div>';
  return '<div class="q" data-key="' + key + '" data-idx="' + idx + '"><h4><span class="qn">Câu ' + (idx + 1) + '</span>' + esc(q.q) + '</h4><div class="opts">' + opts + '</div>' + fb + '</div>';
}
/* gắn một lần trên vùng chứa (uỷ quyền sự kiện) */
function bindMCQ(root, list, onDone){
  root.addEventListener('click', e => {
    const b = e.target.closest('.opt'); if (!b || b.disabled) return;
    const box = b.closest('.q[data-key]'); if (!box) return;
    const key = box.dataset.key, idx = +box.dataset.idx, i = +b.dataset.i, q = list[idx];
    st.checks[key] = i; save();
    if (i === q.a) { SND.ok(); addXP(10, 'Trả lời đúng'); announce('Chính xác. ' + (q.e || '')); }
    else { SND.no(); announce('Chưa đúng. Đáp án đúng là ' + L[q.a] + '. ' + (q.e || '')); }
    box.outerHTML = mcqHTML(q, key, idx);
    onDone && onDone();
  });
}

/* ---------- lưu tệp: trình duyệt thường dùng <a download>; khi chạy trong artifact Claude dùng capability downloads ---------- */
const inArtifact = !!(window.claude && typeof window.claude.use === 'function');
async function saveFile(filename, blob){
  if (inArtifact) {
    let dl = null;
    try { dl = await window.claude.use('downloads'); } catch(e) {}
    if (dl) {
      try { await dl.save({ filename, data: blob }); return true; }
      catch(e) { if (e && e.code === 'declined') return false; toast('Không tải được tệp ở chế độ xem này'); return false; }
    }
  }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  return true;
}

window.APP = { inArtifact, saveFile, st, save, $, $$, esc, shuffle, L, toast, announce, addXP, refreshXP, SND, confetti, TTS, reveal, mcqHTML, bindMCQ, D };
})();
