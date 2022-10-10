<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import UserInput from "./Components/user/UserInput";
import UserOutput from "./Components/user/UserOutput";

const App = () => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "jnae", age: 23 },
      { name: "julie", age: 33 },
    ],
    otherState: "this is another state",
  });

  const [anotherState, setAnotherState] = useState({
    another: "using state more than once",
  });

  console.log(personState, anotherState);

  const switchNameHandler = () => {
    setPersonState({
      person: [
        { name: "janny", age: 23 },
        { name: "julie", age: 35 },
      ],
      otherState: personState.otherState, // if you do not want to change the old state but just want it to be passed to the new state
    });
  };

  const changedNameHandler = (event) => {
    setPersonState({
      person: [
        { name: event.target.value, age: 23 },
        { name: "julie", age: 35 },
      ],
      otherState: personState.otherState, // if you do not want to change the old state but just want it to be passed to the new state
    });
  };

  const [userName, setUserName] = useState({user1: "jerrian"});

  // const changeUserHandler = () => {
  //   userName({
  //     users: [{ user1: "ddjerrian" }],
  //   });
  // };

  const typerHandler = (event) => {
    setUserName({ user1: event.target.value });
  };

  const style = {
    backgroundColor: "blue",
    // color: 'blue',
    padding: "1rem",
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler} style={style}>
        switchName
      </button>
      <Nav
        name={personState.person[0].name}
        age={personState.person[1].age}
        click={switchNameHandler}
        changed={changedNameHandler}
      >
        hobby: coding
      </Nav>
      {/* <Nav name="jane" age={personState.person[1].age} /> */}

      <UserInput />
      <UserOutput 
      name={userName.user1} 
      type={typerHandler} 
      currentName={useState.user1}
      />
      {/* <UserOutput name={userName.users[0].user1} 
      type={typerHandler} /> */}
      <UserOutput />
=======
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
// import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          // src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
>>>>>>> 93e2faf017789608dbe34e85212b12c1671c71cb
    </div>
  );
};

export default App;

<<<<<<< HEAD
// import { useState, useEffect } from 'react'
// import "./App.css";
// import Nav from "./Components/Nav/Nav";

// function App() {
//   const [counter, setCounter] = useState(0)

//   useEffect(()=>{
//     setCounter(100)
//   }, [])

//   return (
//     <div className="App">
//       <Nav name="john" lastName="doe" age={10 + 10} />
//       <Nav name="samuel" lastName="emmanuel" age="30" />
//       <Nav name="ella" lastName="judge" age="19" />

//       <button onClick={()=> setCounter((prevCount)=> prevCount -1)}>-</button>
//       <h2>{counter}</h2>
//       <button onClick={()=> setCounter((prevCount)=> prevCount +1)}>+</button>
//       {/* <button onClick={()=> setCounter((prevCounter)=> prevCounter -2)}>-</button> */}
//     </div>
//   );
// }
=======



// import { useEffect } from "react";
// import "./App.css";
// import MovieCards from "./Components/MovieCards/MovieCard";
// // const API_URL = "https://www.omdbadi.com?apikey=";

// const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

// const App = () => {
//   const searchMovie = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     console.log(data.search);
//   };

//   useEffect(() => {
//     searchMovie("Batman");
//   }, []);

//   return (
//     <div className="App">
//       <h1>Movie Zone</h1>

//       <div className="search">
//         <input
//           type="text"
//           placeholder="search for movies"
//           value="Superman"
//           onchange={() => {}}
//         />
//         {/* <img src={searchIcon} alt="search" onClick={() => {}} /> */}
//       </div>

//       <div className="container">
//         <MovieCard />
//       </div>
//     </div>
//   );
// };
>>>>>>> 93e2faf017789608dbe34e85212b12c1671c71cb

// export default App;
