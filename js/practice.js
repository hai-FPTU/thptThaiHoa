/* =========================================================
   THỰC HÀNH TƯƠNG TÁC + MINIGAME “THẬT HAY GIẢ?”
   ========================================================= */
(function(){
const A = window.APP, D = A.D, st = A.st, $ = A.$, $$ = A.$$, esc = A.esc, I = window.ICON, P = window.PAGES;

const TABS = [
  { k: 'soianh', g: 1, ic: 'eye', t: 'Soi ảnh AI', d: 'Tìm 6 điểm bất thường trong một bức ảnh do “AI” tạo ra' },
  { k: 'dayai', g: 1, ic: 'cpu', t: 'Dạy AI', d: 'Dán nhãn dữ liệu, huấn luyện một AI nhỏ nhận diện tin lừa đảo' },
  { k: 'tutiep', g: 1, ic: 'sparkle', t: 'Đoán từ như AI', d: 'Đóng vai mô hình ngôn ngữ: chọn từ tiếp theo theo xác suất' },
  { k: 'mecung', g: 1, ic: 'flag', t: 'Mê cung an toàn số', d: 'Đưa robot về đích, trả lời đúng để mở cửa, tránh bẫy' },
  { k: 'noicap', g: 1, ic: 'link', t: 'Nối khái niệm', d: 'Ghép 8 thuật ngữ AI với ý nghĩa đúng' },
  { k: 'doantu', g: 1, ic: 'game', t: 'Đoán từ AI', d: 'Đoán thuật ngữ AI qua gợi ý trước khi lá chắn vỡ' },
  { k: 'aihaykhong', g: 1, ic: 'puzzle', t: 'Có AI hay không?', d: 'Kéo thả: ứng dụng nào dùng AI, ứng dụng nào không' },
  { k: 'prompt', g: 2, ic: 'message', t: 'Prompt Lab', d: 'Ghép prompt 4 phần, xem prompt nào giúp em học tốt nhất' },
  { k: 'dulieu', g: 2, ic: 'lock', t: 'Dữ liệu nào đưa cho AI?', d: 'Kéo thả: “Được nhập” hay “Không nhập”' },
  { k: 'soitin', g: 2, ic: 'search', t: 'Soi tin nhắn', d: 'Chạm vào chi tiết đáng ngờ: giọng giả, app AI giả, tin giả' },
  { k: 'link', g: 2, ic: 'link', t: 'Link AI thật – giả', d: 'Phân biệt trang công cụ AI chính thức và trang giả' },
  { k: 'tinhhuong', g: 2, ic: 'users', t: 'Xử lý tình huống', d: '5 tình huống dùng AI, chọn cách ứng xử đúng' },
  { k: 'sapxep', g: 2, ic: 'list', t: 'Quy trình kiến tạo', d: 'Sắp xếp các bước làm một sản phẩm AI cho trường' }
];
window.PRAC_KEYS = TABS.map(t => t.k);

function done(k, xp, why){ if (!st.prac[k]) { st.prac[k] = true; A.save(); A.addXP(xp, why); A.SND.win(); A.confetti(); } }

P.thuchanh = function(v, param){
  const cur = TABS.find(t => t.k === param);
  if (!cur) {
    const tile = (t, i) => '<a class="tile reveal" style="transition-delay:' + (i * 50) + 'ms" href="#thuchanh-' + t.k + '">' + (st.prac[t.k] ? '<span class="done-badge">✓ Đã xong</span>' : '') + '<span class="ibox" style="background:' + ['#e11d48', '#2563eb', '#16a34a', '#f97316', '#7c3aed', '#0ea5e9', '#0b1b3f'][i % 7] + '">' + I(t.ic) + '</span><h3>' + t.t + '</h3><p>' + t.d + '</p><span class="go">Bắt đầu ' + I('arrow') + '</span></a>';
    v.innerHTML = P.pageHead('Thực hành', 'Trò chơi & bài tập tương tác', 'Học bằng cách làm: soi ảnh, dạy AI, đi mê cung, đoán từ, kéo thả, xử lý tình huống. Mỗi bài 2 – 5 phút, làm trên điện thoại được.') +
    '<section class="sec"><div class="wrap"><div class="sec-head"><div><div class="eyebrow">Trò chơi</div><h2>Chơi mà học về AI</h2></div></div><div class="grid g4">' + TABS.filter(t => t.g === 1).map(tile).join('') + '</div>' +
    '<div class="sec-head" style="margin-top:40px"><div><div class="eyebrow">Thực hành</div><h2>Dùng AI an toàn, có trách nhiệm</h2></div></div><div class="grid g3">' + TABS.filter(t => t.g === 2).map(tile).join('') + '</div></div></section>';
    return;
  }
  v.innerHTML = P.pageHead('<a href="#thuchanh">Thực hành</a> / ' + cur.t, cur.t, cur.d) +
    '<div class="wrap prac-layout"><div class="tabs" role="tablist">' + TABS.map(t => '<button role="tab" aria-selected="' + (t.k === cur.k) + '" class="' + (t.k === cur.k ? 'on' : '') + '" data-k="' + t.k + '">' + (st.prac[t.k] ? I('check') + ' ' : '') + t.t + '</button>').join('') + '</div><div id="pbody"></div></div>';
  $('.tabs', v).onclick = e => { const b = e.target.closest('button'); if (b) location.hash = '#thuchanh-' + b.dataset.k; };
  const body = $('#pbody', v);
  return Object.assign({ soitin, link, prompt, tinhhuong, sapxep }, window.GAMES)[cur.k](body);
};

/* ---------- 1. Soi tin nhắn ---------- */
function soitin(el){
  let mi = 0;
  const found = D.sms.map(() => new Set());
  function render(){
    const m = D.sms[mi], flags = m.seg.map((s, i) => s[1] ? i : -1).filter(i => i >= 0), f = found[mi];
    const all = f.size === flags.length;
    el.innerHTML = '<div class="prac-grid">' +
      '<div><div class="phone"><div class="phone-in"><div class="phone-bar"><span class="av">' + esc(m.av) + '</span><div><b>' + esc(m.from) + '</b><small>' + esc(m.app) + '</small></div></div>' +
      '<div class="phone-body"><div class="bubble">' + m.seg.map((s, i) => '<span class="seg' + (f.has(i) ? ' found' : '') + (revealAll && s[1] && !f.has(i) ? ' miss' : '') + '" data-i="' + i + '" role="button" tabindex="0">' + esc(s[0]) + '</span>').join('') + '<span class="time">' + m.time + '</span></div></div></div></div></div>' +
      '<div><div class="row between"><h3>Tin nhắn ' + (mi + 1) + '/' + D.sms.length + '</h3><span class="counter">' + I('search') + ' Đã tìm ' + f.size + '/' + flags.length + ' dấu hiệu</span></div>' +
      '<p class="muted">Chạm vào những cụm từ em thấy đáng ngờ trong tin nhắn. Chạm nhầm chỗ bình thường sẽ không bị trừ điểm.</p>' +
      '<div class="reasons">' + [...f].sort((a, b) => a - b).map(i => '<div class="reason">' + I('alert') + '<div><b>“' + esc(m.seg[i][0].trim()) + '”</b><br>' + esc(m.seg[i][1]) + '</div></div>').join('') + '</div>' +
      (all ? '<div class="fb ok">' + I('check') + '<div><b>Tìm đủ rồi!</b> ' + esc(D.smsDone || 'Tin nhắn này là lừa đảo.') + ' ' + (mi < D.sms.length - 1 ? 'Sang tin tiếp theo nhé.' : '') + '</div></div>' : '') +
      '<div class="row" style="margin-top:16px">' + (mi > 0 ? '<button class="btn ghost small" id="sPrev">' + I('left') + ' Tin trước</button>' : '') +
      (!all ? '<button class="btn ghost small" id="sShow">' + I('eye') + ' Gợi ý chỗ còn thiếu</button>' : '') +
      (mi < D.sms.length - 1 ? '<button class="btn small" id="sNext">Tin tiếp theo ' + I('right') + '</button>' : '') + '</div></div></div>';
  }
  let revealAll = false;
  el.addEventListener('click', e => {
    const s = e.target.closest('.seg');
    if (s) {
      const i = +s.dataset.i, m = D.sms[mi];
      if (m.seg[i][1]) { if (!found[mi].has(i)) { found[mi].add(i); A.SND.ok(); A.announce('Đúng: ' + m.seg[i][1]); } }
      else { A.SND.tap(); s.classList.add('nope'); setTimeout(() => s.classList.remove('nope'), 400); return; }
      check(); render(); return;
    }
    if (e.target.closest('#sNext')) { mi++; revealAll = false; render(); }
    if (e.target.closest('#sPrev')) { mi--; revealAll = false; render(); }
    if (e.target.closest('#sShow')) { revealAll = true; render(); }
  });
  el.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('seg')) { e.preventDefault(); e.target.click(); } });
  function check(){
    const total = D.sms.reduce((a, m) => a + m.seg.filter(s => s[1]).length, 0);
    const got = found.reduce((a, f) => a + f.size, 0);
    if (got === total) done('soitin', 50, 'Soi đủ mọi dấu hiệu');
  }
  render();
}

