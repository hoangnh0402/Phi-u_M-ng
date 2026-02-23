package vn.kimlan.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "registrations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_id", nullable = false)
    private UUID userId;

    @Column(name = "event_id", nullable = false)
    private UUID eventId;

    @Column(name = "sub_event_id")
    private UUID subEventId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Vote vote;

    @Column(name = "from_time")
    private LocalDateTime fromTime;

    @Column(name = "to_time")
    private LocalDateTime toTime;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public enum Vote {
        YES, NO
    }
}
