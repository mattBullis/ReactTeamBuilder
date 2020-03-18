import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";

interface Props {
    playerName: string;
    year: string;
}

PlayerCard.propTypes = {
    playerName: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default function PlayerCard({ playerName, year }: Props): JSX.Element {
    
    
    const playerProfile = $.ajax
    ({
    type: "GET",
    url: "https://www.balldontlie.io/api/v1/players/" + playerName,
    dataType: 'json',
    async: false,
    }).responseJSON;

    if (playerProfile === undefined)
    {
        return <div></div>
    }
    return (
        <div >
            <h2>{playerProfile.first_name} {playerProfile.last_name}</h2>
            <p>Team: {playerProfile.team.abbreviation} Position: {playerProfile.position}</p>
            <p></p>
        </div>
    );
}
