function getComputerChoice(){
    const choicesIndex = [1,2,3]
    // return choices[Math.floor(Math.random() * 3)]
    return choicesIndex[(Math.floor(Math.random() * 3))]
}
const choices = ['Rock', 'Paper', 'Scissors']
const against = ['Paper', 'Scissors', 'Rock']
const lost = ['Scissors', 'rock', 'paper']
computerSelection = getComputerChoice
function round(playerSelection ){
    computerSelection = getComputerChoice()
    if (playerSelection == against[computerSelection-1]) {
        console.log("you won " )
        
    } else if (playerSelection == lost[computerSelection-1]) {
        console.log("you lost")
    } else if(playerSelection == choices[computerSelection-1]) {
        console.log("Continue..")
    } else { console.log("error")}
    console.log("computerChoice: "+choices[computerSelection-1] )
    console.log("playerChoice: "+playerSelection )
}