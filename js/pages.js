/* =========================================================
   CÁC TRANG: Trang chủ, Cẩm nang, Bài học, Pháp luật, Hỗ trợ, Báo cáo viên
   ========================================================= */
(function(){
const A = window.APP, D = A.D, st = A.st, $ = A.$, $$ = A.$$, esc = A.esc, I = window.ICON;
const P = window.PAGES = window.PAGES || {};

function pageHead(crumb, title, sub){
  return '<section class="page-head"><div class="wrap"><div class="crumb"><a href="#home">Trang chủ</a> / ' + crumb + '</div><h1>' + title + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div></section>';
}
function formulaHTML(){
  return '<div class="formula">' + D.formula.map((f, i) => (i ? '<span class="op" aria-hidden="true">+</span>' : '') + '<div class="f"><b>' + f.k + '</b><span>' + esc(f.t) + '</span></div>').join('') + '<span class="op" aria-hidden="true">=</span><div class="res">' + (D.formulaRes || 'DỪNG LẠI<br>HỎI NGƯỜI LỚN') + '</div></div>';
}
function ladderHTML(){
  return '<div class="ladder">' + (D.ladder || []).map((x, i) => '<div class="rung reveal" style="--c:' + x.c + ';--i:' + i + '"><span class="rk">' + esc(x.k) + '</span><h3>' + esc(x.h) + '</h3><p>' + esc(x.t) + '</p></div>').join('') + '</div>';
}
function stepsHTML(dark){
  return '<div class="steps5">' + D.steps5.map((s, i) => '<div class="step reveal" style="transition-delay:' + (i * 70) + 'ms"><span class="num">0' + (i + 1) + '</span><div class="ibox" style="background:' + s.c + '">' + I(s.ic) + '</div><h3>' + s.k + '</h3><p>' + esc(s.t) + '</p></div>').join('') + '</div>';
}
function hotHTML(){
  return '<div class="grid g4">' + D.hotlines.map(h => '<a class="card hot reveal" href="' + (h.tel ? 'tel:' + h.tel : h.url) + '"' + (h.url ? ' target="_blank" rel="noopener"' : '') + '><span class="n" style="background:' + h.c + '">' + h.n + '</span><div><h3>' + esc(h.h) + '</h3><p>' + esc(h.p) + '</p></div></a>').join('') + '</div>';
}
P.formulaHTML = formulaHTML; P.ladderHTML = ladderHTML; P.stepsHTML = stepsHTML; P.hotHTML = hotHTML; P.pageHead = pageHead;

function lessonsDone(){ return D.lessons.filter(l => st.lessons[l.id]).length; }
function pracDone(){ return (window.PRAC_KEYS || []).filter(k => st.prac[k]).length; }
P.lessonsDone = lessonsDone; P.pracDone = pracDone;

/* ================= TRANG CHỦ ================= */
P.home = function(v){
  const tiles = [
    ['camnang', 'book', '#2563eb', 'Cẩm nang dùng AI an toàn', 'Sách lật 12 trang, đọc 1 phút mỗi trang, in được.'],
    ['baihoc', 'cap', '#0ea5e9', 'Bài học', D.lessons.length + ' bài từ “AI là gì” đến “nhà kiến tạo số”, có câu hỏi kiểm tra nhanh.'],
    ['thuchanh-prompt', 'sparkle', '#7c3aed', 'Prompt Lab', 'Ghép prompt 4 phần, xem prompt nào giúp em học tốt nhất.'],
    ['thuchanh', 'puzzle', '#16a34a', 'Thực hành', 'Soi tin nhắn, link AI giả, dữ liệu nên/không nên đưa cho AI, tình huống.'],
    ['minigame', 'game', '#e11d48', 'Minigame “Thật hay Giả?”', '10 câu ngẫu nhiên về AI, 15 giây mỗi câu.'],
    ['phapluat', 'scale', '#f97316', 'Pháp luật về AI', 'Luật Trí tuệ nhân tạo và các luật mới 2026, có đề luyện.'],
    ['baihoc-4', 'video', '#be123c', 'Nhận diện deepfake', 'Ảnh, video, giọng nói giả: dấu hiệu và cách xác minh.'],
    ['chungnhan', 'award', '#0b1b3f', 'Nhận chứng nhận', 'Hoàn thành bài học, ký cam kết, tải giấy chứng nhận.']
  ];
  v.innerHTML =
  '<section class="hero"><div class="wrap hero-in">' +
    '<div>' +
      '<div class="school-line">' + I('cap') + '<span class="nowrap">' + esc(D.site.school.toUpperCase()) + '</span></div>' +
      '<h1>' + esc(D.site.h1a) + '<em class="h1sub">' + esc(D.site.h1b) + '</em></h1>' +
      '<div class="hero-meta"><span class="lead">Tài liệu tương tác dành cho học sinh</span><span class="hero-date">' + I('clock') + ' ' + esc(D.site.date) + '</span></div>' +
      '<div class="quick">' +
        '<a class="primary" href="#camnang">' + I('book') + ' Cẩm nang</a>' +
        '<a href="#minigame">' + I('game') + ' Minigame</a>' +
        '<a href="#baihoc">' + I('cap') + ' Bài học</a>' +
        '<a href="#thuchanh">' + I('puzzle') + ' Thực hành</a>' +
        '<a href="#chungnhan">' + I('award') + ' Nhận chứng nhận</a>' +
      '</div>' +
      '<div class="hero-stats"><div><b>' + lessonsDone() + '/' + D.lessons.length + '</b><span>bài học đã xong</span></div><div><b>' + pracDone() + '/' + (window.PRAC_KEYS || []).length + '</b><span>thực hành, trò chơi</span></div><div><b>' + (st.game.best || 0) + '/10</b><span>điểm minigame cao nhất</span></div></div>' +
    '</div>' +
    '<img class="hero-art" src="img/hero.svg" alt="Điện thoại được lá chắn số bảo vệ">' +
  '</div></section>' +

  '<section class="sec"><div class="wrap">' +
    '<div class="sec-head"><div><div class="eyebrow">Bắt đầu nhanh</div><h2>Em muốn làm gì hôm nay?</h2><p>Mọi nội dung đều miễn phí, không cần tài khoản. Tiến độ tự lưu trên máy của em.</p></div></div>' +
    '<div class="grid g4">' + tiles.map((t, i) => '<a class="tile reveal" style="transition-delay:' + (i * 50) + 'ms" href="#' + t[0] + '"><span class="ibox" style="background:' + t[2] + '">' + I(t[1]) + '</span><h3>' + t[3] + '</h3><p>' + t[4] + '</p><span class="go">Mở ' + I('arrow') + '</span></a>').join('') + '</div>' +
  '</div></section>' +

  '<section class="sec alt"><div class="wrap">' +
    '<div class="grid g2" style="align-items:center;gap:36px">' +
      '<div class="reveal"><div class="eyebrow">Ghi nhớ trong 5 giây</div><h2>' + esc(D.formulaTitle) + '</h2><p class="muted">' + esc(D.formulaLead) + '</p>' +
      '<div class="row" style="margin-top:14px"><a class="btn" href="#thuchanh-prompt">' + I('sparkle') + ' Thử Prompt Lab</a><a class="btn ghost" href="#baihoc-2">Xem Bài 2</a></div></div>' +
      '<div class="reveal">' + formulaHTML() + '</div>' +
    '</div>' +
  '</div></section>' +

  '<section class="sec"><div class="wrap">' +
    '<div class="sec-head"><div><div class="eyebrow">Kỷ nguyên AI</div><h2>Từ người dùng thụ động đến nhà kiến tạo số</h2><p>Em đang ở bậc nào? Mục tiêu của chuyên đề là giúp em bước lên ít nhất một bậc.</p></div><a class="btn" href="#baihoc-6">' + I('flash') + ' Bài 6: Nhà kiến tạo số</a></div>' +
    ladderHTML() +
  '</div></section>' +

  '<section class="sec dark" id="5buoc"><div class="wrap">' +
    '<div class="sec-head"><div><div class="eyebrow">Khi gặp vấn đề</div><h2>' + esc(D.stepsTitle || '5 bước xử lý') + '</h2><p>Gặp sự cố không phải lỗi của em. Làm đúng thứ tự và báo người lớn càng sớm càng tốt.</p></div><a class="btn orange" href="#hotro">' + I('lifebuoy') + ' Trang hỗ trợ</a></div>' +
    stepsHTML(true) +
  '</div></section>' +

  '<section class="sec alt"><div class="wrap"><div class="grid g2" style="align-items:center;gap:36px">' +
    '<div class="reveal" style="max-width:360px;margin:0 auto;width:100%"><div class="book"><div class="bpage cover" style="position:relative;aspect-ratio:3/4">' + coverInner() + '</div></div></div>' +
    '<div class="reveal"><div class="eyebrow">Đọc trong 12 phút</div><h2>' + esc(D.handbookTitle || D.handbook[0].h) + '</h2><p class="muted">' + D.handbook.length + ' trang tóm tắt: ' + D.handbook.slice(1, 7).map(p => esc(p.h.charAt(0).toLowerCase() + p.h.slice(1))).join(', ') + '…</p>' +
    '<div class="row" style="margin-top:16px"><a class="btn" href="#camnang">' + I('book') + ' Đọc trực tuyến</a><a class="btn ghost" href="#camnang-in">' + I('printer') + ' In / Lưu PDF</a></div></div>' +
  '</div></div></section>' +

  '<section class="sec"><div class="wrap">' +
    '<div class="sec-head"><div><div class="eyebrow">Hỗ trợ</div><h2>Cần giúp đỡ ngay?</h2><p>Ở trường: GVCN, thầy cô Tổ Tin học, Đoàn trường. Ngoài trường: các kênh dưới đây.</p></div></div>' +
    hotHTML() +
  '</div></section>';
};

const LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="l" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset=".55" stop-color="#6366f1"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M32 4l22 8v16c0 15-9.5 26-22 32C19.5 54 10 43 10 28V12z" fill="url(#l)"/><g fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M22 24l10 6 10-6M32 30v12M22 24v12l10 6 10-6V24"/></g><g fill="#fff"><circle cx="22" cy="24" r="3.4"/><circle cx="42" cy="24" r="3.4"/><circle cx="32" cy="30" r="3.4"/><circle cx="22" cy="36" r="2.6"/><circle cx="42" cy="36" r="2.6"/><circle cx="32" cy="42" r="3.4"/></g><path d="M44 10l1.3 3.4L48.7 15l-3.4 1.3L44 19.7l-1.3-3.4L39.3 15l3.4-1.6z" fill="#fde68a"/></svg>';
function coverInner(){
  const c = D.handbook[0];
  return '<span class="cs">' + esc(c.s) + '</span><img src="img/logo.svg" alt=""><h3>' + esc(c.h) + '</h3><p>' + esc(c.p) + '</p><span class="school">' + esc(D.site.unit) + ' · <span class="nowrap">' + esc(D.site.school) + '</span><br>' + esc(D.site.year) + '</span>';
}

/* ================= CẨM NANG (sách lật) ================= */
function pageInner(pg, i){
  if (pg.cover) return coverInner();
  let body = '';
  if (pg.list) body += '<ul>' + pg.list.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>';
  if (pg.ol) body += '<ol>' + pg.ol.map(x => '<li>' + esc(x) + '</li>').join('') + '</ol>';
  if (pg.formula) body += formulaHTML();
  if (pg.ladder) body += '<div class="mini-steps">' + D.ladder.map(x => '<div><b style="background:' + x.c + '">' + x.k.replace('Bậc ', '') + '</b><span><strong>' + esc(x.h) + ':</strong> ' + esc(x.t) + '</span></div>').join('') + '</div>';
  if (pg.steps) body += '<div class="mini-steps">' + D.steps5.map(s => '<div><b style="background:' + s.c + '">' + I(s.ic) + '</b><span><strong>' + s.k + ':</strong> ' + esc(s.t) + '</span></div>').join('') + '</div>';
  if (pg.hotlines) body += '<div class="mini-hot">' + D.hotlines.map(h => '<div><b style="background:' + h.c + '">' + h.n + '</b><span><strong>' + esc(h.h) + '.</strong> ' + esc(h.p) + '</span></div>').join('') + '</div>';
  if (pg.tip) body += '<div class="btip">' + esc(pg.tip) + '</div>';
  if (pg.note) body += '<div class="bnote">' + esc(pg.note) + '</div>';
  return '<div class="ptop"><span class="ibox" style="background:var(--navy)">' + I(pg.ic) + '</span><h3>' + esc(pg.h) + '</h3></div>' + body + '<span class="pno">' + (i + 1) + ' / ' + D.handbook.length + '</span>';
}
P.camnang = function(v, param, q){
  const N = D.handbook.length; let cur = 0, auto = null;
  v.innerHTML = pageHead('Cẩm nang', 'Cẩm nang An toàn số', 'Sách lật ' + N + ' trang. Dùng nút, phím mũi tên hoặc vuốt để lật trang. Bấm “In / Lưu PDF” để có bản giấy.') +
  '<div class="wrap book-wrap">' +
    '<div><div class="book-stage" id="stage"><div class="book" id="book"></div>' +
      '<div class="book-ctrl">' +
        '<button class="btn ghost small" id="bPrev" aria-label="Trang trước">' + I('left') + '</button>' +
        '<span class="pg" id="bPg">1 / ' + N + '</span>' +
        '<button class="btn ghost small" id="bNext" aria-label="Trang sau">' + I('right') + '</button>' +
        '<button class="btn ghost small" id="bAuto">' + I('play') + ' Tự lật</button>' +
        '<button class="btn ghost small" id="bRead">' + I('volume') + ' Nghe trang này</button>' +
        '<button class="btn ghost small" id="bFull">' + I('expand') + ' Toàn màn hình</button>' +
        '<button class="btn small" id="bPrint">' + I('printer') + ' In / Lưu PDF</button>' +
      '</div></div></div>' +
    '<aside class="book-toc" id="btoc">' + D.handbook.map((p, i) => '<button data-p="' + i + '"><span>' + (i + 1) + '</span>' + esc(p.cover ? 'Bìa' : p.h) + '</button>').join('') + '</aside>' +
  '</div>';
  const book = $('#book', v);
  function render(dir){
    const old = $('.bpage', book);
    const el = document.createElement('div');
    el.className = 'bpage' + (D.handbook[cur].cover ? ' cover' : '');
    el.innerHTML = pageInner(D.handbook[cur], cur);
    if (old && dir === 1) { old.style.zIndex = 2; old.classList.add('flip-out'); setTimeout(() => old.remove(), 560); book.appendChild(el); el.style.zIndex = 1; }
    else if (old && dir === -1) { old.remove(); el.classList.add('flip-back'); book.appendChild(el); }
    else { if (old) old.remove(); el.classList.add('fade-in'); book.appendChild(el); }
    $('#bPg', v).textContent = (cur + 1) + ' / ' + N;
    $$('#btoc button', v).forEach((b, i) => b.classList.toggle('on', i === cur));
    $('#bPrev', v).disabled = cur === 0; $('#bNext', v).disabled = cur === N - 1;
    if (cur === N - 1 && !st.prac.book) { st.prac.book = true; A.save(); A.addXP(30, 'Đọc hết cẩm nang'); }
  }
  function go(i){ if (i < 0 || i >= N || i === cur) return; const d = i > cur ? 1 : -1; cur = i; A.SND.flip(); A.TTS.stop(); render(d); }
  $('#bPrev', v).onclick = () => go(cur - 1);
  $('#bNext', v).onclick = () => go(cur + 1);
  $('#btoc', v).onclick = e => { const b = e.target.closest('button'); if (b) go(+b.dataset.p); };
  $('#bAuto', v).onclick = function(){
    if (auto) { clearInterval(auto); auto = null; this.innerHTML = I('play') + ' Tự lật'; return; }
    this.innerHTML = I('pause') + ' Dừng';
    auto = setInterval(() => { if (cur >= N - 1) { clearInterval(auto); auto = null; $('#bAuto', v).innerHTML = I('play') + ' Tự lật'; return; } go(cur + 1); }, 6000);
  };
  $('#bRead', v).onclick = () => { const t = $('.bpage', book).innerText.replace(/\d+ \/ \d+$/, ''); A.TTS.say(t); };
  $('#bFull', v).onclick = () => { const s = $('#stage', v); if (document.fullscreenElement) document.exitFullscreen(); else if (s.requestFullscreen) s.requestFullscreen(); else A.toast('Thiết bị không hỗ trợ toàn màn hình'); };
  $('#bPrint', v).onclick = printBook;
  async function printBook(){
    if (A.inArtifact) {
      // trong khung artifact không gọi được lệnh in: tải về tệp HTML để mở và in
      let css = '';
      try { css = await (await fetch('css/style.css')).text(); } catch(e) {}
      const pages = D.handbook.map((p, i) => '<div class="bpage' + (p.cover ? ' cover' : '') + '">' + pageInner(p, i) + '</div>').join('');
      const html = '<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><title>' + esc(D.handbook[0].h) + '</title><link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;800;900&display=swap&subset=vietnamese" rel="stylesheet"><style>' + css + ' body{background:#fff;padding:20px} .print-pages{max-width:720px;margin:0 auto;display:grid;gap:20px} .print-pages .bpage{position:relative;aspect-ratio:3/4;min-height:0} .bpage .ibox img{display:none}</style></head><body><p class="noprint" style="text-align:center"><button onclick="window.print()" class="btn">In / Lưu PDF</button></p><div class="print-pages">' + pages.replace(/src="img\/logo.svg"/g, 'src="data:image/svg+xml;base64,' + btoa(LOGO) + '"') + '</div></body></html>';
      A.saveFile('cam-nang-an-toan-so.html', new Blob([html], { type: 'text/html' }));
      return;
    }
    const all = document.createElement('div'); all.className = 'print-pages';
    all.innerHTML = D.handbook.map((p, i) => '<div class="bpage' + (p.cover ? ' cover' : '') + '">' + pageInner(p, i) + '</div>').join('');
    book.style.display = 'none'; book.parentNode.insertBefore(all, book);
    const done = () => { all.remove(); book.style.display = ''; window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    setTimeout(() => window.print(), 150);
  }
  // phím và vuốt
  const key = e => { if (!document.body.contains(book)) { document.removeEventListener('keydown', key); return; } if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); };
  document.addEventListener('keydown', key);
  let sx = null;
  book.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  book.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); sx = null; });
  render(0);
  if (param === 'in') setTimeout(printBook, 400);
  return () => { if (auto) clearInterval(auto); A.TTS.stop(); };
};