/* ---------- 2 & 4. Phân loại (link thật – giả; dữ liệu nên / không nên đưa cho AI) ---------- */
function classify(el, src, o){
  const list = A.shuffle(src), res = {};
  function render(){
    const n = Object.keys(res).length, right = Object.keys(res).filter(k => res[k] === list[k].ok).length;
    el.innerHTML = '<div style="max-width:860px"><div class="row between"><p class="muted" style="margin:0">' + o.lead + '</p><span class="counter">' + right + '/' + list.length + ' đúng</span></div>' +
      list.map((u, i) => {
        const r = res[i]; const cls = r == null ? '' : (r === u.ok ? ' r-ok' : ' r-no');
        return '<div class="urlrow' + cls + '">' + (o.code ? '<code>' + esc(u.u) + '</code>' : '<span style="font-weight:600">' + esc(u.u) + '</span>') +
          (r == null ? '<div class="ub"><button class="ok-b" data-i="' + i + '" data-v="1">' + I('check') + ' ' + o.yes + '</button><button class="no-b" data-i="' + i + '" data-v="0">' + I('x') + ' ' + o.no + '</button></div>' : '<b style="color:' + (u.ok ? 'var(--green)' : 'var(--red)') + '">' + (u.ok ? o.yesTag : o.noTag) + '</b>') +
          (r != null ? '<div class="ue">' + (r === u.ok ? '✅ ' : '❌ ') + esc(u.e) + '</div>' : '') + '</div>';
      }).join('') +
      (n === list.length ? '<div class="fb ' + (right >= list.length - 1 ? 'ok' : 'mid') + '">' + I('award') + '<div><b>Em đúng ' + right + '/' + list.length + '.</b> ' + o.tip + '</div></div><div class="row" style="margin-top:12px"><button class="btn ghost" id="uAgain">' + I('refresh') + ' Làm lại</button></div>' : '') + '</div>';
  }
  el.addEventListener('click', e => {
    const b = e.target.closest('[data-v]');
    if (b) { const i = +b.dataset.i, val = b.dataset.v === '1'; res[i] = val; if (val === list[i].ok) A.SND.ok(); else A.SND.no(); render(); if (Object.keys(res).length === list.length) done(o.key, 40, o.doneMsg); }
    if (e.target.closest('#uAgain')) { Object.keys(res).forEach(k => delete res[k]); render(); }
  });
  render();
}
function link(el){
  classify(el, D.urls, { key: 'link', code: true, yes: 'Thật', no: 'Giả', yesTag: 'LINK THẬT', noTag: 'LINK GIẢ', doneMsg: 'Hoàn thành Link thật – giả',
    lead: 'Đọc kỹ tên miền (phần ngay trước dấu “/” đầu tiên). Link nào là trang chính thức, link nào là giả?',
    tip: 'Mẹo: tự gõ địa chỉ trang chính thức hoặc dùng ứng dụng từ kho chính thức, đừng bấm link được gửi tới.' });
}

