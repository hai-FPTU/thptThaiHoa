/* =========================================================
   TRÒ CHƠI TƯƠNG TÁC
   Soi ảnh AI · Nối khái niệm · Mê cung · Đoán từ · Kéo thả phân loại
   Dạy AI (Naive Bayes thu nhỏ) · Đoán từ tiếp theo
   ========================================================= */
(function(){
const A = window.APP, D = A.D, st = A.st, $ = A.$, $$ = A.$$, esc = A.esc, I = window.ICON;
const G = window.GAMES = {};

function done(k, xp, why){ if (!st.prac[k]) { st.prac[k] = true; A.save(); A.addXP(xp, why); A.SND.win(); A.confetti(); } }

/* =========================================================
   1. SOI ẢNH AI – tìm 6 điểm bất thường
   ========================================================= */
const SPOTS = [
  { x: 625, y: 150, r: 75, h: 'Chữ trên biển hiệu', e: 'Chữ bị méo, lẫn ký tự lạ (Ё, И). Công cụ tạo ảnh rất hay viết sai chữ.' },
  { x: 520, y: 228, r: 48, h: 'Mặt đồng hồ', e: 'Có số 13, số 8 nằm sai chỗ và tới 3 kim. Đồng hồ là chi tiết AI hay vẽ sai.' },
  { x: 362, y: 150, r: 42, h: 'Bàn tay vẫy chào', e: 'Bàn tay có 6 ngón: lỗi kinh điển của ảnh AI.' },
  { x: 108, y: 392, r: 55, h: 'Bóng của cái cây', e: 'Mặt trời ở bên trái nhưng bóng cây lại đổ về phía mặt trời. Bóng người thì đổ đúng sang phải.' },
  { x: 400, y: 368, r: 42, h: 'Cột đèn', e: 'Cột đèn lơ lửng, không chạm đất: vật thể không tuân theo vật lý.' },
  { x: 626, y: 352, r: 58, h: 'Chiếc xe đạp', e: 'Xe đạp không có khung nối hai bánh: chi tiết cơ khí vô lý.' }
];
function sceneSVG(){
  return '<svg class="scene" viewBox="0 0 800 500" role="img" aria-label="Bức ảnh minh hoạ: một học sinh vẫy tay trước quán cà phê, có cây, cột đèn, xe đạp">' +
  '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#e0f2fe"/></linearGradient></defs>' +
  '<rect width="800" height="380" fill="url(#sky)"/>' +
  '<rect y="380" width="800" height="120" fill="#cbd5e1"/><rect y="440" width="800" height="60" fill="#64748b"/>' +
  '<g stroke="#f8fafc" stroke-width="5" stroke-dasharray="40 30"><path d="M0 470h800"/></g>' +
  // mặt trời, mây
  '<circle cx="90" cy="70" r="38" fill="#fde047"/><g stroke="#fde047" stroke-width="5" stroke-linecap="round"><path d="M90 16v-10M90 134v-10M36 70h-10M154 70h-10M52 32l-7-7M128 108l7 7M52 108l-7 7M128 32l7-7"/></g>' +
  '<g fill="#fff"><ellipse cx="270" cy="70" rx="48" ry="20"/><ellipse cx="300" cy="58" rx="34" ry="20"/><ellipse cx="420" cy="90" rx="40" ry="16"/></g>' +
  // toà nhà quán cà phê
  '<rect x="460" y="105" width="320" height="275" fill="#fde68a"/><rect x="450" y="95" width="340" height="16" fill="#b45309"/>' +
  '<rect x="490" y="122" width="270" height="54" rx="6" fill="#7c2d12"/>' +
  '<text x="625" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="30" fill="#fef3c7" letter-spacing="2">CÀ PHЁ SÁИG</text>' +
  // đồng hồ
  '<circle cx="520" cy="228" r="30" fill="#fff" stroke="#7c2d12" stroke-width="4"/>' +
  '<g font-family="Arial" font-size="10" font-weight="700" fill="#334155" text-anchor="middle"><text x="520" y="210">12</text><text x="542" y="232">8</text><text x="520" y="253">13</text><text x="498" y="232">9</text></g>' +
  '<g stroke="#0f172a" stroke-width="3" stroke-linecap="round"><path d="M520 228l0-16M520 228l12 6M520 228l-10 10"/></g>' +
  // cửa sổ, cửa ra vào
  '<rect x="570" y="200" width="105" height="95" rx="4" fill="#bae6fd" stroke="#7c2d12" stroke-width="4"/><path d="M622 200v95M570 247h105" stroke="#7c2d12" stroke-width="3"/>' +
  '<rect x="700" y="230" width="62" height="150" rx="4" fill="#92400e"/><circle cx="750" cy="310" r="4" fill="#fde68a"/>' +
  // cây và bóng sai hướng
  '<ellipse cx="100" cy="392" rx="62" ry="10" fill="#475569" opacity=".45"/>' +
  '<rect x="140" y="250" width="22" height="132" fill="#92400e"/>' +
  '<g fill="#16a34a"><circle cx="151" cy="220" r="48"/><circle cx="118" cy="245" r="32"/><circle cx="186" cy="245" r="32"/></g>' +
  // cột đèn lơ lửng
  '<rect x="396" y="190" width="8" height="160" fill="#334155"/><rect x="380" y="176" width="40" height="18" rx="6" fill="#334155"/><circle cx="400" cy="198" r="6" fill="#fde047"/>' +
  // người (bóng đổ đúng sang phải)
  '<ellipse cx="345" cy="388" rx="55" ry="9" fill="#475569" opacity=".45"/>' +
  '<rect x="282" y="300" width="16" height="82" rx="6" fill="#1e3a8a"/><rect x="304" y="300" width="16" height="82" rx="6" fill="#1e3a8a"/>' +
  '<rect x="276" y="216" width="50" height="92" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>' +
  '<path d="M280 228l-14 70" stroke="#fcd34d" stroke-width="11" stroke-linecap="round"/>' +
  '<path d="M320 228l38-66" stroke="#fcd34d" stroke-width="11" stroke-linecap="round"/>' +
  '<circle cx="362" cy="152" r="11" fill="#fcd34d"/>' +
  '<g stroke="#fcd34d" stroke-width="5" stroke-linecap="round"><path d="M352 146l-9-16M357 142l-4-19M363 141l1-20M369 142l6-18M373 147l11-13M350 153l-14-6"/></g>' +
  '<circle cx="301" cy="190" r="24" fill="#fcd34d"/><path d="M277 186c0-20 48-22 48 0c-8-8-38-8-48 0z" fill="#1f2937"/>' +
  '<circle cx="293" cy="192" r="2.5" fill="#1f2937"/><circle cx="309" cy="192" r="2.5" fill="#1f2937"/><path d="M294 202q7 6 14 0" stroke="#1f2937" stroke-width="2" fill="none"/>' +
  // xe đạp thiếu khung
  '<g fill="none" stroke="#0f172a" stroke-width="4"><circle cx="586" cy="352" r="26"/><circle cx="666" cy="352" r="26"/></g>' +
  '<g stroke="#64748b" stroke-width="1.5"><path d="M586 326v52M560 352h52M666 326v52M640 352h52"/></g>' +
  '<path d="M586 352l-6-34h-12M666 352l6-40h12" stroke="#dc2626" stroke-width="4" fill="none" stroke-linecap="round"/>' +
  '<g id="marks"></g></svg>';
}
G.soianh = function(el){
  const found = new Set(); let miss = 0;
  el.innerHTML = '<div class="grid g2" style="gap:24px;align-items:start;grid-template-columns:1.5fr 1fr">' +
    '<div><div class="scene-wrap">' + sceneSVG() + '</div><p class="small muted" style="margin-top:8px">Ảnh minh hoạ được vẽ để luyện tập, giả lập lỗi thường gặp ở ảnh do AI tạo.</p></div>' +
    '<div><div class="row between"><h3>Tìm 6 điểm bất thường</h3><span class="counter" id="sCnt">0/6</span></div>' +
    '<p class="muted">Chạm vào chỗ em thấy “không thật” trong ảnh. Ảnh AI hay sai ở chữ viết, bàn tay, đồng hồ, bóng đổ, vật lơ lửng, đồ vật cơ khí.</p>' +
    '<div class="reasons" id="sList"></div><div id="sDone"></div>' +
    '<div class="row" style="margin-top:14px"><button class="btn ghost small" id="sHint">' + I('eye') + ' Gợi ý</button><button class="btn ghost small" id="sAgain">' + I('refresh') + ' Chơi lại</button></div></div></div>';
  const svg = $('svg', el), marks = $('#marks', el);
  function pt(e){ const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  function mark(i){ const s = SPOTS[i]; marks.insertAdjacentHTML('beforeend', '<g class="mk"><circle cx="' + s.x + '" cy="' + s.y + '" r="' + Math.min(s.r, 46) + '" fill="none" stroke="#e11d48" stroke-width="5"/><circle cx="' + (s.x + 34) + '" cy="' + (s.y - 34) + '" r="15" fill="#e11d48"/><text x="' + (s.x + 34) + '" y="' + (s.y - 29) + '" text-anchor="middle" font-family="Arial" font-weight="900" font-size="15" fill="#fff">' + (found.size) + '</text></g>'); }
  function list(){
    $('#sCnt', el).textContent = found.size + '/6';
    $('#sList', el).innerHTML = [...found].map((i, k) => '<div class="reason"><b style="min-width:22px">' + (k + 1) + '.</b><div><b>' + esc(SPOTS[i].h) + ':</b> ' + esc(SPOTS[i].e) + '</div></div>').join('');
    if (found.size === 6) { $('#sDone', el).innerHTML = '<div class="fb ok" style="margin-top:12px">' + I('award') + '<div><b>Tìm đủ 6 điểm' + (miss ? ' (chạm nhầm ' + miss + ' lần)' : '') + '!</b> Nhưng nhớ: ảnh AI ngày càng giống thật. Soi bằng mắt chỉ là bước đầu; hãy kiểm tra nguồn và nhãn AI.</div></div>'; done('soianh', 50, 'Soi đủ 6 điểm bất thường'); }
  }
  svg.addEventListener('click', e => {
    const p = pt(e);
    const i = SPOTS.findIndex((s, k) => !found.has(k) && Math.hypot(p.x - s.x, p.y - s.y) <= s.r);
    if (i >= 0) { found.add(i); A.SND.ok(); mark(i); list(); A.announce('Đúng: ' + SPOTS[i].e); }
    else { miss++; A.SND.tap(); marks.insertAdjacentHTML('beforeend', '<g class="miss-mk"><path d="M' + (p.x - 8) + ' ' + (p.y - 8) + 'l16 16M' + (p.x + 8) + ' ' + (p.y - 8) + 'l-16 16" stroke="#475569" stroke-width="4" stroke-linecap="round"/></g>'); const m = marks.lastChild; setTimeout(() => m.remove(), 700); }
  });
  $('#sHint', el).onclick = () => { const i = SPOTS.findIndex((s, k) => !found.has(k)); if (i < 0) return; const s = SPOTS[i]; marks.insertAdjacentHTML('beforeend', '<circle class="hint-mk" cx="' + s.x + '" cy="' + s.y + '" r="' + s.r + '" fill="rgba(250,204,21,.25)" stroke="#f59e0b" stroke-width="4" stroke-dasharray="10 8"/>'); const m = marks.lastChild; setTimeout(() => m.remove(), 1600); };
  $('#sAgain', el).onclick = () => G.soianh(el);
  list();
};

/* =========================================================
   2. NỐI KHÁI NIỆM – có đường nối
   ========================================================= */
G.noicap = function(el){
  const P = D.matchPairs, right = A.shuffle(P.map((_, i) => i));
  const cols = ['#2563eb', '#16a34a', '#f97316', '#7c3aed', '#e11d48', '#0891b2', '#ca8a04', '#db2777'];
  const matched = {}; let sel = null, mistakes = 0;
  el.innerHTML = '<div style="max-width:900px"><div class="row between"><p class="muted" style="margin:0">Chạm một khái niệm ở cột trái, rồi chạm ý nghĩa đúng ở cột phải.</p><span class="counter" id="mCnt">0/' + P.length + '</span></div>' +
    '<div class="match" id="mBox"><svg class="mlines" id="mLines"></svg><div class="mcol" id="mL"></div><div class="mcol" id="mR"></div></div><div id="mDone"></div></div>';
  const box = $('#mBox', el);
  function render(){
    $('#mL', el).innerHTML = P.map((p, i) => { const c = matched[i] != null ? cols[i % cols.length] : ''; return '<button class="mitem' + (sel === i ? ' sel' : '') + (c ? ' ok' : '') + '" data-l="' + i + '"' + (c ? ' style="--mc:' + c + '" disabled' : '') + '>' + esc(p[0]) + '</button>'; }).join('');
    $('#mR', el).innerHTML = right.map(j => { const li = Object.keys(matched).find(k => matched[k] === j); const c = li != null ? cols[li % cols.length] : ''; return '<button class="mitem r' + (c ? ' ok' : '') + '" data-r="' + j + '"' + (c ? ' style="--mc:' + c + '" disabled' : '') + '>' + esc(P[j][1]) + '</button>'; }).join('');
    $('#mCnt', el).textContent = Object.keys(matched).length + '/' + P.length;
    requestAnimationFrame(lines);
  }
  function lines(){
    const svg = $('#mLines', el); if (!svg) return;
    const bb = box.getBoundingClientRect(); svg.setAttribute('width', bb.width); svg.setAttribute('height', bb.height);
    svg.innerHTML = Object.keys(matched).map(i => {
      const a = $('[data-l="' + i + '"]', el).getBoundingClientRect(), b = $('[data-r="' + matched[i] + '"]', el).getBoundingClientRect();
      const x1 = a.right - bb.left, y1 = a.top + a.height / 2 - bb.top, x2 = b.left - bb.left, y2 = b.top + b.height / 2 - bb.top, mx = (x1 + x2) / 2;
      return '<path d="M' + x1 + ' ' + y1 + 'C' + mx + ' ' + y1 + ' ' + mx + ' ' + y2 + ' ' + x2 + ' ' + y2 + '" stroke="' + cols[i % cols.length] + '" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="' + x1 + '" cy="' + y1 + '" r="4" fill="' + cols[i % cols.length] + '"/><circle cx="' + x2 + '" cy="' + y2 + '" r="4" fill="' + cols[i % cols.length] + '"/>';
    }).join('');
  }
  el.addEventListener('click', e => {
    const l = e.target.closest('[data-l]'), r = e.target.closest('[data-r]');
    if (l) { sel = +l.dataset.l; A.SND.tap(); render(); return; }
    if (r) {
      if (sel == null) { A.toast('Chọn một khái niệm ở cột trái trước'); return; }
      const j = +r.dataset.r;
      if (j === sel) { matched[sel] = j; sel = null; A.SND.ok(); render(); if (Object.keys(matched).length === P.length) { $('#mDone', el).innerHTML = '<div class="fb ' + (mistakes <= 2 ? 'ok' : 'mid') + '" style="margin-top:14px">' + I('award') + '<div><b>Nối xong 8 cặp' + (mistakes ? ', nhầm ' + mistakes + ' lần' : ', không nhầm lần nào') + '!</b> <button class="btn ghost small" id="mAgain" style="margin-left:8px">' + I('refresh') + ' Chơi lại</button></div></div>'; done('noicap', 40, 'Nối đúng 8 khái niệm AI'); } }
      else { mistakes++; A.SND.no(); r.classList.add('nope'); setTimeout(() => r.classList.remove('nope'), 400); }
    }
    if (e.target.closest('#mAgain')) G.noicap(el);
  });
  const onR = () => lines(); window.addEventListener('resize', onR);
  render();
  return () => window.removeEventListener('resize', onR);
};

/* =========================================================
   3. MÊ CUNG AN TOÀN SỐ
   ========================================================= */
G.mecung = function(el){
  const M = D.maze; let grid, pos, gateQ = null, steps = 0, wrong = 0, traps = 0, fin = false;
  function reset(){ grid = M.map.map(r => r.split('')); grid.forEach((r, y) => r.forEach((c, x) => { if (c === 'S') pos = [y, x]; })); gateQ = null; steps = 0; wrong = 0; traps = 0; fin = false; }
  reset();
  el.innerHTML = '<div class="grid g2" style="gap:24px;align-items:start;grid-template-columns:auto 1fr">' +
    '<div><div class="maze" id="mz" tabindex="0" aria-label="Mê cung. Dùng phím mũi tên để di chuyển"></div>' +
    '<div class="dpad"><button data-d="0,-1" aria-label="Lên">' + I('left', 'rot') + '</button><button data-d="-1,0" aria-label="Trái">' + I('left') + '</button><button data-d="1,0" aria-label="Phải">' + I('right') + '</button><button data-d="0,1" aria-label="Xuống">' + I('right', 'rot') + '</button></div></div>' +
    '<div><h3>Đưa robot tới cờ đích</h3><p class="muted">Dùng phím mũi tên, nút điều khiển hoặc vuốt trên mê cung. Mỗi <b style="color:#ea580c">cửa khoá</b> chỉ mở khi em trả lời đúng. Cẩn thận các <b style="color:#7c3aed">món quà</b> hấp dẫn bên đường!</p>' +
    '<div class="row" style="gap:8px;margin:8px 0"><span class="pill">' + I('flag') + ' <span id="mzSteps">0</span> bước</span><span class="pill">' + I('alert') + ' <span id="mzTraps">0</span> lần dính bẫy</span></div>' +
    '<div id="mzPanel"></div><div class="row" style="margin-top:12px"><button class="btn ghost small" id="mzReset">' + I('refresh') + ' Chơi lại</button></div></div></div>';
  const board = $('#mz', el);
  function draw(){
    board.style.gridTemplateColumns = 'repeat(' + grid[0].length + ',1fr)';
    board.innerHTML = grid.map((r, y) => r.map((c, x) => {
      const me = pos[0] === y && pos[1] === x;
      let cls = 'cell', ic = '';
      if (c === '#') cls += ' wall';
      else if (/[1-9]/.test(c)) { cls += ' gate'; ic = I('lock') + '<small>' + c + '</small>'; }
      else if (c === '$') { cls += ' trap'; ic = I('gift'); }
      else if (c === 'G') { cls += ' goal'; ic = I('flag'); }
      else if (c === 'S') { cls += ' start'; }
      if (me) { cls += ' me'; ic = I('bot'); }
      return '<div class="' + cls + '">' + ic + '</div>';
    }).join('')).join('');
    $('#mzSteps', el).textContent = steps; $('#mzTraps', el).textContent = traps;
  }
  function panel(html){ $('#mzPanel', el).innerHTML = html; }
  function move(dx, dy){
    if (fin) return;
    if (gateQ) { gateQ = null; panel(''); }
    const ny = pos[0] + dy, nx = pos[1] + dx;
    if (ny < 0 || nx < 0 || ny >= grid.length || nx >= grid[0].length) return;
    const c = grid[ny][nx];
    if (c === '#') { A.SND.tap(); return; }
    if (/[1-9]/.test(c)) {
      const g = M.gates[+c - 1]; gateQ = { y: ny, x: nx, g };
      panel('<div class="q" style="margin:0"><h4><span class="qn">' + I('lock') + '</span>' + esc(g.q) + '</h4><div class="opts">' + g.o.map((o, i) => '<button class="opt" data-ga="' + i + '"><span class="lt">' + A.L[i] + '</span><span>' + esc(o) + '</span></button>').join('') + '</div></div>');
      A.SND.flip(); return;
    }
    pos = [ny, nx]; steps++; A.SND.tick();
    if (c === '$') { traps++; A.SND.no(); panel('<div class="fb no">' + I('gift') + '<div>' + esc(M.traps[(traps - 1) % M.traps.length]) + '</div></div>'); grid.forEach((r, y) => r.forEach((cc, x) => { if (cc === 'S') pos = [y, x]; })); }
    else if (c === 'G') { fin = true; panel('<div class="fb ok">' + I('award') + '<div><b>Về đích sau ' + steps + ' bước' + (traps ? ', dính bẫy ' + traps + ' lần' : ', không dính bẫy nào') + (wrong ? ', trả lời sai ' + wrong + ' lần' : '') + '!</b> Em đã vượt qua 3 cánh cửa an toàn số.</div></div>'); done('mecung', 50, 'Vượt qua mê cung an toàn số'); }
    else if (!$('#mzPanel .fb.ok', el)) panel('');
    draw();
  }
  el.addEventListener('click', e => {
    const d = e.target.closest('[data-d]'); if (d) { const [dx, dy] = d.dataset.d.split(',').map(Number); move(dx, dy); return; }
    const ga = e.target.closest('[data-ga]');
    if (ga && gateQ) {
      const i = +ga.dataset.ga, g = gateQ.g;
      if (i === g.a) { A.SND.ok(); grid[gateQ.y][gateQ.x] = '.'; pos = [gateQ.y, gateQ.x]; steps++; gateQ = null; panel('<div class="fb ok">' + I('check') + '<div><b>Cửa đã mở!</b> ' + esc(g.e) + '</div></div>'); draw(); }
      else { wrong++; A.SND.no(); const q = $('#mzPanel .q', el); const f = document.createElement('div'); f.className = 'fb no'; f.innerHTML = I('alert') + '<div><b>Cửa vẫn khoá.</b> Chọn lại nhé.</div>'; const old = $('#mzPanel .fb', el); if (old) old.remove(); q.appendChild(f); ga.disabled = true; ga.classList.add('wrong'); }
      return;
    }
    if (e.target.closest('#mzReset')) { reset(); panel(''); draw(); }
  });
  const key = e => {
    if (!document.body.contains(board)) { document.removeEventListener('keydown', key); return; }
    const m = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key];
    if (m && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); move(m[0], m[1]); }
  };
  document.addEventListener('keydown', key);
  let sx = null, sy = null;
  board.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  board.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; if (Math.max(Math.abs(dx), Math.abs(dy)) > 24) { if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 1 : -1, 0); else move(0, dy > 0 ? 1 : -1); } sx = null; });
  draw();
  return () => document.removeEventListener('keydown', key);
};

