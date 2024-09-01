package abp.abpfollow.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@Entity
@Table(name = "artefacto")
public class Artefacto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "nombre", nullable = false, unique = true)
    private String nombre;

    @Column(name = "Imagen")
    private String imagen;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "categoria", nullable = false)
    private String categoria;

    @Column(name = "Ubicación")
    private String location;

    @Column(name = "puntos", nullable = false)
    private int puntos;


    @OneToMany(mappedBy = "artefacto", cascade = CascadeType.ALL)
    //cascadeType.All indica que cualquier modificación en artefacto se modifica en codiqgoQR
    @JsonManagedReference
    private List<CodigoQR> codigosQR;

    @ManyToMany(mappedBy = "artefactosEscaneados")
    Set<Usuario> usuarios;

    public Artefacto() {
    }

    @Override
    public String toString() {
        return "Artefacto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", imagen='" + imagen + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", categoria='" + categoria + '\'' +
                ", location='" + location + '\'' +
                ", puntos=" + puntos +
                '}';
    }

}
