(function(){
    'use strict'
    console.log('reading JS');

    const start = document.querySelector('#begingame');
    const play = document.querySelector('.play');
    const overlay = document.querySelector('.overlay');
    // const gameControl = document.querySelector('#gamecontrol');

    const restart = document.querySelector('#restartbutton');
    const rules = document.querySelector('#rulesbutton');

    const jars = document.querySelector('.jar');
    // const shake = document.querySelector('#shake');

    // const game = document.querySelector('#game');
    // const score = document.querySelector('#score');
    // const actionArea = document.querySelector('#actions');

    const player1 = document.querySelector('#player1dice');
    const player2 = document.querySelector('#player2dice');

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

    start.addEventListener('click', function(){
        restart.innerHTML = 'restart game';
        start.remove();
        jars.innerHTML += `<button id="pass">pass turn</button>`;
        const shake = document.querySelector('#shake');
        const roll = document.querySelector('#roll');
        const pass = document.querySelector('#pass');

        document.querySelector('#restartbutton').addEventListener('click', function(){
            location.reload();
        });

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        setUpTurn();
    });

    function setUpTurn(){
        shake.innerHTML = 'click the jar for ' + gameData.players[gameData.index];
        console.log('hi');

        roll.addEventListener('click', function(){
            throwDice(); 
        });
    };

    function throwDice(){
        // actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;

        shake.innerHTML ='click the jar for ' + gameData.players[gameData.index];
        
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
            jars.innerHTML += '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            //add roll again button 
            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            pass.addEventListener('click', function(){
                gameData.index ? (gameData.index=0) : (gameData.index=1);
                setUpTurn();
            });
        }
        
        checkWinningCondition();
    };

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start a New Game?';
        } else{
            //show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:${gameData.score[0]}</strong> and <strong>${gameData.players[1]}:${gameData.score[1]}</strong></p>`;
    }

})();