/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: [
    { source: '/api/:path*', destination: '/another-directory/:path*' }
]
}
