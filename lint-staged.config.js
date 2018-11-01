module.exports = {
  linters: {
    '**/*.+(js|json|less|css|ts|tsx|md|scss)': [
      'prettier',
      'jest --findRelatedTests',
      'git add',
    ],
  },
}