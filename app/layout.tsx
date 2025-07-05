// Global Stylesheet
import '../public/global.css';
import { ReactNode } from 'react';

declare global {
    interface Window {
        umami?: any;
    }
}

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <script
                    async
                    defer
                    data-website-id={process.env.UMAMI_ID}
                    data-host-url='https://killedbygoogle.com'
                    src="/_next/static/umami.js"
                />
                {children}
            </body>
        </html>
    );
} 