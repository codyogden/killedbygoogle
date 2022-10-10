import { GetStaticProps } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import slugify from 'slugify';

// Data
import graveyard from '../graveyard.json';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import { ProductWithSlug } from '../types/Product';

const HomePage: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
                <meta name="description" content="Killed by Google is the Google Graveyard. A full list of dead products killed by Google in the Google Cemetery." />
                <link rel="shortcut icon" href="favicon.png" />
                <title>Google Graveyard - Killed by Google</title>
                <meta name="theme-color" content="#FAFAFA" />
                <link rel="canonical" href="https://killedbygoogle.com" />
                <meta name="image" content="https://killedbygoogle.com/social/card.png"></meta>
                <meta itemProp="name" content="Killed by Google" />
                <meta itemProp="description" content="Killed by Google is the Google Graveyard. A full list of dead products killed by Google in the Google Cemetery." />
                <meta itemProp="image" content="https://killedbygoogle.com/social/card.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Killed by Google" />
                <meta name="twitter:description" content="Killed by Google is the Google Graveyard. A full list of dead products killed by Google in the Google Cemetery." />
                <meta name="twitter:site" content="@killedbygoogle" />
                <meta name="twitter:creator" content="@killedbygoogle" />
                <meta name="twitter:image:src" content="https://killedbygoogle.com/social/card-twitter.png" />
                <meta name="twitter:image" content="https://killedbygoogle.com/social/card-twitter.png" />
                <meta name="og:title" property="og:title" content="Killed by Google" />
                <meta name="og:url" property="og:url" content="https://killedbygoogle.com" />
                <meta name="og:description" property="og:description" content="Killed by Google is the open source list of dead Google products, services, and devices. It serves as a tribute and memorial of beloved services and products killed by Google." />
                <meta name="image" property="og:image" content="https://killedbygoogle.com/social/card.png" />
                <meta name="og:image" property="og:image" content="https://killedbygoogle.com/social/card.png" />
                <meta name="og:site_name" property="og:site_name" content="Killed by Google" />
                <meta name="og:type" property="og:type" content="website" />
                <meta name="author" content="Cody Ogden" />
                <meta name="msvalidate.01" content="0C9605AF449480F57421EECCA9EB2B8A" />
                <meta name="google-site-verification" content="9y9dretKdifnWDdkbkT9Qm1PtWMIe3qz6R09Xkm8Cdc" />
            </Head>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
}
export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {

    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        slug: slugify(item.name, {
            lower: true,
        })
    })).sort((a, b) => (new Date(b.dateClose)).getTime() - (new Date(a.dateClose)).getTime());

    return {
        props: {
            items: processed
        }
    }
}
