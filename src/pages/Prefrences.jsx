import React, { useContext, useState } from "react";
import API from "../helpers/API";
import { AuthContext } from "../contexts/AuthContext";
const PreferencePage = () => {
  const { token } = useContext(AuthContext);

  const [selectedSources, setSelectedSources] = useState([]);
  const handleCheckboxChange = (event) => {
    const source = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedSources([...selectedSources, source]);
    } else {
      setSelectedSources(selectedSources.filter((item) => item !== source));
    }
  };

  const newsSources = [
    "CNN",
    "BBC",
    "The New York Times",
    "Reuters",
    "The Guardian",
    "Al Jazeera",
    "Fox News",
    "NBC News",
    "ABC News",
    "CBS News",
    "Associated Press",
    "USA Today",
    "The Washington Post",
    "The Wall Street Journal",
    "Bloomberg",
    "National Geographic",
    "Time",
    "The Huffington Post",
    "BuzzFeed",
    "Vice News",
  ];

  const handleSave = async (event) => {
    event.preventDefault();

    const response = await API.post(
      "update-fav",
      {
        selectedSources,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  };

  return (
    <div>
      <h2>News Sources</h2>
      {newsSources.map((source, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={source}
              checked={selectedSources.includes(source)}
              onChange={handleCheckboxChange}
            />
            {source}
          </label>
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PreferencePage;
