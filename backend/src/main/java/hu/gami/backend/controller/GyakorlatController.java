package hu.gami.backend.controller;
import hu.gami.backend.modell.Gyakorlat;
import hu.gami.backend.repository.GyakorlatRepository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gyakorlat")

public class GyakorlatController {
    private final GyakorlatRepository gyakorlatRepository;

    public GyakorlatController(GyakorlatRepository gyakorlatRepository) {
        this.gyakorlatRepository = gyakorlatRepository;
    }

    @GetMapping
    public List<Gyakorlat> getGyakorlatok() {
        return gyakorlatRepository.findAll();
    }
}
