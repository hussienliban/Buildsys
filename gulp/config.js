var src               = 'app',
    build             = 'build',
    development       = 'build/dev',
    production        = 'build/prd',
    srcAssets         = 'app/assets',
    developmentAssets = development + '/assets',
    productionAssets  = production + '/assets';



module.exports = {

  css: {
    dev: {
      src:  srcAssets + '/css/main.css',
      dest: developmentAssets + '/css/'
    }
  },

  postcss: {
   cssnext: {
    'browers':          ['last 2 version'],
    'customProperties': true,
    'colorFunction':    true,
    'customSelectors':  true,
    'sourcemap':        true,
    'customProperties': true,
    'compress':         false
   }
  }


}
