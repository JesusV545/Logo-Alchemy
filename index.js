//installing inquirer and fs
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')

//the class needed to construct the logo with user info
const { LogoGen, Square, Triangle, Circle } = require('./lib/shapes');

//start the question prompts
inquirer.prompt([
    //need to ask the basic questions to make logo
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want on your logo? (The limit is 3 characters!)',
        validate: validate
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
    //use the data
]).then((data) => {
    let shape;
    //need to make the shape the user chose using classes
    switch (data.shape) {
        case 'circle':
            shape = new Circle(data.shape_color);
            break;
        case 'square':
            shape = new Square(data.shape_color);
            break;
          case 'triangle':
            shape = new Triangle(data.shape_color);
            break;
          default:
            throw new Error('Invalid shape type');
        }
        //need to save the shape data to use later
        const logoData = {
            text: data.text,
            text_color: data.text_color,
            shape: shape
        };
        //need to use the final data to create the logo with LogoGen class
        const logo = new LogoGen(logoData).render();
        //need to make a new svg file 
        return writeFile('./examples/logo.svg', logo);
    

}).then(() => {
    //let the user know that their logo was created successfully
    console.log('Created your cool new logo.svg!')

}).catch((error) => {
    //let the user know that their logo was not created successfully
    console.log(error);
    console.log('There was a problem creating your cool logo!')

});

function validate(text){
    if (text.length > 3){
        throw new Error('Cannot be more than 3 characters!');
    } else {
        return true;
    }
}