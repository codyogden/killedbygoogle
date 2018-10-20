const data = require('./graveyard.json');


describe('graveyard', () => {
  it('graveyard', () => {
    data.forEach((product) => {
      // All data is present for each product
      expect(product.dateClose).not.toBeNull();
      expect(product.dateOpen).not.toBeNull();
      expect(product.description).not.toBeNull();
      expect(product.link).not.toBeNull();
      expect(product.name).not.toBeNull();

      // Dates are Chronologically Correct
      const dateClose = new Date(product.dateClose).getTime();
      const dateOpen = new Date(product.dateOpen).getTime();
      expect(dateOpen).toBeLessThanOrEqual(dateClose);
    });
  });
});
