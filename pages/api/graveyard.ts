import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';
import { Product } from '../../types/Product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await require('../../graveyard.json');
    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });
    res.setHeader('Cache-Control', 'max-age=3600, public');
    return res.status(200).json(data.map((item: Product) => ({
        ...item,
        slug: slugify(item.name, {
            lower: true,
        }),
    })));
}
