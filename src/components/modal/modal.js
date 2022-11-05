import React from "react";
import { Button } from "../shared/button/button";

import styles from './modal.module.scss'

const Modal = ({setIsOpen, children}) => 
{
    return (
        <>
            <Button onClick={() => setIsOpen(false)}>
                X
            </Button>
            {children}
        </>
    )
}

export default Modal