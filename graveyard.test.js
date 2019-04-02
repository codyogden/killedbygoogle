const moment = require('moment');
const slugify = require('slugify');

const data = require('./graveyard.json');

slugify.extend({
  '+': 'plus',
  '@': 'at',
});

describe('graveyard', () => {
  it('objects should be valid', () => {
    data.forEach((product) => {
      // All data is present for each product
      expect(product.dateClose).not.toBeNull();
      expect(product.dateOpen).not.toBeNull();
      expect(product.description).not.toBeNull();
      expect(product.link).not.toBeNull();
      expect(product.name).not.toBeNull();
      expect(product.type).not.toBeNull();

      // Check `dateClose` format
      // Format: YYYY-MM-DD
      expect(product.dateClose.split('-')).toHaveLength(3);
      // Format Year: YYYY
      expect(product.dateClose.split('-')[0]).toHaveLength(4);
      // Format Month: MM
      expect(product.dateClose.split('-')[1]).toHaveLength(2);
      // Format Day: DD
      expect(product.dateClose.split('-')[2]).toHaveLength(2);

      // Check `dateOpen` format
      // Format: YYYY-MM-DD
      expect(product.dateOpen.split('-')).toHaveLength(3);
      // Format Year: YYYY
      expect(product.dateOpen.split('-')[0]).toHaveLength(4);
      // Format Month: MM
      expect(product.dateOpen.split('-')[1]).toHaveLength(2);
      // Format Day: DD
      expect(product.dateOpen.split('-')[2]).toHaveLength(2);

      // Dates are Chronologically Correct
      const dateClose = moment(product.dateClose);
      const dateOpen = moment(product.dateOpen);
      expect(dateClose.isValid()).toBe(true);
      expect(dateOpen.isValid()).toBe(true);
      expect(dateClose.isAfter(dateOpen)).toBe(true);
    });
  });
  it('names are unique', () => {
    // Add a slug to each item
    data.map((item) => {
      const newItem = item;
      newItem.slug = slugify(item.name, {
        lower: true,
      });
      return newItem;
    });
    // Create a set (removes any duplicate slugs)
    const items = [...new Set(data.map(item => item.slug))];

    // Both the data and items arr should have the same length
    expect(items.length).toBe(data.length);
  });
});
