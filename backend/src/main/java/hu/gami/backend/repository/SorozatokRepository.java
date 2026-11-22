package hu.gami.backend.repository;
import hu.gami.backend.modell.Sorozatok;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SorozatokRepository extends JpaRepository<Sorozatok, Long> {
    List<Sorozatok> findByEdzesId(Long edzesId);
    }
