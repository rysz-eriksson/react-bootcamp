import React from "react";
import { Button } from "../button";
import btnStyles from './submitButton.module.scss'

const SubmitButton = ({onClick})  =>
{
    return (
        <Button onClick={onClick} btnClassName={btnStyles.button}>
            SUBMIT
        </Button>
    )
}

export default SubmitButton;