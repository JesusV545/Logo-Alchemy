//const index = require('../index');
const { Square, Circle, Triangle, LogoGen } = require('./shapes');

describe('Validate', () => {

    describe('tooShort', () => {
      it('should return false for input less than 3 characters', () => {
        const newLogo = new LogoGen();
        const result = newLogo.textLength('ss');

        expect(result).toEqual(false);
      });
    });

    describe('tooLong', () => {
        it('it should return false if input is longer than 3 characters', () => {
        const newLogo = new LogoGen();
        const result = newLogo.textLength('ssss');

        expect(result).toEqual(false);
        })
    });

    describe('square', () => {
      it('it should return true for square shape with blue color filling', () => {
        const newShape = new Square();
        const newColor = 'blue';
        newShape.setColor(newColor);
        expect(newShape.render()).toEqual('<rect width="100" height="100" fill="blue" />');
        })
    });

    describe('triangle', () => {
      it('it should return true for triangle shape with blue color filling', () => {
        const newShape = new Triangle();
        const newColor = 'blue';
        newShape.setColor(newColor);
        expect(newShape.render()).toEqual('<polygon points="50,0 0,100 100,100" fill="blue" />');
        })
    });

    describe('circle', () => {
      it('it should return true for circle shape with blue color filling', () => {
        const newShape = new Circle();
        const newColor = 'blue';
        newShape.setColor(newColor);
        expect(newShape.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
        })
    });

  });