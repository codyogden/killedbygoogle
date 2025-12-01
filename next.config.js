/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        mode: process.env.NODE_ENV,
    },
    // Enable Turbopack (now stable)
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    async redirects() {
        return [
            {
                source: '/graveyard.json',
                destination: '/api/graveyard',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/api/send',
                destination: 'https://analytics.bale.media/api/send',
            },
            {
                source: '/social/:path*',
                destination: 'https://static.killedbygoogle.com/com/social/:path*',
            }
        ]
    },
};

module.exports = nextConfig;
