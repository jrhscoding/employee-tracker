const inquirer = require('inquirer');
const connection = require('./connection');
require('console.table');

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