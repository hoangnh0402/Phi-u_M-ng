# Tài Liệu Thiết Kế Chức Năng (SRS) - Kim Lan Management

Tài liệu này mô tả chi tiết các yêu cầu chức năng cho hệ thống quản lý Kim Lan, được chia thành các module nghiệp vụ cụ thể.

---

## I. MODULE AUTHENTICATION & AUTHORIZATION

### 1. Đăng nhập (Authentication)
- **OAuth2 Providers:**
    - Login bằng Google.
    - Login bằng Discord.
    - Login bằng Facebook (Tùy chọn).
- **Session Management:**
    - Cơ chế Refresh token.
    - Đăng xuất (Logout).
    - Middleware kiểm tra tính hợp lệ của token.

### 2. Phân quyền (RBAC - Role Based Access Control)
Hệ thống sử dụng các cấp bậc phân quyền sau:
- **ADMIN:** Toàn quyền hệ thống.
- **LEADER (Đội trưởng):** Quản lý Kim Lan và các sự kiện nội bộ.
- **VICE (Phó):** Hỗ trợ Leader quản lý.
- **MEMBER:** Thành viên tham gia hoạt động.
- **GUEST:** Người dùng chưa gia nhập Kim Lan.

### 3. Quản lý Role
- Admin có quyền gán/thay đổi Role người dùng.
- Leader có quyền bổ nhiệm hoặc bãi nhiệm Phó đội trưởng.
- Cơ chế thu hồi quyền hạn ngay lập tức khi cần thiết.

---

## II. MODULE USER (HỒ SƠ NGƯỜI DÙNG)

### 1. Quản lý Hồ sơ (CRUD)
- Tự động tạo hồ sơ cơ bản sau khi login lần đầu qua mạng xã hội.
- **Cập nhật thông tin:**
    - Tên In-game (bắt buộc).
    - Ảnh đại diện (Avatar).
    - Discord ID (để nhận diện trên server Discord).
- Xem chi tiết hồ sơ cá nhân và hồ sơ của người chơi khác.

### 2. Quản lý trạng thái
- **ACTIVE:** Đang hoạt động bình thường.
- **PENDING:** Đang chờ duyệt hồ sơ hoặc duyệt vào Kim Lan.
- **BLOCKED:** Bị khóa tài khoản do vi phạm.

### 3. Tìm kiếm & lọc
- Tìm kiếm thành viên theo tên In-game.
- Lọc danh sách theo Role hoặc theo Kim Lan đang tham gia.

---

## III. MODULE KIM LAN (GUILD)

### 1. Quản lý Kim Lan
- Cho phép tạo mới, chỉnh sửa thông tin hoặc xóa Kim Lan.
- Chỉ định và thay đổi Đội trưởng.

### 2. Quản lý thành viên
- Xem danh sách thành viên thuộc Kim Lan.
- Quyền hạn của Leader: Kick thành viên, chuyển nhượng quyền Leader, bổ nhiệm Vice.

### 3. Yêu cầu tham gia (Join Request)
- Người dùng gửi yêu cầu gia nhập vào một Kim Lan cụ thể.
- Leader nhận thông báo và thực hiện Duyệt/Từ chối.
- Thông báo kết quả cho User khi yêu cầu được xử lý.

### 4. Thống kê nội bộ
- Theo dõi tổng số thành viên, số lượng thành viên đang online/active.
- Danh sách các thành viên "lười" (chưa vote cho các sự kiện sắp tới).

---

## IV. MODULE SỰ KIỆN / PHÓ BẢN

### 1. Quản lý Sự kiện (CRUD)
- Quản lý vòng đời sự kiện: Tạo mới, sửa đổi, xóa bỏ.
- Hệ thống lọc thông tin sự kiện theo Loại, Thời gian, hoặc theo phân loại Kim Lan.

### 2. Loại sự kiện
- **PHO_BAN:** Đi các phụ bản trong game.
- **HOAT_DONG_CHUNG:** Các hoạt động hàng ngày/tuần.
- **EVENT ĐẶC BIỆT:** Các sự kiện giới hạn thời gian.
- **Hoạt động ngoài game:** Picnic, offline, hoặc các kỷ niệm như chụp ảnh cưới trong game.

### 3. Chia nhỏ sự kiện (Sub-event)
- Cho phép chia một sự kiện lớn thành các boss nhỏ hoặc khung giờ nhỏ.
- **Ví dụ:**
    - Vũ Dương Thành (Phòng 1): 8h PM.
    - Vũ Dương Thành (Phòng 2): 9h PM.

