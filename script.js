const game = ()=> {
    let pScore=0;
    let cScore=0;

    const startGame=()=> {
        const playBtn=document.querySelector('.btn-start');
        const intro=document.querySelector('.intro');
        const match=document.querySelector('.match');

        playBtn.addEventListener('click', function(){
            intro.classList.add("fadeOut");
            match.classList.add('fadeIn');
        });
    };

    const playMatch = ()=>{
        const options=document.querySelectorAll(".options button");
        const playerHand=document.querySelector(".player-hand");
        const comHand=document.querySelector(".com-hand");

        const comOptions=["rock","paper","scissor"];

        options.forEach(option=> {

            console.log("1");
            option.addEventListener("click",function(){

                console.log("2");
                const comNum=Math.floor(Math.random()*3);
                console.log(comNum);
                const comChoice=comOptions[comNum];
                console.log(comChoice);

                console.log("3");
                compareHands(this.textContent,comChoice);

                console.log("4");

                playerHand.src=`./images/${this.textContent}.png`;
                comHand.src=`./images/${comChoice}.png`;
            });
        });
    };

    const update= ()=> {
        const playerScore=document.querySelector('.player-score p');
        const comScore=document.querySelector('.com-score p');
        playerScore.textContent=pScore;
        comScore.textContent=cScore;
    };

    const compareHands=(playerChoice,comChoice)=>{
        const winner=document.querySelector('.winner');
        if(comChoice===playerChoice) {
            winner.textContent="It's a tie";
            return;
        }
        else if(playerChoice==='rock'){
            if(comChoice==='scissor'){
                winner.textContent="Player wins";
                pScore++;
                update();
                return;
            }
            else{
                winner.textContent="Computer wins";
                cScore++;
                update();
                return;
            }
        }
        else if(playerChoice==='scissor'){
            if(comChoice==='paper'){
                winner.textContent="Player wins";
                pScore++;
                update();
                return;
            }
            else{
                winner.textContent="Computer wins";
                cScore++;
                update();
                return;
            }
        }
        else if(playerChoice==='paper'){
            if(comChoice==='rock'){
                winner.textContent="Player wins";
                pScore++;
                update();
                return;
            }
            else{
                winner.textContent="Computer wins";
                cScore++;
                update();
                return;
            }
        }
    };



    startGame();
    playMatch();

};


game();