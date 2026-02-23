CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    ingame_name VARCHAR(255),
    role VARCHAR(50),
    provider VARCHAR(50),
    provider_id VARCHAR(255),
    avatar_url VARCHAR(255),
    discord_id VARCHAR(255),
    guild_id UUID,
    status VARCHAR(50),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);

CREATE TABLE guilds (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    leader_id UUID REFERENCES users(id),
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE guild_requests (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    guild_id UUID NOT NULL REFERENCES guilds(id),
    status VARCHAR(50),
    created_at TIMESTAMP NOT NULL,
    approved_at TIMESTAMP
);

CREATE TABLE events (
    id UUID PRIMARY KEY,
    guild_id UUID NOT NULL REFERENCES guilds(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(50) NOT NULL,
    vote_type VARCHAR(50) NOT NULL,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    is_split BOOLEAN DEFAULT FALSE,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE sub_events (
    id UUID PRIMARY KEY,
    event_id UUID NOT NULL REFERENCES events(id),
    title VARCHAR(255) NOT NULL,
    start_time TIMESTAMP,
    end_time TIMESTAMP
);

CREATE TABLE registrations (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    event_id UUID NOT NULL REFERENCES events(id),
    sub_event_id UUID REFERENCES sub_events(id),
    vote VARCHAR(50) NOT NULL,
    from_time TIMESTAMP,
    to_time TIMESTAMP,
    created_at TIMESTAMP NOT NULL
);

CREATE TABLE notification_logs (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    event_id UUID NOT NULL REFERENCES events(id),
    type VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL
);
