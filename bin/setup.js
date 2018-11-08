#! /usr/bin/env node

const shell = require('shelljs');
const fs = require('fs');
const program = require('commander');
const createEnv = require('./createEnv');
const createFolders = require('./createFolders');
const initNpm = require('./initNpm');
const setupEslint = require('./setupEslint');
const setupTesting = require('./setupTesting');


program
  .arguments('<projectName>')
  .action((projectName) => {
    createFolders(projectName);
    initNpm(projectName);
    createEnv(projectName);
    setupEslint(projectName);
    setupTesting(projectName);
  })
  .parse(process.argv);


// create package.json
shell.exec('npm init -y');

// install required dependencies
shell.exec('npm i dotenv grpc @grpc/proto-loader joi');

// create config, controllers, helpers, models and test folders
shell.exec('mkdir config && mkdir controllers && mkdir helpers && mkdir models && mkdir test');

// create .env file
shell.exec('touch .env');

// setup eslint

shell.exec('npm i -D eslint eslint-config-airbnb-base@latest eslint-plugin-import');

const eslintConfig = {
  extends: 'airbnb-base',
};


fs.writeFile('../eslintrc.json', JSON.stringify(eslintConfig, null, 2), (err) => {
  if (err) return console.log(err);
});

// setup jest for testing
const fileName = '../package.json';

const packageJson = require(fileName);

packageJson.scripts.test = 'jest --detectOpenHandles --forceExit';
packageJson.jest.verbose = true;

shell.exec('npm i -D jest');

fs.writeFileSync('../package.json', JSON.stringify(packageJson, null, 2), (err) => {
  if (err) return console.log(err);
});
