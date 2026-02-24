(function(){
    'use strict';

    const overlay = document.querySelectorAll('.overlay');
    const imageshowing = document.querySelector('.definition');
    const background = document.querySelector('.mainbackground');

    const purplecard = document.querySelector('.purplecard');
    const pinkcard = document.querySelector('.pinkcard');
    const bluecard = document.querySelector('.bluecard');
    const greencard = document.querySelector('.greencard');
    const orangecard = document.querySelector('.orangecard');

    let onoff;
    const colorlist = [purplecard, greencard, bluecard, orangecard, pinkcard];
    const imagelist = ['image0', 'image1', 'image2', 'image3', 'image4'];

    for(let i = 0; i < overlay.length; i++){
        overlay[i].addEventListener('click', function(event){
            overlay[i].style.height = '0px';
            onoff = 1;
            background.className = `mainbackground image${i}`;
            imageshowing.querySelector('h1').innerHTML = '';
            imageshowing.querySelector('p').innerHTML = '';
        });

        colorlist[i].addEventListener('click', function(event){
            if(onoff==1){
                overlay[i].style.height='0px';
                onoff = 0;
            }
            else if(onoff == 0){
                overlay[i].style.height='120px';

                background.className = 'mainbackground';
                imageshowing.querySelector('h1').innerHTML = 'ambedo';
                imageshowing.querySelector('p').innerHTML = '(n.) a kind of melancholic trance in which you become completely absorbed in vivid sensory details—raindrops skittering down a window, tall trees leaning in the wind, clouds of cream swirling in your coffee—briefly soaking in the experience of being alive, an act that is done purely for its own sake.';
            }
        });
    }


})();