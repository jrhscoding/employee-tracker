const inquirer = require('inquirer');
const database = require('./schemas');
require('console.table');

const originalPrompts = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Please select an option?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Delete a department',
                    'Add a role',
                    'Delete a role',
                    'Add an employee',
                    'Delete an employee',
                    "Update an employee's role",
                    "Update an employee's manager",
                    'Quit'
                ]
            }
        ])
        .then(res => {
            let choice = res.choice;
            // call function depending on user choice
            switch (choice) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
            }
        });
};

const viewAllDepartments = () => {
    database.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.table(departments);
        })
        .then(() => originalPrompts());
};

const viewAllRoles = () => {
    database.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        })
        .then(() => originalPrompts());
};

const viewAllEmployees = () => {
    database.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees);
        })
        .then(() => originalPrompts());
};

originalPrompts();