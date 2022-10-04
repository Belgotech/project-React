// import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";

function App() {
  const person = [
    { name: "jnae", age: 23 },
    { name: "julie", age: 33 },
  ];

  // const switchNameHandler = ()=>{
  //   // console.log('was clicked');
  //   setState(
  //   const person = [
  //   {name: 'janny', age: 23},
  //   {name: 'julie', age: 33}
  // ]
  // }
  // )
  // const [switchNameHandler, setSwitchNameHandler] = useState[0];

const switchNameHandler = ()=>{
  person[0].name = "janny"
};

  return (
    <div className="App">
      <button onClick={switchNameHandler}>switchName</button>
      <Nav name={person[0].name} age={person[1].age}>
        {" "}
        hobby: coding
      </Nav>
      <Nav name="jane" age={person[1].name} />
    </div>
  );
}

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
