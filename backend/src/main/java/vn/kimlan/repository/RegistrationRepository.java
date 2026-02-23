package vn.kimlan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.kimlan.entity.Registration;

import java.util.UUID;

public interface RegistrationRepository extends JpaRepository<Registration, UUID> {
}
