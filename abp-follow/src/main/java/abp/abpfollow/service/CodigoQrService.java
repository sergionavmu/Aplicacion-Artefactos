package abp.abpfollow.service;

import abp.abpfollow.dao.ArtefactoRepository;
import abp.abpfollow.dao.CodigoQrRepository;
import abp.abpfollow.dao.UsuarioRepository;
import abp.abpfollow.model.Artefacto;
import abp.abpfollow.model.CodigoQR;
import abp.abpfollow.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CodigoQrService {

    @Autowired
    private CodigoQrRepository codigoQrRepository;
    @Autowired
    private ArtefactoRepository artefactoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;


    public ResponseEntity getQrCode() {
        List<CodigoQR> codigoQr = this.codigoQrRepository.findAll();
        return ResponseEntity.ok(codigoQr); //codigo 200
    }

    public ResponseEntity getArtefactoPorCodigoQR(String qrCode) {
        System.out.println("Buscando el código QR: " + qrCode);
        Optional<CodigoQR> codigoQrOptional = codigoQrRepository.findByQrcode(qrCode);
        System.out.println("CODIGO" + codigoQrOptional);
        if (codigoQrOptional.isPresent()) {
            CodigoQR codigoQR = codigoQrOptional.get(); // para comprobar si el codigo qr ha sido leido antes
            Artefacto artefacto = codigoQR.getArtefacto();
            // jsonResponse = "{\"name\": \"" + artefacto.getNombre() + "\"}";
            System.out.println("Artefacto asociado al código QR: " + artefacto.getNombre());
            System.out.println("Ha conseguido el artefacto : " + artefacto.getNombre());
            return ResponseEntity.ok().body(artefacto);
        } else {
            System.out.println("Código QR no encontrado");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    public ResponseEntity postQrCode(CodigoQR qrCode) {
        // Buscar el artefacto por el nombre
        System.out.println("Buscando el código QR: " + qrCode.getQrcode());
        Optional<Artefacto> artefactoOptional = artefactoRepository.findByNombre(qrCode.getQrcode());
        // Comprobar si ya existe un CodigoQR con el mismo qrcode
        Optional<CodigoQR> codigoQrExistente = codigoQrRepository.findByQrcode(qrCode.getQrcode());
        if (codigoQrExistente.isPresent()) {
            // Si el CodigoQR ya existe, se devuelve un error
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El CodigoQR ya existe");
        } else if (artefactoOptional.isPresent()) {
            // Si el artefacto existe, se asigna al código QR
            qrCode.setArtefacto(artefactoOptional.get());
            this.codigoQrRepository.save(qrCode);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            // Si el artefacto no existe, se devuelve un error
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Artefacto no encontrado");
        }
    }

    public ResponseEntity postAllQrCode(ArrayList<CodigoQR> qrCodes) {
        List<CodigoQR> savedQrCodes = new ArrayList<>();

        for (CodigoQR qrCode : qrCodes) {
            String qrCodeValue = qrCode.getQrcode();

            // Verificar si el código QR ya existe
            Optional<CodigoQR> existingQrCode = codigoQrRepository.findByQrcode(qrCodeValue);

            if (existingQrCode.isPresent()) {
                // Si el código QR ya existe, devolver un error de conflicto
                return ResponseEntity.status(HttpStatus.CONFLICT).body("El código QR ya existe: " + qrCodeValue);
            } else {
                // Buscar el artefacto por el nombre del código QR
                Optional<Artefacto> existingArtefacto = artefactoRepository.findByNombre(qrCodeValue);

                if (existingArtefacto.isPresent()) {
                    // Si el artefacto existe, asignar al código QR y guardarlo
                    qrCode.setArtefacto(existingArtefacto.get());
                    savedQrCodes.add(codigoQrRepository.save(qrCode));
                } else {
                    // Si el artefacto no existe, devolver un error
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Artefacto no encontrado para el código QR: " + qrCodeValue);
                }
            }
        }

        // Devolver una respuesta exitosa con los códigos QR guardados
        return ResponseEntity.status(HttpStatus.CREATED).body(savedQrCodes);
    }

    public ResponseEntity putQrCode(CodigoQR qrCode, String codigoQr) {
        Optional<CodigoQR> exitsCodigoQr = codigoQrRepository.findByQrcode(codigoQr);

        if (exitsCodigoQr.isPresent()) {
            CodigoQR updatedQrCode = exitsCodigoQr.get();
            updatedQrCode.setQrcode(qrCode.getQrcode());

            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }


    public ResponseEntity deleteQrCode(String codigoQr) {
        Optional<CodigoQR> exitsCodigoQr = codigoQrRepository.findByQrcode(codigoQr);
        if (exitsCodigoQr.isPresent()) {
            this.codigoQrRepository.delete(exitsCodigoQr.get());
            return ResponseEntity.status(HttpStatus.OK).build();

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
