import React, { useEffect } from 'react'
import MainFunctions from '../Sources/Functions/Main/main-functions';

function TextTyping(props) {

    const ID = 'typing-effect-' + MainFunctions.getRandomNumber(1000 , 9999)
    let i = 0;
    const speed = (props.speed) ? props.speed : (150);
    const delay = (props.delay) ? props.delay : (0);

    const text = props.text

    const typing = () => {
        if (i < text.length) {
            document.getElementById(ID).innerHTML += text.charAt(i);
            ++i;
            setTimeout(typing, speed);
        }
    }

    useEffect(() => {
        document.getElementById(ID).innerHTML = "" 

        setTimeout(() => {
            if (props.text) {
                typing(text)
            }
    
        }, delay);

    }, [])

    return (
        <span id={ID}></span>
    )


}

export default TextTyping