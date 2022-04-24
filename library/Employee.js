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

  getIcon() {
    let icon = '';
    switch (this.getRole()) {
      case 'Intern':
        icon = 'user-graduate';
        break;
      case 'Manager':
        icon = 'mug-hot';
        break;
      case 'Engineer':
        icon = 'glasses';
        break;
    }
    return icon;
  }
}

module.exports = Employee;
