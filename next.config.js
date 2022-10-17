/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    DOMAIN_URL: process.env.DOMAIN_URL,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig
