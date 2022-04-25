const inquirer = require('inquirer');

const fullBuilder = require('./library/builder');
const { checkString, checkNum, checkEmail } = require('./library/validate');

const managerPrompts = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Manager's name?",
    validate: checkString,
    filter: (input) => {
      return input.trim();
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's ID number?",
    validate: checkNum,
    filter: (input) => {
      return isNaN(input) || input === '' ? '' : parseInt(input, 10);
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the Manager's email address?",
    validate: checkEmail,
    filter: (input) => {
      return input.trim();
    }
  },
  {
    type: 'input',
    name: 'officeNum',
    message: "What is the Manager's office number?",
    validate: checkNum,
    filter: (input) => {
      return isNaN(input) || input === '' ? '' : parseInt(input, 10);
    }
  }
];

const collectInputs = async (inputs = []) => {
  const employeePrompts = [
    {
      type: 'list',
      name: 'userChoice',
      message: 'What would you like to do?',
      choices: ['Add an Engineer', 'Add an Intern', "I'm done"]
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the Employee's name?",
      validate: checkString,
      filter: (input) => {
        return input.trim();
      },
      when(answers) {
        return (
          answers.userChoice === 'Add an Engineer' ||
          answers.userChoice === 'Add an Intern'
        );
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the Employee's ID number?",
      validate: checkNum,
      filter: (input) => {
        return isNaN(input) || input === '' ? '' : parseInt(input, 10);
      },
      when(answers) {
        return (
          answers.userChoice === 'Add an Engineer' ||
          answers.userChoice === 'Add an Intern'
        );
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the Employee's email address?",
      validate: checkEmail,
      filter: (input) => {
        return input.trim();
      },
      when(answers) {
        return (
          answers.userChoice === 'Add an Engineer' ||
          answers.userChoice === 'Add an Intern'
        );
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
        return answers.userChoice === 'Add an Intern';
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
        return answers.userChoice === 'Add an Engineer';
      }
    }
  ];
  const { userChoice, ...answers } = await inquirer.prompt(employeePrompts);
  const newInputs =
    JSON.stringify(answers) === '{}' ? inputs : [...inputs, answers];

  return userChoice === "I'm done" ? newInputs : collectInputs(newInputs);
};

const main = () => {
  inquirer
    .prompt(managerPrompts)
    .then((results) => {
      return collectInputs([results]);
    })
    .then((data) => {
      fullBuilder(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

main();
