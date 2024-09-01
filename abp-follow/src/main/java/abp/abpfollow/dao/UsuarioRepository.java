package abp.abpfollow.dao;

import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;
import java.util.Optional;


public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query(value = "SELECT u FROM Usuario u ORDER BY u.name ASC")
    List<Usuario> findAll();
    Optional<Usuario> findByUsername(String username);
    Optional<Usuario> findById(Integer id);
    @Query("SELECT CASE WHEN COUNT(a) > 0 THEN true ELSE false END FROM Usuario u JOIN u.artefactosEscaneados a WHERE u.id = :usuarioId AND a.id = :artefactoId")
    boolean usuarioTieneArtefacto(Integer usuarioId, Integer artefactoId);
    @Query("SELECT a FROM Usuario u JOIN u.artefactosEscaneados a WHERE u.id = :usuarioId")
    List<Artefacto> findArtefactosByUsuarioId(Integer usuarioId);

}