/* ---------- 3. Prompt Lab ---------- */
function prompt(el){
  const L = D.promptLab, pick = L.parts.map(() => null);
  const W = { good: 25, mid: 10, bad: 0 };
  function render(){
    const chosen = pick.filter(x => x != null).length;
    const score = pick.reduce((a, j, i) => a + (j == null ? 0 : W[L.parts[i].o[j].r]), 0);
    const text = pick.map((j, i) => j == null ? '' : L.parts[i].o[j].t).filter(Boolean).join(' ');
    const lvl = score >= 100 ? ['Xuất sắc', 'var(--green)'] : score >= 70 ? ['Khá tốt', 'var(--amber)'] : ['Cần cải thiện', 'var(--red)'];
    const privacy = pick.some((j, i) => j != null && L.parts[i].o[j].r === 'bad' && L.parts[i].k === 'Bối cảnh');
    el.innerHTML = '<div class="grid g2" style="gap:24px;align-items:start"><div>' +
      '<div class="card" style="margin-bottom:14px"><b>Tình huống:</b> ' + esc(L.topic) + '<br><span class="muted small">Chọn 1 lựa chọn cho mỗi phần. Prompt sẽ tự ghép ở bên cạnh.</span></div>' +
      L.parts.map((p, i) => '<div class="q" style="margin:10px 0"><h4><span class="qn">' + (i + 1) + '</span>' + esc(p.k) + '</h4><div class="opts">' + p.o.map((o, j) => {
        let c = 'opt'; if (pick[i] === j) c += o.r === 'good' ? ' right' : o.r === 'bad' ? ' wrong' : ' sel';
        return '<button class="' + c + '" data-p="' + i + '" data-j="' + j + '"><span class="lt">' + A.L[j] + '</span><span>' + esc(o.label) + '</span></button>';
      }).join('') + '</div>' + (pick[i] != null ? '<div class="fb ' + ({ good: 'ok', mid: 'mid', bad: 'no' })[p.o[pick[i]].r] + '">' + I(p.o[pick[i]].r === 'good' ? 'check' : 'alert') + '<div>' + esc(p.o[pick[i]].e) + '</div></div>' : '') + '</div>').join('') +
      '</div><div><div class="card" style="position:sticky;top:86px"><h3>' + I('message') + ' Prompt của em</h3>' +
      '<div class="urlrow" style="grid-template-columns:1fr;min-height:120px;align-items:start"><code style="white-space:pre-wrap">' + (text ? esc(text) : '<span class="muted">Chưa có nội dung…</span>') + '</code></div>' +
      '<div class="pwinfo"><span>Chất lượng prompt</span><span style="color:' + lvl[1] + '">' + (chosen ? lvl[0] + ' · ' + score + '/100' : '') + '</span></div>' +
      '<div class="meter"><i style="width:' + score + '%;background:' + lvl[1] + '"></i></div>' +
      (privacy ? '<div class="fb no">' + I('lock') + '<div><b>Cảnh báo riêng tư:</b> prompt đang chứa thông tin cá nhân. Hãy bỏ đi.</div></div>' : '') +
      (score === 100 ? '<div class="fb ok">' + I('award') + '<div><b>Prompt chuẩn 4 phần!</b> Có vai trò, nhiệm vụ học tập, bối cảnh không lộ thông tin cá nhân và định dạng rõ ràng.</div></div>' : '') +
      '<div class="row" style="margin-top:12px"><button class="btn small" id="pCopy"' + (text ? '' : ' disabled') + '>' + I('file') + ' Sao chép prompt</button><button class="btn ghost small" id="pReset">' + I('refresh') + ' Làm lại</button></div>' +
      '<p class="small muted" style="margin-top:10px">Dán prompt vào công cụ AI nhà trường cho phép để thử. So sánh với prompt sơ sài “Nói về quang hợp” để thấy khác biệt.</p></div></div></div>';
  }
  el.addEventListener('click', e => {
    const b = e.target.closest('[data-p]');
    if (b) { const i = +b.dataset.p, j = +b.dataset.j; pick[i] = j; const r = L.parts[i].o[j].r; if (r === 'good') A.SND.ok(); else if (r === 'bad') A.SND.no(); else A.SND.tap(); render(); if (pick.every((j, k) => j != null && L.parts[k].o[j].r === 'good')) done('prompt', 40, 'Viết prompt chuẩn 4 phần'); return; }
    if (e.target.closest('#pReset')) { pick.fill(null); render(); }
    if (e.target.closest('#pCopy')) {
      const text = pick.map((j, i) => j == null ? '' : L.parts[i].o[j].t).filter(Boolean).join(' ');
      const ok = () => A.toast('Đã sao chép prompt'), no = () => A.toast('Không sao chép được, hãy bôi đen và sao chép thủ công');
      try { navigator.clipboard.writeText(text).then(ok, no); } catch(err) { no(); }
    }
  });
  render();
}

