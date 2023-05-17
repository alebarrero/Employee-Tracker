INSERT INTO department (id, name)
VALUES (01, "Sales"),
       (02, "Engineering"),
       (03, "Finance" ),
       (04, "Legal");
INSERT INTO role (id, title, deparment_id, salary)
VALUES (01,"Sales Lead",01, 100000.00),
       (02, "Salesperson", 01, 80000.00),
       (03, "Lead Engineer", 02, 150000.00),
       (04, "Software Engineer", 02,120000.00),
       (05, "Account Manager", 03, 160000.00),
       (06, "Accountant", 03, 125000.00),
       (07, "Legal Team Lead", 04, 250000.00),
       (08, "Lawyer", 04, 190000);

       INSERT INTO employee (id, first_name, last_name, role_id,manager_id)
       VALUES (01, "Keyla", "Exclusa", 01,null),
              (02, "Priscilla", "Tavares", 02, 01),
              (03, "Nihan", "Lester", 08, 08),
              (04, "Arnulfo", "Valdez", 03, null),
              (05, "Charlotte", "Ortega", 04, 04),
              (06, "Julie", "Levesque", 05, null),
              (07, "Tiffaney", "Farley", 06, null),
              (08, "George", "Cherry", 07, null);
