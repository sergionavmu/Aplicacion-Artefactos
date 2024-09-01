package abp.abpfollow.service;

import abp.abpfollow.dao.ArtefactoRepository;
import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.ArtefactoxPlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArtefactoService {

    @Autowired
    private ArtefactoRepository artefactoRepository;

    public ResponseEntity getArtefacto() {
        List<Artefacto> artefactos = this.artefactoRepository.findAll();
        return ResponseEntity.ok(artefactos);
    }

    public ResponseEntity postArtefacto(Artefacto artefacto) {
        this.artefactoRepository.save(artefacto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public ResponseEntity postArtefactoAll(ArrayList<Artefacto> artefactos) {
        this.artefactoRepository.saveAll(artefactos);
        return ResponseEntity.status(HttpStatus.CREATED).body(artefactos);
    }

    public ResponseEntity putArtefacto(Artefacto artefacto, String nombre) {
        Optional<Artefacto> existingArtefacto = artefactoRepository.findByNombre(nombre);

        if (existingArtefacto.isPresent()) {
            Artefacto updatedArtefacto = existingArtefacto.get();
            updatedArtefacto.setDescripcion(artefacto.getDescripcion());
            updatedArtefacto.setCategoria(artefacto.getCategoria());
            updatedArtefacto.setPuntos(artefacto.getPuntos());

            artefactoRepository.save(updatedArtefacto);
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    public ResponseEntity deleteArtefacto(String nombre) {
        Optional<Artefacto> existingArtefacto = this.artefactoRepository.findByNombre(nombre);
        if (existingArtefacto.isPresent()) {
            this.artefactoRepository.delete(existingArtefacto.get());
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}