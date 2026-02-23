# Kim Lan Management API Documentation

**Version:** 1.0.0  
**Base URL:** `http://localhost:8080/api`

---

## 🔐 Authentication & Security

This API uses **Bearer Authentication** with JWT.

- **Security Scheme:** `bearerAuth`
- **Type:** HTTP Bearer
- **Format:** JWT

To access protected endpoints, include the header:  
`Authorization: Bearer <your_jwt_token>`

---

## 📂 API Endpoints

### 1. Authentication

#### `POST /auth/oauth2`
Login via OAuth2 provider (Google, Discord, Facebook).

**Request Body:**
```json
{
  "provider": "string",
  "token": "string"
}
```

**Responses:**
- `200 OK`: JWT returned successfully.

---

### 2. Guild Management

#### `POST /guilds`
Create a new guild.

**Security:** `bearerAuth`

**Responses:**
- `201 Created`: Guild created successfully.

---

#### `POST /guilds/{id}/request`
Request to join a specific guild.

**Parameters:**
- `id` (path): The ID of the guild.

**Security:** `bearerAuth`

**Responses:**
- `200 OK`: Request submitted.

---

### 3. Event Management

#### `POST /events`
Create a new event (Phó bản, Event, Hoạt động chung).

**Security:** `bearerAuth`

**Request Body (`EventRequest`):**
```json
{
  "title": "string",
  "description": "string",
  "type": "string",
  "voteType": "string",
  "startTime": "2026-02-23T14:55:29Z",
  "endTime": "2026-02-23T15:55:29Z"
}
```

**Responses:**
- `200 OK`: Event created.

---

#### `POST /events/{id}/register`
Register for an event.

**Parameters:**
- `id` (path): The ID of the event.

**Security:** `bearerAuth`

**Responses:**
- `200 OK`: Registration successful.

---

#### `GET /events/{id}/stats`
Get statistics for a specific event.

**Parameters:**
- `id` (path): The ID of the event.

**Security:** `bearerAuth`

**Responses:**
- `200 OK`: Statistics returned.

---

## 🛠 Schemas

### `EventRequest`
| Property | Type | Format | Description |
| :--- | :--- | :--- | :--- |
| title | string | | Title of the event |
| description | string | | Description of the event |
| type | string | | PHO_BAN, EVENT, HOAT_DONG_CHUNG |
| voteType | string | | YES_NO, TIME_RANGE |
| startTime | string | date-time | Event start time |
| endTime | string | date-time | Event end time |
