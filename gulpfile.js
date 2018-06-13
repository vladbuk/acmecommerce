var elixir = require('laravel-elixir');

elixir.config,sourcemaps = false;

var gulp = require('gulp');

elixir(function(mix) {
    
    // compile sass to css
    mix.sass('resources/assets/sass/app.scss', 'resources/assets/css/');

    // combine css file
    mix.styles(
        [
            'css/app.css',
            '../../bower_components/slick-carousel/slick/slick.css'
        ],
        'public/css/all.css', // output folder
        'resources/assets/'
    );

    var bower_path = '../../bower_components/';

    mix.scripts(
        [
            // JQuery
            bower_path + 'jquery/dist/jquery.min.js',

            // Foundation
            bower_path + 'foundation-sites/dist/js/foundation.min.js',

            // Other dependencies
            bower_path + 'slick-carousel/slick/slick.min.js'
        ],
        'public/js/all.js',
        'resources/assets/'
    );

});