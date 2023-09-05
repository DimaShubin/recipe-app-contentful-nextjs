const dotenv = require('dotenv').config();
const nextComposePlugins = require('next-compose-plugins');

const headers = require('./config/headers');
const plugins = require('./config/plugins');
const { i18n } = require('./next-i18next.config.js');

/**
 * https://github.com/cyrilwanner/next-compose-plugins/issues/59
 */
const { withPlugins } = nextComposePlugins.extend(() => ({}));

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = withPlugins(plugins, {
  i18n,
  /**
   * add the environment variables you would like exposed to the client here
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },

  poweredByHeader: false,
  reactStrictMode: false,
  compress: true,

  /**
   * add the headers you would like your next server to use
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/headers
   *                https://nextjs.org/docs/advanced-features/security-headers
   */
  headers,

  /**
   * https://nextjs.org/docs/basic-features/image-optimization
   * Settings are the defaults
   */
  images: {
    domains: ['images.ctfassets.net','images.eu.ctfassets.net'],
  },

  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
