(function($){

    /*hamburger toggle*/
    $('#trigger').on('click',function(){
        var hamburger=document.getElementsByClassName('hamburger')[0];
        hamburger.classList.toggle('change');
    });
    /* $(window).on("activate.bs.scrollspy", function (e,obj){  
        if(obj.relatedTarget.length>0){
            $('.navbar').toggleClass('fixed-top');
          
        }
        refreshScrollSpy();
    }); */
    $('.domisili').select2();
    $('.media').select2();

    

}(jQuery));
function refreshScrollSpy() {
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    }); 
};