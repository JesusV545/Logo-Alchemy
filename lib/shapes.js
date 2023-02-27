// This class represents a BlogPost
class LogoGen {
    // Instantiates a BlogPost and validates input.
    constructor(data) {
        this.data = data;
    }
    
    // Returns  formatted as an html document string
    render() {

        const shape = this.data.shape.render();
        const text = this.data.text;
        const textColor = this.data.text_color;
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${shape}<text x="50" y="60" font-size="40" fill="${textColor}" text-anchor="middle">${text}</text></svg>`;
        return svg;


        // let newLogo = '';

        // if (this.shape === 'circle') {
        //     newLogo += `<circle cx="50" cy="50" r="40" fill="${this.shape_color}" />
        //                 <text x="50" y="55" text-anchor="middle" fill="${this.text_color}" font-size="24px">${this.text}</text>`;

        //   } else if (this.shape === 'square') {
        //     newLogo += `<rect x="10" y="10" width="80" height="80" fill="${this.shape_color}" />" />
        //                 <text x="50" y="55" text-anchor="middle" fill="${this.text_color}" font-size="24px">${this.text}</text>`;

        //   } else if (this.shape === 'triangle') {
        //     newLogo += `<polygon points="50,10 10,90 90,90" fill="${this.shape_color}" />" />
        //                 <text x="50" y="55" text-anchor="middle" fill="${this.text_color}" font-size="24px">${this.text}</text>`;
        //   }
        
        //   return `
        //   <!DOCTYPE html>
        //   <html lang="en">
        //     <head>
        //       <meta charset="UTF-8" />
        //       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //       <title>Your New Logo</title>
          
        //     <body>
        //       <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${newLogo}</svg>
        //     </body>
        //   </html>
        //   `;
    
  }

} 

// Define the Square class
class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect width="100" height="100" fill="${this.color}" />`;
    }
  }
  
// Define the Circle class
class Circle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
}

// Define the Triangle class
class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}" />`;
    }
}
  
  
  module.exports = { Square, Circle, Triangle, LogoGen };
