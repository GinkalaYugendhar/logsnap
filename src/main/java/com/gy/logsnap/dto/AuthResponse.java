package com.gy.logsnap.dto;

import lombok.*;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String accessToken;
    private String refreshToken;
}
