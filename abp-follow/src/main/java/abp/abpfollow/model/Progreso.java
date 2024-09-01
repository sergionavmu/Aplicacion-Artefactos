package abp.abpfollow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
@Entity
@Table(name = "progreso")
public class Progreso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "usuario_id", nullable = false)
    private int usuarioId;

    @Column(name = "puntos", nullable = false)
    private int puntos;

    @Column(name = "progreso_diario", nullable = false)
    private int progresoDiario;

    @ElementCollection
    @CollectionTable(name = "artefactos_conseguidos", joinColumns = @JoinColumn(name = "progreso_id"))
    @Column(name = "nombre_artefacto")
    private List<String> artefactosConseguidos;

    public Progreso() {
    }

    public void actualizarPuntos(Artefacto artefacto) {
        this.puntos += artefacto.getPuntos();
        this.progresoDiario += artefacto.getPuntos();
        this.artefactosConseguidos.add(artefacto.getNombre());
    }
}