/* ================= BÀI HỌC ================= */
P.baihoc = function(v, param){
  if (param) return lesson(v, +param);
  const done = lessonsDone();
  v.innerHTML = pageHead('Bài học', 'Bài học', D.lessons.length + ' bài bám sát nội dung chuyên đề. Mỗi bài khoảng 5 phút, cuối bài có câu hỏi kiểm tra nhanh. Trả lời hết các câu là hoàn thành bài.') +
  '<section class="sec"><div class="wrap">' +
    '<div class="card" style="margin-bottom:20px"><div class="row between"><b>Tiến độ của em: ' + done + '/' + D.lessons.length + ' bài</b><span class="muted small">Hoàn thành từ ' + D.certificate.minLessons + ' bài để nhận chứng nhận</span></div><div class="progress-bar" style="margin-top:10px"><i style="width:' + (done / D.lessons.length * 100) + '%"></i></div></div>' +
    '<div class="grid g3 lesson-list">' + D.lessons.map((l, i) => '<a class="tile reveal" style="transition-delay:' + (i * 60) + 'ms" href="#baihoc-' + l.id + '">' + (st.lessons[l.id] ? '<span class="done-badge">✓ Đã xong</span>' : '') + '<span class="ibox" style="background:' + l.c + '">' + I(l.ic) + '</span><span class="lnum">Bài ' + l.id + '</span><h3>' + esc(l.t) + '</h3><p>' + esc(l.s) + '</p><span class="go">' + (st.lessons[l.id] ? 'Xem lại' : 'Học ngay') + ' ' + I('arrow') + '</span></a>').join('') + '</div>' +
  '</div></section>';
};
function lesson(v, id){
  const l = D.lessons.find(x => x.id === id) || D.lessons[0];
  const idx = D.lessons.indexOf(l);
  const prev = D.lessons[idx - 1], next = D.lessons[idx + 1];
  v.innerHTML =
  '<div class="wrap lesson-layout">' +
    '<nav class="side" aria-label="Danh sách bài">' + D.lessons.map(x => '<a href="#baihoc-' + x.id + '" class="' + (x.id === l.id ? 'on' : '') + '"><span class="dot" style="background:' + x.c + '">' + x.id + '</span><span class="t">' + esc(x.t) + '</span>' + (st.lessons[x.id] ? '<span class="ok">' + I('check') + '</span>' : '') + '</a>').join('') + '</nav>' +
    '<article class="lesson-body">' +
      '<div class="crumb" style="color:var(--muted)"><a href="#baihoc" style="color:var(--muted)">Bài học</a> / Bài ' + l.id + '</div>' +
      '<div class="lhead"><span class="ibox" style="background:' + l.c + '">' + I(l.ic) + '</span><div><h2>' + esc(l.t) + '</h2><p class="muted" style="margin:2px 0 0">' + esc(l.s) + '</p></div></div>' +
      '<div class="row" style="margin-top:10px"><button class="btn ghost small" id="readL">' + I('volume') + ' Nghe đọc bài</button></div>' +
      '<p class="lintro">' + esc(l.intro) + '</p>' +
      (l.formula ? '<div class="formula-inline">' + formulaHTML() + '</div>' : '') + (l.ladder ? '<div style="margin:18px 0 22px">' + ladderHTML() + '</div>' : '') +
      '<div class="kcards">' + l.cards.map(c => '<div class="kcard reveal"><div class="kh"><span class="ibox" style="background:' + l.c + ';width:38px;height:38px">' + I(c.ic) + '</span><h3>' + esc(c.h) + '</h3></div><ul>' + c.p.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul></div>').join('') + '</div>' +
      (l.steps ? '<h3 style="margin:26px 0 12px">' + esc(D.stepsTitle || '5 bước xử lý') + '</h3>' + stepsHTML() : '') +
      (l.fact ? '<div class="factbox reveal"><span class="ibox" style="background:#0ea5e9">' + I('sparkle') + '</span><div><b>Em có biết?</b><p>' + esc(l.fact) + '</p></div></div>' : '') +
      (l.tryit ? '<a class="trybox reveal" href="#' + l.tryit.go + '"><span class="ibox" style="background:#16a34a">' + I(l.tryit.ic || 'game') + '</span><div><b>Thử ngay</b><p>' + esc(l.tryit.t) + '</p></div><span class="go">' + I('arrow') + '</span></a>' : '') +
      '<div class="remember"><span class="ibox">' + I('star') + '</span><div><b>Ghi nhớ</b><p>' + esc(l.remember) + '</p></div></div>' +
      '<h3 style="margin:8px 0 4px">Kiểm tra nhanh</h3><p class="muted small" style="margin:0">Trả lời hết các câu để hoàn thành bài.</p>' +
      '<div id="checks">' + l.check.map((q, i) => A.mcqHTML(q, 'L' + l.id + '-' + i, i)).join('') + '</div>' +
      '<div id="ldone"></div>' +
      '<div class="lesson-nav">' + (prev ? '<a class="btn ghost" href="#baihoc-' + prev.id + '">' + I('left') + ' Bài ' + prev.id + '</a>' : '<span></span>') + (next ? '<a class="btn" href="#baihoc-' + next.id + '">Bài ' + next.id + ' ' + I('right') + '</a>' : '<a class="btn orange" href="#thuchanh">Sang Thực hành ' + I('right') + '</a>') + '</div>' +
    '</article>' +
  '</div>';
  function checkDone(){
    const all = l.check.every((q, i) => st.checks['L' + l.id + '-' + i] != null);
    if (all && !st.lessons[l.id]) { st.lessons[l.id] = true; A.save(); A.addXP(30, 'Hoàn thành Bài ' + l.id); A.SND.win(); A.confetti(); }
    if (all) $('#ldone', v).innerHTML = '<div class="fb ok" style="margin-top:16px">' + I('award') + '<div><b>Em đã hoàn thành Bài ' + l.id + '.</b> ' + (next ? 'Tiếp tục với Bài ' + next.id + ' nhé.' : 'Hãy thử các bài thực hành.') + '</div></div>';
  }
  A.bindMCQ($('#checks', v), l.check, checkDone);
  checkDone();
  $('#readL', v).onclick = function(){
    if (A.TTS.speaking) { A.TTS.stop(); this.innerHTML = I('volume') + ' Nghe đọc bài'; return; }
    const txt = [l.t, l.intro].concat(l.cards.map(c => c.h + '. ' + c.p.join(' '))).concat(['Ghi nhớ. ' + l.remember]).join('. ');
    this.innerHTML = I('pause') + ' Dừng đọc';
    A.TTS.say(txt, () => { this.innerHTML = I('volume') + ' Nghe đọc bài'; });
  };
  return () => A.TTS.stop();
}

/* ================= ÔN THI PHÁP LUẬT ================= */
P.phapluat = function(v){
  const mcq = D.lawMCQ, tf = D.lawTF;
  const total = mcq.length + tf.reduce((a, s) => a + s.i.length, 0);
  const step = 10 / total;
  let ans = { m: {}, t: {} }, submitted = false;
  v.innerHTML = pageHead('Pháp luật', esc(D.lawHead ? D.lawHead.title : 'Ôn tập pháp luật'), esc(D.lawHead ? D.lawHead.sub : '')) +
  '<section class="sec"><div class="wrap">' +
    '<div class="disclaimer">' + I('alert') + '<div>Nội dung được tóm tắt để tuyên truyền, cập nhật đến tháng 11/2026. Đề luyện tập do Tổ Tin học biên soạn để ôn tập, <b>không phải đề thi chính thức</b>. Tra cứu toàn văn văn bản tại Cơ sở dữ liệu quốc gia về văn bản pháp luật (vbpl.vn).</div></div>' +
    '<div class="sec-head" style="margin-top:28px"><div><div class="eyebrow">Thẻ pháp luật</div><h2>6 văn bản cần nắm</h2></div></div>' +
    '<div class="grid g3">' + D.lawCards.map(c => '<div class="card lawcard reveal" style="border-top-color:' + c.c + '"><span class="no">' + esc(c.no) + '</span><h3>' + esc(c.n) + '</h3><span class="eff">Hiệu lực: ' + esc(c.eff) + '</span><ul>' + c.pts.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul></div>').join('') + '</div>' +
  '</div></section>' +
  '<section class="sec alt"><div class="wrap" style="max-width:900px">' +
    '<div class="sec-head"><div><div class="eyebrow">Đề luyện tập</div><h2>Làm thử ' + total + ' ý, thang điểm 10</h2><p>Phần I: ' + mcq.length + ' câu nhiều lựa chọn. Phần II: ' + tf.length + ' câu đúng – sai, mỗi câu 4 nhận định. Chọn xong bấm “Nộp bài” để xem điểm và đáp án.</p></div>' + (st.law.best != null ? '<span class="pill">' + I('star') + ' Điểm cao nhất: ' + st.law.best.toFixed(2).replace('.', ',') + '</span>' : '') + '</div>' +
    '<h3>Phần I. Trắc nghiệm nhiều lựa chọn</h3><div id="lm"></div>' +
    '<h3 style="margin-top:26px">Phần II. Đúng – Sai</h3><div id="lt"></div>' +
    '<div class="scorebox"><span id="lprog">Đã làm 0/' + total + ' ý</span><div class="row"><button class="btn ghost-light small" id="lreset">' + I('refresh') + ' Làm lại</button><button class="btn orange" id="lsubmit">Nộp bài</button></div></div>' +
    '<div id="lres"></div>' +
  '</div></section>';
  function render(){
    $('#lm', v).innerHTML = mcq.map((q, i) => {
      const a = ans.m[i];
      return '<div class="q"><h4><span class="qn">Câu ' + (i + 1) + '</span>' + esc(q.q) + '</h4><div class="opts">' + q.o.map((o, j) => {
        let c = 'opt'; if (submitted) { if (j === q.a) c += ' right'; else if (j === a) c += ' wrong'; } else if (j === a) c += ' sel';
        return '<button class="' + c + '" data-m="' + i + '" data-j="' + j + '"' + (submitted ? ' disabled' : '') + '><span class="lt">' + A.L[j] + '</span><span>' + esc(o) + '</span></button>';
      }).join('') + '</div></div>';
    }).join('');
    $('#lt', v).innerHTML = tf.map((s, i) => '<div class="q"><h4><span class="qn">Câu ' + (mcq.length + i + 1) + '</span>' + esc(s.s) + '</h4><div class="tfgrid">' + s.i.map((it, k) => {
      const key = i + '-' + k, a = ans.t[key];
      let c = 'tfrow'; if (submitted && a != null) c += a === it[1] ? ' right' : ' wrong'; else if (submitted) c += ' wrong';
      return '<div class="' + c + '"><span><span class="lt">' + 'abcd'[k] + ')</span>' + esc(it[0]) + (submitted ? ' <b style="color:' + (it[1] ? 'var(--green)' : 'var(--red)') + '">→ ' + (it[1] ? 'Đúng' : 'Sai') + '</b>' : '') + '</span><span class="tfbtn"><button data-t="' + key + '" data-v="1" class="' + (a === true ? 'sel' : '') + '"' + (submitted ? ' disabled' : '') + '>Đúng</button><button data-t="' + key + '" data-v="0" class="' + (a === false ? 'sel' : '') + '"' + (submitted ? ' disabled' : '') + '>Sai</button></span></div>';
    }).join('') + '</div></div>').join('');
    const n = Object.keys(ans.m).length + Object.keys(ans.t).length;
    $('#lprog', v).textContent = submitted ? 'Đã nộp bài' : 'Đã làm ' + n + '/' + total + ' ý';
    $('#lsubmit', v).disabled = submitted;
  }
  v.addEventListener('click', e => {
    const m = e.target.closest('[data-m]'), t = e.target.closest('[data-t]');
    if (submitted) return;
    if (m) { ans.m[+m.dataset.m] = +m.dataset.j; A.SND.tap(); render(); }
    if (t) { ans.t[t.dataset.t] = t.dataset.v === '1'; A.SND.tap(); render(); }
  });
  $('#lsubmit', v).onclick = () => {
    const n = Object.keys(ans.m).length + Object.keys(ans.t).length;
    if (n < total && !confirmLike(total - n)) return;
    submitted = true;
    let right = 0;
    mcq.forEach((q, i) => { if (ans.m[i] === q.a) right++; });
    tf.forEach((s, i) => s.i.forEach((it, k) => { if (ans.t[i + '-' + k] === it[1]) right++; }));
    const score = right * step;
    if (st.law.best == null || score > st.law.best) { st.law.best = score; }
    if (!st.prac.law) { st.prac.law = true; A.addXP(40, 'Hoàn thành đề luyện pháp luật'); }
    A.save();
    if (score >= 8) { A.SND.win(); A.confetti(); } else A.SND.ok();
    $('#lres', v).innerHTML = '<div class="card center" style="margin-top:20px"><div class="eyebrow">Kết quả</div><div class="gres">' + score.toFixed(2).replace('.', ',') + ' điểm</div><p>Đúng ' + right + '/' + total + ' ý. ' + (score >= 8 ? 'Rất tốt! Em đã sẵn sàng cho cuộc thi.' : score >= 5 ? 'Khá ổn. Xem lại các ý sai bên trên rồi thử lại nhé.' : 'Hãy đọc lại Bài 5 và các thẻ pháp luật rồi làm lại.') + '</p><div class="row" style="justify-content:center"><a class="btn ghost" href="#baihoc-5">Ôn Bài 5</a><button class="btn" id="lagain">' + I('refresh') + ' Làm lại</button></div></div>';
    $('#lagain', v).onclick = reset;
    render();
    $('#lres', v).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  let warned = false;
  function confirmLike(left){ if (warned) return true; warned = true; A.toast('Còn ' + left + ' ý chưa làm. Bấm “Nộp bài” lần nữa để nộp.'); return false; }
  function reset(){ ans = { m: {}, t: {} }; submitted = false; warned = false; $('#lres', v).innerHTML = ''; render(); $('#lm', v).scrollIntoView({ behavior: 'smooth' }); }
  $('#lreset', v).onclick = reset;
  render();
};

/* ================= HỖ TRỢ ================= */
P.hotro = function(v){
  const evid = ['Chụp toàn màn hình, thấy rõ tên tài khoản, số điện thoại, thời gian.', 'Sao chép đường link (đừng bấm vào), lưu số tài khoản nhận tiền.', 'Giữ nguyên tin nhắn, không xoá cuộc trò chuyện.', 'Ghi lại diễn biến: ai liên hệ, lúc nào, yêu cầu gì, em đã làm gì.', 'Không tự “điều tra”, không nhắn đe doạ lại người đó.'];
  const l6 = D.helpCards ? { c: '#2563eb', cards: D.helpCards } : D.lessons.find(l => l.id === 6);
  v.innerHTML = pageHead('Hỗ trợ', 'Gặp sự cố? Em không một mình', 'Bình tĩnh làm theo 5 bước. Báo người lớn càng sớm, thiệt hại càng nhỏ.') +
  '<section class="sec"><div class="wrap">' + hotHTML() + '</div></section>' +
  '<section class="sec dark"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Thứ tự xử lý</div><h2>5 bước khi gặp sự cố</h2></div></div>' + stepsHTML(true) + '</div></section>' +
  '<section class="sec"><div class="wrap"><div class="grid g2" style="gap:24px;align-items:start">' +
    '<div class="card"><h3>' + I('camera') + ' Lưu bằng chứng đúng cách</h3><ul class="checks">' + evid.map(x => '<li class="y">' + I('check') + x + '</li>').join('') + '</ul><p class="small muted">Theo Luật Giao dịch điện tử 2023, thông điệp dữ liệu (tin nhắn, email…) có thể được dùng làm chứng cứ.</p></div>' +
    '<div class="card"><h3>' + I('users') + ' Báo cho ai?</h3><ul class="checks">' +
      '<li class="y">' + I('check') + '<span><b>Cha mẹ, người thân:</b> luôn là người đầu tiên.</span></li>' +
      '<li class="y">' + I('check') + '<span><b>GVCN, thầy cô Tin học, Đoàn trường:</b> sự cố liên quan bạn bè, tài khoản học tập, nhóm lớp.</span></li>' +
      '<li class="y">' + I('check') + '<span><b>Ngân hàng (tổng đài in trên thẻ/ứng dụng):</b> lộ thông tin thẻ, chuyển nhầm tiền.</span></li>' +
      '<li class="y">' + I('check') + '<span><b>Công an (113, công an phường):</b> bị đe doạ, tống tiền, lừa đảo chiếm đoạt tiền.</span></li>' +
      '<li class="y">' + I('check') + '<span><b>Nền tảng (Facebook, Zalo, TikTok…):</b> dùng nút Báo cáo, trang khôi phục chính thức.</span></li>' +
    '</ul></div>' +
  '</div></div></section>' +
  '<section class="sec alt"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Tình huống cụ thể</div><h2>Xử lý theo từng trường hợp</h2></div><a class="btn ghost" href="#thuchanh-tinhhuong">Luyện xử lý tình huống</a></div>' +
    '<div class="kcards">' + l6.cards.map(c => '<div class="kcard reveal"><div class="kh"><span class="ibox" style="background:' + l6.c + ';width:38px;height:38px">' + I(c.ic) + '</span><h3>' + esc(c.h) + '</h3></div><ul>' + c.p.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul></div>').join('') + '</div>' +
  '</div></section>';
};

/* ================= BÁO CÁO VIÊN ================= */
P.baocao = function(v){
  const ag = D.agenda; let timer = null, left = 0, curLabel = '';
  const total = ag.reduce((a, x) => a + x.m, 0);
  v.innerHTML = pageHead('Báo cáo viên', 'Chế độ báo cáo viên – ' + esc(D.site.date), esc(D.site.eventLine) + ' (' + total + ' phút). Bấm vào từng mục để bấm giờ; nút “Mở” đưa thẳng tới trang minh hoạ trên máy chiếu hoặc điện thoại.') +
  '<div class="wrap pres-grid">' +
    '<div class="agenda">' + ag.map((a, i) => '<div class="ag" data-a="' + i + '"><div class="min">' + a.m + '<small>phút</small></div><div><h3>' + esc(a.t) + '</h3><span class="who">' + esc(a.who) + '</span></div><a class="btn ghost small" href="#' + a.go + '">Mở</a>' +
      (a.sub ? '<div class="subs">' + a.sub.map((s, j) => '<div class="sub" data-s="' + i + '-' + j + '"><b>' + s.m + '\'</b><span>' + esc(s.t) + '</span><a class="btn ghost small" href="#' + s.go + '">Mở</a></div>').join('') + '</div>' : '') + '</div>').join('') + '</div>' +
    '<aside class="clockbox"><div class="eyebrow">Đồng hồ đếm ngược</div><div class="bigclock" id="clk">00:00</div><div class="now" id="clkNow">Chọn một mục trong chương trình để bắt đầu.</div>' +
      '<div class="row" style="justify-content:center"><button class="btn ghost-light small" id="clkP">' + I('pause') + ' Tạm dừng</button><button class="btn ghost-light small" id="clkR">' + I('refresh') + ' Đặt lại</button><button class="btn ghost-light small" id="clkF">' + I('expand') + ' Toàn màn hình</button></div>' +
      '<p class="small" style="margin-top:16px;color:#9fb3d9">Mẹo: chiếu mã QR trang này lên màn hình để học sinh mở Minigame và Thực hành trên điện thoại khi giao lưu.</p></aside>' +
  '</div>';
  function fmt(s){ return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
  function start(min, label, el){
    clearInterval(timer); left = min * 60; curLabel = label;
    $$('.ag,.sub', v).forEach(x => x.classList.remove('active')); el.classList.add('active');
    $('#clkNow', v).textContent = label; $('#clk', v).textContent = fmt(left);
    timer = setInterval(() => { left--; $('#clk', v).textContent = fmt(Math.max(left, 0)); if (left === 60) A.toast('Còn 1 phút'); if (left <= 0) { clearInterval(timer); timer = null; A.SND.win(); $('#clk', v).style.color = '#fb7185'; } else $('#clk', v).style.color = ''; }, 1000);
  }
  v.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const s = e.target.closest('.sub'); if (s) { const [i, j] = s.dataset.s.split('-').map(Number); start(ag[i].sub[j].m, ag[i].sub[j].t, s); return; }
    const a = e.target.closest('.ag'); if (a) { const i = +a.dataset.a; start(ag[i].m, ag[i].t, a); }
  });
  $('#clkP', v).onclick = function(){ if (timer) { clearInterval(timer); timer = null; this.innerHTML = I('play') + ' Tiếp tục'; } else if (left > 0) { const el = $('.active', v); timer = setInterval(() => { left--; $('#clk', v).textContent = fmt(Math.max(left, 0)); if (left <= 0) { clearInterval(timer); timer = null; A.SND.win(); } }, 1000); this.innerHTML = I('pause') + ' Tạm dừng'; } };
  $('#clkR', v).onclick = () => { clearInterval(timer); timer = null; left = 0; $('#clk', v).textContent = '00:00'; $('#clkNow', v).textContent = 'Chọn một mục trong chương trình để bắt đầu.'; $$('.ag,.sub', v).forEach(x => x.classList.remove('active')); };
  $('#clkF', v).onclick = () => { const c = $('.clockbox', v); if (document.fullscreenElement) document.exitFullscreen(); else if (c.requestFullscreen) c.requestFullscreen(); };
  return () => clearInterval(timer);
};
})();
