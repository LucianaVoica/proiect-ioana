package org.example.Services.Interface;

import org.springframework.http.ResponseEntity;

public interface SessionService {
    public ResponseEntity<?> startSession();

    public byte[] getToken();

    public boolean checkToken(String token);

}
