const Engineer = require('../library/Engineer');

describe('Engineer', () => {
  const github = 'Joejoerabbit';
  const engineer = new Engineer('Joe', 3, 'email@email.com', 'Joejoerabbit');

  it('Can set a github property', () => {
    expect(engineer.github).toEqual(github);
  });
  it('Returns class name as its roll', () => {
    expect(engineer.getRole()).toBe(engineer.constructor.name);
  });
  it('Returns github when getDetail is called', () => {
    expect(engineer.getDetail()).toBe(engineer.github);
  });
  it('Returns icon name when getIcon is called', () => {
    const icon = 'glasses';
    expect(engineer.getIcon()).toBe(icon);
  });
});
