#! /usr/bin/env node
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const setupTesting = (folderName) => {
  // const fileName = `${folderName}/package.json`;
  const fileName = path.join(process.cwd(), `${folderName}/package.json`);
  const packageJson = require(fileName);

  packageJson.scripts.test = 'jest --detectOpenHandles --forceExit';
  packageJson.jest = {verbose: true};
  
  shell.exec(`cd ${folderName} && npm i -D jest`);

  fs.writeFile(fileName, JSON.stringify(packageJson, null, 2), (err) => {
    if (err) return console.log('here', err);
  });
};

module.exports = setupTesting;
