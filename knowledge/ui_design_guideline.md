# Tài Liệu Phong Cách Thiết Kế UI/UX - Kim Lan Management

Định hướng thiết kế lấy cảm hứng từ thế giới **kiếm hiệp cổ trang - tu tiên Trung Quốc**, kết hợp với giao diện web hiện đại. Mục tiêu tạo ra một không gian số mang hơi thở của kiếm khách, tiên nhân, và phái môn huyền bí — phù hợp với bản sắc một Guild game phong cách cổ trang.

---

## 🎨 1. Bảng Màu (Color Palette)

### Màu chủ đạo — Đêm Kiếm Hiệp
Tối và huyền bí như bầu trời đêm trên đỉnh núi tu luyện.

| Tên màu | Hex | Dùng cho |
| :--- | :--- | :--- |
| **Huyền Hắc** (Obsidian) | `#0D0D0F` | Background chính |
| **Thâm Tím Cổ** (Deep Imperial) | `#1A0A2E` | Card, Panel nền |
| **Huyết Ngọc** (Blood Jade) | `#8B0000` | Accent chính, CTA button |
| **Kim Hoàng** (Imperial Gold) | `#C9A84C` | Tiêu đề, viền, icon quan trọng |
| **Ngọc Thanh** (Jade Green) | `#2E7D6A` | Trạng thái tích cực (ACTIVE, APPROVED) |
| **Bạch Ngân** (Silver Mist) | `#E8E0D0` | Chữ nội dung trên nền tối |
| **Tro Cổ** (Ancient Ash) | `#6B6560` | Chữ phụ, placeholder |

### Gradient đặc trưng
```css
/* Phong cuốn thư — nền panel */
background: linear-gradient(135deg, #1A0A2E 0%, #0D0D0F 60%, #2A0A0A 100%);

/* Kim quang — viền nổi bật */
border-image: linear-gradient(90deg, transparent, #C9A84C, transparent) 1;

/* Tiên khí — glow effect */
box-shadow: 0 0 20px rgba(201, 168, 76, 0.3), 0 0 60px rgba(139, 0, 0, 0.15);
```

---

## 🖋️ 2. Typography (Chữ Viết)

| Loại | Font | Ghi chú |
| :--- | :--- | :--- |
| **Tiêu đề lớn** | `Ma Shan Zheng` (Google Fonts) | Phong cách chữ cổ Trung Hoa |
| **Tiêu đề phụ / Label** | `Cinzel` (Google Fonts) | Cổ kính, sang trọng |
| **Nội dung chính** | `Noto Serif SC` hoặc `Be Vietnam Pro` | Dễ đọc, hỗ trợ Tiếng Việt tốt |
| **Code / Badge** | `JetBrains Mono` | Dùng cho tag, badge trạng thái |

### Cấp độ chữ
```css
/* Hiệu tiêu đề chính */
h1 { font-size: 2.5rem; letter-spacing: 0.15em; color: #C9A84C; text-shadow: 0 0 10px rgba(201,168,76,0.4); }

/* Tên phái, tên sự kiện */
h2 { font-size: 1.75rem; letter-spacing: 0.08em; }

/* Nội dung */
p  { font-size: 1rem; line-height: 1.8; color: #E8E0D0; }
```

---

## 🏯 3. Layout & Component Style

### ✦ Card (Thẻ thông tin)
Gợi lên hình ảnh cuộn giấy, phong bì hoặc bài vị trên khay gỗ.

```css
.card {
  background: linear-gradient(160deg, #1A0A2E, #100818);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 4px; /* Góc vuông, không bo tròn quá */
  padding: 24px;
  position: relative;
}
/* Góc trang trí kiểu khung tranh cổ */
.card::before, .card::after {
  content: '✦';
  position: absolute;
  color: #C9A84C;
  font-size: 0.7rem;
}
```

### ✦ Button (Nút hành động)
- **Primary (Xuất quân):** Nền đỏ Huyết Ngọc `#8B0000`, viền vàng kim mỏng, chữ trắng ngà.
- **Secondary (Lui quân):** Nền trong suốt, viền vàng, chữ vàng.
- **Danger (Trục xuất):** Nền tối, viền đỏ thẫm, chữ đỏ.

```css
.btn-primary {
  background: #8B0000;
  border: 1px solid #C9A84C;
  color: #E8E0D0;
  padding: 10px 28px;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  box-shadow: 0 0 15px rgba(139, 0, 0, 0.6);
  background: #A00000;
}
```

### ✦ Badge / Tag trạng thái
| Trạng thái | Màu | Icon gợi ý |
| :--- | :--- | :--- |
| ACTIVE / APPROVED | `#2E7D6A` (Ngọc) | ⚔️ Đang hành hiệp |
| PENDING | `#C9A84C` (Vàng) | ⏳ Đang thẩm tra |
| BLOCKED / REJECTED | `#8B0000` (Đỏ) | 🚫 Bị trục xuất |
| CLOSED / CANCELLED | `#6B6560` (Tro) | 💨 Đã kết thúc |

