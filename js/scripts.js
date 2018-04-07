// business logic

// dice logic
var dice = function(){
return Math.floor(Math.random() * 6)+ 1;
}

// player turn
function Player(roll, currentScore, totalScore){
  this.roll = roll
  this.currentScore = currentScore
  this.totalScore = totalScore
}
var player1 = new Player(0, 0, 0);
var player2 = new Player(0, 0, 0);

// if dice rolls to a 1
Player.prototype.diceOne = function () {
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("you rolled a one so your turn ends");
  };
  else {
    this.currentScore += this.roll;
    // totalScore += currentScore
  }
};

// if a player holds
Player.prototype.holding = function () {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
  alert("You presssed hold it's the next player's turn");
};

// winner
Player.prototype.winner = function () {
  if (this.totalScore >= 100) {
    alert("CONGRATULATIONS!!!You just won the game")
  }
};

 // starting a new game
 Player.prototype.newGame = function (roll, currentScore, totalScore) {
   this.roll = roll
   this.currentScore = currentScore
   this.totalScore = totalScore
 };

// user interface logic
