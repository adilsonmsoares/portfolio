/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.resolve.alias["@styles"] = path.resolve(__dirname, "styles/");
    config.resolve.alias["@components"] = path.resolve(__dirname, "components/");
    config.resolve.alias["@containers"] = path.resolve(__dirname, "containers/");
    config.resolve.alias["@assets"] = path.resolve(__dirname, "public/");
    config.resolve.alias["@repositories"] = path.resolve(__dirname, "repositories/");
    config.resolve.alias["@shared"] = path.resolve(__dirname, "shared/");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "hooks/");

    return config;
  }
}
