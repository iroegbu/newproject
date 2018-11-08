#! /usr/bin/env node

const shell = require('shelljs');

const createEnv = (folderName) => {
  // create .env file

  shell.exec(`cd ${folderName} && touch .env`);
};

module.exports = createEnv;
