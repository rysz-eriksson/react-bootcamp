import React from "react";
import { Button } from "../button";
import btnStyles from './resetButton.module.scss'

const ResetButton = ({onClick})  =>
{
    return (
        <Button onClick={onClick} btnClassName={btnStyles.button}>
            RESET
        </Button>
    )
}

export default ResetButton;