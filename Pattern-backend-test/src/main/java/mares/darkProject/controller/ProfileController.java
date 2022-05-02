package mares.darkProject.controller;


import mares.darkProject.model.Profile;
import mares.darkProject.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {
    @Autowired
    ProfileRepository profileRepository;

    @GetMapping("profiles") // localhost:8080/profiles   GET
    public List<Profile> getProfiles() {
        return profileRepository.findAll();
    }

    @GetMapping("profiles/{index}") // localhost:8080/profile/1  GET
    public Profile getProfile(@PathVariable Long index) {
        return profileRepository.findById(index).get();
    }

/*
    @DeleteMapping("profile/{index}") // localhost:8080/profile/1 DELETE
    public void deleteProfile(@PathVariable Long index) {
        profileRepository.deleteById(index);
    }
    @DeleteMapping("profiles")  // localhost:8080/profiles   DELETE
    public String deleteAllProfiles() {
        profileRepository.deleteAll();
        return "All PROFILES WERE DELETED";
    }
*/

    @PostMapping("profiles") // localhost:8080/profiles  POST
    public void addProfile(@RequestBody Profile profile) {
        profileRepository.save(profile);
    }

    @PutMapping("profiles") // localhost:8080/profiles  PUT
    public void editProfile(@RequestBody Profile profile) {
        profileRepository.save(profile);
    }

    @PostMapping("add-all-profiles") //   POST
    public void addProfile(@RequestBody List<Profile> profiles) {
        profileRepository.saveAll(profiles);
    }
}