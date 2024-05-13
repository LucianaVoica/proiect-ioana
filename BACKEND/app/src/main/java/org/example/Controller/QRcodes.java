package org.example.Controller;

import lombok.RequiredArgsConstructor;
import org.example.Repository.TokenRepository;
import org.example.Services.Interface.QRcodeService;
import org.example.Services.Interface.SessionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class QRcodes {

    private final QRcodeService qRcodeService;
    private final SessionService sessionService;
    private final TokenRepository tokenRepository;

    @GetMapping("/getQRcode")
    @ResponseBody
    public ResponseEntity<?> getQRcodeForUser(@RequestParam("token") String token)
    {
        if(sessionService.checkToken(token)){
            System.out.println("Token ok");
            System.out.println("QR CODE: "+token);
            return ResponseEntity.ok(qRcodeService.getQRforUser(token));
        }else{
            System.out.println("Token de sesiune inexistent");
            return ResponseEntity.badRequest().build();
        }

    }
}
