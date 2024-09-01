package abp.abpfollow.security;

import javax.crypto.Cipher;
import java.security.KeyPair;

public class RSA {
    public byte[] cifrarRSA(byte[] texto, KeyPair claves) throws Exception {
        // Crear un objeto Cipher para cifrar
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, claves.getPublic());

        // Cifrar el texto
        byte[] textoCifrado = cipher.doFinal(texto);
        return textoCifrado;
    }

    public byte[] descifrarRSA(byte[] textoCifrado, KeyPair claves) throws Exception {
        // Crear un objeto Cipher para descifrar
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, claves.getPrivate());

        // Descifrar el texto
        byte[] textoDescifrado = cipher.doFinal(textoCifrado);
        return textoDescifrado;
    }
}
