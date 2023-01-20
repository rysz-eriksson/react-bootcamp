import React, { useState } from 'react';

import movieStyles from './movie.module.scss';
import notFound from '../../images/not-found-image.jpg'
import EditDeleteModal from '../edit_delete_modal/editDeleteModal'
import DeleteMovieModal from '../delete_movie/deleteMovieModal'
import EditMovieModal from '../edit_movie/editMovieModal'

const Movie = ({movie}) => {
    const [isEditDeleteOpen, setIsEditDeleteOpen] = useState(false)
    const [isEditMovieOpen, setIsEditMovieOpen] = useState(false)
    const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(false)
    const addFallbackImage = (e) => {
        e.target.src = notFound
    }

    const handleModalsVisibility = value => {
        switch(value) {
            case 'Edit':
                setIsEditMovieOpen(true)
                setIsEditDeleteOpen(false)
                break;
            case 'Delete':
                setIsDeleteMovieOpen(true)
                setIsEditDeleteOpen(false)
                break;
            case 'editDelete':
                setIsEditDeleteOpen(false)
                break;
    }
}

    return (
        <article 
            className={movieStyles.article}
            onMouseEnter={() => setIsEditDeleteOpen(true)}
            onMouseLeave={() => setIsEditDeleteOpen(false)}
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
            {isEditDeleteOpen && <EditDeleteModal handleModals={handleModalsVisibility} />}
            {isEditMovieOpen && <EditMovieModal  open={isEditMovieOpen} setIsOpen={setIsEditMovieOpen} movieId={movie.id} />}
            {isDeleteMovieOpen && <DeleteMovieModal open={isDeleteMovieOpen} setIsOpen={setIsDeleteMovieOpen} movieId={movie.id} />}
        </article>
    )
}

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