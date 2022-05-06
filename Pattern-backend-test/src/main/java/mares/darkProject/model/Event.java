package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;

//@Table(name = "event")

@Data
@Entity
public class Event {
    @Id
    @GeneratedValue
    private Long id;
    Integer event_types_id;
    String name;
    String description;
    String picture_name;
    String picture_description;
    String positive_answer;
    String negative_answer;
    Integer points_given;
    Integer lives_taken;

}
