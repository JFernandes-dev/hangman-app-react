import '../custom.css'

function Help() {

    //This component outlines the rules of the game. The onClick attribute of the help button calls a function that produces an alert
    function handleClickHelp() {
        alert(`Here's how to play!
        - A line of blank underscores should be visible in the middle of your screen
        - Each dash represents a letter of a mystery word
        - To win the game, guess the word - but you can only have six incorrect guesses or your lose!
        - IMPORTANT! The user should not choose any letter twice, whether correct or incorrect. Clicking twice on an incorrect letter will use up another life you have so make sure to check the list of incorrect guesses so far!
        - When the game is over, click the refresh button to start the game again with a new word `)
    }
    return(
        <div>
            <button onClick={handleClickHelp}>Get help and find out the rules!</button>
        </div>
    )

}

export default Help;