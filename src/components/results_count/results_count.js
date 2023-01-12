import React from 'react';
import { useSelector } from 'react-redux';

import countStyles from './results_count.module.scss';

const ResultsCount = () => {
    const count = useSelector((state) => state.count.value)
    console.log(count)
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