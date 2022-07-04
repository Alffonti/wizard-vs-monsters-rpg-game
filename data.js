// Storing each of the character data (element id, name, avatar, health and dice score) 
// in a characterData object
const characterData = {
    hero: {
        name: 'Wizard',
        avatar: 'images/wizard.png',
        health: 60,
        diceCount: 3,
        currentDiceScore: []
    },
    orc: {
        name: 'Orc',
        avatar: 'images/orc.png',
        health: 30,
        diceCount: 1,
        currentDiceScore: []
    },
    demon: {
        name: 'Demon',
        avatar: 'images/demon.png',
        health: 25,
        diceCount: 2,
        currentDiceScore: []
    },
    goblin: {
        name: 'Goblin',
        avatar: 'images/goblin.png',
        health: 20,
        diceCount: 3,
        currentDiceScore: []
    }
}

// exporting by default (no need for brackets{})
// I can change the variable name when I import but, I can only export one variable from this file
export default characterData