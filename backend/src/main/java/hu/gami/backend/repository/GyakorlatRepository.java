package hu.gami.backend.repository;
import hu.gami.backend.modell.Gyakorlat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GyakorlatRepository extends JpaRepository<Gyakorlat, Long> {
}
