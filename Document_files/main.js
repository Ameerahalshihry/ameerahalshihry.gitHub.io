var win_combo = [
    ["1","2","3"],["4","5","6"],["7","8","9"],
    ["1","4","7"],["2","5","8"],["3","6","9"],
    ["3","5","7"],["1","5","9"]];

var flag = true;
var counter = 0;
var player1 = [];
var player2 = [];



function insert() {

    if (flag) {
        $(this).text("X");
        $(this).addClass("X")
        flag = !flag;
        player1.push(event.target.id)
        // counter++;
             checkWinner(); 

    } else {
        $(this).text("O");
        $(this).addClass("O")
        flag = !flag;
        player2.push(event.target.id)
        //counter++;
       checkWinner();
    }

}
$("td").one("click", insert)



function checkWinner() 
{
    var notequal= true;
for (var j=0;j < win_combo.length;j++)
     {  
            if (player1.includes(win_combo[j][0]) && player1.includes(win_combo[j][1]) &&
             player1.includes(win_combo[j][2]) && notequal)
            {
                console.log("Winner");
              swal("Congrats!", "X is win!")
              $("td").off("click", insert)
              notequal=false;
               //resetGame();
            }
            else if (player2.includes(win_combo[j][0]) && player2.includes(win_combo[j][1]) &&
             player2.includes(win_combo[j][2]) && notequal)
            {
                console.log("Winner");
              swal("Congrats!", "O is win!")
              $("td").off("click", insert)
              notequal=false;
              //resetGame();
            } 
            else if (player1.length==5 || player2.length==5 )
            {
                if (notequal)
                {
                    swal("no winner");
                }
            }
             

            }
        }
        
        
            

        
    
    
            
    




// function checkWinnerO(player2) 
// {
// for (var j=0;j < win_combo.length;j++)
//      {  
//             if (player2.includes(win_combo[j][0]) && player2.includes(win_combo[j][1]) &&
//              player2.includes(win_combo[j][2]))
//             {
//                 console.log("Winner");
//               swal("Congrats!", "O is win!")
//               $("td").off("click", insert)
//               //resetGame();
//             } 
//     }

// }


function resetGame()
{

location.reload();

    //button.addEventListener("click", function () {
        //var tds = document.getElementsByTagName('td');
//         var tds= $('td');
//         for(var i = 0; i < tds.length; i++) 
//         {
//             tds[i].innerHTML = '';
//         }
  }


// function checkWinnerX(marksArray)

// {
//     var player1_sorted = player1.sort().join();
// //console.log(sortedX) ;
    
//     for (let X of win_combo) {
//     var winSorted = X.sort().join();
//          if (player1_sorted === winSorted) 
//          {
//              console.log("win");
//          }else


//          {


//          }
//      }
//    }


// //    checkWinnerO(player2)
// //    {

// // console.log("YYYYYYY")

// //    }