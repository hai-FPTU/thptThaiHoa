/* =========================================================
   KIẾN TẠO SỐ – TOÀN BỘ NỘI DUNG (sửa nội dung ở tệp này)
   Chủ đề: Trí tuệ nhân tạo & An toàn thông tin
   Kỷ nguyên AI: Từ người dùng thụ động đến nhà kiến tạo số
   Trường THPT Thái Hòa – Ngày 16/11/2026
   Lưu ý: nội dung pháp luật cần được rà soát trước khi phổ biến
   ========================================================= */
window.DATA = {

/* ---------- Thông tin chung ---------- */
site: {
  key: 'kientaoso-thaihoa-v1',           // khoá lưu tiến độ trên máy (mỗi trang một khoá)
  brand: 'KIẾN TẠO SỐ',
  brandSub: 'AI & An toàn thông tin',
  name: 'Kiến Tạo Số',
  h1a: 'Trí tuệ nhân tạo & An toàn thông tin',
  h1b: 'Kỷ nguyên AI: Từ người dùng thụ động đến nhà kiến tạo số',
  slogan: 'Trí tuệ nhân tạo & An toàn thông tin – Kỷ nguyên AI: Từ người dùng thụ động đến nhà kiến tạo số',
  school: 'Trường THPT Thái Hòa',
  city: '',
  unit: 'Tổ Tin học',
  year: 'Năm học 2026 – 2027',
  date: 'Ngày 16/11/2026',
  eventLine: 'Ngày 16/11/2026. Chương trình dự kiến 60 phút; thời lượng từng phần sửa được trong tệp js/data.js.'
},

/* ---------- 4 nguyên tắc dùng AI (thẻ “công thức”) ---------- */
formulaTitle: '4 nguyên tắc vàng khi dùng AI',
formulaLead: 'Dùng AI giỏi không phải là hỏi thật nhiều, mà là hỏi đúng, giữ an toàn và chịu trách nhiệm với kết quả.',
formula: [
  { k: 'NGHĨ TRƯỚC', t: 'Tự suy nghĩ, xác định rõ mình cần gì rồi mới hỏi AI' },
  { k: 'GIỮ RIÊNG TƯ', t: 'Không nhập họ tên, số định danh, ảnh, mật khẩu' },
  { k: 'KIỂM CHỨNG', t: 'AI có thể bịa: đối chiếu nguồn tin cậy' },
  { k: 'GHI RÕ', t: 'Ghi phần dùng AI, gắn nhãn nội dung AI' }
],
formulaRes: 'DÙNG AI<br>CÓ TRÁCH NHIỆM',

/* ---------- 4 bậc: từ người dùng thụ động đến nhà kiến tạo số ---------- */
ladder: [
  { k: 'Bậc 1', h: 'Người dùng thụ động', c: '#94a3b8', t: 'Dùng AI theo thói quen, tin ngay câu trả lời, chép nguyên văn, không để ý dữ liệu mình đưa vào.' },
  { k: 'Bậc 2', h: 'Người dùng thông minh', c: '#0ea5e9', t: 'Đặt câu hỏi rõ ràng, kiểm chứng kết quả, bảo vệ dữ liệu cá nhân, nhận ra nội dung giả.' },
  { k: 'Bậc 3', h: 'Người đồng sáng tạo', c: '#7c3aed', t: 'Dùng AI để học sâu hơn và làm sản phẩm của mình; ghi rõ phần AI hỗ trợ; tôn trọng bản quyền.' },
  { k: 'Bậc 4', h: 'Nhà kiến tạo số', c: '#f97316', t: 'Thiết kế, huấn luyện, xây dựng công cụ AI nhỏ để giải quyết vấn đề thật của trường, của cộng đồng – và chịu trách nhiệm với nó.' }
],

/* ---------- 5 bước khi gặp sự cố liên quan AI ---------- */
stepsTitle: '5 bước khi gặp sự cố',
steps5: [
  { k: 'DỪNG', ic: 'hand', c: '#e11d48', t: 'Ngừng trả lời, không chuyển tiền, không gửi thêm ảnh, mã OTP hay thông tin.' },
  { k: 'XÁC MINH', ic: 'search', c: '#f97316', t: 'Gọi lại số quen, hỏi trực tiếp người thật; đừng tin mặt và giọng trong video.' },
  { k: 'LƯU', ic: 'camera', c: '#0ea5e9', t: 'Chụp màn hình, lưu đường link, tên tài khoản, thời gian. Đây là bằng chứng.' },
  { k: 'BÁO', ic: 'megaphone', c: '#2563eb', t: 'Báo cha mẹ, GVCN, thầy cô Tin học; khi cần báo Công an (113), phản ánh 156/5656.' },
  { k: 'KHÔNG LAN TRUYỀN', ic: 'ban', c: '#7c3aed', t: 'Không chia sẻ tiếp video, ảnh giả; báo cáo nội dung trên nền tảng.' }
],

/* ---------- BÀI HỌC ---------- */
lessons: [
{
  id: 1, ic: 'bot', c: '#0ea5e9',
  t: 'AI là gì? AI đang ở quanh em',
  s: 'Định nghĩa, các loại AI theo việc chúng làm, AI giỏi gì và không giỏi gì',
  intro: 'Trí tuệ nhân tạo là công cụ do con người tạo ra. Nó không “hiểu” như con người: nó học quy luật từ rất nhiều dữ liệu rồi đoán câu trả lời có khả năng cao nhất.',
  cards: [
    { ic: 'cpu', h: 'AI là gì?', p: ['Máy tính thực hiện một số năng lực trí tuệ của con người: học, suy luận, nhận biết, hiểu ngôn ngữ.', 'Khác phần mềm thường: phần mềm thường làm theo luật lập trình sẵn; AI tự rút ra quy luật từ dữ liệu.'] },
    { ic: 'list', h: '4 kiểu việc AI làm', p: ['Nhận dạng: khuôn mặt, chữ viết tay, giọng nói, biển số xe.', 'Dự đoán, gợi ý: thời tiết, kẹt xe, video em có thể thích.', 'Tạo sinh: viết văn bản, vẽ ảnh, tạo giọng nói, video.', 'Điều khiển: robot, xe tự hành, máy bay không người lái.'] },
    { ic: 'phone', h: 'AI ở ngay trong túi em', p: ['Gợi ý video, bàn phím đoán chữ, mở khoá bằng khuôn mặt.', 'Dịch tự động, lọc thư rác, chỉnh ảnh, chatbot hỏi đáp.', 'Bản đồ dự đoán kẹt xe, trợ lý giọng nói.'] },
    { ic: 'scale', h: 'AI giỏi gì, con người giỏi gì?', p: ['AI giỏi: tốc độ, tóm tắt, dịch, tạo bản nháp, tìm quy luật trong dữ liệu lớn.', 'Con người giỏi: hiểu bối cảnh thật, cảm xúc, giá trị đạo đức, chịu trách nhiệm.', '“Ảo giác AI”: AI bịa ra thông tin sai nhưng trình bày như thật.'] }
  ],
  fact: 'Thuật ngữ “trí tuệ nhân tạo” được dùng chính thức từ hội thảo Dartmouth (Mỹ) năm 1956. AI đã có lịch sử 70 năm, chỉ là gần đây mới bùng nổ nhờ dữ liệu lớn và máy tính mạnh.',
  tryit: { go: 'thuchanh-aihaykhong', ic: 'puzzle', t: 'Trò chơi phân loại: ứng dụng nào có dùng AI, ứng dụng nào không?' },
  remember: 'AI là trợ lý giúp em làm nhanh hơn, không phải người suy nghĩ thay em và không phải lúc nào cũng đúng.',
  check: [
    { q: 'Điểm khác biệt chính giữa AI và phần mềm thông thường là gì?', o: ['AI chạy nhanh hơn', 'AI tự rút ra quy luật từ dữ liệu thay vì chỉ làm theo luật lập trình sẵn', 'AI không cần điện', 'AI luôn đúng'], a: 1, e: 'Phần mềm thường làm theo luật người viết sẵn; AI học quy luật từ ví dụ.' },
    { q: '“Ảo giác AI” là gì?', o: ['AI bị lỗi màn hình', 'AI tạo ra thông tin sai hoặc bịa nhưng trình bày như thật', 'AI tạo ảnh 3D', 'AI từ chối trả lời'], a: 1, e: 'Đó là lý do mọi thông tin quan trọng từ AI đều cần được kiểm chứng.' }
  ]
},
{
  id: 2, ic: 'cpu', c: '#6366f1',
  t: 'Bên trong AI: dữ liệu, mô hình, huấn luyện',
  s: 'Máy tính “thấy” thế giới ra sao, 3 cách máy học, mạng nơ-ron',
  intro: 'Máy tính không tự nhiên mà thông minh. Nó được huấn luyện bằng rất nhiều ví dụ, giống như em luyện đề trước kỳ thi: càng nhiều đề tốt, càng làm bài tốt.',
  cards: [
    { ic: 'image', h: 'Máy tính “thấy” gì?', p: ['Ảnh là một bảng số: mỗi điểm ảnh gồm 3 số (đỏ, xanh lá, xanh dương) từ 0 đến 255.', 'Âm thanh là một dãy số đo dao động của sóng âm.', 'Chữ được cắt thành các mẩu nhỏ gọi là token, rồi đổi thành số.'] },
    { ic: 'cap', h: '3 cách máy học', p: ['Học có giám sát: học từ ví dụ có nhãn (ảnh này là “mèo”, tin này là “lừa đảo”).', 'Học không giám sát: tự tìm ra các nhóm giống nhau, không cần nhãn.', 'Học tăng cường: thử – sai – nhận điểm thưởng, như AI tự chơi cờ hàng triệu ván.'] },
    { ic: 'refresh', h: 'Quy trình làm ra một AI', p: ['Thu thập dữ liệu → gắn nhãn → huấn luyện → kiểm tra trên dữ liệu mới → đưa vào sử dụng.', '“Rác vào, rác ra”: dữ liệu sai hoặc thiên lệch thì AI học sai.', 'Kiểm tra trên dữ liệu AI chưa từng thấy mới biết nó giỏi thật hay chỉ “học thuộc”.'] },
    { ic: 'radar', h: 'Mạng nơ-ron và học sâu', p: ['Mạng nơ-ron gồm nhiều lớp “nút” nối với nhau; mỗi kết nối có một trọng số.', 'Huấn luyện là chỉnh hàng triệu, hàng tỉ trọng số để dự đoán đúng hơn.', '“Học sâu” là dùng mạng nơ-ron có rất nhiều lớp.'] }
  ],
  fact: 'Mô hình ngôn ngữ lớn được huấn luyện để làm một việc nghe rất đơn giản: đoán mẩu chữ tiếp theo. Làm việc đó trên một lượng văn bản khổng lồ khiến nó viết được cả bài văn, giải thích được bài toán.',
  tryit: { go: 'thuchanh-dayai', ic: 'cpu', t: 'Tự tay dạy một AI nhỏ nhận diện tin nhắn lừa đảo: dán nhãn, huấn luyện, kiểm tra.' },
  remember: 'AI chỉ giỏi bằng dữ liệu nó được học. Muốn AI tốt, cần dữ liệu tốt, đa dạng, hợp pháp – và con người kiểm tra kết quả.',
  check: [
    { q: 'Một bức ảnh được lưu trong máy tính dưới dạng gì?', o: ['Một đoạn văn mô tả ảnh', 'Một bảng các con số (điểm ảnh)', 'Một tệp âm thanh', 'Một đường link'], a: 1, e: 'Mỗi điểm ảnh là các con số màu; AI “nhìn” ảnh bằng cách xử lý các con số đó.' },
    { q: 'Học có giám sát cần điều gì?', o: ['Không cần dữ liệu', 'Các ví dụ đã được gắn nhãn đúng', 'Chỉ cần máy tính thật mạnh', 'Người dùng chấm điểm từng lần chạy'], a: 1, e: 'AI học mối liên hệ giữa ví dụ và nhãn, ví dụ “tin nhắn này” → “lừa đảo”.' },
    { q: '“Rác vào, rác ra” nghĩa là gì trong AI?', o: ['AI giúp phân loại rác', 'Dữ liệu huấn luyện kém thì kết quả AI cũng kém', 'AI tự xoá dữ liệu cũ', 'AI không cần dữ liệu'], a: 1, e: 'Chất lượng dữ liệu quyết định chất lượng AI.' }
  ]
},
{
  id: 3, ic: 'image', c: '#a855f7',
  t: 'AI tạo sinh: viết, vẽ, nói như người',
  s: 'Chatbot, AI tạo ảnh, giọng nói, video hoạt động thế nào; dùng trong học tập ra sao',
  intro: 'AI tạo sinh không tra cứu một câu trả lời có sẵn. Nó tạo ra nội dung mới, từng chút một, dựa trên quy luật đã học từ dữ liệu.',
  cards: [
    { ic: 'message', h: 'Chatbot (mô hình ngôn ngữ lớn)', p: ['Đoán lần lượt từng token tiếp theo dựa trên xác suất.', 'Chỉ “nhớ” được một lượng chữ giới hạn trong cuộc trò chuyện (cửa sổ ngữ cảnh).', 'Không tự biết sự kiện mới sau khi được huấn luyện, trừ khi được kết nối tìm kiếm.'] },
    { ic: 'image', h: 'AI tạo ảnh', p: ['Nhiều công cụ bắt đầu từ một ảnh nhiễu rồi “khử nhiễu” dần theo mô tả của em.', 'Hay mắc lỗi ở bàn tay, chữ viết, đồng hồ, bóng đổ, chi tiết nhỏ.', 'Mô tả càng cụ thể (chủ thể, bối cảnh, phong cách, ánh sáng), ảnh càng sát ý.'] },
    { ic: 'mic', h: 'Giọng nói và video', p: ['Có thể nhân bản giọng nói từ các đoạn ghi âm có sẵn.', 'Có thể tạo video từ mô tả bằng chữ.', 'Đây cũng là công nghệ đứng sau deepfake, nên cần dùng có trách nhiệm.'] },
    { ic: 'cap', h: 'Dùng AI tạo sinh để học', p: ['Giải thích lại bài khó bằng ví dụ khác; tóm tắt để ôn.', 'Luyện hội thoại tiếng Anh, nhờ sửa lỗi ngữ pháp và giải thích vì sao.', 'Tạo câu hỏi tự kiểm tra; góp ý dàn ý bài viết của em.', 'Luôn kiểm tra lại, và làm theo quy định của thầy cô.'] },
    { ic: 'award', h: 'Bản quyền và ghi nguồn', p: ['Tôn trọng tác phẩm gốc của nghệ sĩ, tác giả.', 'Ghi rõ khi dùng chữ, ảnh, nhạc do AI tạo trong bài nộp, bài đăng.'] }
  ],
  fact: 'Vì chatbot chọn từ theo xác suất, cùng một câu hỏi hỏi hai lần có thể nhận hai câu trả lời khác nhau. Đó là lý do không nên coi một câu trả lời của AI là “đáp án duy nhất”.',
  tryit: { go: 'thuchanh-tutiep', ic: 'sparkle', t: 'Đóng vai mô hình ngôn ngữ: đoán từ tiếp theo và xem AI “chọn” từ theo xác suất thế nào.' },
  remember: 'AI tạo sinh tạo ra thứ “nghe có vẻ đúng”, không đảm bảo là đúng. Em là người biên tập cuối cùng.',
  check: [
    { q: 'Chatbot tạo câu trả lời bằng cách nào?', o: ['Chép nguyên một trang web', 'Dự đoán lần lượt mẩu chữ tiếp theo dựa trên xác suất', 'Hỏi một người thật phía sau', 'Tra từ điển'], a: 1, e: 'Mô hình ngôn ngữ ghép câu trả lời từng token một theo xác suất.' },
    { q: 'Ảnh do AI tạo thường hay sai ở chi tiết nào?', o: ['Màu trời', 'Bàn tay, chữ viết, bóng đổ, chi tiết nhỏ', 'Kích thước ảnh', 'Định dạng tệp'], a: 1, e: 'Đây là những chỗ nên soi kỹ, dù ảnh AI ngày càng giống thật.' }
  ]
},
{
  id: 4, ic: 'sparkle', c: '#7c3aed', formula: true,
  t: 'Dùng AI thông minh: học cùng AI, không để AI học thay',
  s: 'Kỹ năng đặt câu hỏi (prompt), kiểm chứng, liêm chính học tập',
  intro: 'Cùng một công cụ AI, người biết hỏi sẽ nhận được câu trả lời tốt hơn nhiều. Và người biết dùng AI để học sẽ tiến bộ, còn người nhờ AI làm thay sẽ đứng yên.',
  cards: [
    { ic: 'message', h: 'Prompt 4 phần', p: ['Vai trò: “Em là gia sư Sinh học kiên nhẫn”.', 'Nhiệm vụ: “Giải thích quang hợp rồi hỏi lại mình 3 câu”.', 'Bối cảnh: “Mình học lớp 11, chưa hiểu pha tối”.', 'Định dạng: “Gạch đầu dòng, dưới 200 chữ, có 1 ví dụ”.'] },
    { ic: 'cap', h: 'Biến AI thành gia sư', p: ['Xin gợi ý từng bước thay vì xin đáp án.', 'Hỏi “vì sao?”, “nếu đổi điều kiện thì sao?”.', 'Nhờ AI ra câu hỏi để tự kiểm tra, rồi tự làm.', 'Nhờ AI đóng vai người phản biện bài làm của em.'] },
    { ic: 'search', h: 'Luôn kiểm chứng', p: ['Yêu cầu AI nêu nguồn, rồi tự mở nguồn đó ra xem.', 'AI có thể bịa tên sách, bài báo, số liệu, mốc thời gian.', 'Đối chiếu với sách giáo khoa, trang chính thống, thầy cô.'] },
    { ic: 'award', h: 'Liêm chính học tập', p: ['Làm đúng quy định của thầy cô về việc dùng AI trong từng bài.', 'Ghi rõ phần nào có AI hỗ trợ.', 'Không nộp nguyên văn bài AI viết như bài của mình.'] }
  ],
  fact: 'Thêm câu “Nếu không chắc, hãy nói là không chắc” vào cuối prompt có thể giúp AI bớt trả lời bịa – nhưng vẫn không thay được việc em tự kiểm chứng.',
  tryit: { go: 'thuchanh-prompt', ic: 'sparkle', t: 'Prompt Lab: ghép prompt 4 phần và xem điểm chất lượng prompt của em.' },
  remember: 'Hỏi rõ – tự làm – kiểm chứng – ghi rõ. AI giúp em học nhanh hơn chứ không học thay em.',
  check: [
    { q: 'Prompt nào giúp em HỌC tốt nhất?', o: ['“Làm bài tập quang hợp cho mình”', '“Nói về quang hợp”', '“Em là gia sư Sinh học. Giải thích pha tối cho học sinh lớp 11 rồi hỏi lại mình 3 câu để kiểm tra”', '“Viết thật dài về quang hợp”'], a: 2, e: 'Prompt có vai trò, nhiệm vụ, bối cảnh, định dạng và yêu cầu AI hỏi lại giúp em hiểu bài thay vì chép.' },
    { q: 'AI đưa ra trích dẫn “theo nghiên cứu năm 2023 của Đại học X”. Em nên làm gì?', o: ['Dùng ngay vì nghe rất uy tín', 'Tìm và mở nghiên cứu gốc để kiểm tra', 'Hỏi lại AI “có chắc không?” là đủ', 'Bỏ tên trường đi cho an toàn'], a: 1, e: 'AI có thể bịa trích dẫn. Chỉ dùng khi em đã tự mở và đọc được nguồn gốc.' }
  ]
},
{
  id: 5, ic: 'lock', c: '#16a34a',
  t: 'An toàn thông tin khi dùng AI',
  s: 'Dữ liệu cá nhân, ứng dụng AI giả, lừa đảo dùng AI, bảo vệ tài khoản',
  intro: 'Mỗi câu em gõ vào một công cụ AI là dữ liệu được gửi đi. Kẻ gian cũng dùng AI: tin nhắn lừa đảo viết trơn tru hơn, giọng nói giả giống hơn, ứng dụng giả đẹp hơn.',
  cards: [
    { ic: 'user', h: 'Dữ liệu em đưa cho AI', p: ['Nội dung nhập vào có thể được lưu lại và xử lý.', 'Không nhập họ tên, số định danh, số điện thoại, địa chỉ, mật khẩu, ảnh riêng tư.', 'Không đưa ảnh, thông tin của bạn bè khi chưa được đồng ý.', 'Xem phần cài đặt quyền riêng tư, lịch sử trò chuyện của công cụ.'] },
    { ic: 'phone', h: 'Ứng dụng AI giả', p: ['“ChatGPT Plus miễn phí”, “AI giải bài 100% đúng” qua link lạ, tệp .apk.', 'Tiện ích trình duyệt lạ đòi đọc mọi trang web em mở.', 'Chỉ dùng trang và ứng dụng chính thức, tải từ kho ứng dụng.'] },
    { ic: 'alert', h: 'Lừa đảo có AI hỗ trợ', p: ['Tin nhắn không lỗi chính tả, giọng văn chuyên nghiệp: đừng dựa vào lỗi chính tả để nhận ra.', 'Giả giọng người thân qua tin nhắn thoại, cuộc gọi.', 'Chatbot giả mạo chăm sóc khách hàng xin OTP, mật khẩu.'] },
    { ic: 'key', h: 'Bảo vệ tài khoản', p: ['Mật khẩu dài, mỗi tài khoản một mật khẩu, bật xác thực hai lớp.', 'Không mua tài khoản AI “dùng chung giá rẻ”: có thể bị lộ lịch sử trò chuyện.', 'Không bao giờ đưa mã OTP cho ai.'] }
  ],
  fact: 'Giọng nói có thể bị nhân bản từ các video, đoạn ghi âm em đăng công khai. Hãy cân nhắc trước khi đăng nhiều video có giọng nói của mình ở chế độ công khai.',
  tryit: { go: 'thuchanh-dulieu', ic: 'lock', t: 'Kéo thả: loại thông tin nào được nhập vào AI, loại nào không?' },
  remember: 'Trước khi gõ vào AI, tự hỏi: “Nếu câu này bị người lạ đọc được thì sao?”. Nếu ngại, đừng gõ.',
  check: [
    { q: 'Nội dung nào AN TOÀN để nhập vào chatbot AI?', o: ['Ảnh căn cước của em', 'Mật khẩu email để AI kiểm tra độ mạnh', 'Đề bài toán trong sách giáo khoa', 'Số điện thoại, địa chỉ nhà của bạn thân'], a: 2, e: 'Nội dung học tập công khai thì an toàn. Thông tin định danh, mật khẩu, thông tin của người khác thì không.' },
    { q: 'Một tin nhắn mời “Kích hoạt ChatGPT Plus miễn phí 12 tháng, đăng nhập Google tại chatgpt-plus-free.vn.app”. Đây là?', o: ['Khuyến mãi chính thức', 'Trang giả để lấy tài khoản Google', 'Ứng dụng của nhà trường', 'Bản dùng thử hợp lệ'], a: 1, e: 'Quà miễn phí + tên miền lạ + yêu cầu đăng nhập là dấu hiệu trang giả mạo đánh cắp tài khoản.' }
  ]
},
{
  id: 6, ic: 'video', c: '#e11d48',
  t: 'Deepfake và nội dung do AI tạo ra',
  s: 'Nhận diện ảnh, video, giọng nói giả; xác minh trước khi tin và chia sẻ',
  intro: 'AI có thể tạo ảnh, video, giọng nói giống người thật đến mức mắt thường khó phân biệt. Kỹ năng quan trọng nhất không phải là “nhìn ra”, mà là “xác minh”.',
  cards: [
    { ic: 'eye', h: 'Dấu hiệu có thể là giả', p: ['Khẩu hình lệch tiếng, mặt ít biểu cảm, ít chớp mắt, viền mặt nhoè.', 'Ảnh có chữ méo, bàn tay thừa ngón, bóng đổ sai hướng, đồ vật lơ lửng.', 'Cuộc gọi rất ngắn, “mạng yếu”, rồi chuyển sang nhắn tin xin tiền.'] },
    { ic: 'search', h: 'Xác minh, đừng chỉ nhìn', p: ['Gọi lại số điện thoại quen; hỏi câu chỉ người thật mới biết.', 'Gia đình có “mật khẩu gia đình” dùng khi khẩn cấp.', 'Tìm ảnh ngược (Google Lens…) để biết ảnh xuất hiện lần đầu ở đâu.', 'Chờ kênh chính thức: thông báo của trường, cơ quan chức năng.'] },
    { ic: 'flag', h: 'Nhãn nội dung AI', p: ['Từ 01/3/2026, nội dung do AI tạo mô phỏng ngoại hình, giọng nói người thật hoặc tái hiện sự kiện thật phải được gắn nhãn dễ nhận biết.', 'Khi đăng ảnh, video AI có thể bị hiểu là thật, hãy ghi rõ “ảnh/video tạo bằng AI”.'] },
    { ic: 'heart', h: 'Không làm tổn thương người khác', p: ['Không ghép mặt, giả giọng bạn bè, thầy cô dù “cho vui”.', 'Không chia sẻ video giả; báo cáo nội dung trên nền tảng.', 'Bị deepfake: lưu bằng chứng, báo cha mẹ, thầy cô, cơ quan công an.'] }
  ],
  fact: 'Ảnh AI ngày càng giống thật, nên “soi bằng mắt” chỉ là bước đầu. Cách chắc chắn hơn là kiểm tra nguồn: ai đăng, đăng khi nào, kênh chính thức có xác nhận không.',
  tryit: { go: 'thuchanh-soianh', ic: 'eye', t: 'Soi ảnh AI: tìm 6 điểm bất thường trong một bức ảnh do “AI” tạo ra.' },
  remember: 'Thấy chưa chắc là tin. Video càng gây sốc, càng cần xác minh trước khi tin và trước khi chia sẻ.',
  check: [
    { q: 'Em nhận cuộc gọi video 5 giây từ “mẹ” xin chuyển gấp 2 triệu rồi tắt máy. Cách xác minh tốt nhất?', o: ['Chuyển ngay vì đã thấy mặt mẹ', 'Gọi lại số điện thoại quen của mẹ hoặc hỏi người nhà', 'Nhắn hỏi lại vào chính tài khoản đó', 'Chuyển một nửa trước'], a: 1, e: 'Mặt và giọng có thể giả bằng AI. Xác minh qua kênh em đã biết từ trước.' },
    { q: 'Theo Luật Trí tuệ nhân tạo 2025, nội dung nào phải gắn nhãn dễ nhận biết?', o: ['Mọi bức ảnh chụp bằng điện thoại', 'Nội dung AI tạo hoặc chỉnh sửa mô phỏng ngoại hình, giọng nói người thật hoặc tái hiện sự kiện thật', 'Chỉ các bài báo in', 'Tin nhắn giữa bạn bè'], a: 1, e: 'Mục đích là giúp người xem biết nguồn gốc nội dung, hạn chế deepfake gây hiểu lầm, lừa đảo.' }
  ]
},
{
  id: 7, ic: 'radar', c: '#0891b2',
  t: 'Thuật toán gợi ý, thiên kiến và tác động của AI',
  s: 'Bong bóng lọc, làm chủ nguồn cấp tin, thiên kiến AI, AI với việc làm và môi trường',
  intro: 'AI không chỉ trả lời câu hỏi. Nó âm thầm quyết định em xem video nào, đọc tin gì, thấy quảng cáo nào – và ảnh hưởng cả đến xã hội, việc làm, môi trường.',
  cards: [
    { ic: 'video', h: 'Thuật toán gợi ý', p: ['Học từ thời gian em xem, lượt thích, lượt chia sẻ, lượt lướt qua.', 'Mục tiêu thường là giữ em ở lại lâu hơn trên nền tảng.', 'Dễ tạo “bong bóng lọc”: chỉ thấy điều mình đã thích, ít thấy góc nhìn khác.'] },
    { ic: 'clock', h: 'Làm chủ “nguồn cấp” của em', p: ['Đặt giới hạn thời gian dùng ứng dụng.', 'Chủ động tìm kiếm điều cần học thay vì lướt vô tận.', 'Dùng nút “Không quan tâm”, theo dõi các nguồn đa dạng, uy tín.'] },
    { ic: 'scale', h: 'Thiên kiến của AI', p: ['Dữ liệu thiếu đa dạng → AI nhận diện kém với những nhóm ít xuất hiện trong dữ liệu.', 'AI có thể lặp lại định kiến có sẵn trong dữ liệu, ví dụ gắn một nghề với một giới tính.', 'Con người phải kiểm tra, phát hiện và sửa thiên kiến.'] },
    { ic: 'briefcase', h: 'AI và việc làm', p: ['AI thường thay đổi công việc bên trong mỗi nghề hơn là xoá hẳn một nghề.', 'Kỹ năng ngày càng quý: tư duy phản biện, sáng tạo, giao tiếp, hiểu dữ liệu, biết làm việc cùng AI.'] },
    { ic: 'wifi', h: 'AI và môi trường', p: ['Huấn luyện và vận hành mô hình lớn cần nhiều điện năng và nước làm mát trung tâm dữ liệu.', 'Dùng AI có mục đích, không lạm dụng cho những việc không cần thiết.'] }
  ],
  fact: 'Nhiều nền tảng có mục kiểu “Tại sao tôi thấy nội dung này?” bên cạnh quảng cáo, video gợi ý. Bấm vào đó để biết thuật toán đang dựa vào điều gì về em.',
  tryit: { go: 'thuchanh-noicap', ic: 'link', t: 'Trò chơi nối: ghép 8 khái niệm AI với ý nghĩa đúng của chúng.' },
  remember: 'Em dùng thuật toán, đừng để thuật toán dùng em. Chủ động chọn điều mình xem, và luôn hỏi: AI này có công bằng không?',
  check: [
    { q: 'Mục tiêu thường gặp của thuật toán gợi ý trên mạng xã hội là gì?', o: ['Giúp em ngủ sớm', 'Giữ em ở lại trên nền tảng lâu hơn', 'Giảm thời gian em dùng điện thoại', 'Chỉ cho em xem tin chính thống'], a: 1, e: 'Vì vậy em cần chủ động đặt giới hạn và chọn nguồn đa dạng.' },
    { q: 'Thiên kiến của AI chủ yếu xuất phát từ đâu?', o: ['AI có cảm xúc riêng', 'Dữ liệu huấn luyện lệch hoặc thiếu đa dạng', 'Màn hình điện thoại', 'Tốc độ mạng'], a: 1, e: 'AI phản chiếu dữ liệu nó được học, kể cả những định kiến trong đó.' }
  ]
},
{
  id: 8, ic: 'scale', c: '#f97316',
  t: 'Pháp luật và đạo đức khi dùng AI',
  s: 'Luật Trí tuệ nhân tạo, Luật An ninh mạng, Luật Bảo vệ dữ liệu cá nhân, bản quyền',
  intro: 'Việt Nam đã có luật riêng về trí tuệ nhân tạo. Cùng với các luật về an ninh mạng và dữ liệu cá nhân, đây là “luật chơi” để AI phục vụ con người một cách an toàn.',
  cards: [
    { ic: 'bot', h: 'Luật Trí tuệ nhân tạo 2025', p: ['Luật số 134/2025/QH15, có hiệu lực từ 01/3/2026: luật chuyên biệt đầu tiên về AI của Việt Nam.', 'Yêu cầu minh bạch: nội dung AI mô phỏng người thật, sự kiện thật phải gắn nhãn.', 'Nghị định 142/2026/NĐ-CP (hiệu lực 01/5/2026) hướng dẫn thông báo, gắn nhãn nội dung AI.'] },
    { ic: 'shield', h: 'Luật An ninh mạng 2025', p: ['Luật số 116/2025/QH15, hiệu lực 01/7/2026.', 'Nghiêm cấm sử dụng AI, công nghệ mới để giả mạo video, hình ảnh, giọng nói của người khác trái pháp luật.'] },
    { ic: 'user', h: 'Luật Bảo vệ dữ liệu cá nhân 2025', p: ['Luật số 91/2025/QH15, hiệu lực 01/01/2026.', 'Thông tin giúp xác định một người là dữ liệu cá nhân; người đó có quyền được biết, đồng ý hoặc rút lại đồng ý.', 'Nghiêm cấm mua bán dữ liệu cá nhân dưới mọi hình thức.'] },
    { ic: 'gavel', h: 'Trách nhiệm khi chia sẻ', p: ['Nghị định 330/2026/NĐ-CP: làm ra, phát tán thông tin sai sự thật, chưa kiểm chứng gây ảnh hưởng quyền, lợi ích hợp pháp của người khác có thể bị phạt 10 – 20 triệu đồng (cá nhân).', 'Chia sẻ lại video, ảnh giả cũng là phát tán.'] },
    { ic: 'heart', h: 'Đạo đức AI', p: ['Lấy con người làm trung tâm: AI phục vụ con người, không thay con người chịu trách nhiệm.', 'Công bằng, minh bạch, tôn trọng quyền riêng tư.', 'Tôn trọng bản quyền: ghi nguồn, không mạo nhận tác phẩm của người khác hay của AI là của mình.'] }
  ],
  fact: 'Không chỉ Việt Nam: Liên minh châu Âu cũng có Đạo luật AI (AI Act) yêu cầu doanh nghiệp gắn nhãn rõ ràng cho nội dung do AI tạo ra.',
  tryit: { go: 'thuchanh-mecung', ic: 'flag', t: 'Mê cung an toàn số: đi tới đích, trả lời đúng để mở các cánh cửa, tránh bẫy.' },
  remember: 'Dùng AI cũng như dùng mọi công cụ: em được hưởng lợi, và em chịu trách nhiệm với những gì mình tạo ra, đăng lên, chia sẻ.',
  check: [
    { q: 'Luật Trí tuệ nhân tạo của Việt Nam có số hiệu và hiệu lực như thế nào?', o: ['Luật số 116/2025/QH15, hiệu lực 01/7/2026', 'Luật số 134/2025/QH15, hiệu lực 01/3/2026', 'Luật số 91/2025/QH15, hiệu lực 01/01/2026', 'Chưa có luật về AI'], a: 1, e: '116/2025/QH15 là Luật An ninh mạng; 91/2025/QH15 là Luật Bảo vệ dữ liệu cá nhân.' },
    { q: 'Bạn dùng AI ghép mặt một bạn cùng lớp vào video chế giễu rồi đăng lên mạng. Nhận định nào đúng?', o: ['Chỉ là trò đùa, không sao', 'Có thể vi phạm pháp luật và gây tổn hại cho bạn bị ghép mặt', 'Không sao nếu đăng ở nhóm kín', 'Chỉ sai nếu bạn đó biết'], a: 1, e: 'Giả mạo hình ảnh người khác trái pháp luật bị nghiêm cấm; hình ảnh khuôn mặt cũng là thông tin giúp nhận diện một người.' }
  ]
},
{
  id: 9, ic: 'flash', c: '#2563eb', ladder: true,
  t: 'Từ người dùng thụ động đến nhà kiến tạo số',
  s: '4 bậc phát triển, quy trình kiến tạo, ý tưởng dự án, công cụ và nghề nghiệp',
  intro: 'Từ năm học 2026 – 2027, giáo dục AI được triển khai đại trà ở trường phổ thông. Ở bậc THPT, học sinh được khuyến khích khám phá, thiết kế, cải tiến công cụ AI đơn giản qua dự án – tức là bước lên thành nhà kiến tạo.',
  cards: [
    { ic: 'book', h: 'Khung giáo dục AI của Bộ GD&ĐT', p: ['Quyết định 2422/QĐ-BGDĐT ngày 18/8/2026 ban hành Khung nội dung giáo dục AI cho học sinh phổ thông.', '4 mạch: Tư duy lấy con người làm trung tâm · Đạo đức AI · Các kĩ thuật và ứng dụng AI · Thiết kế hệ thống AI.', 'THPT là giai đoạn định hướng nghề nghiệp: dùng AI tạo sản phẩm phục vụ cộng đồng.'] },
    { ic: 'list', h: 'Quy trình kiến tạo', p: ['1. Chọn một vấn đề thật ở trường, ở địa phương.', '2. Thu thập dữ liệu hợp pháp, được phép sử dụng.', '3. Chọn công cụ, làm bản thử nhỏ.', '4. Thử nghiệm, tìm lỗi, sửa và đo hiệu quả.', '5. Chia sẻ có trách nhiệm: ghi rõ là AI, nêu giới hạn.'] },
    { ic: 'sparkle', h: 'Ý tưởng dự án cho em', p: ['Chatbot hỏi đáp nội quy, lịch học từ văn bản công khai của trường.', 'Mô hình phân loại rác qua ảnh cho góc tái chế của lớp.', 'Trợ lý ôn tập: tạo câu hỏi tự kiểm tra từ bài ghi của em.', 'Bảng theo dõi chất lượng không khí, thời tiết từ dữ liệu mở.', 'Công cụ nhận diện tin nhắn có dấu hiệu lừa đảo.'] },
    { ic: 'cpu', h: 'Công cụ để bắt đầu', p: ['Teachable Machine: huấn luyện mô hình nhận dạng ảnh, âm thanh không cần lập trình.', 'Scratch có tiện ích AI; Python trên Google Colab cho bạn muốn đi sâu.', 'Chatbot tạo từ tài liệu của em (ghi rõ nguồn, kiểm tra câu trả lời).'] },
    { ic: 'briefcase', h: 'Nghề nghiệp trong kỷ nguyên AI', p: ['Nghề làm ra AI: kỹ sư AI, khoa học dữ liệu, kỹ sư phần mềm, an toàn thông tin.', 'Nghề dùng AI giỏi: bác sĩ, luật sư, nhà báo, giáo viên, thiết kế… đều cần người biết làm việc cùng AI.', 'Nền tảng nên học từ bây giờ: Toán, Tin học, ngoại ngữ, tư duy phản biện.'] }
  ],
  fact: 'Khung giáo dục AI của Bộ GD&ĐT có tham khảo Khung năng lực trí tuệ nhân tạo cho học sinh của UNESCO, để học sinh Việt Nam học AI theo chuẩn quốc tế.',
  tryit: { go: 'thuchanh-doantu', ic: 'game', t: 'Trò chơi đoán từ: đoán các thuật ngữ AI qua gợi ý, trước khi lá chắn vỡ.' },
  remember: 'Nhà kiến tạo số không phải là người biết mọi công nghệ, mà là người thấy một vấn đề thật, dùng AI để giải quyết nó và chịu trách nhiệm với sản phẩm của mình.',
  check: [
    { q: 'Mạch nào KHÔNG thuộc 4 mạch của Khung nội dung giáo dục AI cho học sinh phổ thông?', o: ['Tư duy lấy con người làm trung tâm', 'Đạo đức AI', 'Thiết kế hệ thống AI', 'Kinh doanh sản phẩm AI'], a: 3, e: 'Bốn mạch là: Tư duy lấy con người làm trung tâm, Đạo đức AI, Các kĩ thuật và ứng dụng AI, Thiết kế hệ thống AI.' },
    { q: 'Bước đầu tiên khi kiến tạo một sản phẩm AI cho trường là gì?', o: ['Chọn công cụ AI đắt nhất', 'Xác định một vấn đề thật cần giải quyết', 'Thu thập càng nhiều dữ liệu cá nhân càng tốt', 'Đăng sản phẩm lên mạng ngay'], a: 1, e: 'Bắt đầu từ vấn đề thật, sau đó mới đến dữ liệu hợp pháp, công cụ, thử nghiệm và chia sẻ có trách nhiệm.' }
  ]
}
],

/* ---------- DỮ LIỆU CHO CÁC TRÒ CHƠI ---------- */
aiOrNot: {
  title: 'Ứng dụng nào có dùng AI?',
  lead: 'Chạm một thẻ rồi chạm vào ô để xếp (trên máy tính có thể kéo thả). Ứng dụng nào cần AI học từ dữ liệu, ứng dụng nào chỉ làm theo luật cố định?',
  bins: ['Có dùng AI', 'Không cần AI'],
  items: [
    { t: 'Mở khoá điện thoại bằng khuôn mặt', b: 0, e: 'AI nhận dạng khuôn mặt, học từ nhiều ảnh.' },
    { t: 'Máy tính bỏ túi tính 25 × 4', b: 1, e: 'Phép tính theo luật cố định, không cần học.' },
    { t: 'Gợi ý video “có thể bạn thích”', b: 0, e: 'Thuật toán gợi ý học từ thói quen xem của em.' },
    { t: 'Đèn giao thông đổi màu sau đúng 30 giây', b: 1, e: 'Hẹn giờ cố định. (Đèn thông minh đếm xe để đổi nhịp thì có thể dùng AI.)' },
    { t: 'Dịch tự động một câu nói tiếng Anh', b: 0, e: 'Nhận dạng giọng nói và dịch máy đều dùng AI.' },
    { t: 'Đồng hồ báo thức reo lúc 6 giờ', b: 1, e: 'Chỉ so sánh thời gian, không cần AI.' },
    { t: 'Bộ lọc thư rác trong email', b: 0, e: 'AI học dấu hiệu của thư rác từ hàng triệu email.' },
    { t: 'Bàn phím đoán chữ tiếp theo', b: 0, e: 'Mô hình ngôn ngữ nhỏ đoán từ em sắp gõ.' },
    { t: 'Ứng dụng đèn pin', b: 1, e: 'Chỉ bật tắt đèn flash.' },
    { t: 'Camera tự nhận biết biển số xe vi phạm', b: 0, e: 'AI nhận dạng ký tự trên ảnh.' }
  ]
},
dataBins: {
  title: 'Dữ liệu nào đưa cho AI?',
  lead: 'Chạm một thẻ rồi chạm vào ô để xếp (trên máy tính có thể kéo thả). Loại thông tin nào em được nhập vào công cụ AI?',
  bins: ['Được nhập vào AI', 'Không nhập'],
  items: [
    { t: 'Đề bài toán trong sách giáo khoa', b: 0, e: 'Nội dung học tập công khai.' },
    { t: 'Họ tên, ngày sinh, số định danh của em', b: 1, e: 'Thông tin định danh không cần cho việc học, dễ bị lạm dụng nếu lộ.' },
    { t: 'Ảnh bạn cùng lớp (chưa xin phép) để “chấm điểm nhan sắc”', b: 1, e: 'Hình ảnh của bạn cần bạn đồng ý; trò này còn dễ gây tổn thương.' },
    { t: 'Dàn ý bài văn em tự viết, nhờ góp ý', b: 0, e: 'Bài của em, nhờ góp ý để tự sửa: cách dùng AI tốt.' },
    { t: 'Mật khẩu email để AI kiểm tra độ mạnh', b: 1, e: 'Không nhập mật khẩu thật vào bất kỳ đâu ngoài trang đăng nhập chính thức.' },
    { t: 'Câu hỏi: “Giải thích định luật Ohm bằng ví dụ”', b: 0, e: 'Câu hỏi chung, không chứa thông tin cá nhân.' },
    { t: 'Đề kiểm tra chưa công bố thầy cô gửi riêng', b: 1, e: 'Tài liệu chưa công bố không được đưa ra ngoài.' },
    { t: 'Bảng số liệu thời tiết công khai để vẽ biểu đồ', b: 0, e: 'Dữ liệu mở, phù hợp cho dự án.' },
    { t: 'Số điện thoại, địa chỉ nhà của bố mẹ', b: 1, e: 'Thông tin cá nhân của người khác.' }
  ]
},
matchPairs: [
  ['Dữ liệu huấn luyện', 'Những ví dụ để AI học ra quy luật'],
  ['Mô hình', '“Bộ não” AI tạo ra sau khi huấn luyện'],
  ['Prompt', 'Câu lệnh, yêu cầu em gửi cho AI'],
  ['Ảo giác AI', 'AI bịa thông tin nhưng nói như thật'],
  ['Deepfake', 'Ảnh, video, giọng nói giả tạo bằng AI'],
  ['Thiên kiến', 'Kết quả lệch vì dữ liệu lệch'],
  ['Token', 'Mẩu chữ nhỏ mà mô hình ngôn ngữ xử lý'],
  ['Nhãn AI', 'Dấu hiệu cho biết nội dung do AI tạo ra']
],
words: [
  { w: 'PROMPT', h: 'Câu lệnh, yêu cầu em gửi cho AI' },
  { w: 'DEEPFAKE', h: 'Video, ảnh, giọng nói giả được tạo bằng AI' },
  { w: 'TOKEN', h: 'Mẩu chữ nhỏ mà mô hình ngôn ngữ xử lý' },
  { w: 'CHATBOT', h: 'Chương trình trò chuyện với con người bằng ngôn ngữ tự nhiên' },
  { w: 'DU LIEU', vn: 'DỮ LIỆU', h: 'Thứ mà AI học từ đó' },
  { w: 'MO HINH', vn: 'MÔ HÌNH', h: 'Thứ được tạo ra sau khi huấn luyện AI' },
  { w: 'AO GIAC', vn: 'ẢO GIÁC', h: 'Hiện tượng AI bịa thông tin nhưng trình bày như thật' },
  { w: 'THIEN KIEN', vn: 'THIÊN KIẾN', h: 'Kết quả lệch vì dữ liệu huấn luyện lệch' },
  { w: 'GAN NHAN', vn: 'GẮN NHÃN', h: 'Việc ghi rõ một nội dung do AI tạo ra' },
  { w: 'XAC MINH', vn: 'XÁC MINH', h: 'Việc cần làm trước khi tin một cuộc gọi video lạ' },
  { w: 'THUAT TOAN', vn: 'THUẬT TOÁN', h: 'Chuỗi bước mà máy tính làm theo để giải quyết vấn đề' },
  { w: 'HUAN LUYEN', vn: 'HUẤN LUYỆN', h: 'Quá trình cho AI học từ dữ liệu' }
],
nextWord: [
  { s: 'Mặt trời mọc ở hướng ___', o: [['Đông', 88], ['Tây', 4], ['sớm', 6], ['Nam', 2]], e: 'Cụm “mọc ở hướng Đông” xuất hiện cực nhiều trong dữ liệu, nên xác suất rất cao.' },
  { s: 'Ăn quả nhớ kẻ ___', o: [['trồng cây', 93], ['hái quả', 3], ['bán quả', 2], ['ăn cùng', 2]], e: 'Tục ngữ quen thuộc: mô hình đã “thấy” cụm này rất nhiều lần.' },
  { s: 'Trước khi chuyển tiền cho người lạ, em nên ___', o: [['xác minh', 64], ['hỏi bố mẹ', 22], ['chuyển ngay', 9], ['đi ngủ', 5]], e: 'AI chọn từ có xác suất cao theo dữ liệu, không phải vì nó “hiểu” về an toàn.' },
  { s: 'Thủ đô của vương quốc Lunaria là ___', o: [['Lunapolis', 41], ['Luna City', 27], ['không tồn tại', 8], ['Hà Nội', 24]], e: 'Lunaria là nước tưởng tượng! Nhưng mô hình vẫn có thể chọn một cái tên “nghe hợp lý”. Đó chính là ảo giác AI.' },
  { s: 'Một học sinh giỏi môn Tin học thường là ___', o: [['bạn nam', 46], ['bạn nữ', 14], ['bất kỳ ai chăm chỉ', 40]], e: 'Nếu dữ liệu chứa định kiến, mô hình sẽ lặp lại định kiến đó. Đây là thiên kiến AI: con người phải phát hiện và sửa.' }
],
nbTrain: [
  { t: 'Chúc mừng bạn trúng thưởng điện thoại, bấm link nhận quà ngay', y: 1 },
  { t: 'Gửi gấp mã OTP vừa nhận để xác thực tài khoản', y: 1 },
  { t: 'Tài khoản sẽ bị khoá, truy cập link để xác minh ngay', y: 1 },
  { t: 'Việc nhẹ lương cao, nạp tiền làm nhiệm vụ nhận hoa hồng', y: 1 },
  { t: 'Mẹ đang kẹt, chuyển khoản gấp 2 triệu, đừng gọi lại', y: 1 },
  { t: 'Nhận miễn phí kim cương, đăng nhập tài khoản game tại link', y: 1 },
  { t: 'Mai lớp mình học tiết 1 ở phòng 204 nhé', y: 0 },
  { t: 'Nhớ mang sách Sinh học và máy tính cầm tay', y: 0 },
  { t: 'Cảm ơn bạn đã cho mình mượn vở ghi', y: 0 },
  { t: 'Chiều nay đội bóng tập lúc 4 giờ ở sân trường', y: 0 },
  { t: 'Cô nhắc nộp bài thuyết trình nhóm vào thứ Sáu', y: 0 },
  { t: 'Tối nay cả nhà ăn cơm lúc 7 giờ nha con', y: 0 }
],
nbTest: [
  { t: 'Bấm link nhận quà miễn phí ngay hôm nay', y: 1 },
  { t: 'Chuyển khoản gấp cho mình, đừng nói với ai', y: 1 },
  { t: 'Gửi mã OTP để nhận thưởng', y: 1 },
  { t: 'Mai nhớ mang vở Toán lên lớp nhé', y: 0 },
  { t: 'Thứ Sáu đội bóng tập ở sân trường', y: 0 },
  { t: 'Cảm ơn cô đã nhắc lịch học', y: 0 }
],
maze: {
  map: [
    'S...#....',
    '##.##.##.',
    '$...1.#..',
    '.##.##$..',
    '#######2#',
    '...###..#',
    '.#..3.#..',
    '.#.##.#$.',
    'G#.$#....'
  ],
  gates: [
    { q: 'Cửa 1: Em có nên nhập số định danh của mình vào chatbot AI?', o: ['Có, để AI hiểu em hơn', 'Không, thông tin định danh không cần cho việc học'], a: 1, e: 'Dữ liệu cá nhân nhập vào AI có thể được lưu lại.' },
    { q: 'Cửa 2: AI đưa ra một trích dẫn nghiên cứu. Em làm gì?', o: ['Mở nguồn gốc để kiểm tra trước khi dùng', 'Dùng ngay vì AI nói rất chắc chắn'], a: 0, e: 'AI có thể bịa trích dẫn (ảo giác AI).' },
    { q: 'Cửa 3: Đăng ảnh AI mô phỏng một người thật, em cần…', o: ['Ghi rõ đây là nội dung tạo bằng AI', 'Không cần ghi gì'], a: 0, e: 'Luật Trí tuệ nhân tạo yêu cầu gắn nhãn nội dung AI mô phỏng người thật.' }
  ],
  traps: [
    'Bẫy “Quà miễn phí”! Món quà hấp dẫn bất thường thường là mồi nhử. Em bị đưa về điểm xuất phát.',
    'Bẫy “Tải APK AI giải bài 100% đúng”! Ứng dụng ngoài kho chính thức dễ chứa mã độc. Em bị đưa về điểm xuất phát.',
    'Bẫy “Tài khoản AI dùng chung giá rẻ”! Người khác có thể đọc lịch sử trò chuyện của em. Em bị đưa về điểm xuất phát.'
  ]
},


/* ---------- Thẻ “Gặp sự cố” ở trang Hỗ trợ ---------- */
helpCards: [
  { ic: 'video', h: 'Bị ghép mặt, giả giọng (deepfake)', p: ['Không trả lời, không trả tiền nếu bị đe doạ.', 'Lưu đường link, ảnh chụp màn hình, tên tài khoản đăng.', 'Báo cha mẹ, GVCN; báo cáo nội dung trên nền tảng; trình báo công an.'] },
  { ic: 'user', h: 'Lỡ nhập thông tin cá nhân vào ứng dụng AI lạ', p: ['Ngừng dùng, xoá lịch sử trò chuyện nếu có thể, gỡ ứng dụng.', 'Đổi mật khẩu các tài khoản đã nhập; bật xác thực hai lớp.', 'Báo cha mẹ để theo dõi tin nhắn, cuộc gọi lạ sau đó.'] },
  { ic: 'phone', h: 'Cuộc gọi giả giọng người thân', p: ['Cúp máy, gọi lại số quen của người đó hoặc hỏi người nhà.', 'Không chuyển tiền, không đọc OTP.', 'Phản ánh số điện thoại lừa đảo tới 156 hoặc 5656.'] },
  { ic: 'user-x', h: 'Tài khoản AI hoặc mạng xã hội bị chiếm', p: ['Khôi phục qua trang hỗ trợ chính thức, đổi mật khẩu email liên kết.', 'Đăng xuất thiết bị lạ, bật xác thực hai lớp.', 'Báo bạn bè: không tin tin nhắn từ tài khoản đó.'] }
],

/* ---------- CẨM NANG (sách lật) ---------- */
handbookTitle: 'Cẩm nang dùng AI an toàn',
handbook: [
  { cover: true, h: 'CẨM NANG DÙNG AI AN TOÀN', s: 'Dành cho học sinh THPT', p: 'Kỷ nguyên AI: Từ người dùng thụ động đến nhà kiến tạo số' },
  { h: '10 quy tắc vàng khi dùng AI', ic: 'star', ol: ['Tự nghĩ trước, rồi mới hỏi AI.', 'Hỏi rõ: vai trò, nhiệm vụ, bối cảnh, định dạng.', 'Không nhập dữ liệu cá nhân của mình và người khác.', 'Kiểm chứng mọi thông tin quan trọng, mọi trích dẫn.', 'Dùng AI để học, không để làm thay.', 'Ghi rõ phần có AI hỗ trợ; gắn nhãn ảnh, video AI.', 'Chỉ dùng ứng dụng AI chính thức, không cài tệp lạ.', 'Không tạo, không chia sẻ deepfake về người khác.', 'Bảo vệ tài khoản: mật khẩu mạnh, xác thực hai lớp, không đưa OTP.', 'Gặp sự cố: DỪNG – XÁC MINH – LƯU – BÁO.'] },
  { h: '4 nguyên tắc vàng', ic: 'sparkle', formula: true, note: 'Thiếu một trong bốn nguyên tắc, AI có thể khiến em học sai, lộ dữ liệu hoặc làm tổn thương người khác.' },
  { h: 'Viết prompt 4 phần', ic: 'message', list: ['Vai trò: AI đóng vai ai? “Em là gia sư Toán kiên nhẫn”.', 'Nhiệm vụ: cần làm gì? “Gợi ý từng bước, chưa cho đáp án”.', 'Bối cảnh: em là ai, đã biết gì? “Lớp 11, đã học đạo hàm”.', 'Định dạng: trình bày thế nào? “Gạch đầu dòng, dưới 150 chữ”.', 'Thêm: “Nếu không chắc, hãy nói là không chắc”.'], tip: 'Prompt tốt không có tên, số điện thoại, ảnh hay thông tin riêng của ai.' },
  { h: 'Dữ liệu nào không đưa cho AI?', ic: 'lock', list: ['Họ tên đầy đủ kèm số định danh, ngày sinh, địa chỉ.', 'Mật khẩu, mã OTP, thông tin thẻ ngân hàng.', 'Ảnh riêng tư; ảnh, giọng nói của bạn bè khi chưa đồng ý.', 'Đề kiểm tra chưa công bố, tài liệu nội bộ.', 'Có thể nhập: đề bài công khai, câu hỏi chung, bài em tự viết để xin góp ý.'] },
  { h: 'Ứng dụng AI giả & lừa đảo dùng AI', ic: 'alert', list: ['“Miễn phí”, “100% đúng”, “chỉ còn 2 giờ” là mồi nhử.', 'Tên miền lạ, tệp .apk, tiện ích trình duyệt không rõ nguồn.', 'Tin nhắn lừa đảo do AI viết không có lỗi chính tả.', 'Giọng nói trong tin nhắn thoại có thể được AI giả.', 'Chatbot “chăm sóc khách hàng” xin OTP là giả.'] },
  { h: 'Deepfake & kiểm chứng', ic: 'video', list: ['Dừng lại – Xem nguồn – Đối chiếu – Tìm gốc.', 'Video giả: khẩu hình lệch, ít chớp mắt, viền mặt nhoè.', 'Gọi lại số quen, hỏi câu chỉ người thật biết.', 'Gia đình có “mật khẩu gia đình” khi khẩn cấp.', 'Nội dung AI mô phỏng người thật phải được gắn nhãn.'] },
  { h: 'Học cùng AI một cách trung thực', ic: 'cap', list: ['Làm theo quy định dùng AI của thầy cô trong từng bài.', 'Xin gợi ý, giải thích; tự làm bài của mình.', 'Ghi rõ: “Có dùng AI để góp ý dàn ý / kiểm tra chính tả”.', 'Không nộp nguyên văn bài AI viết.', 'Hiểu bài là của em; điểm số chỉ là tấm gương phản chiếu.'] },
  { h: 'Pháp luật về AI cần nhớ', ic: 'scale', list: ['Luật Trí tuệ nhân tạo 134/2025/QH15 (hiệu lực 01/3/2026): gắn nhãn nội dung AI mô phỏng người thật, sự kiện thật.', 'Luật An ninh mạng 116/2025/QH15 (01/7/2026): cấm dùng AI giả mạo hình ảnh, giọng nói người khác trái pháp luật.', 'Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 (01/01/2026): cấm mua bán dữ liệu cá nhân.', 'Nghị định 330/2026/NĐ-CP: phát tán tin sai sự thật có thể bị phạt 10 – 20 triệu đồng.'] },
  { h: '4 bậc lên nhà kiến tạo số', ic: 'flash', ladder: true },
  { h: '5 bước khi gặp sự cố', ic: 'lifebuoy', steps: true },
  { h: 'Kênh hỗ trợ', ic: 'phone', hotlines: true, note: 'Ở trường: GVCN, thầy cô Tổ Tin học, Đoàn trường luôn sẵn sàng hỗ trợ em.' }
],

/* ---------- KÊNH HỖ TRỢ ---------- */
hotlines: [
  { n: '113', h: 'Công an', p: 'Gọi khi khẩn cấp: bị đe doạ, tống tiền bằng ảnh, video giả.', tel: '113', c: '#e11d48' },
  { n: '111', h: 'Tổng đài quốc gia bảo vệ trẻ em', p: 'Miễn phí, 24/7. Tư vấn khi bị xâm hại, bắt nạt, đe doạ trên mạng.', tel: '111', c: '#f97316' },
  { n: '156', h: 'Phản ánh cuộc gọi, tin nhắn lừa đảo', p: 'Gọi 156, hoặc nhắn: LD [số điện thoại] [nội dung] gửi 156 hoặc 5656 (miễn phí).', tel: '156', c: '#2563eb' },
  { n: 'Web', h: 'Cảnh báo an toàn thông tin', p: 'Tra cứu, phản ánh trang web và hình thức lừa đảo trực tuyến tại canhbao.khonggianmang.vn.', url: 'https://canhbao.khonggianmang.vn', c: '#16a34a' }
],

/* ---------- THỰC HÀNH 1: SOI TIN NHẮN ---------- */
smsDone: 'Đây là tin nhắn lừa đảo hoặc tin giả.',
sms: [
  { app: 'Messenger', from: 'Anh Tuấn (anh họ)', av: 'AT', time: '22:41',
    seg: [
      ['🎤 '],
      ['Tin nhắn thoại 0:06', 'Tin nhắn thoại rất ngắn: giọng nói có thể được AI giả từ video cũ của người thân.'],
      [' “Em ơi anh đang kẹt ở sân bay, '],
      ['chuyển gấp 3 triệu', 'Thúc giục chuyển tiền gấp.'],
      [' vào '],
      ['tài khoản của bạn anh: 1903xxxx – LE THI M', 'Tài khoản đứng tên người khác.'],
      [' nha. '],
      ['Đừng gọi lại', 'Ngăn em xác minh bằng kênh khác.'],
      [' vì anh đang làm thủ tục.”']
    ] },
  { app: 'Tin nhắn', from: 'ChatGPT-VN', av: 'AI', time: '09:12',
    seg: [
      ['Chuc mung! Ban duoc tang '],
      ['12 thang ChatGPT Plus MIEN PHI', 'Quà quá hấp dẫn, không phải khuyến mãi chính thức.'],
      ['. Kich hoat '],
      ['trong 2 gio', 'Tạo áp lực thời gian.'],
      [' tai '],
      ['chatgpt-plus-free.vn.app', 'Tên miền giả; trang chính thức là chatgpt.com.'],
      [', '],
      ['dang nhap bang tai khoan Google cua ban', 'Trang giả sẽ lấy tài khoản Google của em.'],
      ['.']
    ] },
  { app: 'Quảng cáo Facebook', from: 'AI Giải Bài Tập Pro', av: '📱', time: 'Được tài trợ',
    seg: [
      ['Giải mọi bài tập '],
      ['100% đúng', 'Không có AI nào đúng 100%.'],
      [' bằng AI! '],
      ['Tải bản APK (không có trên CH Play)', 'Tệp cài đặt ngoài kho chính thức dễ chứa mã độc.'],
      ['. Sau khi cài, '],
      ['cấp quyền Trợ năng', 'Quyền Trợ năng cho phép ứng dụng điều khiển điện thoại, đọc màn hình.'],
      [' và '],
      ['quyền Đọc tin nhắn', 'Ứng dụng giải bài không cần đọc tin nhắn: nó có thể lấy mã OTP.'],
      [' để AI hoạt động.']
    ] },
  { app: 'Nhóm lớp 11A2', from: 'Hoàng Nam', av: 'HN', time: '20:05',
    seg: [
      ['THÔNG BÁO KHẨN: '],
      ['thầy hiệu trưởng vừa đăng video nói toàn trường nghỉ học 3 ngày', 'Thông báo quan trọng phải đến từ kênh chính thức của trường, GVCN.'],
      ['!! '],
      ['Mình lấy từ page Confession', 'Nguồn không chính thức.'],
      [', '],
      ['share gấp cho cả lớp nha', 'Thúc giục lan truyền trước khi kiểm chứng.'],
      [', '],
      ['video y như thật luôn', 'Video “y như thật” có thể được tạo bằng AI (deepfake).'],
      [' 😱']
    ] }
],

/* ---------- THỰC HÀNH 2: LINK THẬT – GIẢ (công cụ AI) ---------- */
urls: [
  { u: 'https://chatgpt.com', ok: true, e: 'Địa chỉ chính thức của ChatGPT.' },
  { u: 'https://chatgpt-plus-free.vn.app/kich-hoat', ok: false, e: 'Tên miền thật là vn.app; chữ “chatgpt” chỉ để đánh lừa.' },
  { u: 'https://gemini.google.com', ok: true, e: 'Gemini thuộc tên miền google.com.' },
  { u: 'https://gemini-google.ai-vn.top/login', ok: false, e: 'Tên miền thật là ai-vn.top, đuôi .top, không phải google.com.' },
  { u: 'https://teachablemachine.withgoogle.com', ok: true, e: 'Công cụ huấn luyện mô hình AI của Google, dùng cho dự án học sinh.' },
  { u: 'http://bit.ly/ai-giai-bai-tap-apk', ok: false, e: 'Link rút gọn che địa chỉ thật, dẫn tới tệp .apk.' },
  { u: 'https://copilot.microsoft.com', ok: true, e: 'Copilot thuộc tên miền microsoft.com.' },
  { u: 'https://claude-ai-vietnam.click/tai-app', ok: false, e: 'Trang chính thức là claude.ai; đây là tên miền .click lạ.' }
],

/* ---------- THỰC HÀNH 3: PROMPT LAB ---------- */
promptLab: {
  topic: 'Em cần ôn bài Quang hợp (Sinh học 11) và muốn AI giúp em hiểu bài.',
  parts: [
    { k: 'Vai trò', o: [
      { t: '', label: '(không ghi vai trò)', r: 'mid', e: 'Không có vai trò, AI trả lời chung chung.' },
      { t: 'Em là gia sư Sinh học kiên nhẫn.', label: 'Gia sư Sinh học kiên nhẫn', r: 'good', e: 'Vai trò rõ giúp AI chọn giọng văn, mức độ phù hợp.' },
      { t: 'Em là AI biết mọi thứ và luôn đúng.', label: 'AI biết mọi thứ, luôn đúng', r: 'bad', e: 'Không có AI nào luôn đúng. Câu này không giúp được gì.' }
    ] },
    { k: 'Nhiệm vụ', o: [
      { t: 'Làm hết bài tập quang hợp cho mình.', label: 'Làm hết bài tập cho mình', r: 'bad', e: 'Nhờ AI làm thay: em không học được gì và vi phạm liêm chính học tập.' },
      { t: 'Hãy giải thích pha tối của quang hợp, sau đó hỏi lại mình 3 câu để kiểm tra.', label: 'Giải thích rồi hỏi lại mình 3 câu', r: 'good', e: 'AI giảng và kiểm tra em: cách học cùng AI hiệu quả.' },
      { t: 'Nói về quang hợp.', label: 'Nói về quang hợp', r: 'mid', e: 'Quá mơ hồ, AI không biết em cần gì.' }
    ] },
    { k: 'Bối cảnh', o: [
      { t: 'Mình học lớp 11, đã hiểu pha sáng nhưng chưa hiểu pha tối.', label: 'Lớp 11, chưa hiểu pha tối', r: 'good', e: 'Bối cảnh giúp AI giải thích đúng chỗ em đang vướng.' },
      { t: 'Mình tên Nguyễn Văn A, lớp 11A2 trường Thái Hòa, số điện thoại 09xx xxx xxx.', label: 'Họ tên, lớp, trường, số điện thoại', r: 'bad', e: 'Thông tin cá nhân không cần cho việc học và không nên đưa cho AI.' },
      { t: '', label: '(không ghi bối cảnh)', r: 'mid', e: 'Thiếu bối cảnh, AI có thể giải thích quá dễ hoặc quá khó.' }
    ] },
    { k: 'Định dạng', o: [
      { t: 'Viết thật dài.', label: 'Viết thật dài', r: 'mid', e: 'Dài không có nghĩa là dễ hiểu.' },
      { t: 'Trình bày gạch đầu dòng, dưới 200 chữ, có 1 ví dụ đời sống; nếu không chắc thì nói rõ là không chắc.', label: 'Gạch đầu dòng, < 200 chữ, 1 ví dụ, nói rõ khi không chắc', r: 'good', e: 'Định dạng cụ thể giúp câu trả lời gọn, dễ đọc, trung thực hơn.' },
      { t: '', label: '(không yêu cầu)', r: 'mid', e: 'AI tự chọn cách trình bày, có thể không hợp với em.' }
    ] }
  ]
},

/* ---------- THỰC HÀNH 4: DỮ LIỆU NÀO ĐƯA CHO AI? ---------- */
dataItems: [
  { u: 'Đề bài toán trong sách giáo khoa', ok: true, e: 'Nội dung học tập công khai, an toàn để hỏi.' },
  { u: 'Họ tên, ngày sinh, số định danh cá nhân của em', ok: false, e: 'Thông tin định danh không cần cho việc học, dễ bị lạm dụng nếu lộ.' },
  { u: 'Ảnh chụp bạn cùng lớp (chưa xin phép) để AI “chấm điểm nhan sắc”', ok: false, e: 'Hình ảnh của bạn là thông tin giúp nhận diện bạn; cần bạn đồng ý, và trò này dễ gây tổn thương.' },
  { u: 'Dàn ý bài văn em tự viết, nhờ AI góp ý', ok: true, e: 'Bài của em, nhờ góp ý để tự sửa: cách dùng AI tốt.' },
  { u: 'Mật khẩu email để AI kiểm tra độ mạnh', ok: false, e: 'Không bao giờ nhập mật khẩu thật vào bất kỳ công cụ nào ngoài trang đăng nhập chính thức.' },
  { u: 'Câu hỏi chung: “Giải thích định luật Ohm bằng ví dụ dễ hiểu”', ok: true, e: 'Câu hỏi chung, không chứa thông tin cá nhân.' },
  { u: 'Đề kiểm tra chưa công bố thầy cô gửi riêng cho lớp trưởng', ok: false, e: 'Tài liệu chưa công bố không được đưa ra ngoài.' },
  { u: 'Bảng số liệu thời tiết công khai để AI giúp vẽ biểu đồ', ok: true, e: 'Dữ liệu mở, công khai: phù hợp cho dự án.' }
],

/* ---------- THỰC HÀNH 5: TÌNH HUỐNG ---------- */
scenarios: [
  { t: 'Bài luận nộp tối nay', s: 'Còn 2 tiếng là hết hạn nộp bài luận Ngữ văn. Một bạn gợi ý: “Cứ cho AI viết hết, sửa vài chữ là thầy cô không biết đâu”.',
    o: [
      { t: 'Cho AI viết hết rồi nộp', r: 'bad', e: 'Nộp bài AI viết như bài của mình là thiếu trung thực, và em không học được gì.' },
      { t: 'Tự viết dàn ý, nhờ AI góp ý, tự hoàn thiện và ghi rõ phần AI hỗ trợ', r: 'good', e: 'Đúng. AI là người góp ý, bài viết và suy nghĩ vẫn là của em.' },
      { t: 'Cho AI viết, đổi vài từ để khác đi', r: 'bad', e: 'Đổi vài từ không làm bài trở thành của em.' }
    ] },
  { t: 'Trend ghép mặt', s: 'Cả lớp đang chơi trend dùng app AI ghép mặt bạn bè vào cảnh phim hài. Một bạn rủ em ghép mặt cô chủ nhiệm.',
    o: [
      { t: 'Ghép và đăng lên mạng cho vui', r: 'bad', e: 'Dùng AI giả mạo hình ảnh người khác trái pháp luật bị nghiêm cấm, và có thể làm tổn thương cô.' },
      { t: 'Từ chối; chỉ ghép ảnh của chính mình, và không đăng ảnh người khác khi chưa được đồng ý', r: 'good', e: 'Đúng. Hình ảnh của mỗi người là của chính họ.' },
      { t: 'Ghép nhưng chỉ gửi nhóm kín', r: 'mid', e: 'Nhóm kín vẫn có thể bị chụp lại và phát tán.' }
    ] },
  { t: 'Trích dẫn “nghe rất uy tín”', s: 'Làm bài thuyết trình Lịch sử, AI đưa ra câu: “Theo nghiên cứu năm 2023 của Đại học X, …” kèm số liệu rất ấn tượng.',
    o: [
      { t: 'Đưa ngay vào slide vì nghe uy tín', r: 'bad', e: 'AI có thể bịa cả tên nghiên cứu và số liệu (ảo giác AI).' },
      { t: 'Tìm và mở nghiên cứu gốc; không tìm thấy thì không dùng', r: 'good', e: 'Đúng. Chỉ dùng thông tin em đã tự kiểm chứng được nguồn.' },
      { t: 'Hỏi lại AI “có chắc không?”', r: 'mid', e: 'AI có thể vẫn trả lời “chắc chắn”. Cần kiểm chứng bằng nguồn bên ngoài.' }
    ] },
  { t: 'App “AI chấm điểm nhan sắc”', s: 'Một ứng dụng đang hot yêu cầu tải lên 5 ảnh chân dung, cấp quyền truy cập toàn bộ thư viện ảnh và danh bạ.',
    o: [
      { t: 'Cấp quyền hết để có kết quả chính xác', r: 'bad', e: 'Ảnh khuôn mặt, thư viện ảnh và danh bạ là dữ liệu nhạy cảm; có thể bị dùng để làm deepfake hoặc lừa đảo người quen của em.' },
      { t: 'Không dùng; nếu đã cài thì gỡ, thu hồi quyền', r: 'good', e: 'Đúng. Ứng dụng đòi quyền vượt quá chức năng là dấu hiệu thu thập dữ liệu.' },
      { t: 'Chỉ tải ảnh của bạn thân lên thử', r: 'bad', e: 'Đưa ảnh người khác lên khi chưa được đồng ý là xâm phạm quyền riêng tư.' }
    ] },
  { t: '“Thầy chủ nhiệm” gọi video', s: 'Một cuộc gọi video từ tài khoản mang ảnh thầy chủ nhiệm, hình hơi giật, yêu cầu em đọc mã OTP vừa gửi về điện thoại để “xác thực tài khoản học tập”.',
    o: [
      { t: 'Đọc mã vì thấy mặt thầy', r: 'bad', e: 'Mặt và giọng có thể giả. Thầy cô không bao giờ xin mã OTP.' },
      { t: 'Cúp máy, hỏi lại thầy trực tiếp hoặc qua số quen, báo cha mẹ', r: 'good', e: 'Đúng. OTP là của riêng em; xác minh qua kênh khác.' },
      { t: 'Đọc 3 số đầu thôi', r: 'mid', e: 'Không đưa bất kỳ phần nào của mã OTP.' }
    ] }
],

/* ---------- THỰC HÀNH 6: SẮP XẾP ---------- */
order: {
  t: 'Nhóm em muốn làm chatbot AI trả lời câu hỏi về nội quy, lịch học cho học sinh lớp 10. Sắp xếp các bước theo đúng trình tự kiến tạo.',
  items: [
    'Xác định vấn đề: học sinh mới hay hỏi lại nội quy, lịch học',
    'Thu thập dữ liệu hợp pháp: văn bản công khai của trường, được thầy cô cho phép',
    'Chọn công cụ và làm bản thử nhỏ',
    'Thử nghiệm với các bạn, tìm câu trả lời sai, sửa lỗi',
    'Công bố có ghi rõ là AI, kèm kênh hỏi thầy cô khi AI không chắc'
  ],
  why: 'Bắt đầu từ vấn đề thật; dữ liệu phải hợp pháp; làm nhỏ trước, thử và sửa; công bố minh bạch, nói rõ giới hạn. Đó là cách một nhà kiến tạo số chịu trách nhiệm với sản phẩm của mình.'
},

/* ---------- MINIGAME THẬT HAY GIẢ ---------- */
tf: [
  { q: 'AI tạo sinh có thể đưa ra thông tin sai nhưng trình bày rất tự tin.', a: true, e: 'Đó là “ảo giác AI”. Thông tin quan trọng luôn cần kiểm chứng.' },
  { q: 'Câu trả lời của chatbot AI luôn đúng vì được huấn luyện trên dữ liệu khổng lồ.', a: false, e: 'Dữ liệu lớn không đảm bảo đúng; AI có thể sai, lỗi thời hoặc thiên lệch.' },
  { q: 'Nội dung em nhập vào chatbot có thể được lưu lại.', a: true, e: 'Vì vậy không nhập dữ liệu cá nhân, mật khẩu, thông tin của người khác.' },
  { q: 'Video có khuôn mặt và giọng nói của một người chắc chắn là do người đó quay.', a: false, e: 'Deepfake có thể giả cả mặt và giọng.' },
  { q: 'Từ 01/3/2026, nội dung AI mô phỏng ngoại hình, giọng nói người thật phải được gắn nhãn dễ nhận biết.', a: true, e: 'Đây là yêu cầu minh bạch của Luật Trí tuệ nhân tạo (Luật số 134/2025/QH15).' },
  { q: 'Dùng AI ghép mặt bạn vào video chế giễu chỉ là trò đùa, không vi phạm gì.', a: false, e: 'Giả mạo hình ảnh người khác trái pháp luật bị nghiêm cấm và gây tổn thương thật.' },
  { q: 'Nhờ AI gợi ý từng bước rồi tự làm là cách học cùng AI hiệu quả.', a: true, e: 'AI là gia sư, em là người học.' },
  { q: 'Nộp nguyên văn bài AI viết là trung thực nếu thầy cô không phát hiện.', a: false, e: 'Trung thực không phụ thuộc vào việc có bị phát hiện hay không.' },
  { q: 'Ứng dụng “AI giải bài tập” tải từ tệp .apk ngoài kho chính thức là an toàn nếu nhiều người dùng.', a: false, e: 'Tệp ngoài kho chính thức dễ chứa mã độc, bất kể bao nhiêu người tải.' },
  { q: 'Prompt nêu rõ vai trò, nhiệm vụ, bối cảnh, định dạng thường cho kết quả tốt hơn.', a: true, e: 'Càng rõ ràng, AI càng hiểu đúng điều em cần.' },
  { q: 'AI có thể thiên lệch nếu dữ liệu huấn luyện thiên lệch.', a: true, e: 'AI học từ dữ liệu, nên dữ liệu lệch sẽ cho kết quả lệch.' },
  { q: 'Tin nhắn lừa đảo do AI viết thường có nhiều lỗi chính tả nên rất dễ nhận ra.', a: false, e: 'AI giúp kẻ gian viết trơn tru. Hãy dựa vào dấu hiệu GẤP, BÍ MẬT, TIỀN/MÃ, LINK LẠ.' },
  { q: 'Mua tài khoản AI trả phí “dùng chung giá rẻ” trên mạng là hoàn toàn an toàn.', a: false, e: 'Người khác có thể đọc lịch sử trò chuyện của em; tài khoản có thể bị khoá.' },
  { q: 'Trích dẫn, nguồn tham khảo do AI đưa ra cần được mở và kiểm tra lại.', a: true, e: 'AI có thể bịa tên sách, bài báo, số liệu.' },
  { q: 'Bộ GD&ĐT triển khai giáo dục AI đại trà cho học sinh phổ thông từ năm học 2026 – 2027.', a: true, e: 'Theo Quyết định 2422/QĐ-BGDĐT ngày 18/8/2026 và hướng dẫn kèm theo.' },
  { q: 'Học sinh THPT chỉ có thể dùng AI, không thể tự làm ra công cụ AI.', a: false, e: 'Với Teachable Machine, Scratch, Python…, học sinh có thể huấn luyện mô hình, làm chatbot nhỏ.' },
  { q: 'Ảnh chụp bạn bè cần được bạn đồng ý trước khi đưa lên công cụ AI.', a: true, e: 'Hình ảnh giúp nhận diện một người; hãy tôn trọng quyền riêng tư.' },
  { q: 'Luật An ninh mạng 2025 cấm dùng AI giả mạo video, hình ảnh, giọng nói của người khác trái pháp luật.', a: true, e: 'Luật số 116/2025/QH15, hiệu lực từ 01/7/2026.' },
  { q: 'Khi đăng ảnh tạo bằng AI có thể bị hiểu là ảnh thật, em nên ghi rõ đó là ảnh AI.', a: true, e: 'Minh bạch giúp người xem không bị hiểu lầm.' },
  { q: '“Trợ lý ảo” của ngân hàng gọi điện đến có thể yêu cầu em đọc mã OTP.', a: false, e: 'Không ai, kể cả ngân hàng, được xin mã OTP của em.' },
  { q: 'Có AI rồi thì không cần học nữa vì cái gì AI cũng biết.', a: false, e: 'Không có kiến thức nền, em sẽ không biết AI đang đúng hay sai.' },
  { q: 'Nhà kiến tạo số dùng AI để giải quyết vấn đề thật và chịu trách nhiệm với sản phẩm của mình.', a: true, e: 'Đó là bậc cao nhất của hành trình từ người dùng đến nhà kiến tạo.' },
  { q: 'Tìm kiếm ngược hình ảnh giúp biết một bức ảnh có phải ảnh cũ gắn với sự kiện mới hay không.', a: true, e: 'Google Lens và công cụ tương tự giúp tìm nguồn gốc ảnh.' },
  { q: 'Chia sẻ lại video deepfake sai sự thật không bị xử phạt vì mình không tạo ra nó.', a: false, e: 'Nghị định 330/2026/NĐ-CP xử phạt cả hành vi phát tán thông tin sai sự thật.' }
],

/* ---------- PHÁP LUẬT ---------- */
lawHead: { title: 'Pháp luật về AI, dữ liệu và an toàn thông tin', sub: 'Thẻ tóm tắt các văn bản mới và đề luyện tập (trắc nghiệm nhiều lựa chọn + đúng – sai) có chấm điểm.' },
lawCards: [
  { no: '134/2025/QH15', n: 'Luật Trí tuệ nhân tạo', eff: '01/3/2026', c: '#7c3aed', pts: ['Luật chuyên biệt đầu tiên của Việt Nam về nghiên cứu, phát triển, cung cấp và sử dụng AI.', 'Nội dung AI tạo hoặc chỉnh sửa mô phỏng ngoại hình, giọng nói người thật hoặc tái hiện sự kiện thực tế phải gắn nhãn dễ nhận biết.', 'Có cơ chế thử nghiệm có kiểm soát (sandbox) và Quỹ Phát triển trí tuệ nhân tạo quốc gia.'] },
  { no: '142/2026/NĐ-CP', n: 'Nghị định hướng dẫn Luật Trí tuệ nhân tạo', eff: '01/5/2026', c: '#a855f7', pts: ['Quy định chi tiết một số điều và biện pháp thi hành Luật Trí tuệ nhân tạo.', 'Điều 18: thông báo và gắn nhãn hiển thị đối với nội dung do AI tạo ra; nhãn phải rõ ràng, dễ hiểu, dễ nhận biết.'] },
  { no: '116/2025/QH15', n: 'Luật An ninh mạng', eff: '01/7/2026', c: '#2563eb', pts: ['Thay thế Luật An ninh mạng 2018 và Luật An toàn thông tin mạng 2015.', 'Nghiêm cấm dùng AI, công nghệ mới để giả mạo video, hình ảnh, giọng nói của người khác trái pháp luật.'] },
  { no: '91/2025/QH15', n: 'Luật Bảo vệ dữ liệu cá nhân', eff: '01/01/2026', c: '#16a34a', pts: ['Chủ thể dữ liệu có quyền được biết, đồng ý/rút lại đồng ý, xem, chỉnh sửa, yêu cầu xoá…', 'Nghiêm cấm mua bán dữ liệu cá nhân dưới mọi hình thức.', 'Luật còn hạn chế việc thu thập, xử lý dữ liệu cá nhân trái phép, kể cả để huấn luyện AI.'] },
  { no: '330/2026/NĐ-CP', n: 'Nghị định xử phạt VPHC về an ninh mạng và bảo vệ dữ liệu cá nhân', eff: '19/8/2026', c: '#f97316', pts: ['Làm ra, phát tán thông tin sai sự thật, chưa kiểm chứng ảnh hưởng quyền, lợi ích hợp pháp: phạt 10 – 20 triệu đồng (cá nhân); tổ chức gấp đôi.', 'Biện pháp khắc phục: buộc gỡ bỏ, cải chính thông tin sai sự thật.'] },
  { no: '2422/QĐ-BGDĐT', n: 'Khung nội dung giáo dục AI cho học sinh phổ thông', eff: '18/8/2026', c: '#0ea5e9', pts: ['Triển khai đại trà từ năm học 2026 – 2027.', '4 mạch: Tư duy lấy con người làm trung tâm; Đạo đức AI; Các kĩ thuật và ứng dụng AI; Thiết kế hệ thống AI.', 'THPT: khám phá, thiết kế, cải tiến công cụ AI đơn giản qua dự án; tạo sản phẩm phục vụ cộng đồng.'] }
],
lawMCQ: [
  { q: 'Luật Trí tuệ nhân tạo của Việt Nam là luật số mấy?', o: ['116/2025/QH15', '134/2025/QH15', '91/2025/QH15', '148/2025/QH15'], a: 1 },
  { q: 'Luật Trí tuệ nhân tạo có hiệu lực thi hành từ ngày nào?', o: ['01/01/2026', '01/3/2026', '01/7/2026', '16/11/2026'], a: 1 },
  { q: 'Theo Luật Trí tuệ nhân tạo, nội dung nào phải được gắn nhãn dễ nhận biết?', o: ['Mọi văn bản soạn trên máy tính', 'Nội dung AI tạo hoặc chỉnh sửa mô phỏng ngoại hình, giọng nói người thật hoặc tái hiện sự kiện thực tế', 'Ảnh chụp phong cảnh bằng điện thoại', 'Tin nhắn riêng giữa hai người'], a: 1 },
  { q: 'Luật An ninh mạng 2025 nghiêm cấm hành vi nào sau đây?', o: ['Dùng AI để học ngoại ngữ', 'Dùng AI giả mạo video, hình ảnh, giọng nói của người khác trái pháp luật', 'Dùng AI để dịch tài liệu', 'Dùng AI để vẽ tranh phong cảnh'], a: 1 },
  { q: 'Theo Luật Bảo vệ dữ liệu cá nhân 2025, hành vi nào bị nghiêm cấm?', o: ['Yêu cầu xoá dữ liệu của mình', 'Rút lại sự đồng ý xử lý dữ liệu', 'Mua bán dữ liệu cá nhân', 'Xem dữ liệu cá nhân của mình'], a: 2 },
  { q: 'Theo Nghị định 330/2026/NĐ-CP, cá nhân làm ra, phát tán thông tin sai sự thật, chưa được kiểm chứng làm ảnh hưởng quyền, lợi ích hợp pháp của người khác có thể bị phạt:', o: ['1 – 2 triệu đồng', '5 – 10 triệu đồng', '10 – 20 triệu đồng', '50 – 70 triệu đồng'], a: 2 },
  { q: 'Khung nội dung giáo dục AI cho học sinh phổ thông được ban hành kèm theo văn bản nào?', o: ['Quyết định 2422/QĐ-BGDĐT', 'Nghị định 330/2026/NĐ-CP', 'Luật số 134/2025/QH15', 'Thông tư 02/2025/TT-BGDĐT'], a: 0 },
  { q: 'Mạch nào KHÔNG thuộc Khung nội dung giáo dục AI cho học sinh phổ thông?', o: ['Tư duy lấy con người làm trung tâm', 'Đạo đức AI', 'Thiết kế hệ thống AI', 'Kinh doanh sản phẩm AI'], a: 3 },
  { q: '“Ảo giác AI” là hiện tượng gì?', o: ['AI chạy chậm', 'AI tạo ra thông tin sai hoặc bịa nhưng trình bày như thật', 'AI từ chối trả lời', 'AI tạo hình ảnh 3D'], a: 1 },
  { q: 'Prompt nào giúp em học tốt nhất?', o: ['“Làm bài cho mình”', '“Nói về đạo hàm”', '“Em là gia sư Toán. Gợi ý từng bước bài đạo hàm này cho học sinh lớp 11, chưa cho đáp án”', '“Viết thật dài về đạo hàm”'], a: 2 },
  { q: 'Khi AI đưa ra một trích dẫn nghiên cứu, em nên làm gì?', o: ['Dùng ngay', 'Mở nguồn gốc để kiểm tra; không tìm thấy thì không dùng', 'Đổi tên tác giả cho chắc', 'Hỏi lại AI một lần là đủ'], a: 1 },
  { q: 'Đầu số tiếp nhận phản ánh cuộc gọi, tin nhắn có dấu hiệu lừa đảo là:', o: ['111', '115', '156 hoặc 5656', '1900'], a: 2 }
],
lawTF: [
  { s: 'Bạn Minh dùng ứng dụng AI ghép mặt một bạn cùng lớp vào clip hài rồi đăng lên mạng xã hội.',
    i: [
      ['Hình ảnh khuôn mặt của bạn là thông tin giúp nhận diện bạn đó, cần được bạn đồng ý.', true],
      ['Vì chỉ để vui nên Minh không phải chịu trách nhiệm gì.', false],
      ['Dùng AI giả mạo hình ảnh người khác trái pháp luật là hành vi bị Luật An ninh mạng 2025 nghiêm cấm.', true],
      ['Người xem chia sẻ lại clip cũng có thể góp phần gây tổn hại cho bạn trong clip.', true]
    ] },
  { s: 'Bạn Lan dùng AI hỗ trợ làm bài thuyết trình môn Lịch sử.',
    i: [
      ['Lan nên kiểm tra lại các mốc thời gian, trích dẫn AI đưa ra.', true],
      ['Lan có thể nộp nguyên văn bài AI viết mà không cần ghi chú gì.', false],
      ['Lan không nên nhập họ tên, số định danh của mình vào chatbot.', true],
      ['Ảnh AI mô phỏng một sự kiện lịch sử như ảnh chụp thật nên được ghi rõ là ảnh tạo bằng AI.', true]
    ] }
],

/* ---------- KHUNG CHƯƠNG TRÌNH (chế độ báo cáo viên) ---------- */
agenda: [
  { m: 5, t: 'Khai mạc, giới thiệu đại biểu và báo cáo viên', who: 'Dẫn chương trình', go: 'home' },
  { m: 35, t: 'Báo cáo chuyên đề “Trí tuệ nhân tạo & An toàn thông tin – Kỷ nguyên AI: Từ người dùng thụ động đến nhà kiến tạo số”', who: 'Báo cáo viên', go: 'baihoc',
    sub: [
      { m: 3, t: 'Khởi động: 2 câu “Thật hay Giả?”, cả hội trường giơ tay', go: 'minigame' },
      { m: 6, t: 'Phần 1. AI là gì và bên trong AI: dữ liệu, mô hình, huấn luyện (Bài 1, 2)', go: 'baihoc-1' },
      { m: 7, t: 'Phần 2. AI tạo sinh và dùng AI thông minh: prompt 4 phần, kiểm chứng (Bài 3, 4)', go: 'baihoc-3' },
      { m: 7, t: 'Phần 3. An toàn thông tin khi dùng AI, deepfake (Bài 5, 6)', go: 'baihoc-5' },
      { m: 4, t: 'Phần 4. Thuật toán gợi ý, thiên kiến, tác động của AI (Bài 7)', go: 'baihoc-7' },
      { m: 3, t: 'Phần 5. Pháp luật và đạo đức AI (Bài 8)', go: 'baihoc-8' },
      { m: 5, t: 'Phần 6. Từ người dùng thụ động đến nhà kiến tạo số (Bài 9)', go: 'baihoc-9' }
    ] },
  { m: 15, t: 'Thực hành và giao lưu: Soi ảnh AI, Dạy AI, Prompt Lab, xử lý tình huống, hỏi đáp', who: 'Báo cáo viên, học sinh', go: 'thuchanh' },
  { m: 5, t: 'Tổng kết, ký cam kết dùng AI có trách nhiệm', who: 'Báo cáo viên', go: 'chungnhan' }
],

/* ---------- GIẤY CHỨNG NHẬN ---------- */
certificate: {
  org: 'TRƯỜNG THPT THÁI HÒA',
  title: 'GIẤY CHỨNG NHẬN',
  sub: 'Chương trình “Kiến Tạo Số” – Trí tuệ nhân tạo & An toàn thông tin',
  topic: 'Kỷ nguyên AI: Từ người dùng thụ động đến nhà kiến tạo số',
  footnote: 'Chuyên đề ngày 16/11/2026',
  signTitle: 'BAN TỔ CHỨC',
  signName: '',
  minLessons: 6,
  minPrac: 5,
  pledges: [
    'Em tự suy nghĩ trước, dùng AI để học chứ không để làm thay.',
    'Em không nhập thông tin cá nhân của mình và người khác vào AI.',
    'Em kiểm chứng thông tin AI đưa ra trước khi dùng và chia sẻ.',
    'Em không tạo, không chia sẻ deepfake hay nội dung AI gây hại cho người khác.',
    'Em ghi rõ khi dùng AI và gắn nhãn nội dung do AI tạo ra.'
  ]
}
};
