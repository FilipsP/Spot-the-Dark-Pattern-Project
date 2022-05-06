package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;

//
@Data
@Entity
public class Save {
    @Id
    @GeneratedValue
    private Long id;
    Integer profile_id;
    Integer spam_mail_id;
    Integer lives_owned;
    Integer points_owned;
    String character_name;
    Integer profile_picture_id;

}
