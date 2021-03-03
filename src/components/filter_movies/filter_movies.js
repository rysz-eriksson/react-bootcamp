import React from 'react';

import filterStyles from './filter_movies.module.scss';

const FilterMovies = (props) => {
    return (
        <section className={filterStyles.filter}>
            <span>All</span>
            <span>Action</span>
            <span>Adventure</span>
            <span>Science Fiction</span>
            <span>Drama</span>
        </section>
    )
}

export default FilterMovies;