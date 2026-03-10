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

        document.querySelector('#restartbutton').addEventListener('click', function(){
            location.reload();
        });


        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        const shake = document.querySelector('#shake');

        setUpTurn();
    });

    function setUpTurn(){
        shake.innerHTML = 'click the jar for ' + gameData.players[gameData.index];
        console.log('hi');

        // actionArea.innerHTML = '<button id="roll">Roll the Dice</button>'

        // document.querySelector('#roll').addEventListener('click', function(){
        //     throwDice();
        // });
    };

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;

        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            console.log('snake eyes');

            gameData.index ? (gameData.index=0) : (gameData.index=1);
            game.innerHTML += '<p>Oh no! Snake eyes!</p>'
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        } else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of them is a one');

            gameData.index ? (gameData.index=0) : (gameData.index=1);
            game.innerHTML += `<p>You got a one! Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);

        } else{
            console.log('no ones');

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

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