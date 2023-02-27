// This class makes the logo
class LogoGen {
    constructor(data) {
        
        this.data = data;

    }
    
    // Returns formatted as an html document string
    render() {

        //need to make variables with user data to make it easier for myself
        const shape = this.data.shape.render();
        const text = this.data.text;
        const textColor = this.data.text_color;
        //need to make the svg with html syntax and plug in the user data
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${shape}<text x="50" y="60" font-size="40" fill="${textColor}" text-anchor="middle">${text}</text></svg>`;
        return svg;
    
    }
    //need to make a function to test for text length to make sure it isn't less than or greater than 3 characters
    textLength(data) {
        if (data.length < 3){
            return false;
        } else if (data.length > 3) {
            return false;
        } else {
            return true;
        }
    }

} 


//Define the Shape Class
class Shape {
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }
}

// Define the Square class
class Square extends Shape{
    constructor(color) {
        super('square', color)
        //this.color = color;
    }
    //this makes the svg shape html string
    render() {
        return `<rect width="100" height="100" fill="${this.color}" />`;
    }
    //need to test the blue shape color
    setColor(newColor) {
        this.color = newColor;
        return `<rect width="100" height="100" fill="${newColor}" />`;
    }
  }
  
// Define the Circle class
class Circle extends Shape {
    constructor(color) {
        super('circle', color)
        //this.color = color;
    }
    //this makes the svg shape html string
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
    //need to make test for blue shape
    setColor(newColor) {
        this.color = newColor;
        return `<circle cx="50" cy="50" r="50" fill="${newColor}" />`;
    }
}

// Define the Triangle class
class Triangle extends Shape {
    constructor(color) {
        super('triangle', color)
        //this.color = color;
    }
    //this makes the svg shape html string
    render() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
    }
    //need to make test for blue shape
    setColor(newColor) {
        this.color = newColor;
        return `<polygon points="50,0 0,100 100,100" fill="${newColor}" />`;
    }

}


  
  //need to export all the classes to use them in index.js
  module.exports = { Square, Circle, Triangle, LogoGen };
