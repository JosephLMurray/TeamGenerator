const { checkString, checkNum, checkEmail } = require('../library/validate');

describe('checkString', () => {
  it('Returns true if input is a number string', () => {
    expect(checkString('1')).toBe(true);
  });
  it('Returns true if input is a string', () => {
    expect(checkString('Joe')).toBe(true);
  });
  it('Returns false if an empty string is input', () => {
    expect(checkString('')).toBe('Please enter a valid answer.');
  });
});

describe('checkNum', () => {
  it('returns false if input is not a number', () => {
    expect(checkNum('Joe')).toBe('Please enter a valid answer.');
  });
  it('returns true if input is a number', () => {
    expect(checkNum(18)).toBe(true);
  });
  it('returns false if input is an empty string', () => {
    expect(checkNum('')).toBe('Please enter a valid answer.');
  });
});

describe('checkEmail', () => {
  it('returns false if input is an empty string', () => {
    expect(checkEmail('')).toBe('Please enter a valid answer.');
  });
  it('returns true if a valid email is input', () => {
    expect(checkEmail('email@email.com')).toBe(true);
  });
  it('returns false if there is no @ symbol', () => {
    expect(checkEmail('joe.com')).toBe('Please enter a valid answer.');
  });
  it('returns false if there is no top level domain', () => {
    expect(checkEmail('joe@joe')).toBe('Please enter a valid answer.');
  });
});
