import React, { useState } from 'react';
import Dropdown from '../shared/dropdown/dropdown';

import sortStyles from './sort_movies.module.scss';

const SortMovies = () => {
    const [setCriteria, criteria] = useState("release-date")
    return (
        <section className={sortStyles.sort}>
            <label for="sort-movies">Sort movies</label>
            <Dropdown 
                options={["release-date", "runtime"]} 
                setSelected={setCriteria}
                dropdownId={"sort-movies"}
            />
        </section>
    )
}

export default SortMovies;