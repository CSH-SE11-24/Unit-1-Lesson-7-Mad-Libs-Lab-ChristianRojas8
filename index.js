// Console log a welcome message with instructions to mad libs
let welcome = prompt("Welcome to MAD LIBS! Make up words that are a verb, adjective, noun, and plural noun to make a weird sentence.")
// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me a adjective")
let verb = prompt("Give me a verb")
let noun  = prompt("Give me a noun")
let pluralNoun = prompt("Give me a plural noun")

// Create an array that stores the values the user entered
let newarray = []
newarray.push(adjective)
newarray.push(verb)
newarray.push(noun)
newarray.push(pluralNoun)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log("In a small " + newarray[0] + " school in the Bronx, there was a problem with too many " + newarray[3] + ". These " + newarray[3] + " loved to " + newarray[1] + ", which caused Mr.P so many headaches. However, no one wanted to remove them becasue they were too " + newarray[1] + " so they stayed there forever.")








