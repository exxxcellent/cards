// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'export',
    distDir: 'out',
    basePath: '/cards',
};

module.exports = nextConfig;
