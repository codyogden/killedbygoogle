module.exports = {
    env: {
        mode: process.env.NODE_ENV,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
    rewrites() {
        return [
            {
                source: '/umami.js',
                destination: 'https://analytics.bale.media/umami.js'
            },
            {
                source: '/api/collect',
                destination: 'https://analytics.bale.media/api/collect',
            },
        ]
    }
};