/* =========================================================
   4. ĐOÁN TỪ (đoán chữ cái)
   ========================================================= */
G.doantu = function(el){
  const N = 5, LIVES = 6;
  let list, i, guessed, lives, solved;
  function start(){ list = A.shuffle(D.words).slice(0, N); i = 0; solved = 0; next(); }
  function next(){ guessed = new Set(); lives = LIVES; render(); }
  function render(){
    const w = list[i], letters = w.w.split('');
    const win = letters.every(c => c === ' ' || guessed.has(c)), lose = lives <= 0;
    el.innerHTML = '<div class="hang"><div class="row between"><span class="pill">Từ ' + (i + 1) + '/' + N + '</span><span class="lives" aria-label="Còn ' + lives + ' lượt">' + Array.from({ length: LIVES }, (_, k) => '<span class="' + (k < lives ? 'on' : '') + '">' + I('shield') + '</span>').join('') + '</span></div>' +
      '<div class="hint">' + I('sparkle') + ' <b>Gợi ý:</b> ' + esc(w.h) + (w.vn ? ' <span class="muted small">(gõ không dấu)</span>' : '') + '</div>' +
      '<div class="slots">' + letters.map(c => c === ' ' ? '<span class="gap"></span>' : '<span class="slot' + (guessed.has(c) || lose ? ' show' : '') + (lose && !guessed.has(c) ? ' miss' : '') + '">' + (guessed.has(c) || lose ? c : '') + '</span>').join('') + '</div>' +
      (win || lose ? '<div class="fb ' + (win ? 'ok' : 'no') + '">' + I(win ? 'award' : 'alert') + '<div><b>' + (win ? 'Chính xác: ' : 'Lá chắn đã vỡ! Đáp án: ') + esc(w.vn || w.w) + '.</b> ' + esc(w.h) + '.</div></div><div class="row" style="justify-content:center;margin-top:12px">' + (i < N - 1 ? '<button class="btn" id="hNext">Từ tiếp theo ' + I('right') + '</button>' : '<button class="btn orange" id="hEnd">Xem kết quả ' + I('award') + '</button>') + '</div>'
        : '<div class="kb">' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => '<button data-k="' + c + '"' + (guessed.has(c) ? ' disabled class="' + (w.w.includes(c) ? 'hit' : 'nohit') + '"' : '') + '>' + c + '</button>').join('') + '</div>') +
      '</div>';
  }
  function guess(c){
    const w = list[i]; if (guessed.has(c) || lives <= 0) return;
    const before = w.w.split('').every(x => x === ' ' || guessed.has(x)); if (before) return;
    guessed.add(c);
    if (w.w.includes(c)) { A.SND.ok(); if (w.w.split('').every(x => x === ' ' || guessed.has(x))) { solved++; A.SND.win(); } }
    else { lives--; A.SND.no(); }
    render();
  }
  el.addEventListener('click', e => {
    const k = e.target.closest('[data-k]'); if (k) { guess(k.dataset.k); return; }
    if (e.target.closest('#hNext')) { i++; next(); }
    if (e.target.closest('#hEnd')) {
      el.innerHTML = '<div class="hang center"><div class="eyebrow">Kết quả</div><div class="gres">' + solved + '/' + N + ' từ</div><p>' + (solved >= 4 ? 'Xuất sắc! Em nắm rất chắc thuật ngữ AI.' : solved >= 3 ? 'Khá tốt! Ôn thêm Bài 2 và Bài 3 nhé.' : 'Hãy đọc lại các bài học rồi thử lại.') + '</p><div class="row" style="justify-content:center"><button class="btn orange" id="hAgain">' + I('refresh') + ' Chơi lại</button></div></div>';
      if (solved >= 3) done('doantu', 40, 'Đoán đúng ' + solved + ' thuật ngữ AI');
    }
    if (e.target.closest('#hAgain')) start();
  });
  const key = e => {
    if (!document.body.contains(el)) { document.removeEventListener('keydown', key); return; }
    if (/^[a-z]$/i.test(e.key) && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) guess(e.key.toUpperCase());
  };
  document.addEventListener('keydown', key);
  start();
  return () => document.removeEventListener('keydown', key);
};

