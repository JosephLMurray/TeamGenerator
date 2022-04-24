const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getRole() {
    return this.constructor.name;
  }
}
module.exports = Manager;
