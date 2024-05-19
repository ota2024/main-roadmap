/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_REACT_URL: process.env.NEXT_PUBLIC_REACT_URL,
    NEXT_PUBLIC_NEXT_URL: process.env.NEXT_PUBLIC_NEXT_URL,
    NEXT_PUBLIC_TWITTER_URL: process.env.NEXT_PUBLIC_TWITTER_URL,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
};

export default nextConfig;
