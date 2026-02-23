package vn.kimlan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.kimlan.entity.GuildRequest;

import java.util.UUID;

public interface GuildRequestRepository extends JpaRepository<GuildRequest, UUID> {
}
