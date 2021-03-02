import React from 'react';
import PropTypes from 'prop-types'

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

Movies.PropTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            tagline: PropTypes.string,
            vote_average: PropTypes.number.isRequired,
            vote_count: PropTypes.number.isRequired,
            release_date: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired,
            overview: PropTypes.string,
            budget: PropTypes.number,
            revenue: PropTypes.number.isRequired,
            genres: PropTypes.arrayOf(PropTypes.string).isRequired,
            runtime: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Movies;