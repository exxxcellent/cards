// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    distDir: 'build',
    output: 'export',
    basePath: '/cards',
    assetPrefix: '/cards',
};

module.exports = nextConfig;
