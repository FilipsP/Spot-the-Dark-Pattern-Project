package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "profile_picture")
public class ProfilePicture {
    @Id
    @GeneratedValue
    Long id;
    String name;
    String description;

}
