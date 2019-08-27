const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.plugins = [PnpWebpackPlugin];
    config.resolveLoader.plugins = [PnpWebpackPlugin.moduleLoader(module)];

    return config;
  }
};
