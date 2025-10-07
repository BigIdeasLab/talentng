/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-east-1.amazonaws.com',
        pathname: '/talent.ng/profile-images/**',
      },
    ],
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_TALENTNG_API_URL;
    const isValid = typeof apiUrl === 'string' && (apiUrl.startsWith('http://') || apiUrl.startsWith('https://') || apiUrl.startsWith('/'));
    if (!isValid) {
      console.warn('NEXT_PUBLIC_TALENTNG_API_URL is not set or invalid; skipping /api/v1 rewrite.');
      return [];
    }
    return [
      {
        source: '/api/v1/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },

};

export default nextConfig;
