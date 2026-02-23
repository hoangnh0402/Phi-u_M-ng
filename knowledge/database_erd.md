# Database ERD Detail - Kim Lan Guild

## I. Detailed ERD

### 1️⃣ Main Entity List

#### 1. User
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| email | varchar | unique |
| ingame_name | varchar | required |
| role | enum | ADMIN, LEADER, VICE, MEMBER |
| provider | enum | GOOGLE, DISCORD, FACEBOOK |
| provider_id | varchar | id from OAuth |
| avatar_url | varchar | nullable |
| discord_id | varchar | nullable |
| guild_id | UUID | FK |
| status | enum | ACTIVE, PENDING, BLOCKED |
| created_at | datetime | |
| updated_at | datetime | |

#### 2. Guild (Kim Lan)
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| name | varchar | |
| description | text | |
| leader_id | UUID | FK User |
| created_at | datetime | |

#### 3. Guild_Request
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| user_id | UUID | FK User |
| guild_id | UUID | FK Guild |
| status | enum | PENDING, APPROVED, REJECTED |
| created_at | datetime | |
| approved_at | datetime | |

#### 4. Event
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| guild_id | UUID | FK Guild |
| title | varchar | |
| description | text | |
| type | enum | PHO_BAN, EVENT, HOAT_DONG_CHUNG |
| vote_type | enum | YES_NO, TIME_RANGE |
| start_time | datetime | |
| end_time | datetime | |
| is_split | boolean | |
| created_by | UUID | FK User |
| created_at | datetime | |

#### 5. Sub_Event
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| event_id | UUID | FK Event |
| title | varchar | |
| start_time | datetime | |
| end_time | datetime | |

#### 6. Registration
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| user_id | UUID | FK User |
| event_id | UUID | FK Event |
| sub_event_id | UUID | FK Sub_Event (nullable) |
| vote | enum | YES, NO |
| from_time | datetime | |
| to_time | datetime | |
| created_at | datetime | |

#### 7. Notification_Log
| Field | Type | Note |
| :--- | :--- | :--- |
| id | UUID | PK |
| user_id | UUID | FK User |
| event_id | UUID | FK Event |
| type | enum | EMAIL, DISCORD |
| status | enum | SENT, FAILED |
| created_at | datetime | |

---

### 2️⃣ Relationships

- **User (1) ---- (N) Registration**
- **User (1) ---- (N) Guild_Request**
- **Guild (1) ---- (N) User**
- **Guild (1) ---- (N) Event**
- **Event (1) ---- (N) Sub_Event**
- **Event (1) ---- (N) Registration**
- **Sub_Event (1) ---- (N) Registration**

## Mermaid ERD Visualization

```mermaid
erDiagram
    USER ||--o{ REGISTRATION : registers
    USER ||--o{ GUILD_REQUEST : requests
    GUILD ||--o{ USER : contains
    GUILD ||--o{ EVENT : hosts
    EVENT ||--o{ SUB_EVENT : consists_of
    EVENT ||--o{ REGISTRATION : records
    SUB_EVENT ||--o{ REGISTRATION : records

    USER {
        uuid id PK
        varchar email
        varchar ingame_name
        enum role
        enum provider
        varchar provider_id
        varchar avatar_url
        varchar discord_id
        uuid guild_id FK
        enum status
        datetime created_at
        datetime updated_at
    }

    GUILD {
        uuid id PK
        varchar name
        text description
        uuid leader_id FK
        datetime created_at
    }

    GUILD_REQUEST {
        uuid id PK
        uuid user_id FK
        uuid guild_id FK
        enum status
        datetime created_at
        datetime approved_at
    }

    EVENT {
        uuid id PK
        uuid guild_id FK
        varchar title
        text description
        enum type
        enum vote_type
        datetime start_time
        datetime end_time
        boolean is_split
        uuid created_by FK
        datetime created_at
    }

    SUB_EVENT {
        uuid id PK
        uuid event_id FK
        varchar title
        datetime start_time
        datetime end_time
    }

    REGISTRATION {
        uuid id PK
        uuid user_id FK
        uuid event_id FK
        uuid sub_event_id FK
        enum vote
        datetime from_time
        datetime to_time
        datetime created_at
    }

    NOTIFICATION_LOG {
        uuid id PK
        uuid user_id FK
        uuid event_id FK
        enum type
        enum status
        datetime created_at
    }
```
