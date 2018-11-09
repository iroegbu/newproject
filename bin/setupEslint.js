#! /usr/bin/env node

const shell = require('shelljs');
const fs = require('fs');

const setupEslint = (folderName) => {
  shell.exec(`cd ${folderName} && npm i -D eslint eslint-config-airbnb-base@latest eslint-plugin-import`);

  const eslintConfig = {
    extends: 'airbnb-base',
  };
  fs.writeFile(`${folderName}/eslintrc.json`, JSON.stringify(eslintConfig, null, 2), (err) => {
    if (err) return console.log(err);
  });
};

module.exports = setupEslint;
