INSERT INTO department (department_id, name)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

INSERT INTO role (role_id, title, salary, department_id)
VALUES
(1, 'Salesperson', 80000, 1),
(2, 'Engineer', 100000, 2),
(3, 'Accountant', 100000, 3),
(4, 'Lawyer', 120000, 4);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Mike', 'Chan', 1, 1),
(2, 'Ashley', 'Rodriguez', 2, 2),
(3, 'Malia', 'Brown', 3, 3),
(4, 'Tom', 'Allen', 4, 4);

