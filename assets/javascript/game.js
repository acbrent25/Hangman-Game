


// HANGMAN GAME


var randomWord = ["popcorned", "redneck", "faking", "scorpion", "ghostholes" ];
var wins = 0;
var currentWordLetters = [];
var currentWordLettersPlaceholder = [];
var guessesLeft = 0;
var lettersAlreadyGuessed = [];
var currentWord = [];





function newGame() {
    // Set the number of guesses
    guessesLeft = 13;
    lettersAlreadyGuessed = [];
    

    // Add them to the dom
    document.querySelector("#guesses-left").textContent = guessesLeft;
    
    // Ads wis to the dom
    document.querySelector("#wins").textContent = wins;
       
   
        resetWord();
    
        


        // Pick a Random Word
       currentWord = randomWord[Math.floor(Math.random() * randomWord.length)];
        
        console.log('currentWord = ' + currentWord);

        // Split Random Word into array of letters.
        currentWordLetters = currentWord.split("");

        console.log('currentWordLetters = ' + currentWordLetters);

        // for each letter add an underscore spaceholder to <p id="current-word"></p><br>

        for (var i = 0; i < currentWord.length; i++) {
            currentWordLettersPlaceholder.push("_");
        }

        console.log('currentWordLettersPlaceholder= ' + currentWordLettersPlaceholder);

        // Remove Space in string
        currentWordLettersPrinted = currentWordLettersPlaceholder.join(" ");
        // output the placeholders into the html
        document.querySelector("#current-word").textContent = currentWordLettersPrinted;

        console.log('currentWordLettersPrinted= ' + currentWordLettersPrinted);

        // On key up event
        document.onkeyup = function(event) {

            // Captures the key press, converts it to lowercase, and saves it to a variable.
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();                

            // if the userGuess matches any of the currentWordLetters then replace the them with the user guess           
            for ( var i = 0; i < currentWord.length; i++) {
                if (userGuess === currentWordLetters[i]) {
                    currentWordLettersPlaceholder[i] = userGuess;
                    document.querySelector("#current-word").textContent = currentWordLettersPlaceholder.join(" ");

                } 
             } 
                   
           
                
                // If userGuesses wrong letter then subtract 1 from Guesses left
             if (currentWordLettersPlaceholder.indexOf(userGuess) === -1) {
                 guessesLeft--;
                 document.querySelector("#guesses-left").textContent = guessesLeft;
                 lettersAlreadyGuessed += userGuess;
                 document.querySelector("#letters-guessed").textContent = lettersAlreadyGuessed;
             }

             

            if (currentWordLettersPlaceholder.join("") === currentWord) {
                 wins++;              
                 document.querySelector("#wins").textContent = wins;
                 document.querySelector("#final-word").textContent = currentWord;          
                 videoPlay();
                 
                 newGame();   
                                       
             }

             // if user runs out of guesses reset the game
             if (guessesLeft === 0) {
                 newGame();
             }





        } // .onkeyup = function(event)
  




} //  newGame

        function resetWord() {
            currentWord = [];
            currentWordLetters = [];
            currentWordLettersPrinted = [];
            currentWordLettersPlaceholder = [];
            userGuess = [];
            lettersAlreadyGuessed = [];
        }


        function videoPlay() {
            if (currentWord === "scorpion") {
            document.querySelector("#left-content").innerHTML = "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/dovAyYDWUWY?autoplay=1' frameborder='0' allowfullscreen></iframe></div>";
            } else if (currentWord === "popcorned") {
            document.querySelector("#left-content").innerHTML = "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/gtUNczOl_AA?autoplay=1&start=30' frameborder='0' allowfullscreen></iframe></div>";
            } else if (currentWord === "redneck") {
            document.querySelector("#left-content").innerHTML = "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/Rl_jGbeCJCw?autoplay=1&start=70' frameborder='0' allowfullscreen></iframe></div>";
            } else if (currentWord === "faking") {
            document.querySelector("#left-content").innerHTML = "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/DeZvfhhGBOo?autoplay=1&start=15' frameborder='0' allowfullscreen></iframe></div>";
            } else if (currentWord === "ghostholes") {
            document.querySelector("#left-content").innerHTML = "<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/DpKQqoM3tAk?autoplay=1&start=33' frameborder='0' allowfullscreen></iframe></div>";
            } 
        } // vide0Play

newGame();




    





