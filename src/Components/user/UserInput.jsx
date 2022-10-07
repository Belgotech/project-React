import React from 'react'

const UserInput = (props) => {
    return <input type="text" onChange={props.type}  value={props.currentName}/>
}

export default UserInput
