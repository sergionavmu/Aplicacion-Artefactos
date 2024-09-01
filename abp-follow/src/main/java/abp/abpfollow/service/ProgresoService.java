package abp.abpfollow.service;

import abp.abpfollow.dao.ArtefactoRepository;
import abp.abpfollow.dao.ProgresoRepository;
import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.Progreso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgresoService {

    private final ProgresoRepository progresoRepository;
    private final ArtefactoRepository artefactoRepository;

    @Autowired
    public ProgresoService(ProgresoRepository progresoRepository, ArtefactoRepository artefactoRepository) {
        this.progresoRepository = progresoRepository;
        this.artefactoRepository = artefactoRepository;
    }

    public List<Progreso> getProgresos() {
        return progresoRepository.findAll();
    }

    public ResponseEntity<Progreso> getProgresoById(int id) {
        Optional<Progreso> progresoOptional = progresoRepository.findById(id);
        return progresoOptional.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Progreso> createProgreso(Progreso progreso) {
        this.progresoRepository.save(progreso);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public ResponseEntity<Progreso> updateProgreso(Progreso progreso, int id) {
        Optional<Progreso> existingProgresoOptional = progresoRepository.findById(id);
        if (existingProgresoOptional.isPresent()) {
            Progreso existingProgreso = existingProgresoOptional.get();
            existingProgreso.setPuntos(progreso.getPuntos());
            existingProgreso.setProgresoDiario(progreso.getProgresoDiario());
            existingProgreso.setArtefactosConseguidos(progreso.getArtefactosConseguidos());
            progresoRepository.save(existingProgreso);
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    public ResponseEntity<Progreso> deleteProgreso(int id) {
        Optional<Progreso> progresoOptional = progresoRepository.findById(id);
        if (progresoOptional.isPresent()) {
            progresoRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    public int getProgresoDiario(int usuarioId) {
        List<Progreso> progresos = progresoRepository.findByUsuarioId(usuarioId);
        int progresoDiario = progresos.stream().mapToInt(Progreso::getProgresoDiario).sum();
        return progresoDiario;
    }
}
