/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['images.unsplash.com', 'upload.wikimedia.org', "cdn.sanity.io"],
  }
}

module.exports = nextConfig
