// Packages for application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt([
      {//title prompt
        type: 'input',
        message: 'What is the title of your project.',
        name: 'title',
      },
      
      {//description prompt
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
      },

      {//installation instruction prompt
        type: 'input',
        message: 'Please provide instructions for installation.',
        name: 'installation',
      },

      {//usage information prompt
        type: 'input',
        message: 'Please provide information for how this project can be used.',
        name: 'usage',
      },
      
      {//contribution guidelines prompt
        type: 'input',
        message: 'Please provide guidelines for contributions.',
        name: 'contribution',
      },
      
      {//test instructions prompt
        type: 'input',
        message: 'Please provide instructions for testing.',
        name: 'test',
      },

      {//license prompt
        type: 'list',
        message: 'Please select a License.',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'MPL 2.0', 'CCO', 'Unlicense']
      },
      
      {//GitHub prompt
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'github',
      },

      {//email prompt
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
      },

    ])

    .then((response) => {
      const filename = `${response.title.toLowerCase().split(' ').join('')}.md`;

      //constant for license badges (fix links)
      let badgeImage = {
        "MIT": https://img.shields.io/badge/license-MIT-blue.svg
        "GPLv2": https://img.shields.io/badge/license-GPLv2-blue.svg
        "GPLv3": https://img.shields.io/badge/license-GPLv3-blue.svg
        "Apache20": https://img.shields.io/badge/license-Apache%202.0-blue.svg
        "BSD3Clause": https://img.shields.io/badge/license-BSD%203--Clause-blue.svg
        "BSD2Clasue": https://img.shields.io/badge/license-BSD%202--Clause-blue.svg
        "MPL20": https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg
        "CCO": https://img.shields.io/badge/license-CC0%201.0-lightgrey.svg
        "Unlicense": https://img.shields.io/badge/license-Unlicense-blue.svg
      }

      const licenseBadge = 
      if (response.license === 'MIT') {
        badgeImage = "MIT";
      } else if (response.license === 'GPLv2') {
        badgeImage = "GPLv2";
      } else if (response.license === 'GPLv3') {
        badgeImage = "GPLv3";
      } else if (response.license === 'Apache 2.0') {
        badgeImage = "Apache20";
      } else if (response.license === 'BSD 3-Clause') {
        badgeImage = "BSD3Clause";
      } else if (response.license === 'BSD 2-Clause') {
        badgeImage = "BSD2Clasue";
      } else if (response.license === 'MPL 2.0') {
        badgeImage = "MPL20";
      } else if (response.license === 'CCO') {
        badgeImage = "CCO"
      } else {
        badgeImage = "Unlicense";
      } 
      
      //constant for license notice
      const licenseNotice = 
      //layout of the README page
      const data = `
      # ${response.title} 

      licenseBadge

      ## Description 
      ${response.description}

      ## Tables of Contents
      * [Installation] (#introduction)
      * [Usage] (#usage)
      * [License] (#license)
      * [Contributing] (#contributing)
      * [Tests] (#tests)
      * [Questions] (#questions)

      ## Installation
      ${response.installation}

      ## Usage
      ${response.usage}

      ## License
      licenseNotice

      ## Contributing
      ${response.contribution}

      ## Tests
      ${response.test}

      ## Questions
      GitHub: [${response.github}] (https://github.com/${response.github})
      
      If you have additional questions about the application, please reach my by email at: [${response.email}] (mailto:${response.email})
      `
    })
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
