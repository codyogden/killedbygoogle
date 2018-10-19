const { log } = require('console');
const data = require('./graveyard.json');

// For every product
data.forEach((product) => {
  // Ensure that the duration between the close date and open date is not a negative number
  try {
    if ((new Date(product.dateClose) - new Date(product.dateOpen)) < 0) {
      // If it's a negative number, error out
      throw (new Error('Product dates are incorrect.'));
    }
  } catch (err) {
    // Log the product so we know where to look.
    log(product);
    // Throw the error to Node.
    throw err;
  }
});