/* ---------- 5. Tình huống ---------- */
function tinhhuong(el){
  let i = 0; const pick = {};
  function render(){
    const s = D.scenarios[i], p = pick[i];
    el.innerHTML = '<div class="scen"><div class="row between" style="margin-bottom:10px"><span class="pill">Tình huống ' + (i + 1) + '/' + D.scenarios.length + '</span><span class="counter">' + Object.keys(pick).filter(k => D.scenarios[k].o[pick[k]].r === 'good').length + ' lựa chọn đúng</span></div>' +
      '<div class="story"><h3>' + esc(s.t) + '</h3><p>' + esc(s.s) + '</p><p class="muted small" style="margin-bottom:0">Em sẽ làm gì?</p></div>' +
      '<div class="opts" style="margin-top:14px">' + s.o.map((o, j) => { let c = 'opt'; if (p != null) { if (o.r === 'good') c += ' right'; else if (j === p) c += ' wrong'; } return '<button class="' + c + '" data-j="' + j + '"' + (p != null ? ' disabled' : '') + '><span class="lt">' + A.L[j] + '</span><span>' + esc(o.t) + '</span></button>'; }).join('') + '</div>' +
      (p != null ? '<div class="fb ' + (s.o[p].r === 'good' ? 'ok' : s.o[p].r === 'mid' ? 'mid' : 'no') + '">' + I(s.o[p].r === 'good' ? 'check' : 'alert') + '<div>' + esc(s.o[p].e) + (s.o[p].r !== 'good' ? '<br><b>Cách tốt nhất:</b> ' + esc(s.o.find(o => o.r === 'good').t) + '.' : '') + '</div></div>' : '') +
      '<div class="row" style="margin-top:16px">' + (i > 0 ? '<button class="btn ghost small" id="tPrev">' + I('left') + ' Trước</button>' : '') + (p != null && i < D.scenarios.length - 1 ? '<button class="btn small" id="tNext">Tình huống tiếp ' + I('right') + '</button>' : '') + (p != null && i === D.scenarios.length - 1 ? '<a class="btn orange small" href="#thuchanh-sapxep">Sang bài tiếp ' + I('right') + '</a>' : '') + '</div></div>';
  }
  el.addEventListener('click', e => {
    const b = e.target.closest('.opt');
    if (b && !b.disabled) { const j = +b.dataset.j; pick[i] = j; const r = D.scenarios[i].o[j].r; if (r === 'good') { A.SND.ok(); A.addXP(10); } else A.SND.no(); render(); if (Object.keys(pick).length === D.scenarios.length) done('tinhhuong', 40, 'Xử lý xong 5 tình huống'); return; }
    if (e.target.closest('#tNext')) { i++; render(); }
    if (e.target.closest('#tPrev')) { i--; render(); }
  });
  render();
}

