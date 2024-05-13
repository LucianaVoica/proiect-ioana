package org.example.Services.Interface;

import java.io.IOException;

public interface ImageService {
    public void insertImageToDB(String token,String imageName, byte[]imageData) throws IOException;

    public void removeImageFromBD(String token) throws IOException;

    public String isImageInDB(String token) throws IOException;
}
