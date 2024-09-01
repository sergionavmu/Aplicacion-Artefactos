package abp.abpfollow.api;

import abp.abpfollow.model.Evento;
import abp.abpfollow.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping
    private ResponseEntity getEventos() {
        return this.eventoService.getEventos();
    }

    @PostMapping("/all")
    private ResponseEntity postEventosAll(@RequestBody ArrayList<Evento> eventos) {
        return this.eventoService.postEventosAll(eventos);
    }

    @PostMapping
    private ResponseEntity postEvento(@RequestBody Evento evento) {
        return this.eventoService.postEvento(evento);
    }

    @PutMapping("/{nombre}")
    private ResponseEntity putEvento(@RequestBody Evento evento, @PathVariable String nombre) {
        return this.eventoService.putEvento(evento, nombre);
    }

    @DeleteMapping("/{nombre}")
    private ResponseEntity deleteEvento(@PathVariable String nombre) {
        return this.eventoService.deleteEvento(nombre);
    }
}
