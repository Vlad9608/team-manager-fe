import { useState, useContext } from "react";
import { TeamContext } from '../../context/TeamContext'
import './CreateTeam.css'

const CreateTeam = () => {
  const { createTeam } = useContext(TeamContext);

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [noOfPlayers, setNoOfPlayers] = useState('');
  const [noOfGames, setNoOfGames] = useState('');
  const [noOfWins, setNoOfWins] = useState('');
  const [noOfLoses, setNoOfLoses] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const team = { name, country, noOfPlayers, noOfGames, noOfWins, noOfLoses, imageUrl };
    createTeam(team)
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
      <h2>Create Team</h2>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label>Image</label>
          {/* TODO: upload image from PC */}
          <input
            type="file"
            required
            onChange={(e) => uploadImage(e)}
          />
          <label>Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Country</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label>Games Number</label>
          <input
            type="text"
            required
            value={noOfGames}
            onChange={(e) => setNoOfGames(e.target.value)}
          />
          <label>Wins Number</label>
          <input
            type="text"
            required
            value={noOfWins}
            onChange={(e) => setNoOfWins(e.target.value)}
          />
          <label>Loses Number</label>
          <input
            type="text"
            required
            value={noOfLoses}
            onChange={(e) => setNoOfLoses(e.target.value)}
          />
          <label>Number of players</label>
          <input
            type="text"
            required
            value={noOfPlayers}
            onChange={(e) => setNoOfPlayers(e.target.value)}
          />
          <button>Create Team</button>
        </form>
        {/* TODO: display uploaded image */}
        <img src="https://i.pinimg.com/originals/37/58/13/3758133c0c77df83bb90221d7362dfb5.jpg" />
      </div>
    </div>
  );
}

export default CreateTeam;