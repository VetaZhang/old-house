
let generator = {};

generator.errorRes = function(message, error) {
  return {
    error,
    message,
    success: false,
    data: null,
  }
};

module.exports = generator;
