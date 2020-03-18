import React, { useState } from 'react';

import PlayerCard from './PlayerCard';

export default function PlayerSelector(props) {
    // Declare a new state variable, which we'll call "count"
    const [playerName, setName] = useState("");

    function updateName(name) {
        setName(name);
        props.setPlayer(name)
    }

    if (playerName == "") {
        return (
            <div >
                <input type="text" onBlur={e => updateName(e.target.value)}></input>
            </div>
        );
    }
    return (
        <div >
            <input type="text" onBlur={e => updateName(e.target.value)}></input>
            <PlayerCard playerName={playerName} year={props.year}/> 
        </div>
    );
  }
