package abp.abpfollow.dao;

import abp.abpfollow.model.CodigoQR;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CodigoQrRepository extends JpaRepository<CodigoQR, Integer> {

    Optional<CodigoQR> findByQrcode(String qrcode);
    Optional<CodigoQR> findByArtefactoId(int artefacto_id);
}
