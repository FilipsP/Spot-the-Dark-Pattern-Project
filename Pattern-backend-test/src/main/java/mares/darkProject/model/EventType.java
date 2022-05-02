package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "event-type")
public class EventType {
    @Id
    @GeneratedValue
    private Long id;
    String eventName;
    String eventDescription;
}
