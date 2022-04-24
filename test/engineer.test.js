const Engineer = require('../library/Engineer');

describe('Engineer', () => {
  it('Can set a github property', () => {
    const github = 'Joejoerabbit';
    const engineer = new Engineer('Joe', 3, 'email@email.com', github);

    expect(engineer.github).toEqual(github);
  });
  it('Returns class name as its roll', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe(engineer.constructor.name);
  });
  it('Returns github when getDetail is called', () => {
    const engineer = new Engineer('Joe', 3, 'email@email.com', 'Joejoerabbit');

    expect(engineer.getDetail()).toBe(engineer.github);
  });
});
