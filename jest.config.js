const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    // preset: 'ts-jest',
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
};

