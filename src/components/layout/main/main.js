import React from 'react';
import mainStyles from './main.module.scss';

const Main = (props) => {
    return (
        <main className={mainStyles.main}>
            {props.children}
        </main>
    )
}

export default Main;