package mares.darkProject.controller;

import mares.darkProject.model.ProfilePicture;
import mares.darkProject.repository.ProfilePictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProfilePictureController {

    @Autowired
    ProfilePictureRepository profilePictureRepository;

    @GetMapping("profile-pictures") // localhost:8080/profile-pictures   GET
    public List<ProfilePicture> getProfiles() {
        return profilePictureRepository.findAll();
    }

    @GetMapping("profile-pictures/{index}") // localhost:8080/profile-pictures/1  GET
    public ProfilePicture getProfile(@PathVariable Long index) {
        return profilePictureRepository.findById(index).get();
    }


    @DeleteMapping("profile-pictures/{index}") // localhost:8080/profile-pictures/1 DELETE
    public void deleteProfile(@PathVariable Long index) {
        profilePictureRepository.deleteById(index);
    }
    @DeleteMapping("profile-pictures")  // localhost:8080/profile-pictures   DELETE
    public String deleteAllProfiles() {
        profilePictureRepository.deleteAll();
        return "All PROFILE PICTURES WERE DELETED";
    }


    @PostMapping("profile-pictures") // localhost:8080/profile-pictures  POST
    public void addProfile(@RequestBody ProfilePicture profilePicture) {
        profilePictureRepository.save(profilePicture);
    }

    @PutMapping("profile-pictures") // localhost:8080/profile-pictures  PUT
    public void editProfile(@RequestBody ProfilePicture profilePicture) {
        profilePictureRepository.save(profilePicture);
    }

    @PostMapping("add-all-profile-pictures") // localhost:8080/add-all-profile-pictures  POST
    public void addProfile(@RequestBody List<ProfilePicture> profilePictures) {
        profilePictureRepository.saveAll(profilePictures);
    }
}

