var asciiArtArray = ["0000000000000",
    "0           1",
    "0           0",
    "0          1 1",
    "0           1",
    "0          324",
    "0         3 2 4",
    "0        3  2  4",
    "0          5 6",
    "0         5   6",
    "0        5     6",
    "0       5       6",
    "0",
    "0",
    "0",
    "0000000000000000000",
]














var AsciiArtString = '';
var words = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"];
var lettersGuessedIncorrectly;
var word;
var blankedWordWithGuesses;
var numberOfGuesses = 6;

var startGame = function () {
    lettersGuessedIncorrectly = [];
    word = getRandomWord();
    blankedWordWithGuesses = replaceWordWithBlanks(word.length);
    updateCorrectGuesses(blankedWordWithGuesses);
    listenForKeyPress();
}
var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
}
var listenForKeyPress = function () {
    document.onkeypress = handleKeyPress;
}
var checkGuess = function (letter, word) {
    return word.indexOf(letter) > -1 && lettersGuessedIncorrectly.indexOf(letter) < 0 && blankedWordWithGuesses.indexOf(letter) < 0;
}
var replaceWordWithBlanks = function (length) {
    var str = '';
    for (var i = 0; i < length; i++) {
        str = str + "_";
    }
    return str;
}
var fillInGuesses = function (letter, word, blankedWordWithGuesses) {
    console.log(blankedWordWithGuesses);
    var str = blankedWordWithGuesses;
    var word = word;
    var pos;
    while(word.indexOf(letter)>-1){
        console.log(pos,word,str);
        pos = word.indexOf(letter);
        str = str.slice(0,pos) + letter + str.slice(pos+1);
        word = word.slice(0,pos) + "0" + word.slice(pos+1);
    }
    return str;
}
var checkIfOutOfGuesses = function(){
    return lettersGuessedIncorrectly.length > numberOfGuesses;
}
var checkIfWordIsComplete = function (string) {
    return string.indexOf("_") < 0;
}
var handleKeyPress = function (event) {
    console.log(event.key.toUpperCase());
    var guess = event.key.toUpperCase();
    if (checkGuess(guess,word)) {
        handleCorrectGuess(guess);
    } else {
        handleIncorrectGuess(guess);
    }

}
var handleCorrectGuess = function (guess) {
    console.log("You guessed correctly");
    blankedWordWithGuesses = fillInGuesses(guess, word, blankedWordWithGuesses);
    updateCorrectGuesses(blankedWordWithGuesses);
    if (checkIfWordIsComplete(blankedWordWithGuesses)) {
        handleWin();
    }
}
var handleIncorrectGuess = function (guess) {
    console.log("You guessed incorrectly");
    lettersGuessedIncorrectly.push(guess);
    updateIncorrectGuesses(lettersGuessedIncorrectly.join(', '));
    updateHangmanArt();
    if (checkIfOutOfGuesses()) {
        handleLoss();
    }
}
var updateHangmanArt = function () {
    var totalLines = asciiArtArray.length;
    var percentage = lettersGuessedIncorrectly.length/numberOfGuesses;
    var linesToShow = Math.floor(totalLines * percentage);
    var art = '';
    for (var i = 0; i < linesToShow; i++){
        art = art + asciiArtArray[i] + "\n";
    }
    var element = document.getElementById('hangman-art');
    element.innerHTML = art;
}
var updateIncorrectGuesses = function (string) {
    var element = document.getElementById("incorrect-guesses");
    element.innerHTML = string;
}
var updateCorrectGuesses = function (string) {
    var element = document.getElementById("correct-guesses");
    element.innerHTML = string;
}
var handleWin = function () {
    alert("You Win!");
}
var handleLoss = function () {
    alert("You Lose!");
}
startGame();