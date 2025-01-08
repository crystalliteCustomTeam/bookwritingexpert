/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp23.pulse-force.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "inhouse.pulse-force.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

module.exports = nextConfig;
