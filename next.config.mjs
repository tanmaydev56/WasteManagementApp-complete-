/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    env:{
        DATABASE_URL: process.env.DATABASE_URL,
        WEB3AUTH_CLIENTID : process.env.WEB3AUTH_CLIENTID,
        NEXT_PUBLIC_GEMINI_API_KEY : process.env.NEXT_PUBLIC_GEMINI_API_KEY,
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    }
};

export default nextConfig;
