/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable SWC minification
  swcMinify: true,
  
  // Ensure trailing slash consistency
  trailingSlash: false,
  
  // Skip build static generation for dynamic routes if needed
  // output: 'standalone', // Uncomment if deploying to Docker/standalone
  
  // Redirects for better SEO and routing
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
