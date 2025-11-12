package com.gy.logsnap.service;

import com.gy.logsnap.dto.*;
import com.gy.logsnap.entity.Role;
import com.gy.logsnap.entity.User;
import com.gy.logsnap.repository.UserRepository;
import com.gy.logsnap.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    public AuthResponse register(SignupRequest request) {
        var user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(encoder.encode(request.getPassword()))
                .role(Role.valueOf(request.getRole().toUpperCase()))
                .enabled(true)
                .build();
        userRepo.save(user);
        return new AuthResponse(jwtService.generateToken(user), "dummy-refresh-token");
    }

    public AuthResponse login(AuthRequest request) {
        var user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!encoder.matches(request.getPassword(), user.getPassword()))
            throw new RuntimeException("Invalid password");

        return new AuthResponse(jwtService.generateToken(user), "dummy-refresh-token");
    }
}
