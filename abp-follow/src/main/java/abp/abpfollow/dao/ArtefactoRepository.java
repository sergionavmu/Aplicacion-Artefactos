package abp.abpfollow.dao;

import abp.abpfollow.model.Artefacto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ArtefactoRepository extends JpaRepository<Artefacto, Integer> {

    //@Query(value = "SELECT a FROM Artefacto a ORDER BY a.nombre asc")
    @Query(value = "SELECT a FROM Artefacto a ORDER BY a.puntos DESC, a.categoria ASC")
    List<Artefacto> findAll();
    Optional<Artefacto> findByNombre(String nombre);
}
