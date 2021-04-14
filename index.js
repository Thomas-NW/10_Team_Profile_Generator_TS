const inquirer = require("inquirer");
const fs = require('fs');
const http = require('http');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const genHtml = require("./script.js");
const htmlContent = require("./scriptHtml.js");

const util = require('util');
const path = require('path');  // I could not figure out how to generate a path for saving the README file. I hard coded the location, but would have prefered a promt to ask the user to select a storage location. Any help you can provide is appreciated....

// const writeFileAsync = util.promisify(fs.writeFile);    // util.promisify(fs.writeFile): error handling if README.md already exists. 
//                                                         // https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original : 
//                                                         // Takes a function following the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

const writeFile = function() {
    fs.writeFileSync("./dist/index.html",genHtml(team))
}

fs.writeFileSync("./dist/index2.html",htmlContent, err => {
    if (err) {
        console.error(err)
        return
      }
})


let team = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "role",
            message: "Select the role",
            choices: ["Manager", "Engineer", "Intern"],
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
                        team.push(manager)
                        if (answer.question) {
                            init() 
                        }
                        else {
                            writeFile();
                        }

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
                        team.push(engineer)
                        if (answer.question) {
                            init() 
                        }
                        else {
                            writeFile();
                        }

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
                        team.push(intern)
                        if (answer.question) {
                            init() 
                        }
                        else {
                            writeFile();
                        }
                    })
            };


        });
};

init();

