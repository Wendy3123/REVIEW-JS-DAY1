let userSelection = prompt("rock, paper or scissor?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number                        

//Conditional logic goes here to determine the computers selection
if (computerSelection < 0.34) {
	computerSelection = "rock";
} else if(computerSelection <= 0.67) {
	computerSelection = "paper";
} else {
	computerSelection = "scissors";
}


//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
    if(selection1===selection2){
        return "The result is a tie!";
    }
    else if(selection1==="rock"){
        if(selection2==="scissors"){
            return "You win against scissors"
        }
        else if(selection2==="paper"){
            return "You lose to paper";
        }
    }
    else if(selection1==="paper"){
        if(selection2==="scissors"){
            return "You lose to scissors"
        }
        else if(selection2==="rock"){
            return "You win to rock";
        }
    }
    else if(selection1==="scissors"){
        if(selection2==="paper"){
            return "You win to paper"
        }
        else if(selection2==="rock"){
            return "You lose to rock";
        }
    }    
}
alert(compare(userSelection,computerSelection)); //call the function to compare and display result