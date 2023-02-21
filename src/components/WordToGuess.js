import '../custom.css'

function WordToGuess(props) {

    // The random word and clicked letter passed as props
    let word = props.value
    let userLetter = props.choices


    // The visibility of the letter is changed in the style if the clicked letter is in the random word (which is passed through props) - which I learnt and got the idea from here: https://www.youtube.com/watch?v=-ONUyenGnWw&t=275s

    return(
        <div>
            <p style={{ borderBottom: "2px solid black"}} className="chosenWordLetter"><p style={{visibility: userLetter.includes(word)
                        ? "visible"
                        : "hidden"
                    }}>{word}</p></p>

        </div>
    )

}

export default WordToGuess;














