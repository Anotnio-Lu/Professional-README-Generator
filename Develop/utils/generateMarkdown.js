// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const bagdes = {
    MIT: ' [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    Apache_2 : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    Boost_Software_License_1: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 
    GNU_GPL_v3: ' [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
  }
  return bagdes[input]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: 'https://choosealicense.com/licenses/mit/', 
    Apache_2: 'https://choosealicense.com/licenses/apache-2.0/', 
    Boost_Software_License_1: 'https://choosealicense.com/licenses/bsl-1.0/', 
    GNU_GPL_v3: 'https://choosealicense.com/licenses/gpl-3.0/', 
  }
  return links[input]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `
# ${input.title}

${licenseBadge(input.license)}

## Table of Content

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${input.description}

## Installation
The below are the installation instructions.<br>
${input.installationInstructions}

### Bash Code
${codeBlock(input.bashInput)}


## Usage
${input.usageInformation}

## Contributing
The below is information on how to contribute to the project.<br>
${input.contributionGuideline}

## Tests
The below is the instructions to test the project<br>
${input.testInstructions}

## License

This Project is using the<br>
${input.license}

For more information, please click on the below link:<br>
${licenseInfo(input.license)}

## Questions

You can checkout my other project in my Git Hub repository:<br>
${input.gitHubUsername}

If you would like to get in contact with me or ask me questions, please do not hasitate to email me.<br>
${input.email}
`;
}

module.exports = generateMarkdown;
