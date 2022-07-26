import React, { createContext, useState } from "react";
import axios, { AxiosError } from "axios";

export const TeamContext = createContext();

const baseUrl = "http://localhost:8000/teams/";

const TeamContextProvider = (props) => {
  const [teams, setTeams] = useState(null);
  // TODO: use selectedTeam into teamDetails page
  // TODO: get teamId from useParams to use within the getTeam function
  const [selectedTeam, setSelectedTeam] = useState(null);

  const getAllTeams = () => {
    axios.get(baseUrl).then((response) => {
      setTeams(response.data);
    });
  };

  const createTeam = (team) => {
    axios
      .post(baseUrl, {
        name: "",
        country: "",
        noOfPlayers: "",
        noOfGames: "",
        noOfWins: "",
        noOfLoses: "",
        imageUrl: "",
        // https://www.freecodecamp.org/news/how-to-use-axios-with-react/
        // to do handleChangeInput react
      })
      .then((response) => {
        setTeams(response.data);
      });
  };

  const getTeam = (teamId) => {
    fetch(`http://localhost:8000/teams/${teamId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSelectedTeam(data);
      });
  };

  const deleteTeam = (teamId) => {
    // fetch("http://localhost:8000/teams/" + teamId, {
    //   method: "DELETE",
    // }).then((data) => {
    //   getAllTeams();
    // });
    axios.delete(`${baseUrl}/${teamId}`).then(() => {
      getAllTeams();
    });
  };

  return (
    <TeamContext.Provider
      value={{
        teams,
        selectedTeam,
        getTeam,
        getAllTeams,
        createTeam,
        deleteTeam,
      }}
    >
      {props.children}
    </TeamContext.Provider>
  );
};
export default TeamContextProvider;
