package com.gy.logsnap.config;

import com.gy.logsnap.entity.*;
import com.gy.logsnap.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private LeaveRequestRepository leaveRequestRepository;

    @Autowired
    private PayrollRepository payrollRepository;

    @Autowired
    private SalarySlipRepository salarySlipRepository;

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Seed Departments
        Department hr = Department.builder()
                .name("HR")
                .description("Human Resources Department")
                .build();
        Department it = Department.builder()
                .name("IT")
                .description("Information Technology Department")
                .build();
        Department finance = Department.builder()
                .name("Finance")
                .description("Finance and Accounting Department")
                .build();
        Department marketing = Department.builder()
                .name("Marketing")
                .description("Marketing and Sales Department")
                .build();
        List<Department> departments = departmentRepository.saveAll(Arrays.asList(hr, it, finance, marketing));

        // Seed Users/Employees
        List<Employee> employees = Arrays.asList(
                Employee.builder()
                        .fullName("John Doe").email("john.doe@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("1234567890").role(Role.ADMIN).enabled(true)
                        .employeeCode("EMP001").dob(LocalDate.of(1990, 5, 15)).doj(LocalDate.of(2020, 1, 10))
                        .department(hr).designation("HR Manager").salary(new BigDecimal("75000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Jane Smith").email("jane.smith@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("0987654321").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP002").dob(LocalDate.of(1992, 8, 20)).doj(LocalDate.of(2021, 3, 15))
                        .department(it).designation("Software Engineer").salary(new BigDecimal("65000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Alice Johnson").email("alice.johnson@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("5551234567").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP003").dob(LocalDate.of(1988, 11, 5)).doj(LocalDate.of(2019, 6, 1))
                        .department(it).designation("Senior Developer").salary(new BigDecimal("85000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Bob Wilson").email("bob.wilson@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("4449876543").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP004").dob(LocalDate.of(1995, 2, 25)).doj(LocalDate.of(2022, 4, 10))
                        .department(hr).designation("HR Assistant").salary(new BigDecimal("55000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Carol Brown").email("carol.brown@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("3334567890").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP005").dob(LocalDate.of(1993, 7, 10)).doj(LocalDate.of(2021, 9, 5))
                        .department(finance).designation("Accountant").salary(new BigDecimal("60000.00"))
                        .build(),
                Employee.builder()
                        .fullName("David Lee").email("david.lee@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("2229876543").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP006").dob(LocalDate.of(1991, 4, 12)).doj(LocalDate.of(2020, 11, 20))
                        .department(marketing).designation("Marketing Specialist").salary(new BigDecimal("62000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Emma Davis").email("emma.davis@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("1114567890").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP007").dob(LocalDate.of(1989, 9, 30)).doj(LocalDate.of(2018, 12, 1))
                        .department(it).designation("DevOps Engineer").salary(new BigDecimal("78000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Frank Miller").email("frank.miller@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("6661234567").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP008").dob(LocalDate.of(1994, 3, 22)).doj(LocalDate.of(2022, 1, 15))
                        .department(finance).designation("Financial Analyst").salary(new BigDecimal("67000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Grace Taylor").email("grace.taylor@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("7779876543").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP009").dob(LocalDate.of(1990, 12, 5)).doj(LocalDate.of(2020, 7, 10))
                        .department(hr).designation("Recruiter").salary(new BigDecimal("58000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Henry Clark").email("henry.clark@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("8884567890").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP010").dob(LocalDate.of(1987, 6, 18)).doj(LocalDate.of(2019, 3, 25))
                        .department(marketing).designation("Content Creator").salary(new BigDecimal("64000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Isabella White").email("isabella.white@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("9991234567").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP011").dob(LocalDate.of(1992, 1, 8)).doj(LocalDate.of(2021, 5, 12))
                        .department(it).designation("UI/UX Designer").salary(new BigDecimal("70000.00"))
                        .build(),
                Employee.builder()
                        .fullName("James Harris").email("james.harris@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("1239876543").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP012").dob(LocalDate.of(1993, 10, 14)).doj(LocalDate.of(2022, 6, 30))
                        .department(finance).designation("Bookkeeper").salary(new BigDecimal("56000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Kelly Martin").email("kelly.martin@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("4561237890").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP013").dob(LocalDate.of(1988, 2, 27)).doj(LocalDate.of(2019, 8, 5))
                        .department(hr).designation("Payroll Specialist").salary(new BigDecimal("59000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Liam Walker").email("liam.walker@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("7894561230").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP014").dob(LocalDate.of(1991, 11, 3)).doj(LocalDate.of(2020, 2, 20))
                        .department(marketing).designation("SEO Analyst").salary(new BigDecimal("63000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Mia Young").email("mia.young@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("3216549870").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP015").dob(LocalDate.of(1994, 8, 16)).doj(LocalDate.of(2022, 3, 10))
                        .department(it).designation("QA Engineer").salary(new BigDecimal("68000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Noah King").email("noah.king@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("6549873210").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP016").dob(LocalDate.of(1989, 5, 29)).doj(LocalDate.of(2018, 10, 15))
                        .department(finance).designation("Tax Consultant").salary(new BigDecimal("72000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Olivia Scott").email("olivia.scott@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("9873216540").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP017").dob(LocalDate.of(1990, 3, 4)).doj(LocalDate.of(2020, 4, 1))
                        .department(hr).designation("Training Coordinator").salary(new BigDecimal("57000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Peter Adams").email("peter.adams@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("1472583690").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP018").dob(LocalDate.of(1992, 12, 19)).doj(LocalDate.of(2021, 7, 25))
                        .department(marketing).designation("Social Media Manager").salary(new BigDecimal("66000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Quinn Baker").email("quinn.baker@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("2583691470").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP019").dob(LocalDate.of(1993, 6, 11)).doj(LocalDate.of(2022, 2, 28))
                        .department(it).designation("Backend Developer").salary(new BigDecimal("74000.00"))
                        .build(),
                Employee.builder()
                        .fullName("Rachel Carter").email("rachel.carter@company.com").password(passwordEncoder.encode("password123"))
                        .mobile("3691472580").role(Role.EMPLOYEE).enabled(true)
                        .employeeCode("EMP020").dob(LocalDate.of(1987, 9, 7)).doj(LocalDate.of(2019, 1, 10))
                        .department(finance).designation("Budget Analyst").salary(new BigDecimal("69000.00"))
                        .build()
        );
        userRepository.saveAll(employees);

        // Seed Additional User (not an Employee)
        User extraUser = User.builder()
                .fullName("Samuel Green").email("samuel.green@company.com").password(passwordEncoder.encode("password123"))
                .mobile("7418529630").role(Role.EMPLOYEE).enabled(true)
                .build();
        userRepository.save(extraUser);

        // Seed Attendances
        List<Attendance> attendances = Arrays.asList(
                Attendance.builder().employee(employees.get(0)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(0)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 15)).checkOut(LocalTime.of(17, 30)).build(),
                Attendance.builder().employee(employees.get(1)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(8, 45)).checkOut(LocalTime.of(16, 45)).build(),
                Attendance.builder().employee(employees.get(1)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.LEAVE).build(),
                Attendance.builder().employee(employees.get(2)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(2)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(8, 50)).checkOut(LocalTime.of(17, 10)).build(),
                Attendance.builder().employee(employees.get(3)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.ABSENT).build(),
                Attendance.builder().employee(employees.get(3)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 30)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(4)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(4)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(8, 55)).checkOut(LocalTime.of(16, 55)).build(),
                Attendance.builder().employee(employees.get(5)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 10)).checkOut(LocalTime.of(17, 20)).build(),
                Attendance.builder().employee(employees.get(5)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.LEAVE).build(),
                Attendance.builder().employee(employees.get(6)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(8, 40)).checkOut(LocalTime.of(16, 40)).build(),
                Attendance.builder().employee(employees.get(6)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(7)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 5)).checkOut(LocalTime.of(17, 5)).build(),
                Attendance.builder().employee(employees.get(7)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.ABSENT).build(),
                Attendance.builder().employee(employees.get(8)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(8)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(8, 50)).checkOut(LocalTime.of(16, 50)).build(),
                Attendance.builder().employee(employees.get(9)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 15)).checkOut(LocalTime.of(17, 15)).build(),
                Attendance.builder().employee(employees.get(9)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(10)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(8, 45)).checkOut(LocalTime.of(16, 45)).build(),
                Attendance.builder().employee(employees.get(10)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.LEAVE).build(),
                Attendance.builder().employee(employees.get(11)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(11)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 10)).checkOut(LocalTime.of(17, 10)).build(),
                Attendance.builder().employee(employees.get(12)).date(LocalDate.of(2025, 7, 1)).status(AttendanceStatus.PRESENT).checkIn(LocalTime.of(9, 0)).checkOut(LocalTime.of(17, 0)).build(),
                Attendance.builder().employee(employees.get(12)).date(LocalDate.of(2025, 7, 2)).status(AttendanceStatus.ABSENT).build()
        );
        attendanceRepository.saveAll(attendances);

        // Seed Leave Requests
        List<LeaveRequest> leaveRequests = Arrays.asList(
                LeaveRequest.builder().employee(employees.get(1)).startDate(LocalDate.of(2025, 7, 2)).endDate(LocalDate.of(2025, 7, 3))
                        .reason("Medical Leave").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 1, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(2)).startDate(LocalDate.of(2025, 7, 10)).endDate(LocalDate.of(2025, 7, 12))
                        .reason("Personal Leave").status(LeaveStatus.PENDING).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 9, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(3)).startDate(LocalDate.of(2025, 7, 1)).endDate(LocalDate.of(2025, 7, 1))
                        .reason("Sick Leave").status(LeaveStatus.REJECTED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 6, 30, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(4)).startDate(LocalDate.of(2025, 7, 15)).endDate(LocalDate.of(2025, 7, 16))
                        .reason("Family Emergency").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 14, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(5)).startDate(LocalDate.of(2025, 7, 2)).endDate(LocalDate.of(2025, 7, 2))
                        .reason("Medical Appointment").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 1, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(6)).startDate(LocalDate.of(2025, 7, 20)).endDate(LocalDate.of(2025, 7, 22))
                        .reason("Vacation").status(LeaveStatus.PENDING).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 19, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(7)).startDate(LocalDate.of(2025, 7, 2)).endDate(LocalDate.of(2025, 7, 2))
                        .reason("Personal Leave").status(LeaveStatus.REJECTED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 1, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(8)).startDate(LocalDate.of(2025, 7, 8)).endDate(LocalDate.of(2025, 7, 9))
                        .reason("Sick Leave").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 7, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(9)).startDate(LocalDate.of(2025, 7, 25)).endDate(LocalDate.of(2025, 7, 27))
                        .reason("Vacation").status(LeaveStatus.PENDING).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 24, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(10)).startDate(LocalDate.of(2025, 7, 2)).endDate(LocalDate.of(2025, 7, 2))
                        .reason("Medical Leave").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 1, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(11)).startDate(LocalDate.of(2025, 7, 5)).endDate(LocalDate.of(2025, 7, 6))
                        .reason("Family Event").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 4, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(12)).startDate(LocalDate.of(2025, 7, 2)).endDate(LocalDate.of(2025, 7, 2))
                        .reason("Sick Leave").status(LeaveStatus.REJECTED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 1, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(13)).startDate(LocalDate.of(2025, 7, 12)).endDate(LocalDate.of(2025, 7, 14))
                        .reason("Vacation").status(LeaveStatus.PENDING).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 11, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(14)).startDate(LocalDate.of(2025, 7, 18)).endDate(LocalDate.of(2025, 7, 19))
                        .reason("Personal Leave").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 17, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(15)).startDate(LocalDate.of(2025, 7, 3)).endDate(LocalDate.of(2025, 7, 3))
                        .reason("Medical Appointment").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 2, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(16)).startDate(LocalDate.of(2025, 7, 22)).endDate(LocalDate.of(2025, 7, 24))
                        .reason("Vacation").status(LeaveStatus.PENDING).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 21, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(17)).startDate(LocalDate.of(2025, 7, 6)).endDate(LocalDate.of(2025, 7, 7))
                        .reason("Family Emergency").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 5, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(18)).startDate(LocalDate.of(2025, 7, 2)).endDate(LocalDate.of(2025, 7, 2))
                        .reason("Sick Leave").status(LeaveStatus.REJECTED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 1, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                LeaveRequest.builder().employee(employees.get(19)).startDate(LocalDate.of(2025, 7, 10)).endDate(LocalDate.of(2025, 7, 11))
                        .reason("Personal Leave").status(LeaveStatus.APPROVED).appliedAt(Timestamp.from(LocalDateTime.of(2025, 7, 9, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build()
        );
        leaveRequestRepository.saveAll(leaveRequests);

        // Seed Payrolls
        List<Payroll> payrolls = Arrays.asList(
                Payroll.builder().employee(employees.get(0)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("75000.00")).allowances(new BigDecimal("5000.00")).deductions(new BigDecimal("2000.00"))
                        .netPay(new BigDecimal("78000.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(1)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("65000.00")).allowances(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netPay(new BigDecimal("67500.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build(),
                Payroll.builder().employee(employees.get(2)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("85000.00")).allowances(new BigDecimal("6000.00")).deductions(new BigDecimal("2500.00"))
                        .netPay(new BigDecimal("88500.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(3)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("55000.00")).allowances(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netPay(new BigDecimal("57000.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(4)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("60000.00")).allowances(new BigDecimal("3500.00")).deductions(new BigDecimal("1200.00"))
                        .netPay(new BigDecimal("62300.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build(),
                Payroll.builder().employee(employees.get(5)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("62000.00")).allowances(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netPay(new BigDecimal("64500.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(6)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("78000.00")).allowances(new BigDecimal("5000.00")).deductions(new BigDecimal("2000.00"))
                        .netPay(new BigDecimal("81000.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(7)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("67000.00")).allowances(new BigDecimal("4500.00")).deductions(new BigDecimal("1800.00"))
                        .netPay(new BigDecimal("69700.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build(),
                Payroll.builder().employee(employees.get(8)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("58000.00")).allowances(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netPay(new BigDecimal("60000.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(9)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("64000.00")).allowances(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netPay(new BigDecimal("66500.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(10)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("70000.00")).allowances(new BigDecimal("4500.00")).deductions(new BigDecimal("2000.00"))
                        .netPay(new BigDecimal("72500.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build(),
                Payroll.builder().employee(employees.get(11)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("56000.00")).allowances(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netPay(new BigDecimal("58000.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(12)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("59000.00")).allowances(new BigDecimal("3500.00")).deductions(new BigDecimal("1200.00"))
                        .netPay(new BigDecimal("61300.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(13)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("63000.00")).allowances(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netPay(new BigDecimal("65500.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build(),
                Payroll.builder().employee(employees.get(14)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("68000.00")).allowances(new BigDecimal("4500.00")).deductions(new BigDecimal("1800.00"))
                        .netPay(new BigDecimal("70700.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(15)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("72000.00")).allowances(new BigDecimal("5000.00")).deductions(new BigDecimal("2000.00"))
                        .netPay(new BigDecimal("75000.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(16)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("57000.00")).allowances(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netPay(new BigDecimal("59000.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build(),
                Payroll.builder().employee(employees.get(17)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("66000.00")).allowances(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netPay(new BigDecimal("68500.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(18)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("74000.00")).allowances(new BigDecimal("4500.00")).deductions(new BigDecimal("2000.00"))
                        .netPay(new BigDecimal("76500.00")).status("PAID").generatedDate(LocalDate.of(2025, 7, 30)).paidDate(LocalDate.of(2025, 7, 31)).build(),
                Payroll.builder().employee(employees.get(19)).payrollDate(LocalDate.of(2025, 7, 31))
                        .basicSalary(new BigDecimal("69000.00")).allowances(new BigDecimal("4500.00")).deductions(new BigDecimal("1800.00"))
                        .netPay(new BigDecimal("71700.00")).status("PENDING").generatedDate(LocalDate.of(2025, 7, 30)).build()
        );
        payrollRepository.saveAll(payrolls);

        // Seed Salary Slips
        List<SalarySlip> salarySlips = Arrays.asList(
                SalarySlip.builder().employee(employees.get(0)).month("July").year(2025)
                        .basic(new BigDecimal("75000.00")).hra(new BigDecimal("5000.00")).deductions(new BigDecimal("2000.00"))
                        .netSalary(new BigDecimal("78000.00")).pdfUrl("/slips/emp001_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(1)).month("July").year(2025)
                        .basic(new BigDecimal("65000.00")).hra(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netSalary(new BigDecimal("67500.00")).pdfUrl("/slips/emp002_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(2)).month("July").year(2025)
                        .basic(new BigDecimal("85000.00")).hra(new BigDecimal("6000.00")).deductions(new BigDecimal("2500.00"))
                        .netSalary(new BigDecimal("88500.00")).pdfUrl("/slips/emp003_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(3)).month("July").year(2025)
                        .basic(new BigDecimal("55000.00")).hra(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netSalary(new BigDecimal("57000.00")).pdfUrl("/slips/emp004_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(4)).month("July").year(2025)
                        .basic(new BigDecimal("60000.00")).hra(new BigDecimal("3500.00")).deductions(new BigDecimal("1200.00"))
                        .netSalary(new BigDecimal("62300.00")).pdfUrl("/slips/emp005_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(5)).month("July").year(2025)
                        .basic(new BigDecimal("62000.00")).hra(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netSalary(new BigDecimal("64500.00")).pdfUrl("/slips/emp006_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(6)).month("July").year(2025)
                        .basic(new BigDecimal("78000.00")).hra(new BigDecimal("5000.00")).deductions(new BigDecimal("2000.00"))
                        .netSalary(new BigDecimal("81000.00")).pdfUrl("/slips/emp007_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(7)).month("July").year(2025)
                        .basic(new BigDecimal("67000.00")).hra(new BigDecimal("4500.00")).deductions(new BigDecimal("1800.00"))
                        .netSalary(new BigDecimal("69700.00")).pdfUrl("/slips/emp008_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(8)).month("July").year(2025)
                        .basic(new BigDecimal("58000.00")).hra(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netSalary(new BigDecimal("60000.00")).pdfUrl("/slips/emp009_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(9)).month("July").year(2025)
                        .basic(new BigDecimal("64000.00")).hra(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netSalary(new BigDecimal("66500.00")).pdfUrl("/slips/emp010_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(10)).month("July").year(2025)
                        .basic(new BigDecimal("70000.00")).hra(new BigDecimal("4500.00")).deductions(new BigDecimal("2000.00"))
                        .netSalary(new BigDecimal("72500.00")).pdfUrl("/slips/emp011_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(11)).month("July").year(2025)
                        .basic(new BigDecimal("56000.00")).hra(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netSalary(new BigDecimal("58000.00")).pdfUrl("/slips/emp012_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(12)).month("July").year(2025)
                        .basic(new BigDecimal("59000.00")).hra(new BigDecimal("3500.00")).deductions(new BigDecimal("1200.00"))
                        .netSalary(new BigDecimal("61300.00")).pdfUrl("/slips/emp013_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(13)).month("July").year(2025)
                        .basic(new BigDecimal("63000.00")).hra(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netSalary(new BigDecimal("65500.00")).pdfUrl("/slips/emp014_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(14)).month("July").year(2025)
                        .basic(new BigDecimal("68000.00")).hra(new BigDecimal("4500.00")).deductions(new BigDecimal("1800.00"))
                        .netSalary(new BigDecimal("70700.00")).pdfUrl("/slips/emp015_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(15)).month("July").year(2025)
                        .basic(new BigDecimal("72000.00")).hra(new BigDecimal("5000.00")).deductions(new BigDecimal("2000.00"))
                        .netSalary(new BigDecimal("75000.00")).pdfUrl("/slips/emp016_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(16)).month("July").year(2025)
                        .basic(new BigDecimal("57000.00")).hra(new BigDecimal("3000.00")).deductions(new BigDecimal("1000.00"))
                        .netSalary(new BigDecimal("59000.00")).pdfUrl("/slips/emp017_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(17)).month("July").year(2025)
                        .basic(new BigDecimal("66000.00")).hra(new BigDecimal("4000.00")).deductions(new BigDecimal("1500.00"))
                        .netSalary(new BigDecimal("68500.00")).pdfUrl("/slips/emp018_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(18)).month("July").year(2025)
                        .basic(new BigDecimal("74000.00")).hra(new BigDecimal("4500.00")).deductions(new BigDecimal("2000.00"))
                        .netSalary(new BigDecimal("76500.00")).pdfUrl("/slips/emp019_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build(),
                SalarySlip.builder().employee(employees.get(19)).month("July").year(2025)
                        .basic(new BigDecimal("69000.00")).hra(new BigDecimal("4500.00")).deductions(new BigDecimal("1800.00"))
                        .netSalary(new BigDecimal("71700.00")).pdfUrl("/slips/emp020_july2025.pdf")
                        .createdAt(Timestamp.from(LocalDateTime.of(2025, 7, 31, 14, 0).toInstant(java.time.ZoneOffset.UTC))).build()
        );
        salarySlipRepository.saveAll(salarySlips);

        // Seed Refresh Tokens
        List<User> users = userRepository.findAll();
        List<RefreshToken> refreshTokens = Arrays.asList(
                RefreshToken.builder().user(users.get(0)).token("550e8400-e29b-41d4-a716-446655440001").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(1)).token("550e8400-e29b-41d4-a716-446655440002").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(2)).token("550e8400-e29b-41d4-a716-446655440003").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(3)).token("550e8400-e29b-41d4-a716-446655440004").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(4)).token("550e8400-e29b-41d4-a716-446655440005").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(5)).token("550e8400-e29b-41d4-a716-446655440006").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(6)).token("550e8400-e29b-41d4-a716-446655440007").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(7)).token("550e8400-e29b-41d4-a716-446655440008").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(8)).token("550e8400-e29b-41d4-a716-446655440009").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(9)).token("550e8400-e29b-41d4-a716-446655440010").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(10)).token("550e8400-e29b-41d4-a716-446655440011").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(11)).token("550e8400-e29b-41d4-a716-446655440012").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(12)).token("550e8400-e29b-41d4-a716-446655440013").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(13)).token("550e8400-e29b-41d4-a716-446655440014").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(14)).token("550e8400-e29b-41d4-a716-446655440015").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(15)).token("550e8400-e29b-41d4-a716-446655440016").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(16)).token("550e8400-e29b-41d4-a716-446655440017").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(17)).token("550e8400-e29b-41d4-a716-446655440018").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(18)).token("550e8400-e29b-41d4-a716-446655440019").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(19)).token("550e8400-e29b-41d4-a716-446655440020").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build(),
                RefreshToken.builder().user(users.get(20)).token("550e8400-e29b-41d4-a716-446655440021").expiryDate(LocalDateTime.of(2025, 8, 7, 14, 0)).build()
        );
        refreshTokenRepository.saveAll(refreshTokens);
    }
}