#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const createGitignore = (folderName) => {
 
  const destinationDirectory = path.join(process.cwd(), `${folderName}`);

  shell.exec(`cd ${destinationDirectory} && curl -o .gitignore https://raw.githubusercontent.com/OpesanyaAdebayo/newproject/master/.gitignore`);
}

module.exports = createGitignore;

