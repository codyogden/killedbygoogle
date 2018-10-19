const data = require('./graveyard.json');

data.forEach((product) => {
  try {
    if ((new Date(product.dateClose) - new Date(product.dateOpen)) < 0) {
      throw (new Error('Product dates are incorrect.', product));
    }
  } catch (err) {
    console.log(product);
    throw err;
  }
});
