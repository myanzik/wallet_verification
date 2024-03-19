
import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'
/** @type {import('next').NextConfig} */
/**
 * Configuration object for Next.js.
 *
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      /magic-sdk/,
      /@walletconnect[\\/]web3-provider/,
      /@web3auth[\\/]web3auth/,
      /@walletconnect[\\/]universal-provider/,
      /@metamask\/sdk|@wagmi\/connectors|connectkit|encoding/,
    ];

    // Exclude 'react-native' from resolving for @walletconnect/universal-provider
    config.resolve.alias = {
      ...config.resolve.alias,
      reactNative: "react-native-web",
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    
    return config;
  },
};

if(process.env.NODE_ENV === 'development') {
  await setupDevPlatform({
    persist: true
  })
}



export default nextConfig;
