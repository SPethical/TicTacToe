console.log("Welcome to Tic Tac Toe");
let turnSound = new Audio("sound/Iphone Massage Tone.mp3");
let winnerSound= new Audio("sound/Winner Winner Chicken Dinner ! Pubg Theme Tone.mp3")
let turn = "X";
let gameOver=false;
let reset= document.getElementById("reset");

// Fuction to change the turn
const changeTurn= ()=>{
    return turn == "X"?"0": "X";
}

// Function to check for a win
const  checkWin = ()=>{
    let boxtext= document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
wins.forEach(element =>{
    let condition1=(boxtext[element[0]].innerText === boxtext[element[1]].innerText);
    let condition2=(boxtext[element[2]].innerText === boxtext[element[1]].innerText);
    let condition3=(boxtext[element[2]].innerText !== '');
    if(condition1 && condition2 && condition3){
        document.getElementsByClassName("turn")[0].innerText = boxtext[element[0]].innerText + " Won";
        gameOver=true;
        winnerSound.play();
        document.getElementsByTagName("img")[0].style.display = "block";
        boxtext[element[0]].style.color = "green";
        boxtext[element[1]].style.color = "green";
        boxtext[element[2]].style.color = "green";
        // document.getElementsByClassName("box")[element[0]].style.backgroundColor = "yellow";
    }
})
}

//Game Logic
let boxes = Array.from(document.getElementsByClassName("box"));
boxes.forEach(Element =>{
    let boxtext= Element.querySelector('.boxtext');
    Element.addEventListener('click', ()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnSound.play();
            checkWin();
            if(!gameOver){

                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    
})