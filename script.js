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
        
    } else if (playerSelection == lost[cmpInd]) {
        console.log("you lost")
    } else if(playerSelection == choices[cmpInd]) {
        console.log("Continue..")
    } else { console.log("error")}
    console.log("computerChoice: "+choices[cmpInd] )
    console.log("playerChoice: "+playerSelection )
}