/* ---------- 6. Sắp xếp ---------- */
function sapxep(el){
  const items = D.order.items; let mix = A.shuffle(items.map((_, i) => i)); while (mix.every((x, i) => x === i)) mix = A.shuffle(mix);
  let seq = [], checked = false;
  function render(){
    el.innerHTML = '<div style="max-width:780px"><div class="story card"><p style="margin:0">' + esc(D.order.t) + '</p></div><p class="muted small">Chạm lần lượt theo thứ tự em cho là đúng. Chạm lại để bỏ chọn.</p><div class="sortlist">' +
      mix.map(i => { const pos = seq.indexOf(i); let c = 'sortitem'; if (pos >= 0) c += ' picked'; if (checked) c = 'sortitem ' + (pos === i ? 'okp' : 'badp'); return '<button class="' + c + '" data-i="' + i + '"' + (checked ? ' disabled' : '') + '><span class="bn">' + (pos >= 0 ? pos + 1 : '·') + '</span><span>' + esc(items[i]) + (checked && pos !== i ? ' <b class="small" style="color:var(--green)">(đúng: bước ' + (i + 1) + ')</b>' : '') + '</span></button>'; }).join('') + '</div>' +
      (checked ? '<div class="fb ' + (seq.every((x, k) => x === k) ? 'ok' : 'mid') + '">' + I('lifebuoy') + '<div><b>Vì sao thứ tự này?</b> ' + esc(D.order.why || '') + '</div></div>' : '') +
      '<div class="row" style="margin-top:14px">' + (checked ? '<button class="btn ghost" id="oAgain">' + I('refresh') + ' Làm lại</button>' : '<button class="btn" id="oCheck"' + (seq.length < items.length ? ' disabled' : '') + '>' + I('check') + ' Kiểm tra</button>') + '</div></div>';
  }
  el.addEventListener('click', e => {
    const b = e.target.closest('.sortitem');
    if (b && !checked) { const i = +b.dataset.i, p = seq.indexOf(i); if (p >= 0) seq.splice(p, 1); else seq.push(i); A.SND.tap(); render(); return; }
    if (e.target.closest('#oCheck')) { checked = true; if (seq.every((x, k) => x === k)) done('sapxep', 30, 'Sắp xếp chính xác'); else A.SND.no(); render(); }
    if (e.target.closest('#oAgain')) { checked = false; seq = []; mix = A.shuffle(mix); render(); }
  });
  render();
}

