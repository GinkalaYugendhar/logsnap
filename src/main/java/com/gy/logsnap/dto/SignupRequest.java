package com.gy.logsnap.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class SignupRequest {

    @NotBlank(message = "Full name is required")
    private String fullName;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "^(\\+91)?\\d{10}$", message = "Mobile number must be 10 digits, optionally prefixed with +91")
    private String mobile;

    @NotBlank(message = "Role is required")
    private String role;
}
