package org.example.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tokens")
public class tokens implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use auto-increment for MySQL
    @Column(name = "id",nullable = false)
    private Long id;

    @Column(name = "tokenscol",nullable = false)
    private String tokenString;
}
