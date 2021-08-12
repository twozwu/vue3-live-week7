module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-live-week7/dist/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const args2 = args;
      args2[0].title = '巧克屋final';
      return args2;
    });
  },
};
