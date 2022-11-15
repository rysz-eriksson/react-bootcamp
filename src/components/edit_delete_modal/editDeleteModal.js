import React from "react";
import Modal from "../modal/modal";
import { Button } from "../shared/button/button";

const EditDeleteModal = ({setIsOpen, handleModals}) => {
    const modalKeys = ['Edit', 'Delete']
    const openModal = value => handleModals(value)
    return (
        <Modal setIsOpen={setIsOpen}>
            <div>
                {modalKeys.map(key => <Button key={key} onClick={() => openModal(key)}>{key}</Button>)}
            </div>
        </Modal>
    )
}

export default EditDeleteModal