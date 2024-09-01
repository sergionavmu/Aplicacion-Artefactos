package abp.abpfollow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Table(name = "artefactoxPlayer")
@Entity
public class ArtefactoxPlayer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @ManyToOne
    @JoinColumn(name = "artefacto_id", nullable = false)
    private Artefacto artefacto;

    @Column(name = "fechaDescubierto",nullable = false)
    private LocalDateTime fechaDescubierto;

    @Column(name = "descubiertoPor",nullable = false)
    private String descubiertoPor;

    public ArtefactoxPlayer() {
    }
}
