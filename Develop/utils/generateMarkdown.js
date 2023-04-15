// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
