// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return ''; //returns an empty string
  }

  //Map license names to badge links
   const badges = {
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

   //Return the correct badge or empty string
   return badges[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return ''; //returns an empty string
  };

  //Map license names to their links
  const licenseLinks = {
    'MIT': "https://opensource.org/licenses/MIT",
    "GPLv2": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "GPLv3": "https://www.gnu.org/licenses/gpl-3.0.en.html",
    "Apache20": "https://www.apache.org/licenses/LICENSE-2.0",
    "BSD3Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "BSD2Clasue": "https://opensource.org/license/bsd-2-clause",
    "MPL20": "https://www.mozilla.org/en-US/MPL/2.0/",
    "CCO": "https://creativecommons.org/public-domain/cc0/",
    "Unlicense": "https://choosealicense.com/licenses/unlicense/",
  };

  //return the correct link or empty string
  return licenseLinks(license) || '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license ===) {
    return ''; //returns an empty string
  }

  //Generaters the section in README fo the license section
  return `## License
  
  This project is licensed under the [${license}] (#) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ${renderLicenseBadge(response.license)}

  ## Description
  ${response.description}

  ## Table of Contents
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
    ${licenseNotice}

    ## Contributing
    ${response.contribution}

    ## Tests
    ${response.test}

    ## Questions
    GitHub: [${response.github}] (https://github.com/${response.github})
      
    If you have additional questions about the application, please reach my by email at: [${response.email}] (mailto:${response.email})
`;
}

export default generateMarkdown;
