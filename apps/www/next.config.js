/** @type {import('next').NextConfig} */

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.PAYLOAD_URL}/api/:path*`,
            },
        ]
    },
};
