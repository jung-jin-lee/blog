/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || 'https://blog-seven-drab-27.vercel.app',
  generateRobotsTxt: true,
};

module.exports = nextConfig;
