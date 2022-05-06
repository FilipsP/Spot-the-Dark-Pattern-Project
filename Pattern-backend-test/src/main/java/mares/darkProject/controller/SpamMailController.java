package mares.darkProject.controller;

import mares.darkProject.model.SpamMail;
import mares.darkProject.repository.SpamMailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SpamMailController {

    @Autowired
    SpamMailRepository spamMailRepository;

    @GetMapping("spam-mail") // localhost:8080/spam-mail  GET
    public List<SpamMail> getSpamMails() {
        return spamMailRepository.findAll();
    }

    @GetMapping("spam-mail/{index}") // localhost:8080/spam-mail/1  GET
    public SpamMail getSpamMails(@PathVariable Long index) {
        return spamMailRepository.findById(index).get();
    }

    @DeleteMapping("spam-mail/{index}") // localhost:8080/spam-mail/1 DELETE
    public void deleteSpamMails(@PathVariable Long index) {
        spamMailRepository.deleteById(index);
    }

    @DeleteMapping("spam-mail")  // localhost:8080/saves  DELETE
    public String deleteAllSpamMails() {
        spamMailRepository.deleteAll();
        return "All PROFILES WERE DELETED";
    }

    @PostMapping("spam-mail") // localhost:8080/spam-mail  POST
    public void addSpamMails(@RequestBody SpamMail spamMail) {
        spamMailRepository.save(spamMail);
    }

    @PutMapping("spam-mail") // localhost:8080/spam-mail  PUT
    public void editSpamMails(@RequestBody SpamMail spamMail) {
        spamMailRepository.save(spamMail);
    }

    @PostMapping("add-all-spam-mail") //   POST
    public void addSpamMails(@RequestBody List<SpamMail> spamMails) {
        spamMailRepository.saveAll(spamMails);
    }
}

