import moment from 'moment';
import slugify from 'slugify';

import data from './graveyard.json';

slugify.extend({
  '+': 'plus',
  '@': 'at',
});

describe('graveyard', () => {
  it('objects should be valid', () => {
    data.forEach(product => {
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
    const slugs = data.map(item =>
      slugify(item.name, {
        lower: true,
      })
    );
    // Create a set (removes any duplicate slugs)
    const items = [...new Set(slugs)];

    // Both the data and items arr should have the same length
    expect(items.length).toBe(data.length);
  });
});
