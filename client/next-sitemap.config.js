/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_CLIENT_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/server-sitemap.xml`,
    ],
  },
};
