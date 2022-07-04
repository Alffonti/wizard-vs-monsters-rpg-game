import characterData from "/data.js"
import Character from "/Character.js"

let monstersArray = ['orc','demon','goblin']
//  Initializing the isWaiting variable
let isWaiting = false

// Taking the first monster from monstersArray and extracting that monster's data from characterData.
function getNewMonster(){
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack(){
    // Disabling the user's ability to attack when a monster dies.
    if (!isWaiting){
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
        // Checking if a character is dead (true); if not, the statement is undefined
        if (wizard.dead) {
            endGame()
            } else if (monster.dead) {
                // Disabling the user's ability to attack when a monster dies (by setting the isWaiting variable to true; the attack() function will not run when the ATTACK button is clicked until the isWaiting is reset back to false)
                isWaiting = true
            if (monstersArray.length) {
                setTimeout(() => {
                    monster = getNewMonster()
                    render() 
                    // Reneableing the user's ability to attack when a new monster loads
                    isWaiting = false
                }, 1500)
            } else {
                endGame()
            }
        }
    }
}

function endGame() {
    // Disabling the user's ability to attack when the game is over
    isWaiting = true
    const endMessage = wizard.health === 0 && monster.health === 0 ? 
        'No victory - all creatures are dead': 
        wizard.health > 0 ? 'The Wizard Wins': 
        'The Monsters Wins'
    const endEmoji = wizard.health > 0 ? '🔮': '☠️'
    setTimeout(() => {
        document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`   
    }, 1500)

}

function render(){
    // Calling the getCharacterHtml() method which is inside the Character constructor function
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack)

// Setting new instances of the Character constructor function
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()