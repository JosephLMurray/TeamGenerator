const Employee = require('../library/Employee');

describe('Employee', () => {
  it('Creates an object', () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
  });
  it('Can set a name property', () => {
    const name = 'Joe';
    const employee = new Employee(name);

    expect(employee.name).toEqual(name);
  });
  it('Can set an id property', () => {
    const id = '100';
    const employee = new Employee('Joe', id);

    expect(employee.id).toEqual(id);
  });
  it('Can set an email property', () => {
    const email = 'joe@joemail.com';
    const employee = new Employee('Joe', '1', email);

    expect(employee.email).toEqual(email);
  });
});
