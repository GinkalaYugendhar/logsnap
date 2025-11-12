package com.gy.logsnap.controller;

import com.gy.logsnap.dto.SignupRequest;
import com.gy.logsnap.entity.Role;
import com.gy.logsnap.entity.User;
import com.gy.logsnap.repository.UserRepository;
import com.gy.logsnap.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
//@CrossOrigin(origins = "http://28c8cb78d2ce.ngrok-free.app") // 👈 Add this line
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid email"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String accessToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user); // Optional
        String role = user.getRole().name(); // e.g., "ADMIN" or "EMPLOYEE"
        String fullName=user.getFullName();

        return Map.of(
                "accessToken", accessToken,
                "refreshToken", refreshToken, // optional
                "role", role,
                "fullName",fullName
        );
    }


    @PostMapping("/signup")
    public ResponseEntity<String> signup(@Valid @RequestBody SignupRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already registered.");
        }

        // Normalize mobile (remove +91 if present)
        String normalizedMobile = request.getMobile().replaceFirst("^\\+91", "");

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .mobile(normalizedMobile)
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.valueOf(request.getRole().toUpperCase()))
                .build();

        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully.");
    }



}
