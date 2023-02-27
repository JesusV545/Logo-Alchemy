// This class represents a BlogPost
class LogoGen {
    // Instantiates a BlogPost and validates input.
    constructor(text, text_color, shape, shape_color) {

      if (text.length < 3) {
        throw new Error('`text` must contain at least 3 characters.');
      }
  
      this.text = text;
      this.text_color = text_color;
      this.shape = shape;
      this.shape_color = shape_color;

    }
    
    // Returns  formatted as an html document string
    render() {
      return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Your New Logo</title>
      
        <body>
          
          <${this.shape} xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${this.shape_color}"/>
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        
        </body>
      </html>

      `;
    }
  }
  
  module.exports = LogoGen;
  