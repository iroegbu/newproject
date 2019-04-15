#! /usr/bin/env node

const shell = require('shelljs');

const createFolders = (folderName) => {
  // create config, controllers, helpers, models, tests and repositories folders
  shell.exec(`mkdir ${folderName} && cd ${folderName} && mkdir config && mkdir controllers && mkdir helpers && mkdir models && mkdir tests && mkdir repositories`);
};

module.exports = createFolders;
