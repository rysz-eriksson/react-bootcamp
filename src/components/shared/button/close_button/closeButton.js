import React from "react";
import styled from "styled-components";


const Div = styled.div`
display: flex;
justify-content: flex-end;
`

const Button = styled.button`
    font-size: 20px;
    color: white;
    padding: 10px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
`

const CloseButton = ({onClick})  =>
{
    return (
        <Div>
            <Button onClick={onClick}>
                X
            </Button>
        </Div>

    )
}

export default CloseButton;