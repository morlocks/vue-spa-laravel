let mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

Mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .webpackConfig({
    plugins: [
        new SVGSpritemapPlugin({
           src: '.\public',
           filename : '.\resources\assets\js\icons\svg',
           svgo : {removeTitle : true},
           deleteChunk: false // Necessary to work with version
        })
    ] 
})
.sourceMaps().version();

