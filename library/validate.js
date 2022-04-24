const checkName = (userName) => {
  return typeof userName === 'string' && userName !== '';
};

module.exports = {
  checkName
};
