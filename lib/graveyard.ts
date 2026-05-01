import { format, formatDistance, parseISO } from 'date-fns';
import slugify from 'slugify';

import graveyard from '../graveyard.json';
import { Product, ProductType, ProductWithSlug } from '../types/Product';

slugify.extend({
    '+': '-plus',
    '@': '-at',
});

export const processedItems: ProductWithSlug[] = (graveyard as Product[])
    .map((item) => {
        const dateOpen = parseISO(item.dateOpen);
        const dateClose = parseISO(item.dateClose);
        return {
            ...item,
            type: item.type as ProductType,
            slug: slugify(item.name, { lower: true }),
            dateCloseMs: dateClose.getTime(),
            dateOpenYear: dateOpen.getFullYear(),
            dateCloseYear: dateClose.getFullYear(),
            dateCloseMonth: format(dateClose, 'LLLL'),
            duration: formatDistance(dateClose, dateOpen),
        };
    })
    .sort((a, b) => b.dateCloseMs - a.dateCloseMs);
