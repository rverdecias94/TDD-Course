import { StringUtils } from "../app/Utils";

describe('Utils test suite', () => {

  describe('StringUtils tests', () => {

    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    })

    it('Should return correct upperCase', () => {
      const actual = sut.toUpperCase('abc');
      expect(actual).toBe('ABC');
    })

    it('Should throw error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }
      expect(expectError).toThrow('Invalid argument!');
    })

    it('Should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrow('Invalid argument!');
    })

    it('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        done('GetStringInfo should throw error for invalid arg!')
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }

    })

  });



})