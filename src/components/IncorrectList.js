import '../custom.css'

import {React } from 'react';

function IncorrectList(props) {
    // props passes the incorrectly guessed letter and this component produces a list element with the letter

    return(
    <li>{props.value}</li>
    )   
   
}

export default IncorrectList;


