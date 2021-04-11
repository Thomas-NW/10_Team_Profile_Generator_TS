const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const util = require('util');
const path = require('path');  // I could not figure out how to generate a path for saving the README file. I hard coded the location, but would have prefered a promt to ask the user to select a storage location. Any help you can provide is appreciated....

// const writeFileAsync = util.promisify(fs.writeFile);    // util.promisify(fs.writeFile): error handling if README.md already exists. 
//                                                         // https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original : 
//                                                         // Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

// I applied the JavaScript try/catch/finally Statement, since it was simple and does the job. What other option could I have applied?
// try {
//     fs.mkdir(dirname.async, (err) => {
//         if (err) {
//             // console.log("Error handled by catch method: " + err.message);

//         } else {
//             console.log(`${dirname.async} created!`);
//         }
//     })

// } catch (err) {
//     console.log(err.message);

// } finally {
//     console.log('Directory generated');

//     const dirpath = __dirname;
//     console.log(dirpath);

//     const writeFileAsync = util.promisify(fs.writeFile);    // util.promisify(fs.writeFile): error handling if README.md already exists. 
    // // https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original : 
    // // Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.


    // Employee Card 

    var team = [];

    const promptUser = () => {
        return inquirer.prompt([
            {
                type: "checkbox",
                name: "role",
                message: "Select the role",
                choices: ["Employee", "Manager", "Engineer", "Intern"],
            },
            {
                type: 'input',
                name: 'name',
                message: "Enter Name",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter Emplpyee ID",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter Email address",
            },
            // {
            //     type: 'confirm',
            //     name: 'question',
            //     message: "Want to add one more?",
            // },

        ]);

    };

    const init = () => {
        promptUser()
            .then((answers) => {
                console.log(answers);

                if (answers.role[0] === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'officeNumber',
                            message: "Enter your office number",
                        },
                        {
                            type: 'confirm',
                            name: 'question',
                            message: "Want to add one more?",
                        },
                   ])
                        .then((answer) => {
                            const manager = new Manager(answers.name, answers.id, answers.email, answer.officeNumber)
                            console.log(manager)
                        })
                };

                if (answers.role[0] === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'github',
                            message: "Enter your office github ID",
                        },
                        {
                            type: 'confirm',
                            name: 'question',
                            message: "Want to add one more?",
                        },
                    ])
                        .then((answer) => {
                            const engineer = new Engineer(answers.name, answers.id, answers.email, answer.github)
                            console.log(engineer)
                        })
                };

                if (answers.role[0] === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: "Enter your school",
                        },
                        {
                            type: 'confirm',
                            name: 'question',
                            message: "Want to add one more?",
                        },
                    ])
                        .then((answer) => {
                            const intern = new Intern(answers.name, answers.id, answers.email, answer.school)
                            console.log(intern)
                        })
                };


            });
    };

    init();

        // )
        // // .then(edata) => {
        // //     let employee = new Employee(edata.name, edata.id, edata.email, edata.role);

        // //     var employeeHtml = createCard(employee);
        // //     fs.writeFileAsync(`lib/employee.html`, employeeHtml, function(err) {

        // //     })

        //     let employee = new Employee(edata.name, edata.id, edata.email, edata.role); 











//     const generateREADME = (answers) =>

// `## Title: ${answers.headline}

// ## Table of Contents
// - [Description](#description)
// - [Badges](#badges)
// - [License](#license)
// - [Installation](#installation)
// - [Usage](#usage)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)
// - [Coding requriements](#languages)
// - [Github reference](#github)


// ## Description
// 🔍 ${answers.description}

// ## Badges
// 🏆 ${answers.badges}
// ![github license](https://img.shields.io/badge/license-MIT-blue.svg);


// ## License
// ${answers.license}

// ## Installation
// 💾 ${answers.installation}


// ## Usage
// 💻 ${answers.usage}


// ## Contributing
// 👪 ${answers.contributing}


// ## Tests
// ✏️ ${answers.tests}


// ## Questions
// ${answers.questions}


// ## Coding requirements
// ${answers.languages.join(", ")}

// ## Github reference 
// ${answers.github}


// Thank you for visiting and reviewing the project. 
// ---
// `;


//     // Bonus using writeFileAsync as a promise
//     const init = () => {
//         promptUser()
//             .then((answers) => writeFileAsync('output/README.md', generateREADME(answers)))
//             .then(() => console.log('Successfully wrote README.md'))
//             .catch((err) => console.error(err));
//     };

//     init();
// };