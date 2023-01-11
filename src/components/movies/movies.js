import React from 'react';
import { useMovies } from '../../graphql/hooks';
import Movie from '../movie/movie';

import moviesStyles from './movies.module.scss';
import { useSelector } from 'react-redux';

const Movies = () => {
    const [filter, sort] = useSelector((state) => [state.filter, state.sort])
    const {data, loading, error} = useMovies(filter, sort)
    console.log(data, error)
    console.log(sort, filter)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>
    return (
        <section className={moviesStyles.section}>
            {data.movies.map(movie => (
                <Movie key={movie.id} movie={movie}/>
            ))}
        </section>
    )
}

export default Movies;

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