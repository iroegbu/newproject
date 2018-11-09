#! /usr/bin/env node

const shell = require('shelljs');

const checkoutToNewBranch = (branchName) => {
  // create .env file

  shell.exec(`git checkout -b feature-${branchName}`);
};

module.exports = checkoutToNewBranch;
