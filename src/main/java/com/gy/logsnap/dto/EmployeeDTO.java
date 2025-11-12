package com.gy.logsnap.dto;

import lombok.Data;

@Data
public class EmployeeDTO {
    private Long id;
    private String fullName;
    private String email;
    private String departmentName; // rename to clarify it's just the name
    private String designation;
}
