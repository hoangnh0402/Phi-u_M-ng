package vn.kimlan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.kimlan.entity.SubEvent;

import java.util.UUID;

public interface SubEventRepository extends JpaRepository<SubEvent, UUID> {
}
