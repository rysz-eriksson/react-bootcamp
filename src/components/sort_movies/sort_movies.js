import React from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from '../shared/dropdown/dropdown';
import { sortSet } from '../../redux/sortSlice';

import sortStyles from './sort_movies.module.scss';

const SortMovies = () => {
    const dispatch = useDispatch()
    const handleSortChange = value => dispatch(sortSet(value))
    
    return (
        <section className={sortStyles.sort}>
            <label htmlFor="sort-movies">Sort movies</label>
            <Dropdown 
                options={["release_date", "runtime"]} 
                setSelected={handleSortChange}
                dropdownId={"sort-movies"}
            />
        </section>
    )
}

export default SortMovies;