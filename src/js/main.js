const media = require('../data/media.json');

(function ($) {

    /*hamburger toggle*/
    $('#trigger').on('click', function () {
        var hamburger = document.getElementsByClassName('hamburger')[0];
        hamburger.classList.toggle('change');
    });
    $('.domisili').select2();
    $('.media').select2({
        data: media.media
    });
    
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 30
    });

}(jQuery));
