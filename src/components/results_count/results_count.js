import React from 'react';
import { useSelector } from 'react-redux';

import countStyles from './results_count.module.scss';

const countedMovies = state => state.movies.length

const ResultsCount = () => {
    const count = useSelector(countedMovies)
    return (
        <section className={countStyles.section}>
            <h4>
                <span>
                    {count}
                </span> movies found
            </h4>
        </section>
    )
}

export default ResultsCount;