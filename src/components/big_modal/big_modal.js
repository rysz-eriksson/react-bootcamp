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
                    <div className={styles.container}>
                        <h2 className={styles.title}>{title}</h2>
                        {children}
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default BigModal