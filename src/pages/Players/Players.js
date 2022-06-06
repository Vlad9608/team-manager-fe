import { useEffect, useState, useContext } from "react";
import './Players.css';
import { PlayerContext } from '../../context/PlayerContext'

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
      <div className ="titles">
      <h2>Players with team</h2>
      <h2>Players without team</h2>
      </div>
      <div className="players-content">
        <div className="players-with-team">
        {
        players&& players.lastName === 'Ronaldo' && players.map((player) => (
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
       <div className="players-without-team">
          {
           players &&  players.map((player) => (
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
    </div>
  )
}

export default Players;