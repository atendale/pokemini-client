import React, { useState } from "react";
import { Link } from "react-router-dom";

function Roll(){
    return (
        <div id="login">
            <br />
            <h1>Roll for a random Pokemon!!!</h1>
            <button id="roll" onClick={handleRoll}>Roll!</button>
            <br />
            <Link to="/">Back to Home</Link>
            <Link to = "/stats-profile">Check Out Your Stats!</Link>
        </div>
    );
    
}

export default Roll;