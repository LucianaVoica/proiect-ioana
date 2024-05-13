package org.example.Controller;

import lombok.RequiredArgsConstructor;
import org.example.Repository.TokenRepository;
import org.example.Services.Interface.ImageService;
import org.example.Services.Interface.QRcodeService;
import org.example.Services.Interface.SessionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ImageRecv {
    private final ImageService imageService;

    @PostMapping("/sendImage")
    @ResponseBody
    public ResponseEntity<?> postImage(@RequestParam("token") String token,
                                       @RequestParam("imageName") String imageName,
                                       @RequestParam("image") MultipartFile image)
    {
        try {
            System.out.println("Picture uploaded!");
            imageService.insertImageToDB(token,imageName,image.getBytes());
            return ResponseEntity.ok("Picture uploaded!");

        } catch (MaxUploadSizeExceededException ex) {
            System.out.println("Maximum upload size exceeded");
            return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).body("Maximum upload size exceeded");
        } catch (IOException e) {
            System.out.println("Token inexistent");
            return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).body("Token Inexistent");
        }
    }

    @GetMapping("/isImage")
    @ResponseBody
    public ResponseEntity<?> isImage(@RequestParam("token") String token)
    {
        try{
            String hasImage = imageService.isImageInDB(token);
            return ResponseEntity.ok(hasImage);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/removeImage")
    @ResponseBody
    public ResponseEntity<?> removeImage(@RequestParam("token") String token)
    {
        try{
            System.out.println("Imagine stearsa!");
            imageService.removeImageFromBD(token);
            return ResponseEntity.ok("removed");

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


}
