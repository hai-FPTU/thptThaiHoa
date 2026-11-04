/* =========================================================
   ĐỊNH TUYẾN & KHUNG TRANG
   ========================================================= */
(function(){
const A = window.APP, st = A.st, $ = A.$, $$ = A.$$, I = window.ICON, P = window.PAGES;

const NAV = [
  { r: 'home', t: 'Trang chủ', ic: 'home', tab: 1 },
  { r: 'camnang', t: 'Cẩm nang', ic: 'book', tab: 1 },
  { r: 'baihoc', t: 'Bài học', ic: 'cap', tab: 1 },
  { r: 'thuchanh', t: 'Thực hành', ic: 'puzzle', tab: 1 },
  { r: 'minigame', t: 'Minigame', ic: 'game', tab: 1 },
  { r: 'phapluat', t: 'Pháp luật', ic: 'scale' },
  { r: 'hotro', t: 'Hỗ trợ', ic: 'lifebuoy' },
  { r: 'chungnhan', t: 'Chứng nhận', ic: 'award' }
];
const SD = window.DATA.site;
const TITLES = { home: SD.h1a + ' – ' + SD.h1b + ' | ' + SD.school, baocao: 'Chế độ báo cáo viên – ' + SD.name };

/* dải nhị phân */
$$('.binary').forEach(b => { let s = ''; for (let i = 0; i < 400; i++) s += Math.random() > .5 ? '1' : '0'; b.innerHTML = '<span>' + s + s + '</span>'; });

/* menu */
const link = (n, cls) => '<a href="#' + n.r + '" data-r="' + n.r + '" class="' + (cls || '') + '">' + I(n.ic) + '<span>' + n.t + '</span></a>';
$('#nav').innerHTML = NAV.map(n => link(n)).join('');
$('#drawerNav').innerHTML = NAV.map(n => link(n)).join('') + '<a href="#baocao" data-r="baocao">' + I('presenter') + '<span>Chế độ báo cáo viên</span></a>';
$('#tabbar').innerHTML = NAV.filter(n => n.tab).map(n => link(n)).join('');
$('#footLinks').innerHTML = NAV.map(n => '<li><a href="#' + n.r + '">' + n.t + '</a></li>').join('');

/* công cụ */
const drawer = $('#drawer');
$('#menuBtn').innerHTML = I('menu');
$$('[data-close]', drawer).forEach(b => { if (b.tagName === 'BUTTON') b.innerHTML = I('x'); b.onclick = closeDrawer; });
$('#menuBtn').onclick = () => { drawer.hidden = false; $('#menuBtn').setAttribute('aria-expanded', 'true'); const f = $('#drawerNav a', drawer); f && f.focus(); };
function closeDrawer(){ drawer.hidden = true; $('#menuBtn').setAttribute('aria-expanded', 'false'); }
drawer.addEventListener('click', e => { if (e.target.closest('#drawerNav a')) closeDrawer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) closeDrawer(); });

function sndUI(){ const b = $('#sndBtn'); b.innerHTML = I(st.snd ? 'volume' : 'mute'); b.setAttribute('aria-pressed', st.snd); }
$('#sndBtn').onclick = () => { st.snd = !st.snd; A.save(); sndUI(); A.toast(st.snd ? 'Đã bật âm thanh' : 'Đã tắt âm thanh'); };
const FONTS = ['', 'big', 'huge'];
function fontUI(){ document.documentElement.classList.remove('big', 'huge'); if (FONTS[st.font]) document.documentElement.classList.add(FONTS[st.font]); $('#fontBtn').innerHTML = I('text'); }
$('#fontBtn').onclick = () => { st.font = (st.font + 1) % 3; A.save(); fontUI(); A.toast(['Cỡ chữ thường', 'Cỡ chữ lớn', 'Cỡ chữ rất lớn'][st.font]); };
sndUI(); fontUI(); A.refreshXP();

/* định tuyến */
let cleanup = null;
function parse(){
  // định dạng địa chỉ: #trang hoặc #trang-thamso (vd. #baihoc-2, #thuchanh-soitin)
  const h = (location.hash || '#home').replace(/^#\/?/, '').replace('/', '-');
  const k = h.indexOf('-');
  const route = k < 0 ? h : h.slice(0, k), param = k < 0 ? undefined : h.slice(k + 1);
  const ROUTES = ['home', 'camnang', 'baihoc', 'thuchanh', 'minigame', 'phapluat', 'hotro', 'chungnhan', 'baocao'];
  return { route: ROUTES.includes(route) ? route : 'home', param, q: {} };
}
function render(){
  const { route, param, q } = parse();
  if (typeof cleanup === 'function') { try { cleanup(); } catch(e) {} }
  cleanup = null; A.TTS.stop();
  const main = $('#view');
  const page = document.createElement('div'); page.className = 'page';
  main.innerHTML = ''; main.appendChild(page);
  cleanup = P[route](page, param, q);
  $$('#nav a, #drawerNav a, #tabbar a').forEach(a => a.classList.toggle('on', a.dataset.r === route));
  const n = NAV.find(x => x.r === route);
  document.title = TITLES[route] || ((n ? n.t : SD.name) + ' – ' + SD.name);
  window.scrollTo(0, 0);
  A.reveal(page);
  main.focus({ preventScroll: true });
}
window.addEventListener('hashchange', render);
render();
})();
