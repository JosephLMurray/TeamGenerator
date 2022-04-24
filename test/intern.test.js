const Intern = require('../library/Intern');

describe('Intern', () => {
  it('Can set a school property', () => {
    const school = 'UCF';
    const intern = new Intern('Joe', 3, 'email@email.com', school);

    expect(intern.school).toEqual(school);
  });
  it('Returns class name as its roll', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe(intern.constructor.name);
  });
});
