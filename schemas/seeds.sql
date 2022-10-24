USE store_db;

INSERT INTO department (name) 
VALUES 
('Sales'),
('Finance'),
('Human Resources'),
('Operations');

INSERT INTO role (title, salary, department_id) 
VALUES
('Sales Rep', 45000, 1),
('Account Specialist', 90000, 2),
('HR Rep', 100000, 3),
('Operations Manager', 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Joe', 'Apple', 2, 2),
('Chuck', 'Roast', 1, NULL),
('Kate', 'Yperry', 4, 4),
('Richard', 'Johnson', 3, NULL);