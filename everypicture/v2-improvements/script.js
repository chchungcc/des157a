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

    let onoff = 0;
    const colorlist = [purplecard, greencard, bluecard, orangecard, pinkcard];

    for(let i = 0; i < overlay.length; i++){
        colorlist[i].addEventListener('click', function(event){
            if(onoff==0){
                overlay[i].style.height='0px';
                onoff = 1;
                background.className = `mainbackground image${i}`;
                imageshowing.querySelector('h1').innerHTML = '';
                imageshowing.querySelector('p').innerHTML = '';
            }
            else if(onoff == 1){
                overlay[i].style.height='120px';
                onoff = 0;
                background.className = 'mainbackground';
                imageshowing.querySelector('h1').innerHTML = 'ambedo';
                imageshowing.querySelector('p').innerHTML = '(n.) a kind of melancholic trance in which you become completely absorbed in vivid sensory details—raindrops skittering down a window, tall trees leaning in the wind, clouds of cream swirling in your coffee—briefly soaking in the experience of being alive, an act that is done purely for its own sake.';
                
            }
    
            if(onoff == 0){
                sound1.style.top = '200%';
                sound2.style.top = '200%';
                sound3.style.top = '200%';
            }
        });
    }

    let num;

    document.addEventListener('mousemove', function(event){
        const xPos = event.clientX;
        const yPos = event.clientY;
        console.log(xPos);

        const sound1 = document.querySelector('#sound1');
        const sound2 = document.querySelector('#sound2');
        const sound3 = document.querySelector('#sound3');

        colorlist[0].addEventListener('click', function(event){
            num = 0;
        });

        if(num==0 && xPos < 800 && xPos > 300 && onoff == 1){
            sound1.style.top = '23%';
            // setTimeout(function(){
                sound2.style.top = '36%';
                // setTimeout(function(){
                    sound3.style.top = '80%';
                // }, 2000)
            // }, 2000);
        }
    });

})();