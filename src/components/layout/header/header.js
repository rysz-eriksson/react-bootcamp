import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
width: 1100px;
background-color: #232323;
margin: 0 auto;
display: flex;
flex-direction: column;
`

const Header = (props) => {
    return (
        <StyledHeader>
            {props.children}
        </StyledHeader>
    )
}

export default Header;