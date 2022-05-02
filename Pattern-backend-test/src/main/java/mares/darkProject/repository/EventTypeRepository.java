package mares.darkProject.repository;

import mares.darkProject.model.EventType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventTypeRepository extends JpaRepository<EventType, Long> {
}
