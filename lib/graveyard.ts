import slugify from 'slugify';

import graveyard from '../graveyard.json';
import { Product, ProductType, ProductWithSlug } from '../types/Product';

slugify.extend({
    '+': '-plus',
    '@': '-at',
});

export const processedItems: ProductWithSlug[] = (graveyard as Product[])
    .map((item) => ({
        ...item,
        type: item.type as ProductType,
        slug: slugify(item.name, { lower: true }),
    }))
    .sort(
        (a, b) =>
            new Date(b.dateClose).getTime() - new Date(a.dateClose).getTime(),
    );
