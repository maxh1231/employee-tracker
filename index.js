const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
const mysql = require('mysql2');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Chose an option:',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee']

        }
    ])



        .then((answers) => {
            console.log(answers);

            // View Departments
            if (answers.action === 'View Departments') {
                const sql = `SELECT * FROM department`;

                db.query(sql, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(data);
                    }
                }
                )
            }

            // View Roles
            if (answers.action === 'View Roles') {
                const sql = `SELECT * FROM role INNER JOIN department ON role.department_id = department.department_id`;

                db.query(sql, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(data);
                    }
                }
                )
            }

            // View Employees
            if (answers.action === 'View Employees') {
                const sql = `SELECT * FROM employee
                INNER JOIN role ON employee.role_id = role.role_id
                INNER JOIN department ON role.department_id = department.department_id;  `;

                db.query(sql, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.table(data);
                    }
                }
                )
            }


            // add Department
            if (answers.action === 'Add Department') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'departmentName',
                        message: 'Department Name?'
                    }
                ])
            }
        })


}


promptUser();

// const addDeparment = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'departmentName',
//             message: 'Department Name?'
//         }
//     ])
// }

// const initApp = data => {
//     promptUser();

//     if (data.action === 'Add Department') {
//         addDeparment();
//     }
// }

// initApp();