// TODO: Include packages needed for this application
const fs=require('fs');
const inquirer=require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const generateMarkdown=require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type:'input',
        name:'title',
        message:'What is your title?',
    },
    {
        type:'input',
        name:'description',
        message:'Describe your project',
    },
    {
        type:'input',
        name: 'installation',
        message:'Enter installation instructions?'
    },
    {
        type:'input',
        name:'usage',
        message:'Enter usage information',
    },
    {
        type:'input',
        name:'contribution',
        message:'Enter contribution guidelines',
    },
    {
        type:'input',
        name:'tests',
        message:'Enter test intructions',
    },
    {
        type:'list',
        name:'license',
        message:'Choose lincense',
        choices:['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
    },
    {
        type:'input',
        name:'username',
        message:'Enter GitHub username',
    },
    {
        type:'input',
        name:'email',
        message:'Enter email',
    },
])
.then((data)=>{
    fs.writeFile('README.md', generateMarkdown(data), (err)=> 
        err? console.log(err) : console.log('Generating README')
    );
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
