import React, { createContext, useState, useEffect } from 'react';

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [players, setPlayers] = useState(null)

  const getAllPlayers = () => {
    fetch('http://localhost:9000/players/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPlayers(data);
      })
  }

  const createPlayer = (player) => {
    fetch('http://localhost:9000/players/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player)
    }).then(() => {
      console.log('new player added');
    })
  }

  const getPlayer = (playerId) => {
    fetch(`http://localhost:8000/teams/${playerId}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPlayers(data);
      })
  }

  const deletePlayer = (playersId) => {
    fetch('http://localhost:9000/players/' + playersId, {
      method: 'DELETE'
    })
    .then(data => {
      getAllPlayers()
    })
  }
  

  return (
    <PlayerContext.Provider value={{ players, getAllPlayers, createPlayer, deletePlayer,}}>
      {props.children}
    </PlayerContext.Provider>
  )
}
export default PlayerContextProvider;