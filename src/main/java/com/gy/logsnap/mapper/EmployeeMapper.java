package com.gy.logsnap.mapper;

import com.gy.logsnap.dto.EmployeeDTO;
import com.gy.logsnap.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO toDto(Employee employee) {
        EmployeeDTO dto = new EmployeeDTO();
        dto.setId(employee.getId());
        dto.setFullName(employee.getFullName());
        dto.setEmail(employee.getEmail());
        dto.setDepartmentName(employee.getDepartment() != null ? employee.getDepartment().getName() : null);
        dto.setDesignation(employee.getDesignation());
        return dto;
    }

    public static Employee toEntity(EmployeeDTO dto) {
        Employee emp = new Employee();
        emp.setId(dto.getId());
        emp.setFullName(dto.getFullName());
        emp.setEmail(dto.getEmail());
        emp.setDesignation(dto.getDesignation());
        // Department needs to be looked up or constructed separately
        return emp;
    }
}
