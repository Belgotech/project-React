import React from 'react'

const Nav = (props) => {
    return (
        <div>
            <p onClick={props.click}> my name is {props.name} i am {props.age}  </p>
            <input type="text" onChange={props.changed} />
            <p>{props.children}</p>
        </div>
    )
}

export default Nav




// import React from 'react'

// const Nav = (props) => {
//     return (
//         <div>
//             <>
//       <h1>name: {props.name}</h1>
//       <h2>lastName: {props.lastName}</h2>
//       <h3>age: {props.age}</h3>
//       </>
//         </div>
//     )
// }

// export default Nav
