/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["app2.jeoway.net", "bizweb.sapocdn.net", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
