package hu.gami.backend.repository;
import hu.gami.backend.modell.Edzes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EdzesRepository extends JpaRepository<Edzes, Long> {
    
}
