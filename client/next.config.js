/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "app2.jeoway.net",
      "bizweb.sapocdn.net",
      "cdn.sanity.io",
      "bizweb.dktcdn.net",
      "ui-avatars.com",
    ],
  },
  webpack7: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
