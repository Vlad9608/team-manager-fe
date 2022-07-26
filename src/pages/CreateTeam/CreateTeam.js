import { useState, useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import "./CreateTeam.css";

const CreateTeam = () => {
  const { createTeam } = useContext(TeamContext);
  const [details, setDetails] = useState({
    name: "",
    country: "",
    noOfPlayers: "",
    noOfGames: "",
    noOfWins: "",
    noOfLoses: "",
    imageUrl: "",
  });
  // const [name, setName] = useState('');
  // const [country, setCountry] = useState('');
  // const [noOfPlayers, setNoOfPlayers] = useState('');
  // const [noOfGames, setNoOfGames] = useState('');
  // const [noOfWins, setNoOfWins] = useState('');
  // const [noOfLoses, setNoOfLoses] = useState('');
  // const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // const team = {name, country, noOfPlayers, noOfGames, noOfWins, noOfLoses, imageUrl };
    createTeam(details);
  };
  const handleInputValue = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertImageToBase64(file);
    setDetails({
      ...details,
      imageUrl: base64,
    });
  };
  console.log(details);
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    // find image on event.target.files[0]
    // TODO: find on internet method to convert image from input to base64, and save it using setImageUrl(convertedBase64String)
  };
  return (
    <div className="create">
      <h2>Create Team</h2>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label>Image</label>
          {/* TODO: upload image from PC */}
          <input type="file" required onChange={(e) => uploadImage(e)} />
          <label>Name</label>
          <input
            required
            name="name"
            value={details.name}
            onChange={handleInputValue}
          ></input>
          <label>Country</label>
          <input
            type="text"
            name="country"
            required
            value={details.country}
            onChange={handleInputValue}
          />
          <label>Games Number</label>
          <input
            type="text"
            name="noOfGames"
            required
            value={details.noOfGames}
            onChange={handleInputValue}
          />
          <label>Wins Number</label>
          <input
            type="text"
            name="noOfWins"
            required
            value={details.noOfWins}
            onChange={handleInputValue}
          />
          <label>Loses Number</label>
          <input
            type="text"
            name="noOfLoses"
            required
            value={details.noOfLoses}
            onChange={handleInputValue}
          />
          <label>Number of players</label>
          <input
            type="text"
            name="noOfPlayers"
            required
            value={details.noOfPlayers}
            onChange={handleInputValue}
          />
          <button>Create Team</button>
        </form>
        {/* TODO: display uploaded image */}
        <img src="https://i.pinimg.com/originals/37/58/13/3758133c0c77df83bb90221d7362dfb5.jpg" />
      </div>
    </div>
  );
};

export default CreateTeam;
