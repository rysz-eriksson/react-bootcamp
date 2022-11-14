import React from "react";
import Modal from "../modal/modal";
import Dropdown from "../shared/dropdown/dropdown";

const EditDeleteModal = ({setIsOpen, movieId}) => {

    const openModal = value => console.log(value)
    return (
        <Modal setIsOpen={setIsOpen}>
            <Dropdown 
                options={["Edit", "Delete"]} 
                setSelected={openModal}
                dropdownId={"edit-delete-movies"}
            />
        </Modal>
    )
}

export default EditDeleteModal