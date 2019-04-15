#! /usr/bin/env node

const shell = require('shelljs');

const intializeNpm = (folderName) => {
// create package.json
  shell.exec(`cd ${folderName} && npm init -y`);

  // install required dependencies
  shell.exec(`cd ${folderName} && npm i dotenv express joi`);
};

module.exports = intializeNpm;
