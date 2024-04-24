package org.example.Services.Implementation;

import org.example.Services.Interface.QRcodeService;
import org.example.Tools.QRtool;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class QRcodeServiceImpl implements QRcodeService {
    @Override
    public byte[]  getQRforUser(String token){
        int width=300;
        int height = 300;
        try {
            return QRtool.generateQRcodeImage(token, width, height);
        }catch (Exception e){
            e.printStackTrace();
            return  null;
        }
    }

}
