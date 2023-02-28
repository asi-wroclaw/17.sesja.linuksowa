/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    SHOW_AGENDA: process.env.SHOW_AGENDA,
    SEND_MESSAGE_URL: process.env.SEND_MESSAGE_URL,
    SHOW_SPEAKERS: process.env.SHOW_SPEAKERS,
  }
};

module.exports = nextConfig;
