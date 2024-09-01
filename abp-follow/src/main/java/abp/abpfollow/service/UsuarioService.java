package abp.abpfollow.service;

import abp.abpfollow.dao.CodigoQrRepository;
import abp.abpfollow.dao.UsuarioRepository;
import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.CodigoQR;
import abp.abpfollow.model.Usuario;
import abp.abpfollow.model.UsuarioRequest;
import abp.abpfollow.security.Criptografia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.*;

import static abp.abpfollow.security.Criptografia.get_SHA_512_SecurePassword;
import static abp.abpfollow.security.Criptografia.verificarPassword;


@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CodigoQrRepository codigoQrRepository;

    public ResponseEntity getUsuario() {
        List<Usuario> usuarios = this.usuarioRepository.findAll();
        return ResponseEntity.ok(usuarios); //codigo 200
    }

    public ResponseEntity getUsuarioName(String username) {
        Optional<Usuario> usuario = this.usuarioRepository.findByUsername(username);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Usuario no encontrado con el nombre de usuario: " + username + "\"}");
        }
    }

    public ResponseEntity getUsuarioId(Integer id) {
        System.out.println("Buscando usuario con ID: " + id);
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isPresent()) {
            return ResponseEntity.ok().body(usuario.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }

    public String escanearCodigoQR(Integer usuarioId, String qrCode) {
        System.out.println("Escanear Código QR: Usuario ID = " + usuarioId + ", Código QR = " + qrCode);

        Optional<Usuario> usuarioOptional = usuarioRepository.findById(usuarioId);
        Optional<CodigoQR> codigoQrOptional = codigoQrRepository.findByQrcode(qrCode);

        if (usuarioOptional.isPresent() && codigoQrOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            Artefacto artefacto = codigoQrOptional.get().getArtefacto();

            System.out.println("Usuario y Código QR encontrados");
            System.out.println("if " + usuario.getArtefactosEscaneados().contains(artefacto));
            // Comprobar si el usuario tiene el artefacto
            if (usuario.getArtefactosEscaneados().contains(artefacto)) {
                return "{\"message\": \"Ya tienes este artefacto.\"}";

            } else {
                System.out.println("else " + artefacto);
                usuario.escanearArtefacto(artefacto);
                usuarioRepository.save(usuario);
                return "{\"message\": \"Artefacto obtenido con éxito.\"}";
            }
        } else {
            throw new RuntimeException("Usuario o Código QR no encontrado");
        }
    }

    public ResponseEntity postLogin(UsuarioRequest usuarioRequest) {
        String username = usuarioRequest.getUsername();
        String password = usuarioRequest.getPassword();

        Optional<Usuario> existingUsuario = usuarioRepository.findByUsername(username);
        if (existingUsuario.isPresent()) {
            Usuario usuario = existingUsuario.get();
            String salt = new String(usuario.getPasswordSalt(), StandardCharsets.UTF_8);
            System.out.println("Contraseña ingresada: " + password);
            System.out.println("Contraseña almacenada: " + usuario.getPassword());
            System.out.println("Salt: " + Base64.getEncoder().encodeToString(salt.getBytes()));
            // Validar la contraseña aquí
            if (verificarPassword(password, usuario.getPassword(), salt)) {

                return ResponseEntity.ok().body(usuario);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Contraseña incorrecta\"}");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Usuario no encontrado con el nombre de usuario: " + username + "\"}");
        }
    }

    public ResponseEntity postUsuario(Usuario usuario) {
        try {

            // Verificar si el nombre de usuario ya existe
            Optional<Usuario> existingUsuario = usuarioRepository.findByUsername(usuario.getUsername());
            if (existingUsuario.isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El nombre de usuario ya está en uso");
            }
            // Verificar que la contraseña no sea nula antes de intentar crear el hash
            if (usuario.getPassword() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("La contraseña no puede estar vacia");
            }

            // Generar un salt único para cada usuario
            byte[] salt = Criptografia.generateSaltBytArray();
            // Encriptar la contraseña antes de almacenarla
            String encryptedPassword = get_SHA_512_SecurePassword(usuario.getPassword(), new String(salt));

            usuario.setPasswordSalt(salt);
            usuario.setPassword(encryptedPassword);
            System.out.println("Password Salt: " + Base64.getEncoder().encodeToString(usuario.getPasswordSalt()));
            Usuario createdUsuario = usuarioRepository.save(usuario);
            return ResponseEntity.ok(createdUsuario);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error creating user: " + e.getMessage());
        }
    }


    public ResponseEntity postUsaurioAll(ArrayList<Usuario> usuarios) {
        try {
            for (Usuario usuario : usuarios) {
                // Generar un salt único para cada usuario
                byte[] salt = Criptografia.generateSaltBytArray();

                // Encriptar la contraseña antes de almacenarla
                String encryptedPassword = get_SHA_512_SecurePassword(usuario.getPassword(), new String(salt));

                usuario.setPasswordSalt(salt);
                usuario.setPassword(encryptedPassword);

                // Imprimir el Salt (convertido a Base64 para mejor legibilidad)
                System.out.println("Password Salt: " + Base64.getEncoder().encodeToString(salt));
            }

            List<Usuario> createdUsuarios = usuarioRepository.saveAll(usuarios);
            return ResponseEntity.ok(createdUsuarios);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error creating users: " + e.getMessage());
        }
    }

    public ResponseEntity putUsuario(Usuario usuario, String username) {
        Optional<Usuario> existingUsuario = usuarioRepository.findByUsername(username);

        if (existingUsuario.isPresent()) {
            Usuario updateUsuario = existingUsuario.get();
            updateUsuario.setName(usuario.getName());
            updateUsuario.setPassword(usuario.getPassword());
            updateUsuario.setMyFriends(usuario.getMyFriends());
            //updateUsuario.setArtefactosEscaneados(usuario.getArtefactosEscaneados());
            updateUsuario.setContadorDiario(usuario.getContadorDiario());

            usuarioRepository.save(updateUsuario);
            return ResponseEntity.status(HttpStatus.OK).body(username + " Modificado con éxito");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado con el nombre de usuario: " + username);
        }

    }
    public boolean usuarioTieneArtefacto(Integer usuarioId, Integer artefactoId) {
        return usuarioRepository.usuarioTieneArtefacto(usuarioId, artefactoId);
    }

    public ResponseEntity deleteUsuario(String username) {
        Optional<Usuario> existingUsuario = usuarioRepository.findByUsername(username);
        if (existingUsuario.isPresent()) {
            this.usuarioRepository.delete(existingUsuario.get());
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(username + " Eliminado con éxito");
        }
    }
    public List<Artefacto> obtenerArtefactosDeUsuario(Integer usuarioId) {
        return usuarioRepository.findArtefactosByUsuarioId(usuarioId);
    }

}

