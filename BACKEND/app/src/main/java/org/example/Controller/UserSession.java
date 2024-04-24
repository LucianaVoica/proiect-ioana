package org.example.Controller;

import lombok.RequiredArgsConstructor;
import org.example.Services.Interface.SessionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class UserSession {

    private final SessionService sessionService;
    @GetMapping("/")
    public ResponseEntity<?> startSession(){

        return ResponseEntity.ok(sessionService.startSession());
    }
}
