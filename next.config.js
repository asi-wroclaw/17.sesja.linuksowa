/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SHOW_AGENDA: process.env.SHOW_AGENDA,
    SEND_MESSAGE_URL: process.env.SEND_MESSAGE_URL
  }
};

module.exports = nextConfig;
