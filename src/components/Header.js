import '../custom.css'
import {React } from 'react';

function GameStatus(props) {

    // The number passed as props is the number of guesses (6 minus guessed) left
    let guessesLeft = props.tally
    // The number of correct guesses passed as props from the state
    let correctGuesses = props.value
    // The length of the word that the user has to guess
    let wordLength = props.id

    // Reference: I researched how to create a button to refresh the page (and consequently the game) here: https://www.freecodecamp.org/news/location-reload-method-how-to-reload-a-page-in-javascript/ where onClick triggers window.location.reload(true)
    function handleClick() {
        window.location.reload(true)
    }

    // correct guesses needs to be over 1 or else the page loads as 'You've Won' - I predict this is becuase it is rendering this component before the word is chosen and therefore word length = 0 = number of guesses
   // If the number of correct guesses = the length of the mystery word and correct guesses is over 1, then theyve won
    if (correctGuesses == wordLength && correctGuesses > 1){
    return (<div>
        <h1>You've Won!</h1>
        <button onClick={handleClick}>Restart the game</button>
    </div>)
   }
   // They have no guesses left out of 6, they've lost
   else if (guessesLeft == 0) {
    return (
        <div>
            <h1>You've Lost!</h1>
            <button onClick={handleClick}>Restart the game</button>

        </div>
    )
   }
   
   else {
    return <h1></h1>
   }  
   
}

export default GameStatus;