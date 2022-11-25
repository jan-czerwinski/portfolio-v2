/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM();

module.exports = {
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  webpack(config) {
    // config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
};
