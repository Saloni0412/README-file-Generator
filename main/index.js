const fs = require("fs");
const inquirer = require('inquirer');



    inquirer.prompt([
        {
          type: 'input',
          message: 'What is the project title?',
          name: "title",
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Write the description for the project',
          name: "description",
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Write installation instruction for the project',
          name: "installation",
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Write usage information for the project',
          name: "usage",
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Write contribution guideline for the project',
          name: "contribution",
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Write test instruction for the project',
          name: "instructions",
          validate: validateAnswer,
        },
        {        
          type: 'list',
          message: 'Select the license used for the project',
          name: 'license',
          choices: ['MIT', 'ISC', 'The Unlicense', 'Apache License'],
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Enter your Github username',
          name: "username",
          validate: validateAnswer,
        },
        {
          type: 'input',
          message: 'Enter your email address.',
          name: "email",
          validate: validateAnswer,
        },
      ])
      .then((data) => {
        const { title, description, installation, usage, contribution, instructions, username, email, license } = data;
        const template = `
      # ${title} 
      
      ![${license} License](https://img.shields.io/badge/license-${license}-red)

      ## Table of content
      
      * [Description](#description)
      * [Installation](#installation)
      * [Usage](#usage)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [License](#license)
      * [Questions](#questions)
      
      ## Description
      
      ${description}
      
      ## Installation
      
      ${installation}
      
      ## Usage
      
      ${usage}
      
      ## Contributing
      
      ${contribution}
      
      ## Tests
      
      ${instructions}
      
      ## License
      
      ![${license} license - click on the license to get more infor about it](https://opensource.org/licenses/${license})

      ## Questions
      
      If you have any questions about the repo, please contact me at ${email}. You can find more of my work at [${username}](https://github.com/${username}/).
      `.trim();
        createNewFile(template);
      });
      

    
      
  
  
  
  