let userScore=0;
let compScore=0;
let comp=parseInt(Math.random()*3);
const msg = document.querySelector("#msg");
const choices=document.querySelectorAll('.choice');
let userScorePare=document.querySelector('#user-score');
let compScorePare=document.querySelector('#comp-score');
let dis=document.querySelector('.dis');

const genCompChoice=()=>{
    const options = ["rock", "paper", "scissors"];
  const randIdx = parseInt(Math.random() * 3);
  return options[randIdx];
}
const winner=(user,comp)=>{
    if(user==='rock'){
        if(comp==='paper'){
            return false;
        }else if(comp==='scissors'){
            return true;
        }else if(comp==='rock'){
            return 'Tie';
        }
    }else if(user==='paper'){
        if(comp==='paper'){
            return 'Tie';
        }else if(comp==='scissors'){
            return false;
        }else if(comp==='rock'){
            return true;
        }
    }else if(user==='scissors'){
        if(comp==='paper'){
            return true;
        }else if(comp==='scissors'){
            return 'Tie';
        }else if(comp==='rock'){
            return false;
        }
    }
}

const display=(winnerChoice,user,comp)=>{
    if(user===comp){
        msg.innerText='Match Draw,Play Again';
        msg.style.backgroundColor="#081b31";
    }else if(winnerChoice){
        userScore++;
        userScorePare.innerText=userScore;
        msg.innerHTML=`You win! Your ${user} beats ${comp}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePare.innerText=compScore;
        msg.innerText=`You lost! ${comp} beats your ${user}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const user=choice.getAttribute("id");
        let comp=genCompChoice();
        let winnerChoice=winner(user,comp);
        display(winnerChoice,user,comp);
    })
})