### 4. Trạng thái sự kiện
- **DRAFT:** Đang soạn thảo.
- **PUBLISHED:** Đã công khai cho thành viên vote.
- **CLOSED:** Đã kết thúc.
- **CANCELLED:** Bị hủy bỏ.

---

## V. MODULE ĐĂNG KÝ & VOTE

### 1. Các hình thức Vote
- **YES / NO:** Xác nhận tham gia hoặc không tham gia.
- **TIME_RANGE:** Cho phép chọn khoảng thời gian rảnh (from – to).
- **Sub-event Vote:** Đăng ký cho từng mục tiêu/khung giờ cụ thể trong sự kiện lớn.

### 2. Quy tắc Vote
- Cho phép cập nhật/thay đổi lựa chọn trước thời điểm Deadline.
- Tự động khóa chức năng Vote khi đã quá hạn hoặc sự kiện đóng.

### 3. Kiểm soát tham gia
- Xuất danh sách các thành viên chưa đăng ký hoặc chưa chọn khung giờ để nhắc nhở.

---

## VI. MODULE THỐNG KÊ (ANALYTICS)

### 1. Thống kê sự kiện
- Báo cáo số lượng: Tham gia, Không tham gia, Chưa vote.
- Biểu đồ tỉ lệ phản hồi của thành viên.

### 2. Thống kê khung giờ
- Xác định khung giờ vàng (có nhiều người rảnh nhất).
- Heatmap thời gian online của các thành viên.

### 3. Thống kê theo User
- Đánh giá sự chuyên cần: Tần suất tham gia, tỉ lệ bỏ sự kiện mà không báo trước.
- Vinh danh Top thành viên tích cực nhất.

### 4. Xuất báo cáo (Export)
- Hỗ trợ xuất dữ liệu ra các định dạng: **CSV, Excel, PDF**.

---

## VII. MODULE NOTIFICATION (THÔNG BÁO)

### 1. Kênh Email (SMTP)
- Gửi thông báo khi có sự kiện mới, khi được duyệt vào Guild.
- Nhắc nhở thành viên chưa vote hoặc nhắc trước khi sự kiện bắt đầu 30 phút.

### 2. Kênh Discord (Webhook)
- Đẩy thông báo tự động vào channel của Guild.
- Sử dụng Tag role để gây sự chú ý.
- Nhắc nhở tự động theo lịch trình.

### 3. Thông báo nội bộ
- Hiển thị badge số lượng thông báo chưa đọc trên Dashboard.
- Danh sách thông báo ngay trong ứng dụng.

### 4. Tự động hóa (Cron Jobs)
- Chạy định kỳ kiểm tra lịch trình sự kiện để gửi nhắc nhở.
- Quét danh sách thành viên chưa vote để push notification.

---

## VIII. MODULE ADMIN

### 1. Quản trị hệ thống
- Giám sát toàn bộ Kim Lan, User và Sự kiện trên hệ thống.
- **Quản lý cấu hình:** SMTP Server, Discord Webhooks, cài đặt thời gian nhắc nhở chung.

### 2. Nhật ký & Giám sát (Logs)
- Lưu trữ lịch sử gửi Email/Notification.
- Theo dõi lỗi hệ thống.
- **Audit Log:** Ghi lại vết ai đã làm gì (Ai tạo event, ai sửa, ai kick member...).

---

## IX. MODULE DASHBOARD

### 1. Dashboard dành cho Leader
- Danh sách sự kiện sắp tới cần quản lý.
- Danh sách nhanh các thành viên chưa vote.
- Biểu đồ thống kê hiệu quả hoạt động của Guild.

### 2. Dashboard dành cho Member
- Lịch trình sự kiện trong ngày của bản thân.
- Các sự kiện đã đăng ký và danh sách cần vote ngay.

---

## X. MODULE TÌM KIẾM & LỌC TOÀN CỤC (GLOBAL SEARCH)
- Hỗ trợ tìm kiếm nhanh theo từ khóa trên toàn hệ thống (User, Guild, Event).
- Các bộ lọc nâng cao theo ngày tháng, phân loại và trạng thái.

---

## XI. MODULE HỆ THỐNG (SYSTEM)

### 1. Bảo mật kỹ thuật
- Stateless JWT & Refresh Token.
- Giới hạn lưu lượng (Rate limit) để chống spam.
- Bảo vệ CSRF cho các yêu cầu thay đổi trạng thái.

### 2. Hiệu năng (Performance)
- Sử dụng Redis Cache cho các dữ liệu tính toán nặng (Analytics).
- Phân trang (Pagination) và Tải lười (Lazy loading) cho các danh sách lớn.

### 3. Giám sát kỹ thuật
- Spring Boot Actuator/Health check.
- Tích hợp Prometheus để theo dõi các chỉ số (metrics).
