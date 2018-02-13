//  startgame
//      array of words
//          randomly pick word for game
//      scoreboard array
//      remainingLetters array for word
//      event watcher to take guess
//      evaluate guess
//          correct >> if event.key === value in remaining letters array
//              update scoreboard array
//              evaluate win
//          incorrect >> if event key !=== value in remaining letters array
//              reduce guesses remaining
//      evaluate win/loss
//          win >> scoreboard array does not contain any underscores
//              congratulations, play again?
//          loss >> 0 guesses remaining
//              hangman game over

