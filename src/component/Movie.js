import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w300";

const Movie=({title,poster_path,vote_average,}) =>(
  
        <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        
        </div> 
)
 
export default Movie
