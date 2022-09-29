import { useEffect } from "react";
// import "./App.css";
// import Nav from "./Components/Nav/Nav";
const API_URL = "https://www.omdbadi.com?apikey=";

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  };

  useEffect(() => {
    searchMovie("Batman");
  }, []);

  return (
    <div className="App">
      <h1>Movie Zone</h1>

      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value="Superman"
          onchange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        
      </div>
    </div>
  );
};

export default App;
