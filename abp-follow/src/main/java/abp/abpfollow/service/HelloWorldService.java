package abp.abpfollow.service;

import org.springframework.http.ResponseEntity;

public class HelloWorldService {

    public ResponseEntity helloWorld () {
        return ResponseEntity.ok("OK");
    }
}
