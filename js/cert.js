/* =========================================================
   CAM KẾT & GIẤY CHỨNG NHẬN (vẽ bằng canvas, tải PNG)
   ========================================================= */
(function(){
const A = window.APP, D = A.D, st = A.st, $ = A.$, $$ = A.$$, esc = A.esc, I = window.ICON, P = window.PAGES;
const C = D.certificate;

P.chungnhan = function(v){
  v.innerHTML = P.pageHead('Chứng nhận', 'Cam kết an toàn số & Giấy chứng nhận', 'Hoàn thành các điều kiện, ký cam kết, rồi tải giấy chứng nhận về máy để chia sẻ hoặc in.') +
  '<div class="wrap cert-layout">' +
    '<div>' +
      '<div class="card"><h3 style="margin-bottom:12px">' + I('user') + ' Thông tin in trên giấy</h3>' +
        '<div class="field"><label for="cName">Họ và tên</label><input id="cName" maxlength="40" autocomplete="off" placeholder="Nguyễn Văn An" value="' + esc(st.name) + '"></div>' +
        '<div class="field"><label for="cCls">Lớp</label><input id="cCls" maxlength="10" autocomplete="off" placeholder="11A3" value="' + esc(st.cls) + '"></div>' +
        '<p class="small muted" style="margin:0">Chỉ lưu trên máy em. Không nhập số điện thoại, địa chỉ.</p></div>' +
      '<div class="card" style="margin-top:16px"><h3 style="margin-bottom:8px">' + I('heart') + ' Lời cam kết</h3><div id="pl">' + C.pledges.map((p, i) => '<label class="pledge"><input type="checkbox" data-p="' + i + '"' + (st.pledges.includes(i) ? ' checked' : '') + '><span>' + esc(p) + '</span></label>').join('') + '</div></div>' +
      '<div class="card" style="margin-top:16px"><h3 style="margin-bottom:10px">' + I('list') + ' Điều kiện nhận giấy</h3><ul class="req" id="req"></ul></div>' +
    '</div>' +
    '<div>' +
      '<div class="row between" style="margin-bottom:12px"><div class="seg-ctrl" role="group" aria-label="Kiểu nền"><button data-th="dark">Nền tối</button><button data-th="light">Nền sáng (in)</button></div><button class="btn orange" id="cDl">' + I('download') + ' Tải giấy chứng nhận</button></div>' +
      '<canvas id="certCanvas" width="1600" height="1131" aria-label="Xem trước giấy chứng nhận"></canvas>' +
      '<p class="small muted" style="margin-top:10px">Nền tối để chia sẻ trên điện thoại; nền sáng để in, tiết kiệm mực.</p>' +
    '</div>' +
  '</div>';
  const name = $('#cName', v), cls = $('#cCls', v);
  function reqs(){
    const ld = P.lessonsDone(), pd = P.pracDone();
    return [
      [!!st.name.trim() && !!st.cls.trim(), 'Nhập họ tên và lớp', null],
      [ld >= C.minLessons, 'Hoàn thành ít nhất ' + C.minLessons + '/' + D.lessons.length + ' bài học (' + ld + '/' + D.lessons.length + ')', '#baihoc'],
      [pd >= (C.minPrac || 3), 'Hoàn thành ít nhất ' + (C.minPrac || 3) + '/' + window.PRAC_KEYS.length + ' bài thực hành, trò chơi (' + pd + '/' + window.PRAC_KEYS.length + ')', '#thuchanh'],
      [!!st.prac.game, 'Đạt từ 7/10 ở Minigame (cao nhất: ' + (st.game.best || 0) + '/10)', '#minigame'],
      [st.pledges.length === C.pledges.length, 'Đánh dấu đủ ' + C.pledges.length + ' lời cam kết', null]
    ];
  }
  function ok(){ return reqs().every(r => r[0]); }
  function refresh(){
    $('#req', v).innerHTML = reqs().map(r => '<li class="' + (r[0] ? 'y' : '') + '">' + I(r[0] ? 'check' : 'clock') + '<span>' + esc(r[1]) + '</span>' + (!r[0] && r[2] ? '<a href="' + r[2] + '">Làm ngay</a>' : '') + '</li>').join('');
    $('#cDl', v).disabled = !ok();
    $$('.seg-ctrl button', v).forEach(b => b.classList.toggle('on', b.dataset.th === st.certTheme));
    draw($('#certCanvas', v), ok());
  }
  name.addEventListener('input', () => { st.name = name.value; A.save(); refresh(); });
  cls.addEventListener('input', () => { st.cls = cls.value.toUpperCase(); A.save(); refresh(); });
  $('#pl', v).addEventListener('change', e => { const i = +e.target.dataset.p; st.pledges = st.pledges.filter(x => x !== i); if (e.target.checked) st.pledges.push(i); A.save(); A.SND.tap(); refresh(); });
  $('.seg-ctrl', v).onclick = e => { const b = e.target.closest('button'); if (b) { st.certTheme = b.dataset.th; A.save(); refresh(); } };
  $('#cDl', v).onclick = () => {
    const cv = $('#certCanvas', v); draw(cv, true);
    cv.toBlob(async b => {
      const fn = 'giay-chung-nhan-la-chan-so-' + (st.name || 'hoc-sinh').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/\s+/g, '-').toLowerCase() + '.png';
      const ok = await A.saveFile(fn, b);
      if (!ok) return;
      if (!st.prac.cert) { st.prac.cert = true; A.save(); A.addXP(50, 'Nhận giấy chứng nhận'); }
      A.SND.win(); A.confetti();
    }, 'image/png');
  };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(refresh);
  refresh();
};

function draw(cv, ready){
  const c = cv.getContext('2d'), W = cv.width, H = cv.height, dark = st.certTheme !== 'light';
  const F = "'Be Vietnam Pro', Arial, sans-serif";
  const ink = dark ? '#ffffff' : '#0b1b3f', sub = dark ? '#a5b4fc' : '#475569', acc = dark ? '#67e8f9' : '#2563eb';
  // nền
  if (dark) { const g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#0b1b3f'); g.addColorStop(.6, '#1e3a8a'); g.addColorStop(1, '#0e7490'); c.fillStyle = g; }
  else c.fillStyle = '#ffffff';
  c.fillRect(0, 0, W, H);
  // lưới mờ
  c.strokeStyle = dark ? 'rgba(255,255,255,.05)' : 'rgba(37,99,235,.06)'; c.lineWidth = 1;
  for (let x = 0; x < W; x += 40) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); }
  for (let y = 0; y < H; y += 40) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
  // khung
  c.strokeStyle = acc; c.lineWidth = 6; rr(c, 40, 40, W - 80, H - 80, 28); c.stroke();
  c.strokeStyle = dark ? 'rgba(255,255,255,.25)' : 'rgba(11,27,63,.2)'; c.lineWidth = 2; rr(c, 62, 62, W - 124, H - 124, 20); c.stroke();
  // nhị phân trang trí
  c.fillStyle = dark ? 'rgba(103,232,249,.35)' : 'rgba(37,99,235,.25)'; c.font = '600 18px monospace'; c.textAlign = 'left';
  c.fillText('01001100 01000001 01000011 01001000 01000001 01001110', 90, 108);
  c.textAlign = 'right'; c.fillText('01010011 01001111', W - 90, 108);
  // khiên
  shield(c, W / 2, 190, 62, dark);
  c.textAlign = 'center';
  c.fillStyle = sub; c.font = '700 26px ' + F; c.fillText(C.org, W / 2, 300);
  c.fillStyle = ink; c.font = '900 92px ' + F; c.fillText(C.title, W / 2, 400);
  c.fillStyle = acc; c.font = '700 32px ' + F; c.fillText(C.sub, W / 2, 456);
  c.fillStyle = sub; c.font = '500 26px ' + F; c.fillText('Chứng nhận học sinh', W / 2, 530);
  const nm = (st.name || '').trim() || 'Họ và tên học sinh';
  c.fillStyle = ink; let fs = 78; c.font = '900 ' + fs + 'px ' + F; while (c.measureText(nm.toUpperCase()).width > W - 360 && fs > 40) { fs -= 4; c.font = '900 ' + fs + 'px ' + F; }
  c.fillText(nm.toUpperCase(), W / 2, 618);
  c.strokeStyle = acc; c.lineWidth = 3; c.beginPath(); c.moveTo(W / 2 - 300, 646); c.lineTo(W / 2 + 300, 646); c.stroke();
  c.fillStyle = sub; c.font = '600 30px ' + F; c.fillText('Lớp ' + ((st.cls || '').trim() || '……') + '  ·  ' + D.site.school, W / 2, 698);
  c.fillStyle = ink; c.font = '500 25px ' + F; c.fillText('đã hoàn thành chương trình học tập tương tác chủ đề', W / 2, 752);
  c.font = '700 27px ' + F; c.fillText('“' + C.topic + '”', W / 2, 792);
  // huy hiệu
  const badges = [['Bài học', P.lessonsDone() + '/' + D.lessons.length], ['Thực hành', P.pracDone() + '/' + window.PRAC_KEYS.length], ['Minigame', (st.game.best || 0) + '/10'], ['Cam kết', st.pledges.length + '/' + C.pledges.length]];
  const bw = 210, gap = 26, bx = W / 2 - (badges.length * bw + (badges.length - 1) * gap) / 2;
  badges.forEach((b, i) => {
    const x = bx + i * (bw + gap), y = 836;
    c.fillStyle = dark ? 'rgba(255,255,255,.08)' : '#eef4ff'; rr(c, x, y, bw, 96, 18); c.fill();
    c.strokeStyle = dark ? 'rgba(255,255,255,.18)' : '#c7d6f2'; c.lineWidth = 2; rr(c, x, y, bw, 96, 18); c.stroke();
    c.fillStyle = acc; c.font = '900 38px ' + F; c.fillText(b[1], x + bw / 2, y + 50);
    c.fillStyle = sub; c.font = '600 20px ' + F; c.fillText(b[0], x + bw / 2, y + 80);
  });
  // ngày & ký
  const d = new Date();
  c.textAlign = 'left'; c.fillStyle = sub; c.font = '500 22px ' + F;
  c.fillText((D.site.city ? D.site.city + ', ngày ' : 'Ngày ') + d.getDate() + ' tháng ' + (d.getMonth() + 1) + ' năm ' + d.getFullYear(), 120, 1010);
  c.fillText(C.footnote || '', 120, 1044);
  c.textAlign = 'right'; c.fillStyle = ink; c.font = '800 24px ' + F; c.fillText(C.signTitle, W - 120, 1010);
  if (C.signName) { c.font = '700 24px ' + F; c.fillText(C.signName, W - 120, 1044); }
  else { c.fillStyle = sub; c.font = '500 20px ' + F; c.fillText(D.site.unit + ' · ' + D.site.year, W - 120, 1044); }
  // dấu chưa đủ điều kiện
  if (!ready) {
    c.save(); c.translate(W / 2, H / 2); c.rotate(-.18); c.globalAlpha = .55;
    c.fillStyle = 'rgba(225,29,72,.12)'; rr(c, -420, -70, 840, 140, 24); c.fill();
    c.strokeStyle = '#e11d48'; c.lineWidth = 5; rr(c, -420, -70, 840, 140, 24); c.stroke();
    c.fillStyle = '#e11d48'; c.textAlign = 'center'; c.font = '900 54px ' + F; c.fillText('BẢN XEM TRƯỚC', 0, -2); c.font = '700 26px ' + F; c.fillText('Hoàn thành đủ điều kiện để tải giấy', 0, 42);
    c.restore();
  }
}
function rr(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function shield(c, cx, cy, s, dark){
  const g = c.createLinearGradient(cx - s, cy - s, cx + s, cy + s); g.addColorStop(0, '#22d3ee'); g.addColorStop(1, '#2563eb');
  c.fillStyle = g; c.beginPath(); c.moveTo(cx, cy - s); c.lineTo(cx + s * .85, cy - s * .65); c.lineTo(cx + s * .85, cy - s * .05);
  c.bezierCurveTo(cx + s * .85, cy + s * .55, cx + s * .4, cy + s * .9, cx, cy + s * 1.05); c.bezierCurveTo(cx - s * .4, cy + s * .9, cx - s * .85, cy + s * .55, cx - s * .85, cy - s * .05);
  c.lineTo(cx - s * .85, cy - s * .65); c.closePath(); c.fill();
  c.strokeStyle = '#fff'; c.lineWidth = s * .16; c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath(); c.moveTo(cx - s * .35, cy + s * .02); c.lineTo(cx - s * .08, cy + s * .3); c.lineTo(cx + s * .4, cy - s * .2); c.stroke();
}
})();
