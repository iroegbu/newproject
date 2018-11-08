#! /usr/bin/env node
const program = require('commander');

program
  .arguments('<projectName>')
  .action((projectName) => {
    console.log(projectName);
  })
  .parse(process.argv);
