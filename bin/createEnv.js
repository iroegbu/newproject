#! /usr/bin/env node

const shell = require('shelljs');

const createEnv = (folderName) => {
  // create .env file

  shell.exec(`cd ${folderName} && touch .env && touch .env.sample`);
};

module.exports = createEnv;
