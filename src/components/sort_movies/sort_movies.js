import React from 'react';

import sortStyles from './sort_movies.module.scss';

const SortMovies = (props) => {
    return (
        <section className={sortStyles.sort}>
            <label for="sort-movies">Sort movies</label>
            <select id="sort-movies">
                <option value="release date">release date</option>
                <option value="runtime">runtime</option>
            </select>
        </section>
    )
}

export default SortMovies;