var currentPlayer = "Player 1"
var player1Score = 0;
var player2Score = 0;
var currentRound = 1

// Get player names
var player1Name = prompt("Who is player 1? ")
var player2Name = prompt("Who is player 2? ")

// Place names on page
document.getElementById("player1nameHolder").innerHTML = player1Name
document.getElementById("player2nameHolder").innerHTML = player2Name

async function diceRoll() {
    // Get IDS from html
    face1 = document.getElementById("img1");
    face2 = document.getElementById("img2");

    // Narative of Round
    var resultString = currentPlayer + " ";

    // Update Instruction 
    document.getElementById("instruction").innerHTML = "* Rolling *"
    
    // variables for the round
    var dice1 = 0;
    var dice2 = 0;

    // Cycle faces of dice and get random roll
    for (i = 0; i < 10; i++) {
        // generate random number
        dice1 = Math.floor((Math.random() * 6) + 1);
        dice2 = Math.floor((Math.random() * 6) + 1);
        
        // Gen image path
        let path1 = "images/dice" + dice1 + ".png";
        let path2 = "images/dice" + dice2 + ".png";

        // Update image
        face1.src = path1;
        face2.src = path2;

        // Sleep
        await sleep(200);

    }
    // Update output
    var total = dice1 + dice2;
    resultString = resultString + "rolled a " + dice1 + " and a " + dice2 + " which is " + total + " in total.";

    // Is the total an even or odd number
    if (total % 2 === 0) {
        resultString = resultString + " As this is an even number 10 more points are added to your score."
        total += 10;
    }
    else {
        resultString = resultString + " As this is an odd number you lose 5 points. ☹️"
        total -= 5;
    }

    // Update scores
    if (currentPlayer === "Player 1") {
        player1Score += total;
    }
    else {
        player2Score += total;
    }

    // Is the score a double?
    if (dice1 === dice2) {
        resultString = resultString + " As this is a double you get another roll.";
        // Do not switch
    }
    else {
        // Switch Players
        if (currentPlayer === "Player 1") {
            currentPlayer = "Player 2";
        }
        else {
            currentPlayer = "Player 1";
            // Add round assuming p1 goes and then p2
            currentRound ++;
        }
    }
    
    // Update Output
    resultString = resultString + " You scored " + total + " points in this round."

    // Update Instruction 
    document.getElementById("result").innerHTML = resultString;
    document.getElementById("instruction").innerHTML = currentPlayer + " Roll";

    // Update round counter
    document.getElementById("roundCounter").innerHTML = "Round: " + currentRound;

    

    // Output scores
    document.getElementById("player1scoreHolder").innerHTML = player1Score;
    document.getElementById("player2scoreHolder").innerHTML = player2Score;


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



