

var hangman = ["0000000000000",
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
"0000000000000000000",]













var words = ["one", "two", "three","four","five","six","seven","eight","nine","ten"];
var lettersGuessedIncorrectly;
var word;
var blankedWordWithGuesses;
var startGame = function () {
    word = getRandomWord;
    blankedWordWithGuesses = replaceWordWithBlanks(word.length);
    updateIncorrectGuesses(blankedWordWithGuesses);
}
var getRandomWord = function (){
    return words[Math.floor(Math.random()*words.length)];
}
var listenForKeyPress = function (){
    document.onkeypress = handleKeypress;
}
var checkGuess = function (letter, word){
    return word.indexOf(letter) > -1;
}
var replaceWordWithBlanks = function (length){
    var str = '';
    for (var i = 0; i < length; i++) {
        str = str + " ";
    }
    return str.slice(0,-1);
}
var fillInGuesses = function (letter, word, blankedWordWithGuesses){

}
var handleKeyPress = function(event) {
    var guess = event.key;
}
var handleCorrectGuess = function (){
    
}
var handleIncorrectGuess = function (string){
    
}
var handleKeypress = function (){
    
}
var updateHangmanArt = function (){
    
}
var updateIncorrectGuesses = function (){
    var element = document.getElementById("correct-guesses");
    element.innerHTML = string;
}
var updateCorrectGuesses = function (){
    
}
var handleWin = function (){
    
}
var handleLoss = function (){
    
}