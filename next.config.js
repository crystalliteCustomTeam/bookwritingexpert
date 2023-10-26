/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'wp23.cryscampus.com',
          port: '',
          pathname: '/**',
        }
      ]
    },
    experimental: {
      nextScriptWorkers: true,
    },
  }
  
  module.exports = nextConfig