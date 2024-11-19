// Function that returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return ''; //returns an empty string
  }

  //Constant for license badge images
   const badgeImage = {
    "MIT": "https://img.shields.io/badge/license-MIT-blue.svg",
    "GPLv2": "https://img.shields.io/badge/license-GPLv2-blue.svg",
    "GPLv3": "https://img.shields.io/badge/license-GPLv3-blue.svg",
    "Apache2.0": "https://img.shields.io/badge/license-Apache%202.0-blue.svg",
    "BSD3-Clause": "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg",
    "BSD2-Clasue": "https://img.shields.io/badge/license-BSD%202--Clause-blue.svg",
    "MPL2.0": "https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg",
    "CCO": "https://img.shields.io/badge/license-CC0%201.0-lightgrey.svg",
    "Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg",
   };

   //Return the correct badge or empty string
   return badgeImage[license] || badgeImage.Unlicense;
};

// Function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return ''; //returns an empty string
  };

  //Connects License selection to license links
  const licenseLinks = {
    'MIT': "https://opensource.org/licenses/MIT",
    "GPLv2": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "GPLv3": "https://www.gnu.org/licenses/gpl-3.0.en.html",
    "Apache2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "BSD3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "BSD2-Clasue": "https://opensource.org/license/bsd-2-clause",
    "MPL2.0": "https://www.mozilla.org/en-US/MPL/2.0/",
    "CCO": "https://creativecommons.org/public-domain/cc0/",
    "Unlicense": "https://choosealicense.com/licenses/unlicense/",
  };

  //return the correct link or empty string
  return licenseLinks[license];
};

// Function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return ''; //returns an empty string
  }

  //Constant to house license information
let licenseInfo = {
  "MIT": "A very permissive license that allows users to do almost anything with the code, including using it in proprietary software, as long as the original license and copyright notice are included.",
  
  "GPLv2": "A copyleft license that requires any modified versions of the code to also be open-sourced under the same GPL license.",
        
  "GPLv3": "A copyleft license that requires any modified versions of the code to also be open-sourced under the same GPL license.",
        
  "Apache2.0": "Allows users significant freedom but requires modifications to be documented and a notice of changes to be included. It also provides an express grant of patent rights from contributors to users.",
        
  "BSD3-Clause": "A permissive license similar to MIT, but it includes specific clauses to prevent misrepresentation of the code's origins. The 3-Clause version is most common and includes a “no endorsement” clause.",
        
  "BSD2-Clasue": "A permissive license similar to MIT, but it includes specific clauses to prevent misrepresentation of the code's origins.",
        
  "MPL2.0": "Allows code to be combined with proprietary files, but any changes to MPL-licensed code must stay open-source. It’s a middle ground between permissive and copyleft licenses.",
        
  "CCO": "Puts the code in the public domain, essentially waiving all copyright, allowing users to do whatever they like with the code without restrictions.",
        
  "Unlicense": "Another public domain-like license that dedicates the code to the public domain with no copyright, similar to CC0.",
};

  //Generates the section in README fo the license section
  return licenseInfo[license] || licenseInfo.Unlicense
};
  
  
// Function to generate markdown for README
function generateMarkdown(response) {

  return `# ${response.title}

  [![License: ${response.license}](${renderLicenseBadge(response.license)})](${renderLicenseLink(response.license)})


## Description
${response.description}

## Table of Contents
  * [Installation](#intsallation)
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
${renderLicenseSection(response.license)}
${renderLicenseLink(response.license)}

## Contributing
${response.contribution}

## Tests
${response.test}

## Questions
GitHub: [${response.github}](https://github.com/${response.github})
  
If you have additional questions about the application, please reach my by email at: [${response.email}](mailto:${response.email})
`;
}

export default generateMarkdown;
