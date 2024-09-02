/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// Path: next.config.js
const nextConfig = {
    webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      return config
    }
  }