// eslint-disable-next-line no-undef
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('eslint').tap((args) => {
      args[0].fix = true;
      return args;
    });
  },
});
