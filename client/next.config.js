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
      "thumbs.dreamstime.com",
      "api.multiavatar.com",
      "soneku.com",
      "vcdn1-vnexpress.vnecdn.net",
      "vcdn1-dulich.vnecdn.net",
      "vcdn1-sohoa.vnecdn.net",
      "vcdn1-kinhdoanh.vnecdn.net",
      "vcdn1-suckhoe.vnecdn.net",
      "vcdn1-giaitri.vnecdn.net",
      "vcdn1-thethao.vnecdn.net",
      "vcdn1-giadinh.vnecdn.net",
    ],
  },
};

module.exports = nextConfig;
