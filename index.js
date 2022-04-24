const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./library/Employee');
const Manager = require('./library/Manager');
const Intern = require('./library/Intern');
const Engineer = require('./library/Engineer');

const collectInputs = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'inputValue',
      message: 'Enter some input: '
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Enter another Employee? ',
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
