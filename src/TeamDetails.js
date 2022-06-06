import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { TeamContext } from './context/TeamContext';


const TeamDetails = () => {
  const { teamId } = useParams();
  const { getTeam, selectedTeam, handleDelete } = useContext(TeamContext)
  // TODO: import and use getTeam and selectedTeam from TeamContext


  useEffect(() => {
    // TODO: call getTeam method from TeamContext
    getTeam(teamId)
  }
    , [])

  return (
    <div>
      {/* TODO: display team details from selectedTeam object */
        selectedTeam && (
          <h2>{selectedTeam.name}</h2>
        )
      }
    </div>
  )
}

export default TeamDetails;