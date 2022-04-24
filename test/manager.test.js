const Manager = require('../library/Manager');

describe('Manager', () => {
  it('Can set an office property', () => {
    const officeNum = 24;
    const manager = new Manager('Joe', 3, 'email@email.com', officeNum);

    expect(manager.officeNum).toEqual(officeNum);
  });
  it('Returns class name as its roll', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe(manager.constructor.name);
  });
  it('Returns office number when getDetail is called', () => {
    const manager = new Manager('Joe', 3, 'email.email.com', 3440);

    expect(manager.getDetail()).toBe(manager.officeNum);
  });
});
