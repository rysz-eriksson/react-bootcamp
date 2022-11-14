import React from 'react';
import PropTypes from 'prop-types'

import movieStyles from './movie.module.scss';
import notFound from '../../images/not-found-image.jpg'
import { useSelector } from 'react-redux';
import DetailsButton from '../shared/button/details_button/detailsButton';

const getMovieById = (state, id) => state.movies.find(movie => movie.id === id)

const Movie = ({id}) => {
    const movie = useSelector(state => getMovieById(state, id))
    const addFallbackImage = (e) => {
        e.target.src = notFound
    }
    return (
        <article className={movieStyles.article}>
            <DetailsButton movieId={id} />
            <img 
                src={movie.poster_path}
                onError={addFallbackImage}
            />
            <div>
                <h3>{movie.title}</h3>
                <span>{movie.release_date.split('-')[0]}</span>
            </div>
            <p>{movie.genres.join(', ')}</p>
        </article>
    )
}

Movie.PropTypes = { id: PropTypes.number.isRequired }

// Movie.propTypes = {
//     movie: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         tagline: PropTypes.string,
//         vote_average: PropTypes.number.isRequired,
//         vote_count: PropTypes.number.isRequired,
//         release_date: PropTypes.string.isRequired,
//         poster_path: PropTypes.string.isRequired,
//         overview: PropTypes.string,
//         budget: PropTypes.number,
//         revenue: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//         runtime: PropTypes.number,
//     })
// }

export default Movie;