const Intern = require('../library/Intern');

describe('Intern', () => {
  const school = 'UCF';
  const intern = new Intern('Joe', 3, 'email@email.com', school);

  it('Can set a school property', () => {
    expect(intern.school).toEqual(school);
  });
  it('Returns class name as its roll', () => {
    expect(intern.getRole()).toBe(intern.constructor.name);
  });
  it('Returns school when getDetail is called', () => {
    expect(intern.getDetail()).toBe(intern.school);
  });
  it('Returns icon name when getIcon is called', () => {
    const icon = 'user-graduate';
    expect(intern.getIcon()).toBe(icon);
  });
});
