// Multiple utilities

function getDiceRollArray(diceCount){
    // Constructing an array
    // Generating a random value for dice
    return new Array(diceCount).fill(0).map( () =>
    Math.floor(Math.random() * 6) + 1 )
}

const getPercentage = (remainingHealth, maximumHealth) => 
    remainingHealth * 100 / maximumHealth

function getDicePlaceholderHtml(diceCount){
    // Mapping the getDiceRollArray array
    // adding the join() method to concatinate strings without commas
    return new Array(diceCount).fill(0).map( () =>
    `<div class="placeholder-dice"></div>`).join('')
}

// exporting with names (need brackets{})
// I can not change the variable name when I import but, I can export multiple variables from this file
export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}