/* =========================================================
   5. KÉO THẢ PHÂN LOẠI (chạm để chọn, hoặc kéo thả trên máy tính)
   ========================================================= */
function bins(el, cfg, key, why){
  const items = A.shuffle(cfg.items.map((x, i) => i));
  const place = {}; let sel = null, checked = false;
  function render(){
    const chip = i => { const it = cfg.items[i]; let c = 'chip'; if (sel === i) c += ' sel'; if (checked) c += place[i] === it.b ? ' good' : ' bad'; return '<button class="' + c + '" draggable="' + !checked + '" data-c="' + i + '">' + esc(it.t) + '</button>'; };
    const pool = items.filter(i => place[i] == null);
    el.innerHTML = '<div style="max-width:960px"><p class="muted">' + esc(cfg.lead) + '</p>' +
      '<div class="pool" data-bin="pool">' + (pool.length ? pool.map(chip).join('') : '<span class="muted small">Đã xếp hết thẻ. Bấm “Kiểm tra”.</span>') + '</div>' +
      '<div class="bins">' + cfg.bins.map((b, k) => '<div class="bin b' + k + '" data-bin="' + k + '"><h4>' + esc(b) + '</h4><div class="bin-in">' + items.filter(i => place[i] === k).map(chip).join('') + '</div></div>').join('') + '</div>' +
      (checked ? '<div class="reasons">' + items.filter(i => place[i] !== cfg.items[i].b).map(i => '<div class="reason">' + I('alert') + '<div><b>' + esc(cfg.items[i].t) + '</b> → ' + esc(cfg.bins[cfg.items[i].b]) + '. ' + esc(cfg.items[i].e) + '</div></div>').join('') + '</div>' +
        '<div class="fb ' + (items.every(i => place[i] === cfg.items[i].b) ? 'ok' : 'mid') + '">' + I('award') + '<div><b>Đúng ' + items.filter(i => place[i] === cfg.items[i].b).length + '/' + items.length + ' thẻ.</b> ' + (items.every(i => place[i] === cfg.items[i].b) ? 'Hoàn hảo!' : 'Đọc giải thích các thẻ sai ở trên.') + '</div></div>' : '') +
      '<div class="row" style="margin-top:14px">' + (checked ? '<button class="btn ghost" id="bAgain">' + I('refresh') + ' Làm lại</button>' : '<button class="btn" id="bCheck"' + (pool.length ? ' disabled' : '') + '>' + I('check') + ' Kiểm tra</button>') + '</div></div>';
  }
  function put(i, b){ if (b === 'pool') delete place[i]; else place[i] = +b; sel = null; A.SND.tap(); render(); }
  el.addEventListener('click', e => {
    if (checked && !e.target.closest('#bAgain')) return;
    const c = e.target.closest('[data-c]');
    if (c) {
      const i = +c.dataset.c, bin = c.closest('[data-bin]');
      if (place[i] != null && sel != null && sel !== i) { put(sel, bin.dataset.bin); return; }
      if (place[i] != null && sel == null) { put(i, 'pool'); return; }
      sel = sel === i ? null : i; A.SND.tap(); render(); return;
    }
    const b = e.target.closest('[data-bin]'); if (b && sel != null) { put(sel, b.dataset.bin); return; }
    if (e.target.closest('#bCheck')) { checked = true; const ok = items.every(i => place[i] === cfg.items[i].b); if (ok) done(key, 40, why); else A.SND.no(); render(); }
    if (e.target.closest('#bAgain')) { checked = false; Object.keys(place).forEach(k => delete place[k]); render(); }
  });
  el.addEventListener('dragstart', e => { const c = e.target.closest('[data-c]'); if (c) e.dataTransfer.setData('text/plain', c.dataset.c); });
  el.addEventListener('dragover', e => { if (e.target.closest('[data-bin]')) e.preventDefault(); });
  el.addEventListener('drop', e => { const b = e.target.closest('[data-bin]'); const i = e.dataTransfer.getData('text/plain'); if (b && i !== '') { e.preventDefault(); put(+i, b.dataset.bin); } });
  render();
}
G.aihaykhong = el => bins(el, D.aiOrNot, 'aihaykhong', 'Phân loại đúng ứng dụng có AI');
G.dulieu = el => bins(el, D.dataBins, 'dulieu', 'Phân loại đúng dữ liệu đưa cho AI');

