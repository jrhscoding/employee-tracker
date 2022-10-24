const connection = require('../connection');

// class that holds the methods for inquirer
class database {
    constructor(connection) {
        this.connection = connection;
    };

    findAllDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name AS department FROM department;");
    };

    findAllRoles() {
        return this.connection.promise().query("SELECT role.id, role.title AS job_title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;");
    };

    findAllEmployees() {
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    };

    findAllManagers(employeeId) {
        return this.connection.promise().query("SELECT id, first_name, last_name FROM employee WHERE id != ?", employeeId);
    };

};

module.exports = new database(connection);