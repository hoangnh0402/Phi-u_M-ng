package vn.kimlan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.kimlan.entity.NotificationLog;

import java.util.UUID;

public interface NotificationLogRepository extends JpaRepository<NotificationLog, UUID> {
}
