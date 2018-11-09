#! /usr/bin/env node

const shell = require('shelljs');
const fs = require('fs');
const program = require('commander');
const checkoutToNewBranch = require('./checkout');
const createEnv = require('./createEnv');
const createFolders = require('./createFolders');
const initNpm = require('./initNpm');
const setupEslint = require('./setupEslint');
const setupTesting = require('./setupTesting');
const createGitignore = require('./createGitignore');

program
  .arguments('<projectName>')
  .action((projectName) => {
    checkoutToNewBranch(projectName);
    createFolders(projectName);
    initNpm(projectName);
    createEnv(projectName);
    createGitignore(projectName);
    setupEslint(projectName);
    setupTesting(projectName);
  })
  .parse(process.argv);
