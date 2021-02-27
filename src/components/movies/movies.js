import React from 'react';
import Movie from '../movie/movie';

const Movies = ({movies}) => {
    return (
        <section>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie}/>
            ))}
        </section>
    )
}

export default Movies;