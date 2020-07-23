let userScore = 0;
let computerscore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerchoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}		

function convert(letter){
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}

function win(userchoice, computerchoice)
{
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerscore;
	result_p.innerHTML = convert(userchoice) + " beats " + convert(computerchoice) + ". You Win! ";
}

function lose(userchoice, computerchoice)
{
    computerscore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerscore;
	result_p.innerHTML = convert(userchoice) + " lose to " + convert(computerchoice) + ". You lose! ";
}

function draw(userchoice, computerchoice)
{
	userScore == computerscore;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerscore;
	result_p.innerHTML = convert(userchoice) + " equals " + convert(computerchoice) + ". draw "; 
}


function game(userchoice){
const computerchoice = getcomputerchoice();
switch (userchoice + computerchoice){
	case "rs":
	case "pr":
	case "sp":
	   win(userchoice, computerchoice);
	   break;
	case "rp":
	case "ps":
	case "sr":
	   lose(userchoice, computerchoice);
	   break;
	case "rr":
	case "pp":
	case "ss":
	   draw(userchoice, computerchoice);
	   break;   
}    
}


function main() {

rock_div.onclick = function() {game("r");
}

paper_div.onclick = function() {game("p");
}

scissors_div.onclick = function() {game("s");
}
}

main();