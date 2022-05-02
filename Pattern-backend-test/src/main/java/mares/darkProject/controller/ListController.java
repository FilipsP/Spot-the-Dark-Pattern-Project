package mares.darkProject.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class ListController {
    List<String> strings = new ArrayList<>(Arrays.asList("Scooby Doo","Mickey Mouse","Donald Duck"));

    @GetMapping("strings") //localhost:8080/strings   GET
    public List<String> getString() {
        return strings;
    }
    @GetMapping("strings/{index}")  //localhost:8080/strings/1   GET
    public String getString(@PathVariable int index) {
        return strings.get(index);
    }
    @DeleteMapping("strings/{index}") //localhost:8080/strings/1  DELETE
    public String deleteString(@PathVariable int index) {
        return strings.remove(index);
    }
    @DeleteMapping("strings") //localhost:8080/strings   DELETE
    public String deleteAllStrings() {
        strings.clear();
        return "Kõik toodet kustutatud";
    }
    @PostMapping("strings") //localhost:8080/strings  POST
    public void addString(@RequestBody String string) {
        strings.add(string);
    }
    @PutMapping("strings/{index}") //localhost:8080/strings/1   POST
    public void editString(@PathVariable int index, @RequestBody String string) {
        strings.set(index,string);
    }
}
