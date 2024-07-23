/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp23.cryscampus.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "inhouse.cryscampus.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

module.exports = nextConfig;
