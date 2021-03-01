import React from 'react';

import countStyles from './results_count.module.scss';

const ResultsCount = ({count}) => {
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