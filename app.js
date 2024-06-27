let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



//this step is look for computer choice
const genComChoice = () => {
    const options = ["stone", "paper", "scissor"];
   const randIdx = Math.floor(Math.random() *3);
   return options[randIdx];
}


const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "rgb(0, 9, 63)"
}


//this step is look for result of win or lose
const showWinner = (userWin, userChoice, compChoice) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green"
}else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red"
}
}


//Generate user choice
const playGame = (userChoice) => {
 console.log("user choice =", userChoice);

//Generate computer choice
const compChoice = genComChoice();
console.log("comp choice =", compChoice );

//loop for perparing result
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "stone"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false : true;
    } else{
        userWin = compChoice === "rock"? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
}
};



choices.forEach((choice) => {
    console.log(choice);
    // this step is to look for user choice
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})