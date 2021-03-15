const emailRegex = /\S+@\S+\.\S+/;
const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

const isBlank = (value) => (!value);
const isLessThan = (value, min) => (value < min);
const isGreaterThan = (value, min) => (value > min);
const isEmailValid = (email) => !emailRegex.test(email.toLowerCase());
const isDateValid = (date) => !dateRegex.test(date.datedAt);
const isNotEqual = (value1, value2) => value1 !== value2;

module.exports = {
  isBlank,
  isLessThan,
  isGreaterThan,
  isEmailValid,
  isDateValid,
  isNotEqual,
};
