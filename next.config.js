module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // This is to prevent an error related to the fs module when using file-loader
      };
    }

    return config;
  },
};
