/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'https://images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
