const { checkName, checkID } = require('../library/validate');

describe('checkName', () => {
  it('Returns false if input is not a string', () => {
    expect(checkName(1)).toBe(false);
  });
  it('Returns true if input is a string', () => {
    expect(checkName('Joe')).toBe(true);
  });
  it('Returns false if an empty string is input', () => {
    expect(checkName('')).toBe(false);
  });
});

describe('checkID', () => {
  it('returns false if input is not a number', () => {
    expect(checkID('Joe')).toBe(false);
  });
});
