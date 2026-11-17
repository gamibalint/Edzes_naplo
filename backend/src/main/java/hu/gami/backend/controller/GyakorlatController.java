package hu.gami.backend.controller;

import hu.gami.backend.modell.Gyakorlat;
import hu.gami.backend.repository.GyakorlatRepository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gyakorlat")
@CrossOrigin(origins = "http://localhost:5173")

public class GyakorlatController {
    private final GyakorlatRepository gyakorlatRepository;

    public GyakorlatController(GyakorlatRepository gyakorlatRepository) {
        this.gyakorlatRepository = gyakorlatRepository;
    }

    @GetMapping
    public List<Gyakorlat> getGyakorlatok() {
        return gyakorlatRepository.findAll();
    }

    @PostMapping
    public Gyakorlat uj(@RequestBody Gyakorlat gyakorlat) {
        return gyakorlatRepository.save(gyakorlat);
    }
}
