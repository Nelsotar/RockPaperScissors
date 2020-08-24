class RockPaperScissors{
  //Sets initial class values
  constructor(){
    this._rockComp = "./images/rockComp.jpg";
    this._scissorsComp = "./images/scissorsComp.jpg";
    this._paperComp = "./images/paperComp.jpg";

    this._rockUser = "./images/rockUser.jpg";
    this._scissorsUser = "./images/scissorsUser.jpg";
    this._paperUser = "./images/paperUser.jpg";
    this._curWinStreak = 0;
    this._longestWinStreak = 0;
    this._gameResolution = "";
  }

  //Sets a round in motion
  playRound(){
    this.setUserMove();
    this.setComputerMove();
    this.setWinner();
    this.setMessage();
    this.setStreaks();
    return false;
  }

  //Generates a choice for the computer randomly - either rock, paper, or scissors. Returns it as a string.
  getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);

    switch(compChoice){
      case 0:
        return "Rock";
        break;
      case 1:
        return "Paper";
       break;
      case 2:
        return "Scissors";
    }
  }

  //gets the user's choice from the form on the main page, sets the move text and image.
  setUserMove(){
    let userMoveTxt = document.getElementById("userChoiceTxt");
    let userMovePic = document.getElementById("userChoicePic");
    let userChoice = document.getElementById("playerChoice").value;

    userMoveTxt.innerHTML = userChoice;

    switch(userChoice){
      case "Rock":
        userMovePic.src = this._rockUser;
        break;
      case "Paper":
        userMovePic.src = this._paperUser;
        break;
      case "Scissors":
        userMovePic.src = this._scissorsUser;
    }
  }

  //Calls getComputerChoice to generate a choice for computer. Sets move text and image.
  setComputerMove(){
    let compMoveTxt = document.getElementById("compChoiceTxt");
    let compMovePic = document.getElementById("compChoicePic");
    let computerChoice = this.getComputerChoice();

    compMoveTxt.innerHTML = computerChoice;

    switch(computerChoice){
      case "Rock":
        compMovePic.src = this._rockComp;
        break;
      case "Paper":
        compMovePic.src = this._paperComp;
        break;
      case "Scissors":
        compMovePic.src = this._scissorsComp;
    }
  }

  //sets the class's gameResolution value based on who won (or based whether the game was a darw)
  setWinner(){
    let userChoice = document.getElementById("userChoiceTxt").innerHTML;
    let compChoice = document.getElementById("compChoiceTxt").innerHTML;

    if(userChoice === compChoice){
      this._gameResolution = "Draw";
    }
    else if((userChoice === "Rock" && compChoice === "Scissors")||
            (userChoice === "Paper" && compChoice === "Rock")||
            (userChoice === "Scissors" && compChoice === "Paper")){
      this._gameResolution = "Win";
    }
    else{
      this._gameResolution = "Lose";
    }
  }

  //Displays the appropriate message at the bottom of the screen based on who won.
  setMessage(){
    let message = document.getElementById("message");

    if(this._gameResolution === "Win"){
      message.innerHTML = "You win! Good job!";
    }
    else if(this._gameResolution === "Lose"){
      message.innerHTML = "You lose! Better luck next time!";
    }
    else if(this._gameResolution === "Draw"){
      message.innerHTML = "Draw! No winners or losers here.";
    }
  }

  //Updates the streak displays
  setStreaks(){
    let currentStreak = document.getElementById("currentWinNum");
    let longestStreak = document.getElementById("longestWinNum");

    if(this._gameResolution === "Win"){
      this._curWinStreak++;
    }
    else if(this._gameResolution === "Lose" || this._gameResolution === "Draw"){
      this._curWinStreak = 0;
    }

    if(this._curWinStreak > this._longestWinStreak){
      this._longestWinStreak = this._curWinStreak;
    }

    currentStreak.innerHTML = this._curWinStreak;
    longestStreak.innerHTML = this._longestWinStreak;
  }
}

//Creates a RockPaperScissors object
let round = new RockPaperScissors();
