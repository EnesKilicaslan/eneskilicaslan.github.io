const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    loader: "custom",
    domains: ["pbs.twimg.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer:
        // for webpack 5 use
        { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
