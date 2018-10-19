const { error } = require('console');
const data = require('./graveyard.json');

try {
  data.forEach((product) => {
    if ((new Date(product.dateClose) - new Date(product.dateOpen)) < 0) {
      throw Object({ error: 'Product dates are incorrect.', product });
    }
  });
} catch (err) {
  error(err);
}
