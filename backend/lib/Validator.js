
function genErrMsg(field, msg) {
  return `The param ${field} ${msg}`;
}

function validString(value, rule) {
  const { required, length, regexp, validFn } = rule;

  if (required) {
    if (typeof value === 'undefined' || value === null || isNaN(value)) {
      return genErrMsg('is required');
    }
  }
  if (length) {
    if (value.length < length[0] || value.length > length[1]) {
      return genErrMsg(`must be less than ${length[0]}, and more than ${length[1]}`);
    }
  }
  if (regexp) {
    if (!regexp.test(value)) {
      return genErrMsg(`must fit regexp ${regexp}`);
    }
  }
  return null;
}

class Validator {
  constructor(data, rules) {
    this.data = data;
    this.rules = rules;
  }

  validValue(value, rule) {
    switch (rule.type) {
      case 'string': return validString(value, rule);
      default: break;
    }
    if (rule.validFn) {
      return rule.validFn(value);
    }
  }

  valid() {
    const len = this.rules.length;
    let error = null;
    for (let i = 0; i < this.rules.length; i++) {
      const rule = this.rules[i];
      const value = this.data[rule.key];

      error = this.validValue(value, rule);
      if (error) {
        break;
      }
    }
    return {
      error,
    };
  }
}

module.exports = Validator;