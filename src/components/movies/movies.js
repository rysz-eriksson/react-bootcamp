import React from 'react';
import PropTypes from 'prop-types'

import Movie from '../movie/movie';

import moviesStyles from './movies.module.scss';
import { useSelector } from 'react-redux';

const getSorted = (_movies, _sort) => {
    if (_sort.value === 'runtime')
        _movies.sort((a, b) => b.runtime - a.runtime)
    else {
        const getParsedDate = date => Date.parse(date)
        _movies.sort((a, b) => getParsedDate(a.release_date) - getParsedDate(b.release_date))
    }
    return _movies
}

const filterByGenre = (movies, byGenre) => {
    if (byGenre === "All")
        return movies
    else
        return movies.filter(({genres}) => genres.includes(byGenre) )
    }
    
// by title
const filterByTitle = (movies, byTitle) => {
    if (!byTitle)
        return movies
    else
        return movies.filter(({title}) => title.toLowerCase().includes(byTitle.toLowerCase()))
    }

const getFiltered = (_movies, _filter) => {
    const moviesByGenre = filterByGenre(_movies, _filter.byGenre)
    return filterByTitle(moviesByGenre, _filter.byTitle)
}

const getMoviesIds = (state) => {
    console.log(state)
    const {movies, sort, filter} = state
    const moviesCopy = movies.slice()
    const filteredMovies = getFiltered(moviesCopy, filter)
    const sortedMovies = getSorted(filteredMovies, sort) 
    console.log('processed state', sortedMovies)
    return sortedMovies.map(movie => movie.id)
}

const Movies = () => {
    const moviesIds = useSelector(getMoviesIds)
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