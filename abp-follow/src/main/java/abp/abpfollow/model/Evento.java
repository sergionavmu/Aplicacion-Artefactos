package abp.abpfollow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@Entity
@Table(name = "evento")
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "nombre", nullable = false, unique = true)
    private String nombre;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "ubicacion", nullable = false)
    private String ubicacion;

    @Column(name = "recompensa", nullable = false)
    private int recompensa;

    @ManyToMany
    @JoinTable(
            name = "evento_artefacto",
            joinColumns = @JoinColumn(name = "evento_id"),
            inverseJoinColumns = @JoinColumn(name = "artefacto_id"))
    private List<Artefacto> artefactosRequeridos;

    public Evento() {
    }
}