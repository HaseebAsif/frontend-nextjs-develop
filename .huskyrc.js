module.exports = {
  hooks: {
    'pre-push':
      'npm-run-all eslint:report prettier:report stylelint:report typescript:report'
  }
};
