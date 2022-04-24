class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return this.constructor.name;
  }

  getDetail() {
    let detail = '';
    switch (this.getRole()) {
      case 'Intern':
        detail = this.school;
        break;
      case 'Manager':
        detail = this.officeNum;
        break;
      case 'Engineer':
        detail = this.github;
        break;
    }
    return detail;
  }
}

module.exports = Employee;
