#! /usr/bin/env node
const shell = require('shelljs');
const fs = require('fs');

const packageJson = require(fileName);

const setupTesting = (folderName) => {
  const fileName = '../package.json';

  packageJson.scripts.test = 'jest --detectOpenHandles --forceExit';
  packageJson.jest.verbose = true;


  shell.exec('npm i -D jest');

  fs.writeFile('../package.json', JSON.stringify(packageJson, null, 2), (err) => {
    if (err) return console.log(err);
  });
};

module.exports = setupTesting;
