import React, { createContext, useState, } from 'react';

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
  const [teams, setTeams] = useState(null)
  // TODO: use selectedTeam into teamDetails page
  // TODO: get teamId from useParams to use within the getTeam function
  const [selectedTeam, setSelectedTeam] = useState(null)
 

  const getAllTeams = () => {
    fetch('http://localhost:8000/teams/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTeams(data);
      })
  }

  const createTeam = (team) => {
    fetch('http://localhost:8000/teams/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(team)
    }).then(() => {
      console.log('new team added');
    })
  }

  const getTeam = (teamId) => {
    fetch(`http://localhost:8000/teams/${teamId}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSelectedTeam(data);
      })
  }

  const deleteTeam = (teamId) => {
    fetch('http://localhost:8000/teams/' + teamId, {
      method: 'DELETE'
    })
    .then(data => {
      getAllTeams()
    })
  }

  return (
    <TeamContext.Provider value={{ teams, getAllTeams, createTeam, deleteTeam }}>
      {props.children}
    </TeamContext.Provider>
  )
}
export default TeamContextProvider;