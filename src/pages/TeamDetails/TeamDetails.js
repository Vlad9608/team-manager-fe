import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { PlayerContext } from "../../context/PlayerContext";
import "./TeamDetails.css";

const TeamDetails = () => {
  const { teamId } = useParams();
  const { getTeam, selectedTeam, handleDelete } = useContext(TeamContext);
  const { players } = useContext(PlayerContext);
  // TODO: import and use getTeam and selectedTeam from TeamContext

  useEffect(() => {
    if (teamId) {
      getTeam(teamId);
    }
  }, [teamId]);

  return (
    <div>
      <div>
        {
          /* TODO: display team details from selectedTeam object */
          selectedTeam && (
            <div className="team-details">
              <h2 className="title">{selectedTeam.name}</h2>
              <h2>{selectedTeam.country}</h2>
              <h2>{selectedTeam.noOfPlayers}</h2>
              <h2>{selectedTeam.noOfGames}</h2>
              <h2>{selectedTeam.noOfWins}</h2>
              <h2>{selectedTeam.noOfLoses}</h2>
            </div>
          )
        }
      </div>
      <div>{players && <div></div>}</div>
    </div>
  );
};

export default TeamDetails;
