import { useState, useContext} from 'react'
import './CreatePlayer.css'
import {PlayerContext} from '../../context/PlayerContext';

const CreatePlayer = () => {
  const {createPlayer} = useContext(PlayerContext)

  const [teamId, setTeamId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [noOfGames, setNoOfGames] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const player = { teamId, firstName, lastName, imageUrl, noOfGames }; 
    createPlayer(player);
    // TODO: change this fetch to createPlayer method from PlayerContext
    // createPlayer(player)
    // fetch('http://localhost:8000/players/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(player)
    // }).then(() => {
    //   console.log('new player added');
    // })
  }
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertImageToBase64(file);
    setImageUrl(base64)
  }
  const convertImageToBase64 = (file) => {
    return new Promise((resolve,reject)=>{

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        }
    }) 

    
    // find image on event.target.files[0]
    // TODO: find on internet method to convert image from input to base64, and save it using setImageUrl(convertedBase64String)

  }

  return (
    <div className="create">
      <h2>Create Player</h2>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label>Image</label>
          {/* TODO: use <input> to upload images from PC and transform them into base64 to save into DB ( json )*/}
          <input
            type="file"
            required
            // value={imageUrl}
            onChange={(e) => uploadImage(e)}
            // TODO: use convertImageToBase64 function for onChange method of input
          />
          <label>FirstName</label>
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label>LastName</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Team</label>
          <input
            type="text"
            required
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
          />
          <label>Number of Games</label>
          <input
            type="text"
            required
            value={noOfGames}
            onChange={(e) => setNoOfGames(e.target.value)}
          />
          <button>Create Player</button>
        </form>
        {/* TODO: display uploaded image src={`data:image/jpeg;base64,${imageUrl}`} */}
        <img src={imageUrl}/>
      </div>
    </div>
  );
}

export default CreatePlayer;