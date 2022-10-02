/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'media-exp1.licdn.com'],
  },
};

module.exports = nextConfig;
