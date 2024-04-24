package org.example.Repository;

import org.example.Entities.tokens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<tokens,Long> {

    @Query("SELECT COUNT(t) FROM tokens t WHERE t.tokenString = :token")
    int findIdByToken(@Param("token") String tokenscol);
}
