package com.gy.logsnap.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@SuperBuilder
@NoArgsConstructor
@Table(name = "employees")
public class Employee extends User {

    @Column(unique = true)
    private String employeeCode;

    private LocalDate dob;

    private LocalDate doj;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    private String designation;

    private BigDecimal salary;

    @OneToMany(mappedBy = "employee")
    private List<Attendance> attendances;

    @OneToMany(mappedBy = "employee")
    private List<SalarySlip> salarySlips;

    @OneToMany(mappedBy = "employee")
    private List<LeaveRequest> leaveRequests;
}