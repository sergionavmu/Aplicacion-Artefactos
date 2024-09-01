package abp.abpfollow.api;

import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.Usuario;
import abp.abpfollow.model.UsuarioRequest;
import abp.abpfollow.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @GetMapping
    private ResponseEntity getUsuarios() {
        return this.usuarioService.getUsuario();
    }

    @GetMapping("/usuario/{username}")
    private ResponseEntity getUsuarioByName(@PathVariable String username) {
        return this.usuarioService.getUsuarioName(username);
    }
    @GetMapping("/{id}")
    private ResponseEntity getUsuarioId (@PathVariable Integer id) {
        return this.usuarioService.getUsuarioId(id);
    }
    @PostMapping
    private ResponseEntity postusurio(@RequestBody Usuario usuario) {
        return this.usuarioService.postUsuario(usuario);
    }

    @PostMapping("/login")
    private ResponseEntity postLogin(@RequestBody UsuarioRequest usuarioRequest) {
        return this.usuarioService.postLogin(usuarioRequest);
    }

    @PostMapping("/all")
    private ResponseEntity postAllUsuarios (@RequestBody ArrayList<Usuario> usuarios) {
        return this.usuarioService.postUsaurioAll(usuarios);
    }
    @PostMapping("/{usuarioId}/{qrCode}")
    public ResponseEntity escanearCodigoQR(@PathVariable Integer usuarioId, @PathVariable String qrCode) {
        try {
            String message = usuarioService.escanearCodigoQR(usuarioId, qrCode);
            return ResponseEntity.ok().body(message);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    @PutMapping("/{username}")
    private ResponseEntity putUsuario (@RequestBody Usuario usuario, @PathVariable String username) {
        return this.usuarioService.putUsuario(usuario, username);
    }
    @GetMapping("/{usuarioId}/artefactos/{artefactoId}")
    public ResponseEntity usuarioTieneArtefacto(@PathVariable Integer usuarioId, @PathVariable Integer artefactoId) {
        boolean tieneArtefacto = usuarioService.usuarioTieneArtefacto(usuarioId, artefactoId);
        return ResponseEntity.ok(tieneArtefacto);
    }

    @DeleteMapping("/{username}")
    private ResponseEntity deleteUsuario (@PathVariable String username) {
        return this.usuarioService.deleteUsuario(username);
    }
    @GetMapping("/{usuarioId}/artefactos")
    public ResponseEntity obtenerArtefactosDeUsuario(@PathVariable Integer usuarioId) {
        try {
            List<Artefacto> artefactos = usuarioService.obtenerArtefactosDeUsuario(usuarioId);
            return ResponseEntity.ok(artefactos);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
