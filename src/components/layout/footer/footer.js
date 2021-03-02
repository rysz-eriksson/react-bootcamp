import React from 'react';

import footerStyles from './footer.module.scss';

const Footer = (props) => {
    return (
        <footer className={footerStyles.footer}>
            {props.children}
        </footer>
    )
}

export default Footer;