package vn.kimlan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.kimlan.entity.Guild;

import java.util.UUID;

public interface GuildRepository extends JpaRepository<Guild, UUID> {
}
