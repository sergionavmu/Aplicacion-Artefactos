package abp.abpfollow.security;

import abp.abpfollow.model.Usuario;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.util.Arrays;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;


public class Criptografia {
    RSA RSA = new RSA();
    static AES AES = new AES();

    Usuario usuario = new Usuario();

    public static String encriptarPassword(Usuario usuario, String salt) {
        String passwordToEncrypt = usuario.getPassword();
        return get_SHA_512_SecurePassword(passwordToEncrypt, salt);
    }

    public static boolean verificarPassword(String enteredPassword, String storedPasswordInDatabase, String storedSalt) {
        String enteredPasswordHash = get_SHA_512_SecurePassword(enteredPassword, storedSalt);
        return enteredPasswordHash.equals(storedPasswordInDatabase);
    }


    public static String get_SHA_512_SecurePassword(String passwordToHash, String salt) {
        String generatedPassword = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.update(salt.getBytes(StandardCharsets.UTF_8));
            byte[] bytes = md.digest(passwordToHash.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < bytes.length; i++) {
                sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
            }
            generatedPassword = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        System.out.println("Contraseña encriptada: " + generatedPassword);
        return generatedPassword;
    }

    public static String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] saltBytes = new byte[16];
        random.nextBytes(saltBytes);
        return new String(saltBytes, StandardCharsets.UTF_8);
    }

    public static byte[] generateSaltBytArray() {
        SecureRandom random = new SecureRandom();
        byte[] saltBytes = new byte[16];
        random.nextBytes(saltBytes);
        return saltBytes;
    }

    public class Main {
        public static void main(String[] args) {
            Usuario usuario = new Usuario();


            String salt = generateSalt();

            // Encriptar la contraseña antes de almacenarla
            //String encryptedPassword = Criptografia.encriptarPassword(usuario, salt);

            String storedPasswordInDatabase = usuario.getPassword();
            String storedSalt = Arrays.toString(usuario.getPasswordSalt());

            // Durante el proceso de inicio de sesión, comparar la contraseña ingresada con la almacenada
            String enteredPassword = usuario.getPassword();


            boolean inicioSesionExitoso = Criptografia.verificarPassword(enteredPassword, storedPasswordInDatabase, storedSalt);

            if (inicioSesionExitoso) {
                System.out.println("Contraseña válida. ¡Inicio de sesión exitoso!");
            } else {
                System.out.println("Contraseña incorrecta. ¡Inicio de sesión fallido!");
            }
        }
    }



      /*public static String prueba() {
        try {
            // Generar un par de claves RSA
            // Generar una clave AES de 16 bytes
            KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
            keyGenerator.init(128, new SecureRandom());
            SecretKey clave = keyGenerator.generateKey();


            String texto = "Este es un texto secreto";

            // Cifrar una cadena de texto AES
            byte[] textoCifradoAES = AES.cifrarAES(texto, clave);


            System.out.println("Texto original: " + texto);
            System.out.println("Texto cifrado AES: " + new String(textoCifradoAES));

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }*/
}
