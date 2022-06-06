import { useEffect, useState, useContext, } from "react";
import './Teams.css';
import { TeamContext } from './context/TeamContext';
import {Link, useParams, useNavigate} from 'react-router-dom';
// import { useHistory, } from "react-router-dom";

const Teams = () => {
  // const [teams, setTeams] = useState(null)
  // // const history = useHistory();
  const { teams, getAllTeams, deleteTeam } = useContext(TeamContext);
  let navigate = useNavigate();

  useEffect(() => {
    getAllTeams()
  }, [])

  const handleDelete = (teamId) => {
    deleteTeam(teamId)
  }

  const handleNavigateToTeamDetails = (teamId) => {
      navigate(`/teamdetails/${teamId}`)
    // TODO: use navigate function, using useNavigate hook to navigate to teamDetails page, 
    // for team with teamId
  }

  return (
    <div className="teams">
      <h2>Teams</h2>
      <div className="teams-content">
        {teams && teams.map((team) => (
          // TODO: define a component called TeamCard
         
          <div className="team"
            onClick={() => handleNavigateToTeamDetails(team.id)}
          >
            <img src={team.imageUrl} />
            <div className="team-name">{team.name}</div>
            <div className="team-informations">
              <div>Country {team.country}</div>
              <div>Number of Games:{team.noOfGames}</div>
              <div>Number of Wins:{team.noOfWins}</div>
              <div>Number of Loses:{team.noOfLoses}</div>
            </div>
            <button onClick={() => handleDelete(team.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;