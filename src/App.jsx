import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [user, setUser] = useState("");
  async function getUser(){
    const res = await fetch("http://localhost:3001/user/test");
    const data = await res.json();
    setUser(data.user);
  }

  useEffect(() => {
    getUser();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {user.username}
      </header>
    </div>
  );
}

export default App;
