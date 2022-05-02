package mares.darkProject.repository;


import mares.darkProject.model.SpamMail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpamMailRepository extends JpaRepository<SpamMail, Long> {
}
