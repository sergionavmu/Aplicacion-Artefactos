package abp.abpfollow.service;

import abp.abpfollow.dao.EventoRepository;
import abp.abpfollow.model.Evento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public ResponseEntity getEventos() {
        List<Evento> eventos = this.eventoRepository.findAll();
        return ResponseEntity.ok(eventos);
    }

    public ResponseEntity postEvento(Evento evento) {
        this.eventoRepository.save(evento);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    public ResponseEntity postEventosAll(ArrayList<Evento> eventos) {
        this.eventoRepository.saveAll(eventos);
        return ResponseEntity.status(HttpStatus.CREATED).body(eventos);
    }

    public ResponseEntity putEvento(Evento evento, String nombre) {
        Optional<Evento> existingEvento = eventoRepository.findByNombre(nombre);

        if (existingEvento.isPresent()) {
            Evento updatedEvento = existingEvento.get();
            updatedEvento.setDescripcion(evento.getDescripcion());
            updatedEvento.setUbicacion(evento.getUbicacion());

            eventoRepository.save(updatedEvento);
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    public ResponseEntity deleteEvento(String nombre) {
        Optional<Evento> existingEvento = this.eventoRepository.findByNombre(nombre);
        if (existingEvento.isPresent()) {
            this.eventoRepository.delete(existingEvento.get());
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
