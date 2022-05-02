package mares.darkProject.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "profile")
public class Profile {
    @Id
    @GeneratedValue
    private Long id;
    Integer profile_picture_id;
    String username;
    String password;
    String character_name;



}
