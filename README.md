# Professional README Generator

This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application is designed to quickly and easily generate a high-quality README file for open source projects on GitHub. The README file includes important information about the app, such as its purpose, how to use it, how to install it, how to report issues, and how to make contributions.

### Bash Code
The below is the bash code to install the needed packages:
```
    npm install
    npm i inquirer@8.2.4
```

## User Story
- AS A developer
- I WANT a README generator
- SO THAT I can quickly create a professional README for a new project


## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for information about my application repository
- THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, - Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
- THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
- THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
- THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
- THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
- THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
- THEN I am taken to the corresponding section of the README


## Approach
The project was approached by first identifying the requirements and objectives of the application, and then designing a plan to meet those requirements. The Inquirer package was selected for the command-line application as it simplifies user input and generates a dynamic output for the README file. The project was built using JavaScript programming language and Node.js runtime environment.


## Completed tasks
- Researched and identified the requirements and objectives of the application
- Designed the plan to meet those requirements using Inquirer package
- Developed the application using JavaScript programming language and Node.js runtime environment
- Tested the application for functionality and usability
- Documented the process of developing the application
- Submitted the completed project for review and feedback

## Conclusion
This application simplifies the process of generating a high-quality README file for open source projects on GitHub. By using the Inquirer package, users can quickly input the necessary information for the README, allowing project creators to spend more time on the actual project development. The application is user-friendly and meets all the acceptance criteria, making it an effective tool for developers.

## Sample READEME file

https://github.com/Anotnio-Lu/Professional-README-Generator/blob/main/Develop/README-sample.md

## Link

The below is a link to the walkthrough video: 
https://www.loom.com/share/b25b51722c3446a2803ea8e59e8ede49 


## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License.
