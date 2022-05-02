package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "save")
public class Save {
    @Id
    @GeneratedValue
    private Long id;
    Integer profile_id;
    Integer spam_mail_id;
    Integer lives_owned;
    Integer points_owned;

}