/* =========================================================
   6. DẠY AI – Naive Bayes thu nhỏ chạy ngay trên máy
   ========================================================= */
const tok = s => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(w => w.length > 1);
function nbTrain(data){ const c = [{}, {}], n = [0, 0], docs = [0, 0], V = new Set(); data.forEach(d => { docs[d.y]++; tok(d.t).forEach(w => { c[d.y][w] = (c[d.y][w] || 0) + 1; n[d.y]++; V.add(w); }); }); return { c, n, docs, V: V.size }; }
function nbScore(m, t){ return [0, 1].map(k => Math.log((m.docs[k] + 1) / (m.docs[0] + m.docs[1] + 2)) + tok(t).reduce((a, w) => a + Math.log(((m.c[k][w] || 0) + 1) / (m.n[k] + m.V)), 0)); }
function nbPred(m, t){ const s = nbScore(m, t); const p1 = 1 / (1 + Math.exp(s[0] - s[1])); return { y: p1 > .5 ? 1 : 0, p: p1 }; }
G.dayai = function(el){
  const TR = D.nbTrain, TE = D.nbTest, lab = {}; let model = null, stage = 1;
  const LB = ['Bình thường', 'Lừa đảo'];
  function render(){
    const n = Object.keys(lab).length;
    let h = '<div class="steps-bar">' + ['Dán nhãn dữ liệu', 'Huấn luyện', 'Kiểm tra trên tin mới'].map((t, k) => '<span class="' + (stage > k ? 'on' : '') + '"><b>' + (k + 1) + '</b>' + t + '</span>').join('') + '</div>';
    h += '<div class="grid g2" style="gap:24px;align-items:start"><div><h3>Bước 1. Dán nhãn ' + TR.length + ' tin nhắn</h3><p class="muted small">AI sẽ học đúng theo nhãn em dán. Em là “giáo viên” của AI.</p><div class="nb-list">' +
      TR.map((d, i) => '<div class="nb-row"><span>' + esc(d.t) + '</span><span class="tfbtn"><button data-lab="' + i + '" data-v="1" class="' + (lab[i] === 1 ? 'sel red' : '') + '">Lừa đảo</button><button data-lab="' + i + '" data-v="0" class="' + (lab[i] === 0 ? 'sel' : '') + '">Bình thường</button></span></div>').join('') + '</div>' +
      '<div class="row" style="margin-top:12px"><button class="btn" id="nbTrain"' + (n < TR.length ? ' disabled' : '') + '>' + I('cpu') + ' Huấn luyện AI (' + n + '/' + TR.length + ')</button><button class="btn ghost small" id="nbFlip">' + I('refresh') + ' Thử dán nhãn ngược hết</button></div></div><div id="nbOut">';
    if (model) {
      const words = Object.keys(model.c[1]).map(w => [w, Math.log(((model.c[1][w] || 0) + 1) / (model.n[1] + model.V)) - Math.log(((model.c[0][w] || 0) + 1) / (model.n[0] + model.V))]).sort((a, b) => b[1] - a[1]).slice(0, 10);
      const res = TE.map(d => ({ d, r: nbPred(model, d.t) })), acc = res.filter(x => x.r.y === x.d.y).length;
      const wrongLabels = TR.filter((d, i) => lab[i] !== d.y).length;
      h += '<h3>Bước 2. AI đã học được gì?</h3><p class="muted small">Những từ AI coi là dấu hiệu “lừa đảo” mạnh nhất (theo nhãn em dán):</p><div class="kw">' + words.map(w => '<span>' + esc(w[0]) + '</span>').join('') + '</div>' +
        '<h3 style="margin-top:18px">Bước 3. Kiểm tra trên ' + TE.length + ' tin AI chưa từng thấy</h3><div class="nb-list">' +
        res.map(x => '<div class="nb-row ' + (x.r.y === x.d.y ? 'good' : 'bad') + '"><span>' + esc(x.d.t) + '</span><span class="nb-pred"><b>' + LB[x.r.y] + '</b><small>' + Math.min(99, Math.round((x.r.y ? x.r.p : 1 - x.r.p) * 100)) + '% chắc</small>' + (x.r.y === x.d.y ? I('check') : I('x')) + '</span></div>').join('') + '</div>' +
        '<div class="fb ' + (acc >= 5 ? 'ok' : 'no') + '" style="margin-top:12px">' + I(acc >= 5 ? 'award' : 'alert') + '<div><b>AI đoán đúng ' + acc + '/' + TE.length + ' tin.</b> ' + (wrongLabels ? 'Em đã dán nhãn sai ' + wrongLabels + ' tin, nên AI học theo cái sai đó: <b>rác vào, rác ra</b>. ' : 'Dữ liệu sạch, nhãn đúng giúp AI dự đoán tốt. ') + 'Đây chính là quy trình thật: dữ liệu → nhãn → huấn luyện → kiểm tra. AI thật dùng hàng triệu ví dụ thay vì ' + TR.length + '.</div></div>';
    } else h += '<div class="card center muted" style="padding:40px 20px">' + I('cpu', 'big') + '<p>Dán nhãn đủ ' + TR.length + ' tin rồi bấm “Huấn luyện AI”.</p></div>';
    h += '</div></div>';
    el.innerHTML = h;
  }
  el.addEventListener('click', e => {
    const b = e.target.closest('[data-lab]');
    if (b) { lab[+b.dataset.lab] = +b.dataset.v; model = null; stage = 1; A.SND.tap(); render(); return; }
    if (e.target.closest('#nbFlip')) { TR.forEach((d, i) => lab[i] = 1 - d.y); model = null; stage = 1; A.toast('Đã dán nhãn ngược tất cả. Bấm Huấn luyện để xem điều gì xảy ra'); render(); return; }
    if (e.target.closest('#nbTrain')) {
      const btn = e.target.closest('#nbTrain'); btn.disabled = true; btn.innerHTML = I('refresh') + ' Đang huấn luyện…'; stage = 2;
      setTimeout(() => {
        model = nbTrain(TR.map((d, i) => ({ t: d.t, y: lab[i] }))); stage = 3; render();
        const acc = TE.filter(d => nbPred(model, d.t).y === d.y).length;
        if (acc >= 5) done('dayai', 60, 'Dạy AI nhận diện tin lừa đảo'); else A.SND.no();
        const o = $('#nbOut', el); if (o && innerWidth < 980) o.scrollIntoView({ behavior: 'smooth' });
      }, 900);
    }
  });
  render();
};

