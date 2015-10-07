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
   options: {
     map: true
   },
   cssnext: {
     features: {
       customProperties: true,
       autoprefixer: true
     } 
   }
  }


}
