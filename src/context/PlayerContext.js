import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const baseUrl = "http://localhost:9000/players/";
  const [players, setPlayers] = useState(null)

  const getAllPlayers = () => {
    axios.get(baseUrl).then((response) => {
      setPlayers(response.data);
    });
  }

  const createPlayer = (player) => {
    // fetch('http://localhost:9000/players/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(player)
    // }).then(() => {
    //   console.log('new player added');
    // })
    axios.post(baseUrl, {
      imageUrl:"",
      firstName:"",
      lastName:"",
      teamId:"",
      noOfGames:"",
      // https://www.freecodecamp.org/news/how-to-use-axios-with-react/
      // to do handleChangeInput react
    }).then((response) => {
      setPlayers(response.data)
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
    axios
    .delete(`${baseUrl}/${playersId}`)
    .then(() => {
      getAllPlayers()
    });
  }
  

  return (
    <PlayerContext.Provider value={{ players, getAllPlayers, createPlayer, deletePlayer,}}>
      {props.children}
    </PlayerContext.Provider>
  )
}
export default PlayerContextProvider;