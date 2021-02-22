const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    // preset: 'ts-jest',
    // transform: {
    //   '^.+\\.tsx?$': 'babel-jest',
    // },
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    }
};

