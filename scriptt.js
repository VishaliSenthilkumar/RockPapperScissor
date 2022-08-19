const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const comHand = document.querySelector(".com-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //com Options
      const comOptions = ["rock", "paper", "scissor"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //com Choice
          const comNumber = Math.floor(Math.random() * 3);
          const comChoice = comOptions[comNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, comChoice);
            //Update Images
            playerHand.src = `./images/${this.textContent}.png`;
            comHand.src = `./images/${comChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          comHand.style.animation = "shakecom 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const comScore = document.querySelector(".com-score p");
      playerScore.textContent = pScore;
      comScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, comChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === comChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (comChoice === "scissor") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "com Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (comChoice === "scissor") {
          winner.textContent = "com Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for scissor
      if (playerChoice === "scissor") {
        if (comChoice === "rock") {
          winner.textContent = "com Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();