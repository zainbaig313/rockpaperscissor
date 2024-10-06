let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara= document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    // console.log(randIdx);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("the game is draw");
    msg.innerText="The game was draw. play again!"
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win !");
        msg.innerText=`You win! you ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
       console.log("user choice =",userChoice);
       //Genreate computer choice 
       const compChoice=genCompChoice();
       console.log("computer choice =", compChoice);
       
       if(userChoice === compChoice){
         drawGame();
       } else {
        let  userWin=true;
        if(userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor" ? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock" ? false:true;
        
        }
        showWinner(userWin , userChoice, compChoice);
       }
       
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    //    console.log("choice was selected",userChoice);
        playGame(userChoice);
    })
});