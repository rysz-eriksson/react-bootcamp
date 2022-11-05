import React from "react"
import styles from "./big_modal.module.scss"
import Modal from "../modal/modal"

const BigModal = ({setIsOpen, title, children}) => 
{
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />  
            <div className={styles.centered}>
                <Modal setIsOpen={setIsOpen}>
                    <h2>{title}</h2>
                    {children}
                </Modal>
            </div>
        </>
    )
}

export default BigModal