
var valido = require('valido')

function isValid(value, type) {
  return valido.get(type).test(value)
}

isValid.each = function(values, type) {
  if (Array.isArray(values))
    return validateArray(values, valido.get(type))
  return validateObject(values, valido.get(type))
}

module.exports = isValid

//
// Helpers
//

function validateArray(values, validator) {
  for (var i = 0; i < values.length; i++) {
    if (!validator.test(values[i])) return false
  }
  return true
}

function validateObject(values, validator) {
  for (var key in values) {
    if (!validator.test(values[key])) return false
  }
  return true
}
