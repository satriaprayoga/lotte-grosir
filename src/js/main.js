import '../css/main.scss';
import logo from '../../assets/img/lotte-grosir.png';



(function($){
    const img=document.getElementById('logo');
    document.getElementById('logo').src=logo;

    $('#trigger').on('click',function(){
        var hamburger=document.getElementsByClassName('hamburger')[0];
        hamburger.classList.toggle('change');
    })

}(jQuery))