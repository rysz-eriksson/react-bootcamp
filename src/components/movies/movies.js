import React from 'react';
import Movie from '../movie/movie';

const Movies = ({movies}) => {
    return (
        <section>
            {movies.map(item => {
                <Movie movie={item}/>
            })}
        </section>
    )
}

export default Movies;