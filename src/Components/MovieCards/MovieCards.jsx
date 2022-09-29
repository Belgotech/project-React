import React from 'react'

const MovieCards = () => {
    return (
        <div className="movie">
          <div>
            <p>{movie1.year}</p>
          </div>

          <div>
            <img src={movie1.poster !=='N/A' ? movie1.poster  : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
    )
}

export default Footer
