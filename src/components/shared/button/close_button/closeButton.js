import React from "react";
import { Button } from "../button";
import btnStyles from './closeButton.module.scss'

const CloseButton = ({onClick})  =>
{
    return (
        <div className={btnStyles.container}>
            <Button onClick={onClick} btnClassName={btnStyles.button}>
                X
            </Button>
        </div>

    )
}

export default CloseButton;