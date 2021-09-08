// Global Stylesheet
import '../public/global.css';

import type { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default MyApp;