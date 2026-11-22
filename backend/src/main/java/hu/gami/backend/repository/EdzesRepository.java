package hu.gami.backend.repository;
import hu.gami.backend.modell.Edzes;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EdzesRepository extends JpaRepository<Edzes, Long> {
    List<Edzes> findAllByOrderByDatumDesc();
}
