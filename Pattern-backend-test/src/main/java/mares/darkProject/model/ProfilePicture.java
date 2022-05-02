package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class ProfilePicture {
    @Id
    @GeneratedValue
    Long id;
    String name;
    String description;

}
