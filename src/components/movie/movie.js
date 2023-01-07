import React, { useState } from 'react';
import PropTypes from 'prop-types'

import movieStyles from './movie.module.scss';
import notFound from '../../images/not-found-image.jpg'
import DetailsButton from '../shared/button/details_button/detailsButton';
import DeleteMovieModal from '../delete_movie/deleteMovieModal'
import EditMovieModal from '../edit_movie/editMovieModal'

const Movie = ({movie}) => {
    const [isBtnOpen, setIsBtnOpen] = useState(false)
    const [isEditMovieOpen, setIsEditMovieOpen] = useState(false)
    const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(false)
    const addFallbackImage = (e) => {
        e.target.src = notFound
    }

    const handleModalsVisibility = value => {
        switch(value) {
            case 'Edit':
                setIsEditMovieOpen(true)
                setIsBtnOpen(false)
                break;
            case 'Delete':
                setIsDeleteMovieOpen(true)
                setIsBtnOpen(false)
                break;
            case 'editDelete':
                setIsBtnOpen(false)
                break;
    }
}

    return (
        <article 
            className={movieStyles.article}
            onMouseEnter={() => setIsBtnOpen(true)}
            onMouseLeave={() => setIsBtnOpen(false)}
        >
            <img 
                src={movie.poster_path}
                onError={addFallbackImage}
            />
            <div>
                <h3>{movie.title}</h3>
                <span>{movie.release_date.split('-')[0]}</span>
            </div>
            <p>{movie.genres.join(', ')}</p>
            {isBtnOpen && <DetailsButton handleModals={handleModalsVisibility} />}
            {isEditMovieOpen && <EditMovieModal setIsOpen={setIsEditMovieOpen} movieId={id} />}
            {isDeleteMovieOpen && <DeleteMovieModal setIsOpen={setIsDeleteMovieOpen} movieId={id} />}
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