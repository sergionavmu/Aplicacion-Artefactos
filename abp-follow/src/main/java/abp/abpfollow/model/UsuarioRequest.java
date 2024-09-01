package abp.abpfollow.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;

import java.util.List;

@Data
@AllArgsConstructor
public class UsuarioRequest {

    @NotBlank(message = "El nombre de usuario es obligatorio")
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @NotBlank(message = "La contraseña es obligatoria")
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "password_salt")
    private byte [] passwordSalt;
}
