import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>PokeMini!</h1>
        <Link to="/Register">Become a Trainer!</Link>
        <br/>
        <Link to= "/Login">Already a Trainer? Welcome Back!</Link>
        <br/>
        <Link to= "/Roll"> Roll for a New Pokemon!</Link>
      </header>
    </div>
  );
}

export default App;