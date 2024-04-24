package org.example.Tools;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class QRtool {

    private static byte[] toByteArray(BitMatrix matrix,int width, int height) throws IOException{
        BufferedImage image = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        for(int x = 0; x < width;x++){
            for(int y = 0; y < height;y++){
                image.setRGB(x, y, matrix.get(x, y) ? 0xFF000000 : 0xFFFFFFFF);
            }
        }
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(image,"png",outputStream);
        return outputStream.toByteArray();
    }
    public static byte[] generateQRcodeImage(String text, int width, int height) throws IOException{
        try{
            Map<EncodeHintType, Object> hints = new HashMap<>();
            hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            String endpoint = "http://localhost:3000/api/v1/postImage?token="+text+",image=";
            BitMatrix bitMatrix=qrCodeWriter.encode(endpoint, BarcodeFormat.QR_CODE,width,height,hints);
            return toByteArray(bitMatrix,width,height);
        }catch (Exception e){
            e.printStackTrace();
            return  null;
        }
    }
}
