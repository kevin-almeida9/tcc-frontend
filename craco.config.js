const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0F66E8',

              '@layout-body-background': '#E9F1FF',
              '@layout-header-background': '#fff',
              '@layout-sider-background': '@primary-color',
              '@layout-trigger-background': '@primary-color',
              '@layout-sider-background-light': '@primary-color',
              '@layout-trigger-background-light': '@primary-color',

              '@menu-dark-color': ' #FFF',
              '@menu-dark-bg': '@primary-color',
              '@menu-dark-arrow-color': '#fff',
              '@menu-dark-highlight-color': 'lighter(@primary-color,50)',
              '@menu-dark-item-active-bg': '#FFF',
              '@menu-dark-selected-item-icon-color': '@primary-color',
              '@menu-dark-selected-item-text-color': '@primary-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};