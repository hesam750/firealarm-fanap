/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure prisma files (including SQLite dev.db) are bundled with serverless functions on Vercel
  outputFileTracingIncludes: {
    'app/**/route.js': ['./prisma/**/*'],
  },
}

export default nextConfig
