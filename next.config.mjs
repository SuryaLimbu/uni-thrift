/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
