package mares.darkProject.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "spam_mail")
public class SpamMail {
    @Id
    @GeneratedValue
    Long id;
    String name;
    String content;
    String author;

}
