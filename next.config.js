/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
            },
            {
                hostname: 'localhost',
            }
        ],
    },
    env: {
        API_URL: process.env.API_URL
    }
}


module.exports = nextConfig
