const fs = require('fs');
const { checkString, checkNum, checkEmail } = require('./library/validate');
const inquirer = require('inquirer');
const Employee = require('./library/Employee');
const Manager = require('./library/Manager');
const Intern = require('./library/Intern');
const Engineer = require('./library/Engineer');

const collectInputs = async (inputs = []) => {
  const prompts = [
    {
      type: 'list',
      name: 'employeeType',
      message: 'What kind of employee would you like to add?',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
      validate: checkString,
      filter: (input) => {
        return input.trim();
      }
    },
    {
      type: 'input',
      name: 'employeeID',
      message: "What is the employee's ID number?",
      validate: checkNum,
      filter: (input) => {
        return isNaN(input) || input === '' ? '' : parseInt(input, 10);
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
      validate: checkEmail,
      filter: (input) => {
        return input.trim();
      }
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'What is their office number?',
      validate: checkNum,
      filter: (input) => {
        return isNaN(input) || input === '' ? '' : parseInt(input, 10);
      },
      when(answers) {
        return answers.employeeType === 'Manager';
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do they attend?',
      validate: checkString,
      filter: (input) => {
        return input.trim();
      },
      when(answers) {
        return answers.employeeType === 'Intern';
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is their GitHub user name?',
      validate: checkString,
      filter: (input) => {
        return input.trim();
      },
      when(answers) {
        return answers.employeeType === 'Engineer';
      }
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another employee? ',
      default: true
    }
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);

  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
  const inputs = await collectInputs();
  console.log(inputs);
};

main();
