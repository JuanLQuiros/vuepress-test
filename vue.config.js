const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CeliFormacion/'
    : '/',
  configureWebpack: {
      plugins: [
        new VuetifyLoaderPlugin({
          match (originalTag, { kebabTag, camelTag, path, component }) {
            if (kebabTag.startsWith('core-')) {
              return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
            }
          }
        })
      ],
  },
}
