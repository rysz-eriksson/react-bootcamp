import React from 'react';
import Movie from '../movie/movie';

import moviesStyles from './movies.module.scss';

const Movies = ({movies}) => {
    return (
        <section className={moviesStyles.section}>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie}/>
            ))}
        </section>
    )
}

export default Movies;