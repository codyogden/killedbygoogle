// Global Stylesheet
import '../public/global.css';

import type { AppProps } from 'next/app';

declare global {
    interface Window {
        umami?: any;
    }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <>
        <script async defer data-website-id={process.env.UMAMI_ID} src="https://analytics.bale.media/umami.js" />
        <Component {...pageProps} />
    </>
}

export default MyApp;