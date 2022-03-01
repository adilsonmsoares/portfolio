/** @type {import('next').NextConfig} */
const path = require('path')
const isProd = process.env.NODE_ENV === 'productions'

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/porfolio' : '',
  assetPrefix: isProd ? '/porfolio' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
