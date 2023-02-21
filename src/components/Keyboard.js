import '../custom.css'
// Import React and useState necessary for the app
import {React, useState} from 'react';
// Import the necessary components
import GameStatus from './Header';
import IncorrectList from './IncorrectList';
import WordToGuess from './WordToGuess';
import Help from './Help';

function Keypad() {
    // An array of all the letters of the alphabet to make buttons for the user to pick from
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    // An array of a randomly picked section of words from the dictionary
    const wordsArr = ['outerwear', 'outface', 'outfall', 'outfield', 'outfielder', 'outfight', 'outfit', 'outfitted', 'outfitter', 'outfitting']

    /* Reference: I learnt here: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
    how to pick a word from random in an array. Math.random will get a random number between 0 and 1 so we multiply it by the array length
    then Math.floor will round it down to the nearest integer so an index can be picked from the array */    
    // I used the useState hook to save the chosen word - which is a wordsArr index picked at random
    const [WordinState, setWord] = useState(() => {
        return wordsArr[Math.floor(Math.random() * wordsArr.length)]
    })
    
    // I firstly tried to only set the state of one letter chosen but then I couldn't 'keep' the other letters chosen so made an array and the below we add them to the state using handleClick()
    const [userLetter, setUserLetter] = useState(['']);

    // We use the number of incorrect and correct guesses set in state to be able to use the length of these arrays to calculate the number of correct/incorrect guesses, pass as props to other components and generate a game status
    const [incorrectGuessedLetters, setIncGuesses] = useState([]);
    const [corrGuessedLetters, setCorrGuesses] = useState([]);
    let corrSoFar = corrGuessedLetters.length


    let guessesLeft = 6 - incorrectGuessedLetters.length

    // Now we split the random word into an array of letters using the split() method
    let chosenWordArr = WordinState.split('')
    let winningGuesses = chosenWordArr.length


    function handleClick(letterClicked) {

        // Add the clicked letter to the UserLetter state (keeps track of all the letters guessed)
        // The visibility of the letter is already changed in the style - which I learnt and got the idea from here: https://www.youtube.com/watch?v=-ONUyenGnWw&t=275s
        setUserLetter(state => [...state, letterClicked])        
        
        // mapping through chosenWordArr doesn't work here as it would produce a li element for every instance where the letter doesnt equal letter clicked
        // Instead we use the condition "if the chosenWordArr does NOT include the letterClicked, add that to the incorrectGuessedLetters state" (which gets printed in the list below)
        if (!chosenWordArr.includes(letterClicked)) {
            setIncGuesses(state => [...state, letterClicked])
        }else { 
            setCorrGuesses(state => [...state, letterClicked])    
        }  
    }
    

    // Below we .map through the array of letters from the chosenWordArr and create a WordToGuess component with a unique key which passes props
    // We also map through all letters of the alphabet array to create a button for each letter
    // We also map through the incorrect guessed letters in the state and create a <IncorrectList /> component for each, also pasing props
    // The gameStatus component appears when the conditions are met
    return(
        <div className="wholePage">
            <h1 className="title">Hangman</h1>
            <GameStatus tally={guessesLeft} id={winningGuesses} value={corrSoFar} />
            <div>
                
                <div className="chosenWord">{chosenWordArr.map((item) => {                    
                    return (
                        <WordToGuess key={item} value={item} choices={userLetter} />                        
                    )
                })}
                </div>
                <div className="allLetters">
                    {alphabet.map((letter) => {
                        return(
                        <button onClick={(e) => (handleClick(e.target.value))} value={letter} key={letter} className="letter">{letter}</button>)
                    })}
                </div>
                <div>
                    <br />
                    <div>Guesses left: {guessesLeft}</div>
                    <br/>
                    <Help />
                    <h4>Incorrect Guesses:</h4>                    
                    <ul id="incorrectList">{incorrectGuessedLetters.map((i) => {
                        return (
                            <IncorrectList key={i} value={i}/>                            
                        )
                    })}

                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Keypad;


