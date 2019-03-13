var win_combo = [
  ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
  ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],
  ["3", "5", "7"], ["1", "5", "9"]];

var flag = true;
var counter = 0;
var player1 = [];
var player2 = [];

// This function will add X or O when user click the table cell
function insert() {
// declare boolean variable to switch between X and O
  if (flag) {
    $(this).text("X");
    //$(this).addClass("X");
    $(this).css("background-color", "saddlebrown")
    flag = !flag;
    player1.push(event.target.id)
    checkWinner();

  } else {
    $(this).text("O");
    //$(this).addClass("O")
    $(this).css("background-color", "orange")
    flag = !flag;
    player2.push(event.target.id)
    checkWinner();
  }

}
$("td").one("click", insert)



function checkWinner() {
  var notequal = true;
  for (var j = 0; j < win_combo.length; j++) {
    if (player1.includes(win_combo[j][0]) && player1.includes(win_combo[j][1]) &&
      player1.includes(win_combo[j][2]) && notequal) {
      swal({
        title: "Congrats!",
        text: "Player X is win!",
        icon: "tarazan.gif",
        button: "Aww yiss!",
      });
      $("td").off("click", insert)
      notequal = false;
    }
    else if (player2.includes(win_combo[j][0]) && player2.includes(win_combo[j][1]) &&
      player2.includes(win_combo[j][2]) && notequal) {
     
      swal({
        title: "Congrats!",
        text: "Player O is win!",
        icon: "tarazan.gif",
        button: "Aww yiss!",
      });
      $("td").off("click", insert)
      notequal = false;
    }
    else if (player1.length == 5 || player2.length == 5) {
      if (notequal) {
        swal({
          title: "Sorry!",
          text: "No winner! try new game!",
          icon: "nowinner.gif",
          button: "OK",
        });
      }
    }


  }
}
function resetGame() {
  location.reload();
}

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