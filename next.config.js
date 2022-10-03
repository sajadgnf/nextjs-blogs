/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    DOMAIN_URL: process.env.DOMAIN_URL,
  },
};

module.exports = nextConfig
