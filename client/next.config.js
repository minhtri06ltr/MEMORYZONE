/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  nextScriptWorkers: true,
  images: {
    domains: [
      "app2.jeoway.net",
      "bizweb.sapocdn.net",
      "cdn.sanity.io",
      "bizweb.dktcdn.net",
      "ui-avatars.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
