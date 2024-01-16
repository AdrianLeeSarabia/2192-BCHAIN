import React from "react";
import './ConditionalDemo.css';

function Greeting(){
    return(
        <h1>Hello! I am a Standard function.</h1>
    );
}

const ArrowGreeting = () => (
    <h1>Hello! I am an Arrow Function</h1>
);

function ShinyButton(){
    const handleClick = () => {
        alert ("You clicked me!");
    }
    return(
        <button onClick={handleClick}>
            Click this Button!
        </button>
    );
}
export default ShinyButton;