/* =========================================================
   MINIGAME THẬT HAY GIẢ?
   ========================================================= */
P.minigame = function(v){
  const N = 10, T = 15;
  let qs = [], i = 0, score = 0, timer = null, t0 = 0, answered = false, log = [];
  v.innerHTML = P.pageHead('Minigame', 'Thật hay Giả?', N + ' câu ngẫu nhiên từ ngân hàng ' + D.tf.length + ' câu. Mỗi câu ' + T + ' giây. Đọc nhận định rồi chọn THẬT (đúng) hoặc GIẢ (sai).') + '<div class="game"><div id="g"></div></div>';
  const g = $('#g', v);
  function start(){ qs = A.shuffle(D.tf).slice(0, N); i = 0; score = 0; log = []; ask(); }
  function intro(){
    g.innerHTML = '<div class="gcard gstart"><span class="pill">' + I('timer') + ' ' + N + ' câu · ' + T + ' giây/câu</span><h2 style="margin:16px 0 6px">Thật hay Giả?</h2><p>Kiểm tra phản xạ an toàn số của em. Có thể dùng bàn phím: phím ← chọn THẬT, phím → chọn GIẢ.</p>' +
      (st.game.best ? '<p><b>Điểm cao nhất của em: ' + st.game.best + '/' + N + '</b></p>' : '') +
      '<div class="row" style="justify-content:center;margin-top:18px"><button class="btn orange" id="gGo">' + I('play') + ' Bắt đầu</button></div>' + boardHTML() + '</div>';
    $('#gGo', g).onclick = start;
  }
  function boardHTML(){ if (!st.game.board.length) return ''; return '<h4 style="color:#fff;margin-top:22px">Lịch sử trên máy này</h4><ul class="board" style="color:var(--ink)">' + st.game.board.slice(0, 5).map(b => '<li><span>' + esc(b.n || 'Em') + ' · ' + b.d + '</span><b>' + b.s + '/' + N + '</b></li>').join('') + '</ul>'; }
  function ask(){
    answered = false; const q = qs[i];
    g.innerHTML = '<div class="gcard"><div class="gtop"><span class="pill">Câu ' + (i + 1) + '/' + N + '</span><span class="pill" id="gT">' + I('clock') + ' ' + T + 's</span><span class="pill">' + I('star') + ' ' + score + ' điểm</span></div>' +
      '<div class="gtimer"><i id="gBar"></i></div><div class="gq" aria-live="polite">' + esc(q.q) + '</div><div id="gFb"></div>' +
      '<div class="gbtns" id="gB"><button class="gbtn t" data-v="1">' + I('check') + ' THẬT</button><button class="gbtn f" data-v="0">' + I('x') + ' GIẢ</button></div></div>';
    $('#gB', g).onclick = e => { const b = e.target.closest('[data-v]'); if (b) answer(b.dataset.v === '1'); };
    t0 = performance.now(); clearInterval(timer);
    timer = setInterval(() => {
      const left = T - (performance.now() - t0) / 1000;
      const bar = $('#gBar', g); if (!bar) { clearInterval(timer); return; }
      bar.style.transform = 'scaleX(' + Math.max(left / T, 0) + ')';
      $('#gT', g).innerHTML = I('clock') + ' ' + Math.ceil(Math.max(left, 0)) + 's';
      if (left <= 0) answer(null);
    }, 100);
  }
  function answer(val){
    if (answered) return; answered = true; clearInterval(timer);
    const q = qs[i], ok = val === q.a;
    if (ok) { score++; A.SND.ok(); } else A.SND.no();
    log.push(ok);
    $('#gB', g).outerHTML = '<div class="row" style="justify-content:center;margin-top:18px"><button class="btn" id="gN">' + (i < N - 1 ? 'Câu tiếp ' + I('right') : 'Xem kết quả ' + I('award')) + '</button></div>';
    $('#gFb', g).innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '" style="text-align:left">' + I(ok ? 'check' : 'alert') + '<div><b>' + (val === null ? 'Hết giờ! ' : ok ? 'Chính xác! ' : 'Chưa đúng! ') + 'Đáp án: ' + (q.a ? 'THẬT' : 'GIẢ') + '.</b> ' + esc(q.e) + '</div></div>';
    A.announce((ok ? 'Chính xác. ' : 'Chưa đúng. ') + q.e);
    $('#gN', g).onclick = () => { i++; if (i < N) ask(); else finish(); };
    $('#gN', g).focus();
  }
  function finish(){
    const prevBest = st.game.best || 0;
    st.game.plays++; st.game.best = Math.max(prevBest, score);
    const d = new Date(); st.game.board.unshift({ n: st.name, s: score, d: d.getDate() + '/' + (d.getMonth() + 1) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') });
    st.game.board = st.game.board.slice(0, 10);
    A.save();
    A.addXP(score * 5, 'Minigame ' + score + '/' + N);
    if (score >= 7) { st.prac.game = true; A.save(); }
    if (score >= 8) { A.SND.win(); A.confetti(); }
    const msg = score === N ? 'Tuyệt đối! Em là “Lá chắn số” của lớp.' : score >= 8 ? 'Xuất sắc! Phản xạ an toàn số rất tốt.' : score >= 6 ? 'Khá tốt. Đọc lại phần giải thích các câu sai nhé.' : 'Cần ôn thêm. Hãy xem lại Cẩm nang và Bài học.';
    g.innerHTML = '<div class="gcard"><div class="eyebrow">Kết quả</div><div class="gres">' + score + '/' + N + '</div><p style="font-weight:700">' + msg + '</p>' +
      '<div class="row" style="justify-content:center;gap:6px;margin:12px 0">' + log.map(x => '<span style="width:18px;height:18px;border-radius:50%;background:' + (x ? 'var(--green)' : 'var(--red)') + '"></span>').join('') + '</div>' +
      (score > prevBest && prevBest ? '<p class="pill">' + I('star') + ' Kỷ lục mới!</p>' : '') +
      (score >= 7 ? '<p class="small muted">Đạt từ 7/10: đã tính là hoàn thành Minigame cho giấy chứng nhận.</p>' : '<p class="small muted">Đạt từ 7/10 để tính hoàn thành Minigame cho giấy chứng nhận.</p>') +
      '<div class="row" style="justify-content:center;margin-top:12px"><button class="btn orange" id="gAgain">' + I('refresh') + ' Chơi lại</button><a class="btn ghost" href="#camnang">Đọc Cẩm nang</a><a class="btn ghost" href="#chungnhan">Nhận chứng nhận</a></div></div>';
    $('#gAgain', g).onclick = start;
  }
  const key = e => {
    if (!document.body.contains(g)) { document.removeEventListener('keydown', key); return; }
    if (answered || !$('#gB', g)) return;
    if (e.key === 'ArrowLeft') answer(true); if (e.key === 'ArrowRight') answer(false);
  };
  document.addEventListener('keydown', key);
  intro();
  return () => { clearInterval(timer); document.removeEventListener('keydown', key); };
};
})();
