(function($){

    /*hamburger toggle*/
    $('#trigger').on('click',function(){
        var hamburger=document.getElementsByClassName('hamburger')[0];
        hamburger.classList.toggle('change');
    });
  

    $('.domisili').select2();

}(jQuery));
