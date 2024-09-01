package abp.abpfollow.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Email;

import java.util.*;

@Data
@AllArgsConstructor
@Entity
@Table(name = "Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private int id;

    @Column(name = "nombre")
    private String name;

    @Column(name = "apellidos")
    private String surname;

    @NotBlank(message = "El nombre de usuario es obligatorio")
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @NotBlank(message = "La contraseña es obligatoria")
    @Length(min = 8, message = "Por favor introduzca una contraseña de mínimo 8 caracteres")
    //@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).*$", message = "La contraseña debe contener al menos una minúscula, una mayúscula y un carácter especial")
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "password_salt")
    private byte[] passwordSalt;


    @NotNull(message = "El correo electrónico no puede estar vacio")
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email(message = "Por favor, introduzca un correo electrónico válido")
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "contadorDiario")
    private int contadorDiario;


    @ManyToMany
    @JoinTable(
            name = "amigos",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "friend_id"))
    private List<Friends> myFriends;


    @ManyToMany
    @JoinTable(
            name = "usuario_artefacto",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "artefacto_id"))
    @JsonIgnore
    List<Artefacto> artefactosEscaneados = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "usuario_codigoQr",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "codigoQr_id"))
    Set<CodigoQR> codigosQrEscaneados;

    public void escanearArtefacto(Artefacto artefacto) {
        this.artefactosEscaneados.add(artefacto);
        artefacto.getUsuarios().add(this);
        contadorDiario++;
    }

    public Usuario() {
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", passwordSalt=" + Arrays.toString(passwordSalt) +
                ", email='" + email + '\'' +
                ", contadorDiario=" + contadorDiario +
                '}';
    }

}
