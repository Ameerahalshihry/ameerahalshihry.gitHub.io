var win_combo = [
  ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
  ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],
  ["3", "5", "7"], ["1", "5", "9"]];

var flag = true;
var counter = 0;
var player1 = [];
var player2 = [];
var scorePlayer1=0;
var scorePlayer2=0;
var gameOver = false;

//call function insert when the user click on table cell 
$("td").on("click", insert)


// This function will add X or O when user click the table cell
function insert() {
// declare boolean variable to switch between X and O
if ($(this).text() == "" && gameOver == false){
  if (flag) {
    $(this).text("X");
    $(this).css("background-color", "saddlebrown")
    flag = !flag;
    //add the id for the cell that clicked from player1 to the array of player1
    player1.push(event.target.id)
    //call function checkWinner to check if player1 is winner or not
    checkWinner();

  } else {
    $(this).text("O");
    $(this).css("background-color", "orange")
    flag = !flag;
    //add the id for the cell that clicked from player2 to the array of player2
    player2.push(event.target.id)
    //call function checkWinner to check if player2 is winner or not
    checkWinner();
  }

}
}

//this function checkWinner will check who's win
function checkWinner() {
  var notequal = true; //declare boolean variable to determine if no winner 
  for (var j = 0; j < win_combo.length; j++) //loop for array that contain the possible way to win
  {
    if (player1.includes(win_combo[j][0]) && player1.includes(win_combo[j][1]) &&
      player1.includes(win_combo[j][2]) && notequal) // check if the array for player 1 contains a first element in win_combo array win_combo[j][0], and contains second element win_combo[j][1],and contains third element win_combo[j][2] and the boolean variable is true
      {
      swal({// sweet alert shows the player1 is winner
        title: "Congrats!",
        text: "Player X is winner!",
        icon: "tarazan.gif",
        button: "Aww yiss!",
      });
      gameOver = true
      notequal = false;
      scorePlayer1++;
      score();
     
    }
    else if (player2.includes(win_combo[j][0]) && player2.includes(win_combo[j][1]) &&
      player2.includes(win_combo[j][2]) && notequal) // check if the array for player 1 contains a first element in win_combo array win_combo[j][0], and contains second element win_combo[j][1],and contains third element win_combo[j][2] and the boolean variable is true
      {
      swal({// sweet alert shows the player2 is winner
        title: "Congrats!",
        text: "Player O is winner!",
        icon: "tarazan.gif",
        button: "Aww yiss!",
      });
      gameOver = true
      notequal = false;
      scorePlayer2++;
      score();
    }
    else if (player1.length == 5 || player2.length == 5)//check if the player1 or player2 clicked all cells and no winner 
     {
      if (notequal) {
        swal({// sweet alert shows no winner
          title: "Sorry!",
          text: "No winner! play again!",
          icon: "nowinner.gif",
          button: "OK",
        });
      }
    }


  }
}
//This function to reset the game
function resetGame() {
$('td').empty(); //make all table empty
player1 = [];
player2 = [];
$('td').css("background-color","white");
flag = true;
gameOver = false;
}

function reloadGame() // reload the game
{
  location.reload();

}
function score() //display score
{
$("#score1").html(scorePlayer1); //display score for player 1
$("#score2").html(scorePlayer2);//display score for player 2
}

// These functions for drag and drop allowDrop(ev),drag(ev),drop(ev)
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  document.getElementById(data).classList.add("fixed")
  ev.target.appendChild(document.getElementById(data));
}
