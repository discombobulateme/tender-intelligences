// eslint-disable-next-line no-undef
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin("eslint").tap((args) => {
      args[0].fix = true;
      return args;
    });
  },
  publicPath: "/tender-intelligences/",
  // process.env.NODE_ENV === "production" ? "/tender-intelligences/" : "/",
});
