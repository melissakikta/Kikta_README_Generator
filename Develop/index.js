// Packages for application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input

const questions = [];

//constant for license badges (fix links)
const badgeImage = {
  "MIT": "https://img.shields.io/badge/license-MIT-blue.svg",
  "GPLv2": "https://img.shields.io/badge/license-GPLv2-blue.svg",
  "GPLv3": "https://img.shields.io/badge/license-GPLv3-blue.svg",
  "Apache20": "https://img.shields.io/badge/license-Apache%202.0-blue.svg",
  "BSD3Clause": "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg",
  "BSD2Clasue": "https://img.shields.io/badge/license-BSD%202--Clause-blue.svg",
  "MPL20": "https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg",
  "CCO": "https://img.shields.io/badge/license-CC0%201.0-lightgrey.svg",
  "Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg",
  };

//constant for license badge selection
let licenseBadge  
  if (response.license === 'MIT') {
    licenseBadge = badgeImage.MIT;
  } else if (response.license === 'GPLv2') {
    licenseBadge = badgeImage.GPLv2;
  } else if (response.license === 'GPLv3') {
    licenseBadge = badgeImage.GPLv3;
  } else if (response.license === 'Apache 2.0') {
    licenseBadge = badgeImage.Apache20;
  } else if (response.license === 'BSD 3-Clause') {
    licenseBadge = badgeImage.BSD3Clause;
  } else if (response.license === 'BSD 2-Clause') {
    licenseBadge = badgeImage.BSD2Clasue;
  } else if (response.license === 'MPL 2.0') {
    licenseBadge = badgeImage.MPL20;
  } else if (response.license === 'CCO') {
    licenseBadge = badgeImage.CCO;
  } else {
    licenseBadge = badgeImage.Unlicense;
  }; 
      
//constant to house license information
let licenseInfo = {
  "MIT": "A very permissive license that allows users to do almost anything with the code, including using it in proprietary software, as long as the original license and copyright notice are included.",
  
  "GPLv2": "A copyleft license that requires any modified versions of the code to also be open-sourced under the same GPL license.",
        
  "GPLv3": "A copyleft license that requires any modified versions of the code to also be open-sourced under the same GPL license.",
        
  "Apache20": "Allows users significant freedom but requires modifications to be documented and a notice of changes to be included. It also provides an express grant of patent rights from contributors to users.",
        
  "BSD3Clause": "A permissive license similar to MIT, but it includes specific clauses to prevent misrepresentation of the code's origins. The 3-Clause version is most common and includes a “no endorsement” clause.",
        
  "BSD2Clasue": "A permissive license similar to MIT, but it includes specific clauses to prevent misrepresentation of the code's origins.",
        
  "MPL20": "Allows code to be combined with proprietary files, but any changes to MPL-licensed code must stay open-source. It’s a middle ground between permissive and copyleft licenses.",
        
  "CCO": "Puts the code in the public domain, essentially waiving all copyright, allowing users to do whatever they like with the code without restrictions.",
        
  "Unlicense": "Another public domain-like license that dedicates the code to the public domain with no copyright, similar to CC0.",
}

//constant for license notice selection
const licenseNotice = 
  if (response.license === 'MIT') {
    licenseNotice = licenseInfo.MIT;
  } else if (response.license === 'GPLv2') {
    licenseNotice = licenseInfo.GPLv2;
  } else if (response.license === 'GPLv3') {
    licenseNotice = licenseInfo.GPLv3;
  } else if (response.license === 'Apache 2.0') { //Apache 2.0 vs Apache20 in const badge?
    licenseNotice = licenseInfo.Apache20;
  } else if (response.license === 'BSD 3-Clause') {
    licenseNotice = licenseInfo.BSD3Clause;
  } else if (response.license === 'BSD 2-Clause') {
    licenseNotice = licenseInfo.BSD2Clasue;
  } else if (response.license === 'MPL 2.0') {
    licenseNotice = licenseInfo.MPL20;
  } else if (response.license === 'CCO') {
    licenseNotice = licenseInfo.CCO;
  } else {
    licenseNotice = licenseInfo.Unlicense;
  } 

//Function to generate README content
function generateREADME(response) {
  return `# ${response.title} 
    ${licenseBadge}

    ## Description 
    ${response.description}

    ## Tables of Contents
      * [Installation](#introduction)
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)

    ## Installation
    ${response.installation}

    ## Usage
    ${response.usage}

    ## License
    ${licenseNotice}

    ## Contributing
    ${response.contribution}

    ## Tests
    ${response.test}

    ## Questions
    GitHub: [${response.github}] (https://github.com/${response.github})
      
    If you have additional questions about the application, please reach my by email at: [${response.email}] (mailto: ${response.email})
    `
  };


// TODO: Create a function to write README file
//Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`Successfully wrote to ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app (24_Basic_Inquirer)
function init() {
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

  .then((answers) => {
    const readmeContent = generateREADME(answers); 
    writeToFile(`${response.title.toLowerCase().split(' ').join('')}.md`, readmeContent);
    console.log(`I created a README with the title ${response.title.toLowerCase().split(' ').join('')}.md`);
  })
  .catch((error) => {
    console.error('Error with Inquirer prompts:', error);
  });
  }


// Function call to initialize app
init();
