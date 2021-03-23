const expect = {}
expect.extend({
  toBeOneOf(recieved, values = []) {
    const valid = values.includes(recieved)
    if (valid) return {
      pass: true,
      message: 'Expected ${recieved} to be one of ${values}'
    }
    return {
      pass: false,
      message: 'Expected ${recieved} to be one of ${values}'
    }
  }
});

export default expect


