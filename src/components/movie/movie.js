import React from 'react';

import movieStyles from './movie.module.scss';
import notFound from '../../images/not-found-image.jpg'

const Movie = ({movie}) => {
    const addFallbackImage = (e) => {
        e.target.src = notFound
    }
    return (
        <article className={movieStyles.article}>
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


export default Movie;