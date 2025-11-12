package com.gy.logsnap.repository;

import com.gy.logsnap.entity.Payroll;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PayrollRepository extends JpaRepository<Payroll, Long> {}