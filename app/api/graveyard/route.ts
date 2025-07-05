import { NextResponse } from 'next/server';
import slugify from 'slugify';
import { Product, ProductType } from '../../../types/Product';

export async function GET() {
    const data = await require('../../../graveyard.json');
    
    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processedData = data.map((item: Product) => ({
        ...item,
        type: item.type as ProductType,
        slug: slugify(item.name, {
            lower: true,
        }),
    }));

    return NextResponse.json(processedData, {
        status: 200,
        headers: {
            'Cache-Control': 'max-age=3600, public',
            'Access-Control-Allow-Origin': '*',
        },
    });
} 