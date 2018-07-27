(function($){

    $('#trigger').on('click',function(){
        var hamburger=document.getElementsByClassName('hamburger')[0];
        hamburger.classList.toggle('change');
    })

}(jQuery))