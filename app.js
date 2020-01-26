/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,antivePlayer,gameActive,winningScore;

initGame();
    document.querySelector('.player-1-panel').classList.add('active');


//Math.floor(Math.random()*6)+1;


document.querySelector('.btn-roll').addEventListener('click',function()
{
    if(gameActive&&winningScore)
    {
        var dice=Math.floor(Math.random()*6)+1;
        var diceDOM=document.querySelector('.dice');
        //display
        diceDOM.style.display='block';
        diceDOM.src='dice-'+dice+'.png';

        roundScore=roundScore+dice;
        //score updater
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        if(dice===1)
        {
            nextPlayer();
        }
        if(dice===6)
            i++;
        if(dice!==6)
            i=0;
        if(i===2)
        {
            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]
            nextPlayer();
        }
    }
});



document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(gameActive&&winningScore)
    {
        scores[activePlayer]+=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=winningScore)
        {
            document.querySelector('#name-'+activePlayer).textContent='Winner!!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gameActive=false;
        }

        nextPlayer();
    }
});


document.querySelector('.btn-new').addEventListener('click',initGame);


function nextPlayer()
{
    roundScore=0;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    if(activePlayer===0)
        activePlayer=1;
    else
        activePlayer=0;
    document.querySelector('.dice').style.display='none';
    
}

function initGame()
{
    document.querySelector('.dice').style.display='none';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.querySelector('#name-0').textContent='PLAYER 1';
    document.querySelector('#name-1').textContent='PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gameActive=true;
    i=0;
    winningScore=document.querySelector('.final-score').value;
}

























