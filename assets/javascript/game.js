// HANGMAN GAME

window.onload = function() {
// empty array to push underscores and letters onto

chosenWordSpace = [];

// On Page Load User is given 12 chances

var lives = 12;


//computer chooses random word from Array

var randomWord = ["popcorned", "mayweathered", "faking", "scorpion", "Ghost Holes" ];

var chosenWord = randomWord[Math.floor(Math.random() * randomWord.length)];
console.log(chosenWord); 


// Save word as new variable and split into each letter.

var lettersInChosenWord = chosenWord.split("");

console.log(lettersInChosenWord);


// Replace each letter with underscores on page

for (var i=0; i < lettersInChosenWord.length; i++) {
    chosenWordSpace.push("_ ");
    
}

// get current-word-space HTML and insert the the underscors.  Use join to seperate by space instead of comma.
document.getElementById("current-word-space").innerHTML = chosenWordSpace.join(" ");



// When a user chooses a letter:
document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
        

    // Compare to letters in word

    for (var i = 0; i < lettersInChosenWord.length; i++) {

        return lettersInChosenWord;
        
        // if letter matches
        if (userGuess === lettersInChosenWord[i]) {

            // replace the the underscore with the letter
            
            
                
            }  
    }

    

    }




}





