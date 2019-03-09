var Validator = require('validator');
var isEmpty = require('lodash/isEmpty');

module.exports = function validateUser(data) {

  let errors = {};

  if (Validator.isEmpty(data.username)) { 
    errors.username = 'Username is required' 
  }
  if (Validator.isEmpty(data.password)) { 
    errors.password = 'Password is required' 
  }
  // if (Validator.isEmpty(data.confirmPassword)) { 
  //   errors.confirmPassword = 'Password is required'
  // }
  // if (!Validator.equals(data.password, data.confirmPassword)) { 
  //   errors.confirmPassword = 'The passwords must match' 
  // }
  if (Validator.isEmpty(data.email)) { 
    errors.email = 'An email is required' 
  }
  if (!Validator.isEmail(data.email)) { 
    errors.email = 'The email is invalid' 
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}