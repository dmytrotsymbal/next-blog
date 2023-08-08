/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"], // Добавьте здесь зарегистрированные домены хостов
  },
};

module.exports = nextConfig;
