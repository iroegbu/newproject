#! /usr/bin/env node

const shell = require('shelljs');

const createFolders = (folderName) => {
  // create config, controllers, helpers, models and test folders
  shell.exec(`mkdir ${folderName} && cd ${folderName} && mkdir config && mkdir controllerrs && mkdir helpers && mkdir models && mkdir test`);
};

module.exports = createFolders;
