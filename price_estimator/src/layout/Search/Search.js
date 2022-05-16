import React, { useState } from "react";
import "./Search.scss";

const Search = () => {
  const [area, setArea] = useState(0);
  const [room, setRoom] = useState(0);
  const [heating, setHeating] = useState(0);

  const handleSubmit = (event) => {
    const url = "http://localhost:8000/apartment/";
    const data = {
      localization: "Borowska 26, Wrocław",
      measurement: area,
      rooms: room,
      heating: heating,
      user: "123456789",
    };

    const authorization = "Token " + "123456789"

    event.preventDefault();
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": authorization
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((r) => alert(r));
  };

  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
      <div className="defaultContainer searchHeader">
        Ustaw parametry wyszukiwania
      </div>
      <div className="searchInputContainer">
        <label className="defaultContainer searchInputLabel">
          Powierzchnia
        </label>
        <input
          type="text"
          value={area}
          className="defaultContainer searchInputInput"
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div className="searchInputContainer">
        <label className="defaultContainer searchInputLabel">
          Liczba pokoi
        </label>
        <input
          type="text"
          value={room}
          className="defaultContainer searchInputInput"
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <div className="searchInputContainer">
        <label className="defaultContainer searchInputLabel">Ogrzewanie</label>
        <input
          type="text"
          value={heating}
          className="defaultContainer searchInputInput"
          onChange={(e) => setHeating(e.target.value)}
        />
      </div>
      <div className="searchInputContainer">
        <div className="defaultContainer searchInputLabel searchInputInputDouble">
          Ustaw lokalizacje
        </div>
      </div>
      <label className="defaultContainer searchButtonContainer">
        Szukaj
        <input style={{ display: "none" }} type="submit" />
      </label>
    </form>
  );
};

export default Search;