/* =========================================================
   7. ĐOÁN TỪ TIẾP THEO (như mô hình ngôn ngữ)
   ========================================================= */
G.tutiep = function(el){
  const R = D.nextWord; let i = 0, pick = null, score = 0;
  function render(){
    if (i >= R.length) {
      el.innerHTML = '<div class="hang center"><div class="eyebrow">Kết quả</div><div class="gres">' + score + '/' + R.length + '</div><p>Em đã chọn trùng từ “xác suất cao nhất” ' + score + ' lần.</p><div class="fb ok" style="text-align:left">' + I('sparkle') + '<div><b>Điều em vừa trải nghiệm:</b> mô hình ngôn ngữ chọn từ theo xác suất học từ dữ liệu. Vì vậy nó có thể đúng (Mặt trời mọc ở hướng Đông), có thể bịa (thủ đô của một nước không tồn tại), và có thể lặp lại định kiến có trong dữ liệu.</div></div><div class="row" style="justify-content:center;margin-top:12px"><button class="btn orange" id="tAgain">' + I('refresh') + ' Chơi lại</button></div></div>';
      done('tutiep', 40, 'Hiểu cách mô hình ngôn ngữ đoán từ'); return;
    }
    const r = R[i], top = r.o.reduce((a, o, k) => o[1] > r.o[a][1] ? k : a, 0);
    el.innerHTML = '<div class="hang"><div class="row between"><span class="pill">Câu ' + (i + 1) + '/' + R.length + '</span><span class="pill">' + I('star') + ' ' + score + '</span></div>' +
      '<p class="muted">Em là một mô hình ngôn ngữ. Từ nào có khả năng cao nhất để điền vào chỗ trống?</p>' +
      '<div class="nw-sent">' + esc(r.s).replace('___', '<span class="blank">' + (pick != null ? esc(r.o[pick][0]) : '&nbsp;?&nbsp;') + '</span>') + '</div>' +
      '<div class="nw-opts">' + r.o.map((o, k) => '<button class="nw' + (pick != null ? (k === top ? ' top' : '') + (k === pick ? ' me' : '') : '') + '" data-w="' + k + '"' + (pick != null ? ' disabled' : '') + '><span class="nw-t">' + esc(o[0]) + '</span>' + (pick != null ? '<span class="bar"><i style="width:' + o[1] + '%"></i></span><b>' + o[1] + '%</b>' : '') + '</button>').join('') + '</div>' +
      (pick != null ? '<div class="fb ' + (pick === top ? 'ok' : 'mid') + '">' + I('cpu') + '<div>' + esc(r.e) + '</div></div><div class="row" style="justify-content:center;margin-top:12px"><button class="btn" id="tNextW">' + (i < R.length - 1 ? 'Câu tiếp ' + I('right') : 'Xem kết quả ' + I('award')) + '</button></div>' : '') +
      '<p class="small muted" style="margin-top:12px">Xác suất ở đây là số liệu minh hoạ, không phải của một mô hình cụ thể.</p></div>';
  }
  el.addEventListener('click', e => {
    const w = e.target.closest('[data-w]');
    if (w && pick == null) { pick = +w.dataset.w; const r = R[i], top = r.o.reduce((a, o, k) => o[1] > r.o[a][1] ? k : a, 0); if (pick === top) { score++; A.SND.ok(); } else A.SND.tap(); render(); return; }
    if (e.target.closest('#tNextW')) { i++; pick = null; render(); }
    if (e.target.closest('#tAgain')) { i = 0; pick = null; score = 0; render(); }
  });
  render();
};
})();
