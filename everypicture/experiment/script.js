(function(){
    'use strict';

    //experiment 2
    const colorblock = document.querySelector('.color');
    const background = document.querySelector('.backgroundone');
    const card2 = document.querySelector('#pink2');
    let onoff;

    //need to make it so that background only changes after the color block fully slides up
    colorblock.addEventListener('click', function(event){
        colorblock.style.height = '0px';
        background.style.opacity = 1;
        onoff = 1;
    });

    card2.addEventListener('click', function(event){
        if(onoff==1){
            colorblock.style.height='0px';
            onoff = 0;
        }
        else if(onoff == 0){
            colorblock.style.height='180px';
            background.style.opacity = 0;
        }
    });

    //experiment 3
    //need to figure out how to make image show maybe when it's wiggling or falling?
    const card3 = document.querySelector('#pink3');
    // const hidden = document.querySelector('#pinkoverlay');

    card3.addEventListener('mouseenter', function(event){
        card3.className = 'wiggle';
    });

    card3.addEventListener('animationend', function(event){
        card3.className = '';
    });

    card3.addEventListener('click', function(event){
        card3.className = 'fall';
        background.style.opacity = 1;

        // hidden.className = 'showing';
    });

})();