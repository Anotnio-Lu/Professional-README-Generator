// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const readmeFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: 'README file name? (Required) REMEMBER to enter ".md" after the file name.',
        validate: fileName => {
            if (fileName) {
            return true;
            } else {
            console.log('Please enter your README file name.');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the project description.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are the installation instructions? NOTE: The next prompt is where you write the bash code.(Required) ',
        validate: installationInstructionsInput => {
          if (installationInstructionsInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'bashInput',
        message: 'What is the Bash code to install? (NOTE: use "," for line break)',
        validate: bashInput => {
          if (bashInput) {
            return true;
          } else {
            console.log('Please enter the Bash code to install.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the usage information? (Required)',
        validate: usageInformationInput => {
          if (usageInformationInput) {
            return true;
          } else {
            console.log('Please enter the usage information.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributionGuideline',
        message: 'What are the contribution guidelines? (Required)',
        validate: contributionGuidelineInput => {
          if (contributionGuidelineInput) {
            return true;
          } else {
            console.log('Please enter the contribution guidelines.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions? (Required)',
        validate: testInstructionsInput => {
          if (testInstructionsInput) {
            return true;
          } else {
            console.log('Please enter test instructions.');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license will you be using for this project? (Use arrow key to select)',
        choices:['MIT', 'Apache_2', 'Boost_Software_License_1', 'GNU_GPL_v3', 'NO_LICENSE'],
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username? (Required)',
        validate: gitHubUsernameInput => {
          if (gitHubUsernameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email.');
            return false;
          }
        }
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, error => {
      if (error) {
        console.log('Sorry there was an error : ' + error);
      } else {
        console.log('Success: new README.md file generated. \nImportant note: The README file will override the last README file created if you dont enter a new file name.');
      }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((response) => {
      console.log('Thank you! Processing your README file: ', response)

      const readme = readmeFile.generateMarkdown(response)
      writeToFile(response.fileName, readme)

    })
    .catch((error) => {
      console.log(error)
    })
}

// Function call to initialize app
init();
