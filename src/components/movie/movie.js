import React from 'react';

const Movie = ({movie}) => {
    return (
        <article>
            <img 
                src={movie.poster_path}
                width="100px"
                height="150px"
            />
            <div>
                <h3>{movie.title}</h3>
                <span>{movie.release_date.split('-')[0]}</span>
            </div>
        </article>
    )
}

//<p>{movie.genres.map(genre => )}</p>
export default Movie;