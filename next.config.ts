/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig = {
  turbopack: {},
  webpack(config: { module: { rules: { test: RegExp; use: string[] }[] } }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
