package abp.abpfollow.api;

import abp.abpfollow.model.CodigoQR;
import abp.abpfollow.service.CodigoQrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/codigoQr")
public class CodigoQrController {

    @Autowired
    private CodigoQrService codigoQrService;

    @GetMapping
    private ResponseEntity getQrCode(){
        return this.codigoQrService.getQrCode();
    }
    @GetMapping("/{codigoQr}")
    private ResponseEntity getArtefactoPorCodigoQR(@PathVariable String codigoQr ) {
        return this.codigoQrService.getArtefactoPorCodigoQR(codigoQr);
    }
    @PostMapping
    private ResponseEntity postQrCode (@RequestBody CodigoQR codigoQR){
        return this.codigoQrService.postQrCode(codigoQR);
    }

    @PostMapping("/all")
    private ResponseEntity postAllQrCode(@RequestBody ArrayList<CodigoQR> qrCode){
        return this.codigoQrService.postAllQrCode(qrCode);
    }

    @PutMapping ("/{qrcode}")
    private ResponseEntity putQrCode(@RequestBody CodigoQR qrCode, @PathVariable String codigoQr){
        return this.codigoQrService.putQrCode(qrCode, codigoQr);
    }
    @DeleteMapping("/{qrcode}")
    private ResponseEntity deletQrCode(@PathVariable String qrcode){
        return this.codigoQrService.deleteQrCode(qrcode);
    }
}
