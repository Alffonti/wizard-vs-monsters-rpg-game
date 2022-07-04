import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "/utils.js"

// Defining a class to add methods to be used during the game
class Character {

    // PROPERTIES
    constructor(data){
        // Copying the properties from the DATA object (source) to the THIS object (target)
        Object.assign(this,data)
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
        this.maxHealth = this.health
    }

    // METHODS

    // Returning the update currentDiceScore when the attack button is clicked
    setDiceHtml() {
        // Using an arrow function for the .map anonymous callback function
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map( num => `<div class="dice">${num}</div>`).join('')
    }

    takeDamage(attackScoreArray){
        // Using the reduce() method to calculate the total damage
        const totalAttackScore = attackScoreArray.reduce( (total, num) => total + num )
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.health = 0
            this.dead = true
            // console.log(`${this.name} is dead`)
        }
        // console.log(`${this.name} is being damaged by ${totalAttackScore}`)
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health,this.maxHealth)
        return `
        <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? 'danger' : ''}" 
            style="width: ${percent}%;">
        </div>
        </div>
        `
    }

    getCharacterHtml(){
        // Deconstructing the THIS object
        const {elementId, name, avatar, health, diceCount, diceHtml} = this

        const healthBar = this.getHealthBarHtml()

        // getDiceHtml wasn't a property copied onto the THIS object 
        // the THIS keyword need to be added to the getDiceHtml function
        return `                 
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            ${healthBar}
            <div class="dice-container">${diceHtml}</div>
        </div>    
        `
    }
}

export default Character