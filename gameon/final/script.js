(function(){
    'use strict'
    console.log('reading JS');

    const start = document.querySelector('#begingame');
    const play = document.querySelector('.play');
    const overlay = document.querySelector('.overlay');

    const restart = document.querySelector('#restartbutton');
    const rules = document.querySelector('#rulesbutton');
    const sound= document.querySelector('#sound');
    let soundonoff = 1;

    const shake = document.querySelector('#shake');
    const jar = document.querySelector('#jarshake');

    const player1 = document.querySelector('#player1dice');
    const player2 = document.querySelector('#player2dice');

    const music = new Audio('sounds/music.mp3');
    const jarsound = new Audio('sounds/jarshake.mp3');
    // const jarsound= new Audio('sounds/ding1.mp3');

    const gameData = {
        dice: ['stardie1.png', 'stardie2.png', 'stardie3.png', 'stardie4.png', 'stardie5.png', 'stardie6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    play.addEventListener('click', function(){
        overlay.style.visibility = 'hidden';
    });

    rules.addEventListener('click', function(){
        overlay.style.visibility = 'visible';
    });

    sound.addEventListener('click', function(){
        if (soundonoff == 1){
            music.muted = true;
            jarsound.muted = true;
            sound.innerHTML = `<button id="sound">sound on</button>`;
            soundonoff = 2;
        }
        else if(soundonoff = 2){
            music.muted = false;
            jarsound.muted = false;
            sound.innerHTML = `<button id="sound">sound off</button>`;
            soundonoff = 1;
        }
    });


    start.addEventListener('click', function(){
        music.volume = 0.05;
        music.play();

        music.addEventListener('ended', function(){
            music.currentTime = 0;
            music.play();
        });

        restart.innerHTML = 'restart game';
        start.remove();

        document.querySelector('#restartbutton').addEventListener('click', function(){
            location.reload();
        });

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        setUpTurn();
    });

    function setUpTurn(){
        shake.innerHTML = 'shake for ' + gameData.players[gameData.index];
        document.querySelector("#buttonsarea").innerHTML = '<button id="roll">Shake</button>';

        document.querySelector('#roll').addEventListener('click', function(){
            throwDice(); 
        });
    };

    function throwDice(){
        // actionArea.innerHTML = '';
        jar.className = 'shaking';

        jarsound.volume = 0.1;
        jarsound.currentTime = 3;
        jarsound.play();

        jar.addEventListener('animationend', function(){
            jar.removeAttribute('class');
            jarsound.pause();
        });

        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;

        shake.innerHTML ='shake for ' + gameData.players[gameData.index];
        
        if(gameData.players[gameData.index] === 'player 1'){
            player1.innerHTML = `<div class="dicerolls" id="player1dice"><img src="images/${gameData.dice[gameData.roll1-1]}" width="100"><img src="images/${gameData.dice[gameData.roll2-1]}" width="100"></div>`;
        }
        else{
            player2.innerHTML = `<div class="dicerolls" id="player2dice"><img src="images/${gameData.dice[gameData.roll1-1]}" width="100"><img src="images/${gameData.dice[gameData.roll2-1]}" width="100"></div>`;
        }

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            console.log('snake eyes');

            gameData.index ? (gameData.index=0) : (gameData.index=1);
            shake.innerHTML = '<p>Boom! Snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        } else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of them is a one');

            gameData.index ? (gameData.index=0) : (gameData.index=1);
            shake.innerHTML = `<p>You got a one! ${gameData.players[gameData.index]}'s turn now!</p>`;
            setTimeout(setUpTurn, 2000);

        } else{
            console.log('no ones');

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            document.querySelector("#buttonsarea").innerHTML = '<button id="rollagain">Shake again</button> <p style="display: inline;">&nbsp;&nbsp;or&nbsp;&nbsp;</p> <button id="pass">Pass</button>';

            //add roll again button 
            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index=0) : (gameData.index=1);
                setUpTurn();
            });
        }
        
        checkWinningCondition();
    };

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            showCurrentScore();
            shake.innerHTML = `<p>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} stars!</p>`;

            document.querySelector("#buttonsarea").innerHTML = '';
            // document.querySelector('#quit').innerHTML = 'Start a New Game?';
        } else{
            //show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){

        if(gameData.players[gameData.index] === 'player 1'){
            document.querySelector('#p1score').innerHTML= `<p id="p1score">${gameData.score[0]}</p>`;
        }
        else{
            document.querySelector('#p2score').innerHTML= `<p id="p2score">${gameData.score[1]}</p>`;
        }
        // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:${gameData.score[0]}</strong> and <strong>${gameData.players[1]}:${gameData.score[1]}</strong></p>`;
    }

})();