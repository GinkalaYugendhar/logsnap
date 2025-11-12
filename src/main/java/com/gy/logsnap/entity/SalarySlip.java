package com.gy.logsnap.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "salary_slips")
public class SalarySlip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Employee employee;

    private String month;
    private int year;

    private BigDecimal basic;
    private BigDecimal hra;
    private BigDecimal deductions;
    private BigDecimal netSalary;

    private String pdfUrl;

    private Timestamp createdAt;
}