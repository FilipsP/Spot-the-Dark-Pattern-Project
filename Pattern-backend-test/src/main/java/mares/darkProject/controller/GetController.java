package mares.darkProject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GetController {

    @GetMapping("tooted") //localhost 8080/tooted
    public String saaTooted() {
        return "Said tooded kätte";
    }

    @GetMapping("prindi-logidesse") //localhost:8080/prindi-logidesse
    public String prindilogidesse() {
        for (int i = 0; i < 10; i++) {
            System.out.println("Logi nr " + i);
        }
        return "Logidesse edukalt prinditud";
    }

    @GetMapping("liida/{arv1}/{arv2}") //localhost:8080/liida/4/6
    public int liidaKokku(@PathVariable int arv1, @PathVariable int arv2) {
        return arv1 + arv2;
    }
    List<String> s6nad = new ArrayList<>();
    //String[] s6nad = {};

    @GetMapping("saa-sonad") //localhost:8080/saa-sonad
    public List<String> saaSonad() {
        return  s6nad;     // []
    }

    @GetMapping("lisa-sona/{sona}") //localhost:8080/lisa-sona/Mares
    public List<String> saaSonad(@PathVariable String sona) {
        s6nad.add(sona);
        return s6nad;  //[]
    }
    @GetMapping("saa-yks-s6na/{index}") //localhost:8080/saa-yks-s6na/1
    public String saaYksSona(@PathVariable int index) {
        return s6nad.get(index);
    }

    @GetMapping("s6nade-arv")  // localhost:8080/s6nade-arv
    public int s6nadeArv() {
        return s6nad.size();
    }

    // 404 -- sellist URLi ei ole    Not Found
    // 400 -- muutujat ei osatud convertida    Bad Request
    // 403 - forbidden, sa ei saa ligi
    // 401 - need authentication, saad ligi kui autentid
    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

    // 500 - Server võtab errori oma süüks
}


