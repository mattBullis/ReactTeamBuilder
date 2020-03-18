import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";


const useStyles = {
        container: {
            width: '95%',
            margin: 'auto',
            marginTop: 16,
            padding: 10,
            borderRadius: 40,
            textAlign: 'center'
        },
        title: {
            fontWeight: 'bold',
            lineHeight: '1.3em',
            letterSpacing: '0.05em'
        },
        gridContainer: {
            display: "grid",
            gridColumnGap: "10px",

        }
};

interface Props {
    player1Id: string;
    player2Id: string;
    player3Id: string;
    player4Id: string;
    player5Id: string;
    year: string;
}

DisplayTeams.propTypes = {
    year: PropTypes.string.isRequired,
    player1Id: PropTypes.string.isRequired,
    player2Id: PropTypes.string.isRequired,
    player3Id: PropTypes.string.isRequired,
    player4Id: PropTypes.string.isRequired,
    player5Id: PropTypes.string.isRequired
};

function PlayerRow(playerStat)
{
    return (
        <tr>
            <td>{playerStat.playerStat.id}</td>
            <td>{(playerStat.playerStat.fg3a).toFixed(2)}</td>
            <td>{(playerStat.playerStat.fg3m).toFixed(2)}</td>
            <td>{(playerStat.playerStat.fga).toFixed(2)}</td>
            <td>{(playerStat.playerStat.fgm).toFixed(2)}</td>
            <td>{(playerStat.playerStat.ast).toFixed(2)}</td>
        </tr>);
}

