package abp.abpfollow.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
@Entity
@Table(name = "CodigoQr")
public class CodigoQR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "CodigoQr", unique = true)
    private String qrcode;


    @OneToOne
    @JoinColumn(name = "artefacto_id")
    @JsonBackReference
    private Artefacto artefacto;

    @ManyToMany(mappedBy = "codigosQrEscaneados")
    List<Usuario> usuarios;


    public CodigoQR() {

    }

    @Override
    public String toString() {
        return "CodigoQR{" +
                "id=" + id +
                ", qrcode='" + qrcode + '\'' +
                '}';
    }

}
