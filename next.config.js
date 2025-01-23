/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "static", // Changed from 'export' to 'static'
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
