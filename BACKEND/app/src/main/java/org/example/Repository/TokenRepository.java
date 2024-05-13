package org.example.Repository;

import jakarta.transaction.Transactional;
import org.example.Entities.Tokens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Blob;

@Repository
public interface TokenRepository extends JpaRepository<Tokens,Long> {

    @Query("SELECT COUNT(t) FROM Tokens t WHERE t.tokenString = :token")
    int findIdByToken(@Param("token") String token);

    @Transactional
    @Modifying
    @Query("UPDATE Tokens t SET t.imageData = :image_data , t.imageName = :imageName  WHERE t.tokenString = :token")
    void uploadPhotoByToken(@Param("token") String token,@Param("imageName") String imageName, @Param("image_data") Blob image_data);

    @Transactional
    @Modifying
    @Query("UPDATE Tokens SET imageData = NULL , imageName = NULL WHERE tokenString = :token")
    void removePhotoByToken(@Param("token") String token);

//    @Query("SELECT CASE WHEN COUNT(t) > 0 THEN true ELSE false END FROM Tokens t WHERE t.tokenString = :token")
    @Query("SELECT imageName FROM Tokens WHERE tokenString = :token")
    String hasImageForToken(@Param("token") String token);


}
