package hu.gami.backend.controller;

import hu.gami.backend.modell.Sorozatok;
import hu.gami.backend.repository.SorozatokRepository;
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
@RequestMapping("/sorozatok")
@CrossOrigin(origins = "http://localhost:5173")
public class SorozatokController {

    private final SorozatokRepository sorozatokRepository;

    public SorozatokController(SorozatokRepository sorozatokRepository) {
        this.sorozatokRepository = sorozatokRepository;
    }

    @GetMapping("/edzes/{edzesId}")
    public List<Sorozatok> edzesSorozatai(@PathVariable Long edzesId) {
        return sorozatokRepository.findByEdzesId(edzesId);
    }

    @PostMapping
    public Sorozatok uj(@RequestBody Sorozatok sorozat) {
        return sorozatokRepository.save(sorozat);
    }

    @DeleteMapping("/{id}")
    public void torol(@PathVariable Long id) {
        sorozatokRepository.deleteById(id);
    }
}