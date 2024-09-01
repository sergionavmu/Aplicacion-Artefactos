package abp.abpfollow.api;

import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.ArtefactoxPlayer;
import abp.abpfollow.service.ArtefactoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/artefactos")
public class ArtefactoController {

    @Autowired
    private ArtefactoService artefactoService;

    @GetMapping
    private ResponseEntity getArtefacto(){
        return this.artefactoService.getArtefacto();
    }

    @PostMapping("/all")
    private ResponseEntity postArtefactoAll(@RequestBody ArrayList<Artefacto> artefactos) {
        return this.artefactoService.postArtefactoAll(artefactos);
    }

    @PostMapping
    private ResponseEntity postArtefacto(@RequestBody Artefacto artefacto) {
        return this.artefactoService.postArtefacto(artefacto);
    }

    @PutMapping("/{nombre}")
    private ResponseEntity putArtefacto(@RequestBody Artefacto artefacto, @PathVariable String nombre) {
        return this.artefactoService.putArtefacto(artefacto, nombre);
    }

    @DeleteMapping("/{nombre}")
    private ResponseEntity deleteArtefacto(@PathVariable String nombre) {
        return this.artefactoService.deleteArtefacto(nombre);
    }
}
