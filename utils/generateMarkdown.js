// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// this functions reads what type of lincense the user wants and returns the correct badge
function renderLicenseSection(data) {
  const licenseBadge= data.license;
  let pushBadge=' ';
  if(licenseBadge === 'MIT'){
    pushBadge=`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if(licenseBadge === 'APACHE 2.0'){
    pushBadge=`![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if(licenseBadge==='GPL 3.0'){
    pushBadge=`![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  return pushBadge
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data)}
## Description
  ${data.description}
## Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Tests](#tests)
-[Contact](#contact)

## Installation
  ${data.installation}
## Usage
  ${data.usage}
## Contribution
  ${data.contribution}
## Tests
  ${data.tests}
## Contact
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;

