const Manager = require('../library/Manager');

describe('Manager', () => {
  const officeNum = 3440;
  const manager = new Manager('Joe', 3, 'email.email.com', officeNum);

  it('Can set an office property', () => {
    expect(manager.officeNum).toEqual(officeNum);
  });
  it('Returns class name as its roll', () => {
    expect(manager.getRole()).toBe(manager.constructor.name);
  });
  it('Returns office number when getDetail is called', () => {
    expect(manager.getDetail()).toBe(manager.officeNum);
  });
  it('Returns icon name when getIcon is called', () => {
    const icon = 'mug-hot';
    expect(manager.getIcon()).toBe(icon);
  });
});
