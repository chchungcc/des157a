(function(){
    'use script';
    const overlay = document.querySelector('#madlibs-overlay');
    const madlibs = document.querySelector('#madlibs-story');
    const form = document.querySelector('form');
    const submit = document.querySelector('#submit-button');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const pluralnoun1 = document.querySelector('#pluralnoun1').value;
        const color = document.querySelector('#color').value;
        const clothing = document.querySelector('#clothing').value;
        const food = document.querySelector('#food').value;
        const adjective1 = document.querySelector('#adjective1').value;
        const funnoun1 = document.querySelector('#funnoun1').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const place = document.querySelector('#place').value;
        const funnoun2 = document.querySelector('#funnoun2').value;
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adjective3 = document.querySelector('#adjective3').value;
        const music = document.querySelector('#music').value;
        const pluralnoun2 = document.querySelector('#pluralnoun2').value;
        const verb = document.querySelector('#verb').value;

        if(pluralnoun == ""){
            myText =''
        }
        
        madlibs.innerHTML = `<p>Today's the day! The long awaited day to celebrate <span class="bolded">${pluralnoun1}</span>! You put on your favorite <span class="bolded">${color} ${clothing}</span> and rush out of your room to the kitchen. You decided that you will be making <span class="bolded">${food}</span> for this <span class="bolded">${adjective1}</span> occasion. You add all of the basic ingredients, but decide to spice things up by adding lots of <span class="bolded">${funnoun1}</span>. You think it will make it taste very <span class="bolded">${adjective2}</span>. With the food all done, you start to decorate your <span class="bolded">${place}</span> with <span class="bolded">${funnoun2}</span>-shaped banners and <span class="bolded">${noun1}</span>. You set out some <span class="bolded">${noun2}</span>-scented candles and put on <span class="bolded">${adjective3} ${music}</span> music.</p><p>Ding-dong! That must be your friends! A group of <span class="bolded">${pluralnoun2}</span> rush into your home ready to <span class="bolded">${verb}</span>! Let the celebration begin!</p><button id="redo">Have another celebration!</button>`
    });

    submit.addEventListener('click', function(){
        overlay.className = 'showing';
    });

    document.addEventListener('click', function(event){
        if(event.target.id == 'redo'){
            overlay.className = 'hidden';
        }
        console.log("firing");
    });




})();