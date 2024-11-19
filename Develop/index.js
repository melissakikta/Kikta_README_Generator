// Packages for application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

//Array of questions for user input
const questions = [
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
    choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache2.0', 'BSD3-Clause', 'BSD2-Clause', 'MPL2.0', 'CCO', 'Unlicense']
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
];

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

// Function to initialize app 
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); 
      writeToFile(`${answers.title.toLowerCase().split(' ').join('')}.md`, readmeContent);
      console.log(`I created a README with the title ${answers.title.toLowerCase().split(' ').join('')}.md`);
    })
    .catch((error) => {
      console.error('Error with Inquirer prompts:', error);
    });
}
  
// Function call to initialize app
init();
