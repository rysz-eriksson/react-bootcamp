import React from 'react';
import { useDispatch } from 'react-redux';
import {filterSet} from './filterSlice';
import filterStyles from './filter_movies.module.scss';

const FilterMovies = (props) => {
    const dispatch = useDispatch()
    const handleFilterChange = value => dispatch(filterSet({key: 'byGenre', value}))

    const genresList = ["All", "Action", "Adventure", "Science Fiction",  "Drama"]
    return (
        <ul className={filterStyles.filter}>
            {genresList.map(genre =>
                {
                    return (
                        <li  key={genre}>
                            <a onClick={(() => handleFilterChange(genre))}>{genre}</a>
                        </li>
                    )

                })}
        </ul>
    )
}

export default FilterMovies;