// Global Stylesheet
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

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
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
} 