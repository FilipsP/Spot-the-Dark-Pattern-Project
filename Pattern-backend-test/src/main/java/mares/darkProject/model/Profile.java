package mares.darkProject.model;


import lombok.Data;

import javax.persistence.*;

//@Table(name = "profile")
@Data
@Entity
public class Profile {
    @Id
    @GeneratedValue
    private Long id;
    String username;
    String password;



}
