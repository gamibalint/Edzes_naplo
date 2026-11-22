package hu.gami.backend.controller;

import hu.gami.backend.modell.Edzes;
import hu.gami.backend.repository.EdzesRepository;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/edzes")
@CrossOrigin(origins = "http://localhost:5173")

public class EdzesController {
    private final EdzesRepository edzesRepository;

    public EdzesController(EdzesRepository edzesRepository) {
        this.edzesRepository = edzesRepository;
    }

    @GetMapping
    public List<Edzes> getEdzesek() {
        return edzesRepository.findAllByOrderByDatumDesc();
    }

    @PostMapping
    public Edzes uj(@RequestBody Edzes edzes) {
        return edzesRepository.save(edzes);
    }
    @DeleteMapping ("/{id}")
    public void torol(@PathVariable Long id) {
        edzesRepository.deleteById(id);
    }
}
