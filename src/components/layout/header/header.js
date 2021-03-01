import React from 'react';
import headerStyles from './header.module.scss';

const Header = (props) => {
    return (
        <header className={headerStyles.header}>
            {props.children}
        </header>
    )
}

export default Header;