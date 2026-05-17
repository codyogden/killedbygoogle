import { NextResponse } from 'next/server';

import { processedItems } from '../../../lib/graveyard';

export async function GET() {
    return NextResponse.json(processedItems, {
        status: 200,
        headers: {
            'Cache-Control': 'max-age=3600, public',
            'Access-Control-Allow-Origin': '*',
        },
    });
}
