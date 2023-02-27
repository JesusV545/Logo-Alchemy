//installing inquirer and fs
const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs/promises')

//the class needed to construct the logo with user info
const LogoGen = require('./lib/shapes');

//start the question prompts
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want on your logo? (The limit is 3 characters!)',
        //validate: validate
    },

    {
        type: 'list',
        name: 'text_color',
        message: 'What color do you want your text?',
        choices: ['red', 'blue', 'green']
    },

    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for your logo?',
        choices: ['circle', 'triangle', 'square']
    },

    {
        type: 'list',
        name: 'shape_color',
        message: 'What color do you want your shape to be?',
        choices: ['red', 'blue', 'green']
    }

    //get the data and plug it into the class
]).then((data) => {
    const logoData = JSON.parse(data);
    const newLogo = new LogoGen(
        logoData.text,
        logoData.text_color,
        logoData.shape,
        logoData.shape_color
);
    //use render() to create the logo
    const logo = newLogo.render();
    return writeFile('./examples/logo.svg', logo);

}).then(() => {
    //let the user know that their logo was created successfully
    console.log('Created your cool new logo.svg!')

}).catch((error) => {
    //let the user know that their logo was not created successfully
    console.log(error);
    console.log('There was a problem creating your cool logo!')

});

