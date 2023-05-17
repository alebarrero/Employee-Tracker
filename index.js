require('console.table');
const inquirer = require('inquirer');
const db = require('./connection');

const questions = async () => {
    await inquirer.prompt(
        {
            name:'menu',
            type:'list',
            message:'Main Menu',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role', 
                'Exit'
            ], 
        }
    )

    .then(function(choice)
    {
      switch(choice.menu){
        case 'View All Departments':
        allDepartments();
        break;
        case 'View All Roles':
        allRoles();
        break;
        case 'View All Employees':
        allEmployees();
        break;
        case 'Add Department':
        addDepartment();
        break;
        case 'Add Role':
        addRole();
        break
        case 'Add Employee':
        addEmployee ();
        break;
        case 'Update Employee Role':
        updateEmployee();
        break;
        case 'Exit':
        process.exit();
      }  
    })
};

function allDepartments () {
    db.query('Select * from department', (err,res) => {
        if (err) throw (err);
        console.table(res);
    })
};

function allRoles () {
    db.query('Select * from role', (err,res) => {
        if(err) throw (err); 
        console.table(res);
    })
};

function allEmployees() {
    db.query('Select employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id From employee Left Join role On employee.role_id = role.id Left Join department On role.department_id = department.id', (err,res) => {
        if(err) throw (err);
        console.table(res);
    }
    )};

    const addDepartment = async () => {
        await inquirer.prompt (
            {
                type: 'input',
                name: 'newDepartment',
                message: 'Name of new Department?'
            }
        )

        .then(function(deptName){
            db.query('Insert into department (name) VALUES (?)', [deptName.newDept], (err, res) => {
                if (err) throw(err);
                console.table(res);
            })
        })
    };

    const addRole = async () => {
        await inquirer.prompt ([
            {
                type:'input',
                name:'newRole',
                message:'Name of new Role?'
            },
            {
                type:'input',
                name:'newsalary',
                message: 'Salary of new role?'
            },
            {
                type:'inpupt',
                name: 'deptNewRole',
                message:'Department of new role?'
            }
        ])
        .then(function(roleName){
            db.query('INSERT INTO role (title, salary, department_id VALUES (?,?,?)', [roleName.newRole, roleName.newSalary, roleName.newRoleDept, (err, res)=> {
                if (err) throw(err);
                console.table(res);
            }])
        })
    }


        async function init() {
            await questions();
    }
    init();