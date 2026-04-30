import { Metadata, Viewport } from 'next';

// Data
import { processedItems } from '../lib/graveyard';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';

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
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fafafa' },
        { media: '(prefers-color-scheme: dark)', color: '#121416' },
    ],
};

export default function HomePage() {
    return (
        <>
            <Header />
            <App items={processedItems} />
            <Footer />
        </>
    );
}

