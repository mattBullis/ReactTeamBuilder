import React, { useState} from 'react';

import PlayerSelector from './PlayerSelector';
import DisplayTeam from './DisplayTeam';

export default function TeamBuilder(props) {
    // Declare a new state variable, which we'll call "count"
    const [year, setYear] = useState("2018");
    const [player1Id, setPlayer1Id] = useState();
    const [player2Id, setPlayer2Id] = useState();
    const [player3Id, setPlayer3Id] = useState();
    const [player4Id, setPlayer4Id] = useState();
    const [player5Id, setPlayer5Id] = useState();

    function changePlayer1Callback (player1Id) {
        setPlayer1Id(player1Id);
    }
    function changePlayer2Callback (player2Id) {
        setPlayer2Id(player2Id);
    }
    function changePlayer3Callback (player3Id) {
        setPlayer3Id(player3Id);
    }
    function changePlayer4Callback (player4Id) {
        setPlayer4Id(player4Id);
    }
    function changePlayer5Callback (player5Id) {
        setPlayer5Id(player5Id);
    }

    return (
        <div>
            <div>
                <select onChange={e => setYear(e.target.value)}>
                    <option value="2018">2018-2019</option>
                    <option value="2017">2017-2018</option>
                    <option value="2016">2016-2017</option>
                    <option value="2015">2015-2016</option>
                </select>
                <PlayerSelector year={year} setPlayer={changePlayer1Callback}/> 
                <PlayerSelector year={year} setPlayer={changePlayer2Callback}/> 
                <PlayerSelector year={year} setPlayer={changePlayer3Callback}/> 
                <PlayerSelector year={year} setPlayer={changePlayer4Callback}/> 
                <PlayerSelector year={year} setPlayer={changePlayer5Callback}/> 
            </div>
            <div>
                <DisplayTeam year={year} player1Id={player1Id} player2Id={player2Id} player3Id={player3Id} player4Id={player4Id} player5Id={player5Id}/>
            </div>
            
        </div>
    );
  }
