/** @type {import('next').NextConfig} */
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/porfolio/' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.alias["@styles"] = path.resolve(__dirname, "src/styles/");
    config.resolve.alias["@components"] = path.resolve(__dirname, "src/components/");
    config.resolve.alias["@containers"] = path.resolve(__dirname, "src/containers/");
    config.resolve.alias["@assets"] = path.resolve(__dirname, "public/");
    config.resolve.alias["@shared"] = path.resolve(__dirname, "src/shared/");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "src/hooks/");

    return config;
  }
}
