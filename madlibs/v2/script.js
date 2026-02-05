(function(){
    'use script';
    const overlay = document.querySelector('#madlibs-overlay');
    const madlibs = document.querySelector('#madlibs-story');
    const form = document.querySelector('form');
    const submit = document.querySelector('#submit-button');
    const error = document.querySelector('#error-message');

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
        const pluralnoun2 = document.querySelector('#pluralnoun2').value;
        const noun = document.querySelector('#noun').value;
        const adjective3 = document.querySelector('#adjective3').value;
        const music = document.querySelector('#music').value;
        const pluralnoun3 = document.querySelector('#pluralnoun3').value;
        const verb = document.querySelector('#verb').value;

        let myText;

        if(pluralnoun1 == ""){
            myText= "Please provide a plural noun!";
            document.querySelector('#pluralnoun1').focus();
            error.innerHTML= myText;
            
        }
        else if(color == ""){
            myText= "Please provide a color!";
            document.querySelector('#color').focus();
            error.innerHTML= myText;
        }
        else if(clothing == ""){
            myText= "Please provide a clothing item";
            document.querySelector('#clothing').focus();
            error.innerHTML= myText;
        }
        else if(food == ""){
            myText= "Please provide a food item!";
            document.querySelector('#food').focus();
            error.innerHTML= myText;
        }
        else if(adjective1 == ""){
            myText= "Please provide an adjective!";
            document.querySelector('#adjective1').focus();
            error.innerHTML= myText;
        }
        else if(funnoun1 == ""){
            myText= "Please provide a fun noun!";
            document.querySelector('#funnoun1').focus();
            error.innerHTML= myText;
        }
        else if(adjective2 == ""){
            myText= "Please provide an adjective!";
            document.querySelector('#adjective2').focus();
            error.innerHTML= myText;
        }
        else if(place == ""){
            myText= "Please provide a living place!";
            document.querySelector('#place').focus();
            error.innerHTML= myText;
        }
        else if(funnoun2 == ""){
            myText= "Please provide a fun noun!";
            document.querySelector('#funnoun2').focus();
            error.innerHTML= myText;
        }
        else if(pluralnoun2 == ""){
            myText= "Please provide a plural noun!";
            document.querySelector('#pluralnoun2').focus();
            error.innerHTML= myText;
        }
        else if(noun == ""){
            myText= "Please provide a noun!";
            document.querySelector('#noun').focus();
            error.innerHTML= myText;
        }
        else if(adjective3 == ""){
            myText= "Please provide an adjective!";
            document.querySelector('#adjective3').focus();
            error.innerHTML= myText;
        }
        else if(music == ""){
            myText= "Please provide a music genre!";
            document.querySelector('#music').focus();
            error.innerHTML= myText;
        }
        else if(pluralnoun3 == ""){
            myText= "Please provide a plural noun!";
            document.querySelector('#pluralnoun3').focus();
            error.innerHTML= myText;
        }
        else if(verb == ""){
            myText= "Please provide a verb!";
            document.querySelector('#verb').focus();
            error.innerHTML= myText;
        }
        else{
            overlay.className = 'showing';
            madlibs.innerHTML = `<p>Today's the day! The long awaited day to celebrate <span class="bolded">${pluralnoun1}</span>! You put on your favorite <span class="bolded">${color} ${clothing}</span> and rush out of your room to the kitchen. You decided that you will be making <span class="bolded">${food}</span> for this <span class="bolded">${adjective1}</span> occasion. You add all of the basic ingredients, but decide to spice things up by adding lots of <span class="bolded">${funnoun1}</span>. You think it will make it taste very <span class="bolded">${adjective2}</span>. With the food all done, you start to decorate your <span class="bolded">${place}</span> with <span class="bolded">${funnoun2}</span>-shaped banners and <span class="bolded">${pluralnoun2}</span>. You set out some <span class="bolded">${noun}</span>-scented candles and put on <span class="bolded">${adjective3} ${music}</span> music.</p><p>Ding-dong! That must be your friends! A group of <span class="bolded">${pluralnoun3}</span> rush into your home ready to <span class="bolded">${verb}</span>! Let the celebration begin!</p><button id="redo">Have another celebration!</button>`
            error.innerHTML = '';
            document.querySelector('#pluralnoun1').value= '';
            document.querySelector('#color').value= '';
            document.querySelector('#clothing').value= '';
            document.querySelector('#food').value= '';
            document.querySelector('#adjective1').value= '';
            document.querySelector('#funnoun1').value= '';
            document.querySelector('#adjective2').value= '';
            document.querySelector('#place').value= '';
            document.querySelector('#funnoun2').value= '';
            document.querySelector('#pluralnoun2').value= '';
            document.querySelector('#noun').value= '';
            document.querySelector('#adjective3').value= '';
            document.querySelector('#music').value= '';
            document.querySelector('#pluralnoun3').value= '';
            document.querySelector('#verb').value= '';
            
        }
    });

    // submit.addEventListener('click', function(){
    //     overlay.className = 'showing';
    // });

    document.addEventListener('click', function(event){
        if(event.target.id == 'redo'){
            overlay.className = 'hidden';
        }
    });




})();