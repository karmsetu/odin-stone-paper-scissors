const reslutUI = document.querySelector(`.result`)
console.log(reslutUI)
let cmpScr = 0;
let plrScr = 0;
function getComputerChoice(){
    const choicesIndex = [1,2,3]
    // return choices[Math.floor(Math.random() * 3)]
    return choicesIndex[(Math.floor(Math.random() * 3))]
}
const choices = ['Rock', 'Paper', 'Scissors']
const against = ['Paper', 'Scissors', 'Rock']
const lost = ['Scissors', 'Rock', 'Paper']
computerSelection = getComputerChoice
function round(playerSelection ){
    computerSelection = getComputerChoice()
    cmpInd = computerSelection-1
    console.log("cmpInd:"+cmpInd)
        if (playerSelection == against[cmpInd]) {
            console.log("you won " )
            plrScr ++
            reslutUI.textContent = `You won`
            
        } else if (playerSelection == lost[cmpInd]) {
            console.log("you lost")
            cmpScr ++
            reslutUI.textContent = `You lost`
        } else if(playerSelection == choices[cmpInd]) {
            console.log("Continue..")
            reslutUI.textContent = `Continue`
        } else { console.log("error")}
        console.log("computerChoice: "+choices[cmpInd] )
        console.log("playerChoice: "+playerSelection )
    }


function game(){
    cmpScr = 0;
    plrScr = 0;
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt("Choose between rock, paper & Scissor !")
        round(playerSelection)
        if (cmpScr == 3) {
            console.log("computer wins")
        } else if (plrScr == 3) {
            console.log("You Won!!")
            
        } 
        // if (index = 4) {
        //     console.log("It was a tie")

        // }

    }
}