export default function DisplayTeams({ player1Id, player2Id, player3Id, player4Id, player5Id, year }: Props): JSX.Element {
    const [playerStats, setPlayerStats] = useState([]);
    const [playerCount, setPlayerCount] = useState(0);

    useEffect(() => {
        var playerIds = [ player1Id, player2Id, player3Id, player4Id, player5Id ];
        playerIds = playerIds.filter(e => e != undefined && e !== "");


        var urlParams = "?season=" + year;
        for (var i = 0; i < playerIds.length; i++)
        {
            urlParams += "&player_ids[]=" + playerIds[i]
        }
        
        var playerStats = $.ajax
        ({
        type: "GET",
        url: "https://www.balldontlie.io/api/v1/season_averages" + urlParams,
        dataType: 'json',
        async: false,
        }).responseJSON;

        setPlayerStats(playerStats.data);
        setPlayerCount(playerIds.length);

    },
    [player1Id, player2Id, player3Id, player4Id, player5Id, year]);


    if (playerCount === 1) 
    {
        return(
            <table>
                <tr>
                    <th>Player Name</th>
                    <th>3PA</th>
                    <th>3PM</th>
                    <th>2PA</th>
                    <th>2PM</th>
                    <th>Assists</th>
                </tr>
                <PlayerRow playerStat={playerStats[0]}/>
            </table>
        );
    }
    if (playerCount === 2) 
    {
        return(
            <table>
            <tr>
                <th>Player Name</th>
                <th>3PA</th>
                <th>3PM</th>
                <th>2PA</th>
                <th>2PM</th>
                <th>Assists</th>
            </tr>
            <PlayerRow playerStat={playerStats[0]}/>
            <PlayerRow playerStat={playerStats[1]}/>
            <tr>
                <th>Aggregate</th>
                <th>{(playerStats[0].fg3a + playerStats[1].fg3a).toFixed(2)}</th>
                <th>{(playerStats[0].fg3m + playerStats[1].fg3m).toFixed(2)}</th>
                <th>{(playerStats[0].fga + playerStats[1].fga).toFixed(2)}</th>
                <th>{(playerStats[0].fgm + playerStats[1].fgm).toFixed(2)}</th>
                <th>{(playerStats[0].ast + playerStats[1].ast).toFixed(2)}</th>
            </tr>
        </table>
        );
    }
    if (playerCount === 3) 
    {
        return(
            <table>
            <tr>
                <th>Player Name</th>
                <th>3PA</th>
                <th>3PM</th>
                <th>2PA</th>
                <th>2PM</th>
                <th>Assists</th>
            </tr>
            <PlayerRow playerStat={playerStats[0]}/>
            <PlayerRow playerStat={playerStats[1]}/>
            <PlayerRow playerStat={playerStats[2]}/>
            <tr>
                <th>Aggregate</th>
                <th>{(playerStats[0].fg3a + playerStats[1].fg3a + playerStats[2].fg3a).toFixed(2)}</th>
                <th>{(playerStats[0].fg3m + playerStats[1].fg3m + playerStats[2].fg3m).toFixed(2)}</th>
                <th>{(playerStats[0].fga + playerStats[1].fga + playerStats[2].fga).toFixed(2)}</th>
                <th>{(playerStats[0].fgm + playerStats[1].fgm + playerStats[2].fgm).toFixed(2)}</th>
                <th>{(playerStats[0].ast + playerStats[1].ast + playerStats[2].ast).toFixed(2)}</th>
            </tr>
        </table>
        );
    }
    if (playerCount === 4) 
    {
        return(
            <table>
            <tr>
                <th>Player Name</th>
                <th>3PA</th>
                <th>3PM</th>
                <th>2PA</th>
                <th>2PM</th>
                <th>Assists</th>
            </tr>
            <PlayerRow playerStat={playerStats[0]}/>
            <PlayerRow playerStat={playerStats[1]}/>
            <PlayerRow playerStat={playerStats[2]}/>
            <PlayerRow playerStat={playerStats[3]}/>
            <tr>
                <th>Aggregate</th>
                <th>{(playerStats[0].fg3a + playerStats[1].fg3a + playerStats[2].fg3a + playerStats[3].fg3a).toFixed(2)}</th>
                <th>{(playerStats[0].fg3m + playerStats[1].fg3m + playerStats[2].fg3m + playerStats[3].fg3m).toFixed(2)}</th>
                <th>{(playerStats[0].fga + playerStats[1].fga + playerStats[2].fga + playerStats[3].fga).toFixed(2)}</th>
                <th>{(playerStats[0].fgm + playerStats[1].fgm + playerStats[2].fgm + playerStats[3].fgm).toFixed(2)}</th>
                <th>{(playerStats[0].ast + playerStats[1].ast + playerStats[2].ast + playerStats[3].ast).toFixed(2)}</th>
            </tr>
        </table>
        );
    }
    if (playerCount === 4) 
    {
        return(
            <table>
                <tr>
                    <th>Player Name</th>
                    <th>3PA</th>
                    <th>3PM</th>
                    <th>2PA</th>
                    <th>2PM</th>
                    <th>Assists</th>
                </tr>
                <PlayerRow playerStat={playerStats[0]}/>
                <PlayerRow playerStat={playerStats[1]}/>
                <PlayerRow playerStat={playerStats[2]}/>
                <PlayerRow playerStat={playerStats[3]}/>
                <PlayerRow playerStat={playerStats[4]}/>
                <tr>
                    <th>Aggregate</th>
                    <th>{(playerStats[0].fg3a + playerStats[1].fg3a + playerStats[2].fg3a + playerStats[3].fg3a + playerStats[4].fg3a).toFixed(2)}</th>
                    <th>{(playerStats[0].fg3m + playerStats[1].fg3m + playerStats[2].fg3m + playerStats[3].fg3m + playerStats[4].fg3m).toFixed(2)}</th>
                    <th>{(playerStats[0].fga + playerStats[1].fga + playerStats[2].fga + playerStats[3].fga + playerStats[4].fga).toFixed(2)}</th>
                    <th>{(playerStats[0].fgm + playerStats[1].fgm + playerStats[2].fgm + playerStats[3].fgm + playerStats[4].fgm).toFixed(2)}</th>
                    <th>{(playerStats[0].ast + playerStats[1].ast + playerStats[2].ast + playerStats[3].ast + playerStats[4].ast).toFixed(2)}</th>
                </tr>
            </table>
        );
    }
    return(
        <table>
            <tr>
                <th>Player Name</th>
                <th>3PA</th>
                <th>3PM</th>
                <th>2PA</th>
                <th>2PM</th>
                <th>Assists</th>
            </tr>
        </table>);
}
