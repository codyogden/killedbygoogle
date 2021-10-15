// Global Stylesheet
import '../public/global.css';

import type { AppProps } from 'next/app';

declare global {
    interface Window {
        umami?: any;
    }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default MyApp;