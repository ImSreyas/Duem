/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    // Modify the webpack config to set the default dev server options
    if (dev && isServer) {
      config.devServer = {
        host: '192.168.75.58', // Set the IP address
        port: 3000, // Set the port number
        open: true, // Open the default browser when the server starts
      };
    }

    return config;
  },
};

export default nextConfig;
