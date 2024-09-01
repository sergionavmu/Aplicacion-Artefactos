package abp.abpfollow.dao;

import abp.abpfollow.model.Progreso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProgresoRepository extends JpaRepository<Progreso, Integer> {
    //@Query(value = "SELECT p FROM Progreso p ORDER BY p.usuario_id ASC")
    Optional<Progreso> findById(int id);
    List<Progreso> findByUsuarioId(int usuarioId);
}
