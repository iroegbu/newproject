#! /usr/bin/env node

const shell = require('shelljs');
const fs = require('fs');

const setupEslint = () => {
  shell.exec('npm i -D eslint eslint-config-airbnb-base@latest eslint-plugin-import');

  const eslintConfig = {
    extends: 'airbnb-base',
  };


  fs.writeFile('../eslintrc.json', JSON.stringify(eslintConfig, null, 2), (err) => {
    if (err) return console.log(err);
  });
};

module.exports = setupEslint;
