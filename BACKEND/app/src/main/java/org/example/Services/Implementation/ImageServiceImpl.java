package org.example.Services.Implementation;

import org.example.Repository.TokenRepository;
import org.example.Services.Interface.ImageService;
import org.example.Services.Interface.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;

@Service
public class ImageServiceImpl implements ImageService {

    private final TokenRepository tokenRepository;
    private final SessionService sessionService;

    @Autowired
    public ImageServiceImpl(TokenRepository tokenRepository, SessionService ss) {
        this.tokenRepository = tokenRepository;
        this.sessionService = ss;
    }

    @Override
    public void insertImageToDB(String token,String imageName, byte[]imageData) throws IOException {
        if(sessionService.checkToken(token)){
            try {

                Blob blob = new SerialBlob(imageData);
                tokenRepository.uploadPhotoByToken(token,imageName, blob);
            } catch (SQLException e) {

                throw new IOException("Error converting byte[] to Blob: " + e.getMessage());
            }
        }else {
            throw new IOException("Token not found");
        }

    }

    @Override
    public String isImageInDB(String token) throws IOException{
        if(sessionService.checkToken(token)){
            return tokenRepository.hasImageForToken(token);
        }else {
            throw new IOException("Token not found");
        }
    }

    @Override
    public void removeImageFromBD(String token) throws IOException
    {
        if(sessionService.checkToken(token)){
            tokenRepository.removePhotoByToken(token);
        }else {
            throw new IOException("Token not found");
        }
    }
}
