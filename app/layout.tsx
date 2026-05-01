// Global Stylesheet
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preconnect"
                    href="https://static.killedbygoogle.com"
                    crossOrigin=""
                />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
} 