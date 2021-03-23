// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

expect.extend({
  toBeOneOf(received, values = []) {
    // This regexp checks for formatting
    if ( values.includes(received)){
      return {
        pass: true,
        message: 'ok'
      } 
    } return {
      pass: false,
      message: 'no value of ${recieved} match with ${values}'
    }
  }
});