import React from "react";
import './App.css';


 function Bible(){
    return(
        <div>
        <h2>The Bible Consists of the Old and New Testaments.</h2>
        <h2 className="correct">Correct!</h2>

        <h2>Moses led the Israelites out of Egypt.</h2>
        <h2 className="correct">Correct!</h2>

        <h2>The Sermon on the Mount is found in the Book of Luke.</h2>
        <h2 className="wrong">Incorrect!</h2>
        </div>
        
       
    );
}

function TrueFalse(props){
    const isTrue = props.isTrue;
    if(isTrue){
        return(
            <Bible />
        );
    }
    return(
        <div>
        <h2>The Bible Consists of the Old and New Testaments.</h2>
        <h2>Moses led the Israelites out of Egypt.</h2>
        <h2>The Sermon on the Mount is found in the Book of Luke.</h2>
        </div>
    );

    
}
export default function App(){
    return(
        <div>
            <TrueFalse
                isTrue={true}
                />
        </div>
    );
}