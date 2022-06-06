import { useEffect, useState, useContext } from "react";
import './Players.css';
import Teams from "./Teams";
import { PlayerContext } from './context/PlayerContext'

const Players = () => {

  const { players, getAllPlayers, deletePlayer } = useContext(PlayerContext);

  useEffect(() => {
    getAllPlayers()
  }, [])

  const handleDelete = (playerId) => {
    deletePlayer(playerId)
  }

  return (
    <div className="players">
      <h2>Players</h2>
      <div className="players-content">
        {players && players.map((player) => (
          <div className="players-team-content">
            <img src={player.imageUrl} />
            <div className="full-name">
              <div>{player.firstName}</div>
              <div>{player.lastName}</div>
            </div>
            <div>{player.noOfGames}</div>
            <button onClick={() => handleDelete(player.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Players;