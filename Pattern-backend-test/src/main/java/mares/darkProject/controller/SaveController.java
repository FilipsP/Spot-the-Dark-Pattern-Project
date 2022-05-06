package mares.darkProject.controller;

import mares.darkProject.model.Save;
import mares.darkProject.repository.SaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SaveController {

    @Autowired
    SaveRepository saveRepository;

    @GetMapping("saves") // localhost:8080/saves   GET
    public List<Save> getSaves() {
        return saveRepository.findAll();
    }

    @GetMapping("saves/{index}") // localhost:8080/saves/1  GET
    public Save getSave(@PathVariable Long index) {
        return saveRepository.findById(index).get();
    }


    @DeleteMapping("saves/{index}") // localhost:8080/saves/1 DELETE
    public void deleteSave(@PathVariable Long index) {
        saveRepository.deleteById(index);
    }
    @DeleteMapping("saves")  // localhost:8080/saves  DELETE
    public String deleteAllSaves() {
        saveRepository.deleteAll();
        return "All PROFILES WERE DELETED";
    }


    @PostMapping("saves") // localhost:8080/saves  POST
    public void addSave(@RequestBody Save save) {
        saveRepository.save(save);
    }

    @PutMapping("saves") // localhost:8080/saves  PUT
    public void editSaves(@RequestBody Save save) {
        saveRepository.save(save);
    }

    @PostMapping("add-all-saves") //   POST
    public void addSaves(@RequestBody List<Save> saves) {
        saveRepository.saveAll(saves);
    }
}

