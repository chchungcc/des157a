(function(){
    'use strict';

    const colorblock = document.querySelector('.color');
    const background = document.querySelector('.backgroundone');

    //need to make it so that background only changes after the color block fully slides up
    colorblock.addEventListener('click', function(event){
       colorblock.style.height = '0px';
       background.style.opacity = 1;
    });

})();