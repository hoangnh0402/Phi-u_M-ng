# Kế Hoạch Xây Dựng Web Kim Lan Management (Monolithic)

Chuyển đổi từ microservices sang **kiến trúc Monolithic nhiều tầng (Layered Architecture)** để tối ưu chi phí vận hành. Toàn bộ logic nghiệp vụ được gói gọn trong một ứng dụng backend duy nhất, dễ deploy và dễ bảo trì.

---

## Tech Stack Lựa Chọn

| Layer | Công nghệ | Lý do |
| :--- | :--- | :--- |
| **Frontend** | Next.js 14 (App Router) | SSR/SSG, SEO tốt, UI nhanh |
| **Backend** | Spring Boot 3 (Java 21) | Mature, đầy đủ ecosystem |
| **Database** | PostgreSQL | Miễn phí, mạnh mẽ, hỗ trợ UUID tốt |
| **ORM** | Spring Data JPA + Hibernate | Mapping entity chuẩn |
| **Auth** | Spring Security + OAuth2 Client + JWT | Tích hợp sẵn Spring |
| **Cache** | Redis (optional, giai đoạn sau) | Cache analytics |
| **Email** | Spring Mail (SMTP/SendGrid) | Gửi notification |
| **Scheduler** | Spring `@Scheduled` | Cron jobs nhắc nhở |
| **Deploy** | Railway / Render (backend) + Vercel (frontend) | Chi phí thấp, free tier |

---

## Kiến Trúc Layered Backend

```
┌──────────────────────────────────────────────┐
│               Presentation Layer              │
│         Controller (REST API Endpoints)       │
└──────────────────┬───────────────────────────┘
                   │ DTO (Request/Response)
┌──────────────────▼───────────────────────────┐
│                Service Layer                  │
│         Business Logic & Validation           │
└──────────────────┬───────────────────────────┘
                   │ Entity / Domain Models
┌──────────────────▼───────────────────────────┐
│              Repository Layer                 │
│         Spring Data JPA + Hibernate           │
└──────────────────┬───────────────────────────┘
                   │
┌──────────────────▼───────────────────────────┐
│               Database Layer                  │
│               PostgreSQL                      │
└──────────────────────────────────────────────┘
```

**Cấu trúc package chuẩn:**
```
src/main/java/vn/kimlan/
├── controller/       # REST Controllers
├── service/          # Business Logic
├── repository/       # JPA Repositories
├── entity/           # JPA Entities (map DB tables)
├── dto/              # Request/Response Objects
├── config/           # Security, CORS, Bean config
├── security/         # JWT Filter, OAuth2 Handler
├── scheduler/        # Cron Jobs (@Scheduled)
├── exception/        # GlobalExceptionHandler
└── util/             # Helpers, Constants
```

---

## Lộ Trình Thực Hiện (6 Phase)

### Phase 1: Khởi tạo dự án & Nền tảng
- Khởi tạo project **Spring Boot 3** với dependency: Web, JPA, Security, OAuth2 Client, PostgreSQL, Flyway, JWT.
- Khởi tạo project **Next.js 14** (App Router), cài font Inter, cấu hình Axios client.
- Cấu hình `application.yml` cho PostgreSQL, JWT secret, OAuth2 credentials.
- Tạo `GlobalExceptionHandler`.

### Phase 2: Module Auth & User
**Backend:**
- `AuthController`: `POST /api/auth/oauth2` — nhận token từ OAuth provider.
- `AuthService`: Xác thực token, tạo/lấy User từ DB, sinh JWT + Refresh Token.
- `JwtFilter`: Middleware kiểm tra JWT cho mọi request.
- `UserController`, `UserService`, `UserRepository`: CRUD hồ sơ User.

**Frontend:**
- `/login`: Nút đăng nhập Google / Discord.
- `/profile`: Xem và cập nhật hồ sơ cá nhân.
- `AuthContext` / Zustand store quản lý session phía client.

### Phase 3: Module Guild (Kim Lan)
**Backend:**
- `GuildController`, `GuildService`, `GuildRepository`: CRUD Guild.
- `GuildRequestService`: Xử lý yêu cầu tham gia, duyệt/từ chối.
- RBAC: `@PreAuthorize("hasRole('LEADER')")`.

**Frontend:**
- `/guilds`: Danh sách các Kim Lan.
- `/guilds/[id]`: Chi tiết, danh sách thành viên.
- `/guilds/[id]/manage`: Trang quản lý dành cho Leader.

### Phase 4: Module Event & Vote
**Backend:**
- `EventController/Service/Repository`: CRUD Event, trạng thái DRAFT → PUBLISHED → CLOSED.
- `SubEventService`: Quản lý sub-event (boss/khung giờ con).
- `RegistrationService`: Xử lý vote YES/NO và TIME_RANGE, khóa vote khi sự kiện CLOSED.

**Frontend:**
- `/events`: Danh sách sự kiện, filter theo loại/thời gian.
- `/events/[id]`: Chi tiết + form vote.
- `/events/create`: Tạo sự kiện (Leader/Vice only).

### Phase 5: Module Analytics & Notification
**Backend:**
- `StatsService`: Tổng hợp thống kê (số tham gia, chưa vote).
- `ExportService`: Xuất CSV/Excel.
- `NotificationService`: Gửi Email (Spring Mail) + Discord Webhook.
- `NotificationScheduler`: Cron job `@Scheduled` mỗi 5 phút — nhắc nhở 30 phút trước sự kiện.

**Frontend:**
- `/dashboard` (Leader): Sự kiện sắp tới, danh sách chưa vote, biểu đồ.
- `/dashboard` (Member): Lịch sự kiện cá nhân, danh sách cần vote.

### Phase 6: Module Admin & Audit
- `AdminController`: API quản lý toàn bộ users, guilds, events.
- `AuditLogService`: Ghi lại vết thao tác quan trọng.
- Frontend `/admin`: Bảng điều khiển quản trị.

---

## Database

PostgreSQL, quản lý schema qua **Flyway** migrations.

> Chi tiết bảng xem tại [database_erd.md](file:///c:/Users/hoang.nguyenhuy3/Phi-u_M-ng/knowledge/database_erd.md)

---

## Deployment (Chi phí thấp)

| Service | Platform | Chi phí |
| :--- | :--- | :--- |
| Backend (Spring Boot JAR) | Railway / Render | Free tier |
| Frontend (Next.js) | Vercel | Free tier |
| Database (PostgreSQL) | Railway / Supabase | Free tier |
| Email | SendGrid | Free 100 emails/ngày |

> **Lưu ý:** Free tier có giới hạn sleep. Nếu cần 24/7 ổn định, upgrade ~$5/tháng.
