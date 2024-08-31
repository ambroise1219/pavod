/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com', 'utfs.io'],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;