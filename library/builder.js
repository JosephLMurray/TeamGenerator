const fs = require('fs');

const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');

const headerBlock = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <title>Team Info</title>
  </head>
  <body class="min-vh-100 vw-100">
    <header
      class="jumbotron text-center text-white jumbotron-fluid bg-danger mx-0"
    >
      <h1>My Team</h1>
    </header>`;

const footerBlock = `  </body>
</html>`;

const cardBuilder = (data) => {
  let middleSection = `    <main class="container container-fluid">
      <div class="flex flex-wrap row">
        <div class="col-12">
          <div class="card-deck justify-content-center">`;
  data.forEach((employee) => {
    // eslint-disable-next-line no-nested-ternary
    const _employee = employee.officeNum
      ? new Manager(
          employee.name,
          employee.id,
          employee.email,
          employee.officeNum
        )
      : employee.github
      ? new Engineer(
          employee.name,
          employee.id,
          employee.email,
          employee.github
        )
      : new Intern(employee.name, employee.id, employee.email, employee.school);
    middleSection += `           <div
              class="card my-3"
              style="min-width: 18rem; width: 18rem; max-width: 18rem"
            >
              <div class="card-header text-white bg-primary">
                <h3 class="card-title font-weight-bold">${_employee.name}</h3>
                <h3 class="card-title font-weight-bold">
                  <i class="fa-solid fa-${_employee.getIcon()}"></i> ${_employee.getRole()}
                </h3>
              </div>
              <div class="card-body">
                <div class="card-text">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${_employee.id}</li>
                    <li class="list-group-item">
                      email: <a href="mailto:${
                        _employee.email
                      }" class="card-link">${_employee.email}</a>
                    </li>
                    <li class="list-group-item">
                    ${
                      _employee.getRole() === 'Manager'
                        ? 'Office: ' + _employee.officeNum
                        : _employee.getRole() === 'Engineer'
                        ? 'GitHub: <a href="https://github.com/' +
                          _employee.github +
                          '" class="card-link" target="_blank">' +
                          _employee.github +
                          '</a>'
                        : 'School: ' + _employee.school
                    }
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
  });
  return middleSection;
};

const fullBuilder = (data) => {
  let fullBuild = headerBlock;
  fullBuild += cardBuilder(data);
  fullBuild += footerBlock;
  fs.writeFile('./dist/teams.html', fullBuild, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
};

module.exports = fullBuilder;
