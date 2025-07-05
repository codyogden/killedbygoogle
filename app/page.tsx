import { Metadata } from 'next';
import slugify from 'slugify';

// Data
import graveyard from '../graveyard.json';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import { ProductWithSlug, ProductType } from '../types/Product';

export const metadata: Metadata = {
    title: 'Google Graveyard - Killed by Google',
    description: 'Killed by Google is the Google Graveyard. A full list of dead products killed by Google in the Google Cemetery.',
    keywords: ['Google', 'graveyard', 'killed', 'products', 'services'],
    authors: [{ name: 'Cody Ogden' }],
    creator: 'Cody Ogden',
    publisher: 'Cody Ogden',
    metadataBase: new URL('https://killedbygoogle.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Killed by Google',
        description: 'Killed by Google is the open source list of dead Google products, services, and devices. It serves as a tribute and memorial of beloved services and products killed by Google.',
        url: 'https://killedbygoogle.com',
        siteName: 'Killed by Google',
        images: [
            {
                url: '/social/card.png',
                width: 1200,
                height: 630,
                alt: 'Killed by Google',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Killed by Google',
        description: 'Killed by Google is the Google Graveyard. A full list of dead products killed by Google in the Google Cemetery.',
        site: '@killedbygoogle',
        creator: '@killedbygoogle',
        images: ['/social/card-twitter.png'],
    },
    verification: {
        google: '9y9dretKdifnWDdkbkT9Qm1PtWMIe3qz6R09Xkm8Cdc',
        other: {
            'msvalidate.01': '0C9605AF449480F57421EECCA9EB2B8A',
        },
    },
    other: {
        'theme-color': '#FAFAFA',
    },
};

async function getProcessedItems(): Promise<ProductWithSlug[]> {
    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        type: item.type as ProductType,
        slug: slugify(item.name, {
            lower: true,
        })
    })).sort((a, b) => (new Date(b.dateClose)).getTime() - (new Date(a.dateClose)).getTime());

    return processed;
}

export default async function HomePage() {
    const items = await getProcessedItems();

    return (
        <>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
} 