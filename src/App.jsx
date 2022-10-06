import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";

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

  return (
    <div className="App">
      <button onClick={switchNameHandler}>switchName</button>
      <Nav 
        name={personState.person[0].name} 
        age={personState.person[1].age}
        click={switchNameHandler}
        changed={changedNameHandler}>
        hobby: coding
      </Nav>
      <Nav name="jane" age={personState.person[1].age} />
    </div>
  );
};

export default App;

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

// export default App;
