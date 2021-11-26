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
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee']

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
                    .then((data => {
                        console.log(data.departmentName);

                        const sql = `INSERT INTO department (department_name)
                        VALUES
                        ("${data.departmentName}");`

                        db.query(sql, (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Added Department');
                            }
                        })
                    }))
            }

            // add Role
            if (answers.action === 'Add Role') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'roleName',
                        message: 'Role Name?'
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'Salary of Role?'
                    },
                    {
                        type: 'input',
                        name: 'departmentID',
                        message: 'Department ID?'
                    }
                ])
                    .then((data => {


                        const sql = `INSERT INTO role (title, salary, department_id)
                        VALUES
                        ("${data.roleName}", ${data.salary}, ${data.departmentID});`

                        db.query(sql, (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Added Role');
                            }
                        })
                    }))
            }

            // add Employee
            if (answers.action === 'Add Employee') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'firstName',
                        message: 'First Name?'
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: 'Last Name?'
                    },
                    {
                        type: 'input',
                        name: 'roleID',
                        message: 'Role ID?'
                    },
                    {
                        type: 'input',
                        name: 'managerID',
                        message: 'Manager id?'
                    }
                ])
                    .then((data => {


                        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                        VALUES
                        ("${data.firstName}", "${data.lastName}", ${data.roleID}, ${data.managerID});`

                        db.query(sql, (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Added Employee');
                            }
                        })
                    }))
            }
        })


}


// promptUser();

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