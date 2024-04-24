package org.example.Controller;

import lombok.RequiredArgsConstructor;
import org.example.Repository.TokenRepository;
import org.example.Services.Interface.QRcodeService;
import org.example.Services.Interface.SessionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ImageRecv {
    private final QRcodeService qRcodeService;
    private final SessionService sessionService;
    private final TokenRepository tokenRepository;

    @PostMapping("/postImage")
    @ResponseBody
    public ResponseEntity<?> postImage(@RequestParam("token") String token, @RequestParam("image") MultipartFile image)
    {
        if(sessionService.checkToken(token)){
            System.out.println("Token ok");
            return ResponseEntity.ok(qRcodeService.getQRforUser(token));
        }else{
            System.out.println("Token de sesiune inexistent");
            return (ResponseEntity<?>) ResponseEntity.badRequest();
        }

    }
}
