package abp.abpfollow.dao;

import abp.abpfollow.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EventoRepository extends JpaRepository<Evento, Integer> {
    @Query(value = "SELECT e FROM Evento e ORDER BY e.nombre ASC")
    List<Evento> findAllOrderedByName();

    Optional<Evento> findByNombre(String nombre);

}
