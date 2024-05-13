package org.example.Services.Implementation;

import org.example.Entities.Tokens;
import org.example.Repository.TokenRepository;
import org.example.Services.Interface.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;

@Service
public class SessionServiceImp implements SessionService {

    private final TokenRepository tokenRepository;
    private static final int TOKEN_LENGTH = 32;
    private static  byte[] tokenBytes = null;

    @Autowired
    public SessionServiceImp(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    @Override
    public ResponseEntity<?> startSession(){
        SecureRandom secureRandom = new SecureRandom();
        byte[] tokenBytes = new byte[TOKEN_LENGTH];
        secureRandom.nextBytes(tokenBytes);

        String token = Base64.getEncoder().encodeToString(tokenBytes);
        token="ZieH2nkazAsnyi2ItVrVN5RGEg1Iv27ilFI9VDES8o4=";
        Tokens tokens = Tokens.builder().tokenString(token).build();

        System.out.println("START SESSION: "+ tokens);
//        tokenRepository.save(tokens);
        return ResponseEntity.ok().body(token);
    }

    @Override
    public byte[] getToken()
    {
        SecureRandom secureRandom = new SecureRandom();
        tokenBytes = new byte[TOKEN_LENGTH];
        secureRandom.nextBytes(tokenBytes);
        return  tokenBytes;
    }

    @Override
    public boolean checkToken(String token){
        return tokenRepository.findIdByToken(token) > 0;

    }

}
