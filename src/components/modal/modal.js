import React from "react";
import CloseButton from "../shared/button/close_button/closeButton";

import modalStyles from './modal.module.scss'

const Modal = ({setIsOpen, children}) => 
{
    return (
        <div className={modalStyles.modal}>
            <CloseButton onClick={() => setIsOpen(false)}>
                X
            </CloseButton>
            {children}
        </div>
    )
}

export default Modal