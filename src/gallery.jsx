import React, { useState } from "react";
import { Link } from "react-router-dom";

function Gallery() {
    const username = "Lola"
    const [displayMessage, setDisplayMessage] = useState("");
    const [pokeCollection, setPokeCollection] = useState("");

    const displayCollection = async () => {
        try {
            const res = await fetch("http://localhost:3000/user/gallery", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username }),
            });
            const data = await res.json();
            if (res.ok) {
                setDisplayMessage(`Collection Retrieved, ${username}`);
                setPokeCollection(data.collection);
            } else {
                setDisplayMessage(data.message || "Display failed");
            }

        }
        catch (err) {
            console.error(err);
            setDisplayMessage("Display Error");
        }
    }
    
    displayCollection();

    return (

        <div id="gallery">
            {displayMessage && <p>{displayMessage}</p>}
            <div id="profile">
                <div id="user-info">
                    <h2>{username}</h2>
                </div>
                <div id="stats"><p>Stats Will Display Here</p></div>
            </div>
            <div id="poke-gallery">
                {pokeCollection.map((pokemon) => (
                    <div key={pokemon._id} className="poke-card">
                        <h3>{pokemon.name}</h3>
                        <h4>Poke Id: {pokemon.id}</h4>
                        <img src={pokemon.sprite} alt={pokemon.name} className="poke-image" />
                        <div className="poke-stats">
                            <div className="stat">
                                <h4>Attack:</h4>
                                <p>{pokemon.stats[0]}</p>
                            </div>
                            <div className="stat">
                                <h4>Defence:</h4>
                                <p>{pokemon.stats[1]}</p>
                            </div>
                            <div className="stat">
                                <h4>Speed:</h4>
                                <p>{pokemon.stats[2]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;