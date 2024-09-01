package abp.abpfollow.api;

import abp.abpfollow.model.Progreso;
import abp.abpfollow.service.ProgresoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/progresos")
public class ProgresoController {

    private final ProgresoService progresoService;

    @Autowired
    public ProgresoController(ProgresoService progresoService) {
        this.progresoService = progresoService;
    }

    @GetMapping
    public List<Progreso> getProgresos() {
        return progresoService.getProgresos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Progreso> getProgresoById(@PathVariable int id) {
        return progresoService.getProgresoById(id);
    }

    @PostMapping
    public ResponseEntity<Progreso> createProgreso(@RequestBody Progreso progreso) {
        return progresoService.createProgreso(progreso);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Progreso> updateProgreso(@PathVariable int id, @RequestBody Progreso progreso) {
        return progresoService.updateProgreso(progreso, id);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Progreso> deleteProgreso(@PathVariable int id) {
        return progresoService.deleteProgreso(id);
    }
}
