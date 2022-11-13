import React from 'react';
import PropTypes from 'prop-types'

import Movie from '../movie/movie';

import moviesStyles from './movies.module.scss';
import { useSelector } from 'react-redux';

const getMoviesIds = ({movies}) => movies.map(movie => movie.id)
const getSort = (state) => {
    console.log(state)
    const {movies, sort} = state
    const copy = movies.slice()
    if (sort.value === 'runtime') {
        "by runtime"
        
        copy.sort((a, b) => b.runtime - a.runtime)
    }
    console.log(copy)
    return copy.map(movie => movie.id)
}

const Movies = () => {
    const moviesIds = useSelector(getSort)
    // const sortCriteria = useSelector(getSort)
    // console.log(sortCriteria)
    return (
        <section className={moviesStyles.section}>
            {moviesIds.map(id => (
                <Movie key={id} id={id}/>
            ))}
        </section>
    )
}

// Movies.propTypes = {
//     movies: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             tagline: PropTypes.string,
//             vote_average: PropTypes.number.isRequired,
//             vote_count: PropTypes.number.isRequired,
//             release_date: PropTypes.string.isRequired,
//             poster_path: PropTypes.string.isRequired,
//             overview: PropTypes.string,
//             budget: PropTypes.number,
//             revenue: PropTypes.number.isRequired,
//             genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//             runtime: PropTypes.number,
//         })
//     ).isRequired,
// }

export default Movies;