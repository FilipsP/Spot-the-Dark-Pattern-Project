package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "event-save")
public class EventSave {
    @Id
    @GeneratedValue
    Long saveId;
    Long eventId;
    Boolean done;


}
