# newproject
A simple cli tool to generate boilerplate folder structure for new projects.

# Why Did I Create This Module?
After working on my first feature for Eyowo, I realized that I would have to go through the process of checking out of branches, creating files and folders, and installing dependencies for every new feature I was going to implement. This package is a way to automate the process.

# What does it do?
1. It checks out of the current branch into the branch you specify as feature name.

2. It creates a folder with the name you specified as the feature name.

3. It creates folders with the following names:

    - **config**: where to store configuration files
    - **controllers**: where to store controller functions
    - **helpers**: where to store helper functions
    - **models**: where to store database models
    - **test**: where your unit tests should be

4. It installs the following modules:

    - **eslint**: for linting
    - **jest**: for unit testing
    - **eslint-config-airbnb-base**: to make eslint use the airbnb standard for Javascript linting
    - **eslint-plugin-import**: to make eslint use the airbnb standard for Javascript linting
    - **grpc**: npm grpc module
    - **@grpc/proto-loader**: to load .proto files
    - **dotenv**: npm module to work with environment variables
    - **joi**: for function input validation
  
5. It creates a `.env` file for environment variables.

6. It creates a `.gitignore` file

# How To Use

1. run `npm install @bayoopesanya/newproject`.

2. run `npx newfeature <feature name>`.

3. run `cd <feature name>` and start coding!
