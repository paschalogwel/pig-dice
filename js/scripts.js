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
    alert("you rolled a 1 so your turn ends");
  }
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
// starting a the game
$(document).ready(function() {
  $("#start").click(function(){
    event.preventDefault();
    $("#rules").hide();
    $(".container").show();
    var name1 = $("input#one").val();
    var name2 = $("input#two").val();
    $("h2#name1").text(name1 + ":");
    $("h2#name2").text(name2 + ":");

    });
    // if player 1 plays
$("#roll1").click(function(){
  player1.roll = dice()
  $("h2#diceRoll1").text("Dice Roll:" + player1.roll);
  player1.diceOne();
  $("#current1").text("Current Score:" + player1.currentScore);
});
// if player 2 plays
$("#roll2").click(function(){
  player2.roll = dice()
  $("h2#diceRoll2").text("Dice Roll:" + player2.roll);
  player2.diceOne();
  $("#current2").text("Current Score:" + player2.currentScore);
});
// if player 1 holds
$("#hold1").click(function(){
  player1.holding();
  $("#total1").text("Total Score:" + player1.totalScore);
  $("#diceRoll1").empty();
  $("#current1").empty();
  player1.winner();
});
// if player 2 holds
$("#hold2").click(function(){
  player2.holding();
  $("#total2").text("Total Score:" + player2.totalScore);
  $("#diceRoll2").empty();
  $("#current2").empty();
  player2.winner();
});
// starting a new game
$("#newgame").click(function(){
  $(".container").hide();
  $("input#name1").val("");
  $("input#name2").val("");
  player1.newGame();
  player2.newGame();
  $("#diceRoll1").empty();
  $("#current1").empty();
  $("#total1").empty();
  $("#diceRoll2").empty();
  $("#current2").empty();
  $("#total2").empty();
  $("#rules").show();
});
});
