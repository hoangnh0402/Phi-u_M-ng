package vn.kimlan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.kimlan.entity.Event;

import java.util.UUID;

public interface EventRepository extends JpaRepository<Event, UUID> {
}
