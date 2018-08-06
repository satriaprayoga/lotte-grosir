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
    var form=$("#embed_subscribe_form");
    $(form).submit(function(e){
        e.preventDefault();
        var formData=$(form).serialize();
        $.ajax({
            type:"POST",
            url:$(form).attr("action"),
            data:formData
        }).done(function(response){
            console.log(response);
        }).fail(function(err){
            console.error(err);
        });
    });
}(jQuery));
