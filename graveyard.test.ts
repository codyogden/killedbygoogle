import { describe, test, expect } from '@jest/globals';
import moment from 'moment';
import slugify from 'slugify';

import { Product, ProductType } from './types/Product';

import graveyard from './graveyard.json';
const data = graveyard as Product[];

slugify.extend({
  '+': 'plus',
  '@': 'at',
});

describe('graveyard.json', () => {
  test('All values are complete', () => {
    data.forEach((product: Product) => {
      expect(product.dateClose).not.toBeNull();
      expect(product.dateOpen).not.toBeNull();
      expect(product.description).not.toBeNull();
      expect(product.link).not.toBeNull();
      expect(product.name).not.toBeNull();
      expect(product.type).not.toBeNull();
    });
  });

  test('Only allowed categories', () => {
    data.forEach((product: Product) => {
      expect(Object.values(ProductType).includes(product.type)).toBe(true);
    });
  });

  test('Unique product names', () => {
    const slugs = data.map((product: Product) => slugify(product.name, { lower: true }));
    const slugSet = new Set(slugs);
    expect(slugSet.size).toBe(data.length);
  });

  describe('Dates', () => {
    test('Formatted correctly (yyyy-mm-dd)', () => {
      data.forEach((product: Product) => {
        // Check `dateClose` format
        expect(product.dateClose.split("-")).toHaveLength(3);
        expect(product.dateClose.split("-")[0]).toHaveLength(4);
        expect(product.dateClose.split("-")[1]).toHaveLength(2);
        expect(product.dateClose.split("-")[2]).toHaveLength(2);

        // Check `dateOpen` format
        expect(product.dateOpen.split("-")).toHaveLength(3);
        expect(product.dateOpen.split("-")[0]).toHaveLength(4);
        expect(product.dateOpen.split("-")[1]).toHaveLength(2);
        expect(product.dateOpen.split("-")[2]).toHaveLength(2);
      });
    });

    test('Dates are valid', () => {
      data.forEach((product: Product) => {
        const dateClose = moment(product.dateClose);
        const dateOpen = moment(product.dateOpen);
        expect(dateClose.isValid()).toBe(true);
        expect(dateOpen.isValid()).toBe(true);
      });
    });

    test('`dateClose` is after `dateOpen`', () => {
      data.forEach((product: Product) => {
        const dateClose = moment(product.dateClose);
        const dateOpen = moment(product.dateOpen);
        expect(dateClose.isAfter(dateOpen)).toBe(true);
      });
    });
  });
});
