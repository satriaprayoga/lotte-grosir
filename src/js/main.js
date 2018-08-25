
(function ($) {

    /*hamburger toggle*/
    $('#trigger').on('click', function () {
        var hamburger = document.getElementsByClassName('hamburger')[0];
        hamburger.classList.toggle('change');
    });

    var items=[
        {
            type: "text",
            title: "Nama Toko",
            description: "Nama toko ditentukan sendiri oleh mitra TMUK",
            position: {
                left: 180,
                top: 50
            }
        }
    ];
    $(".interactive-image").interactiveImage(items);

   // var $window = $(window);
   /* function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 500) {
            $(".carousel-control").hide(1);
            //$("#d_benefit").hide(1);
            //$("#m_carousel").show(1);
        }else{
            $(".carousel-control").show(1);
             //$("#d_benefit").show(1);
            //$("#m_carousel").hide(1);
        }
    } */
    // Execute on load
   // checkWidth();
  //  $window.on('resize',function(){checkWidth();});
    $('.domisili').select2();
    $('.media').select2();
    $("#embed_subscribe_form").validator();
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