---

## ✨ 4. Hiệu Ứng & Animation

### Tiên Khí Lưu Chuyển (Particle / Glow)
- Nền dashboard có hạt ánh sáng lơ lửng nhẹ nhàng (dùng `tsparticles` hoặc CSS animation).
- Ánh sáng bừng lên khi hover vào card (gold shimmer).

### Thư Pháp Hiển Linh (Text Reveal)
- Tiêu đề trang xuất hiện từng chữ một như bút pháp đang viết — dùng `animation: fadeInUp` kết hợp `letter-spacing` mở rộng.

### Kiếm Quang (Divider)
- Dùng `<hr>` với gradient vàng-đỏ-trong suốt thay cho divider thông thường.
```css
hr.divider {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #C9A84C, #8B0000, #C9A84C, transparent);
}
```

### Cổng Phái (Sidebar / Navigation)
- Sidebar dọc bên trái, nền tối `#0D0D0F`, biểu tượng môn phái (logo Kim Lan) ở đầu.
- Menu items có gạch dưới kiểu bút lông khi active.

---

## 🗺️ 5. Layout Tổng Thể Các Trang

### Trang Login (`/login`)
```
┌─────────────────────────────┐
│  [Nền: Núi mây cổ trang]    │
│                             │
│  ┌───────────────────────┐  │
│  │  🏯 KIM LAN QUẢN SỰ  │  │  ← Logo + tên phái
│  │  ─────────────────────│  │
│  │  [Google] [Discord]   │  │  ← Nút login
│  └───────────────────────┘  │
└─────────────────────────────┘
```

### Dashboard (`/dashboard`)
```
┌────────┬────────────────────────────────────┐
│        │  Header: Chào [Tên ingame] ✦       │
│ Sidebar│  ──────────────────────────────── │
│        │  [Sự kiện hôm nay] [Chưa vote]    │
│ • Tổng │                                    │
│   quan │  ┌──────────┐ ┌──────────────────┐│
│ • Kim  │  │ Thống kê │ │  Sự kiện sắp tới ││
│   Lan  │  └──────────┘ └──────────────────┘│
│ • Sự   │                                    │
│   kiện │  ┌────────────────────────────────┐│
│ • Thành│  │ Thành viên chưa vote           ││
│   viên │  └────────────────────────────────┘│
└────────┴────────────────────────────────────┘
```

---

## 📐 6. Yếu Tố Cổ Trang & Tu Tiên

### Icon & Illustration
- Dùng icon phong cách East Asian: ⚔️ 🏯 🎋 🌸 ☯️ 🌙 ✦ 卍
- Avatar người dùng có viền tròn với khung phong cách triện son (red seal).
- Ảnh background: núi mây, trúc rừng, kiếm sĩ bóng đêm — dùng blend mode `overlay` để hòa với màu nền tối.

### Ngôn ngữ UI gợi cảm (Copy Style)
Thay vì dùng thuật ngữ công nghệ khô khan, dùng ngôn ngữ có hơi hướng kiếm hiệp:

| UI Text thông thường | Phong cách Kim Lan |
| :--- | :--- |
| Tham gia sự kiện | Xuất quân ⚔️ |
| Không tham gia | Lui trận 🌙 |
| Đang chờ duyệt | Đang thụ thẩm ⏳ |
| Thành viên | Môn đệ |
| Leader | Đại sư huynh / Chưởng môn |
| Guild | Kim Lan / Phái |
| Dashboard | Trung Tâm Chỉ Huy |
| Đăng xuất | Quy ẩn 🌿 |

### Decorative Elements
- **Triện son** (red seal stamp): Dùng dấu triện trang trí góc card quan trọng (SVG/image).
- **Hoa văn viền**: Pattern hoa văn Trung Hoa làm nền phụ (opacity thấp ~5%).
- **Mây lưu** (Cloud motif): Dùng cho section separator trên mobile.

---

## 📱 7. Responsive Design

- **Desktop (≥1280px):** Layout full với sidebar cố định bên trái.
- **Tablet (768-1279px):** Sidebar thu gọn thành icon.
- **Mobile (<768px):** Bottom Navigation Bar, card stacked dọc.

---

## 🔗 8. Tham Khảo Phong Cách

Lấy cảm hứng từ:
- **Game:** Kiếm Thế, Tiếu Ngạo Giang Hồ, Thiên Duyên, Blade & Soul
- **Phim:** Trần Tình Lệnh, Tiên Kiếm Kỳ Hiệp
- **Design ref:** Dark Fantasy UI kit, Chinese RPG Dashboard Design
