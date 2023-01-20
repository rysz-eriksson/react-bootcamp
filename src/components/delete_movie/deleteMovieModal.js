import React from "react";
import { Modal } from 'antd';
import Button from "../shared/button/button";


const DeleteMovieModal = ({open, setIsOpen, movieId}) =>
{
    const editMovie = () => {
        console.log(`Delete movie with id: ${movieId}`)
        setIsOpen(false)
    }

    const closeModal = () => {
        console.log("close delete movie modal")
        setIsOpen(false)
    }

    return (
    <Modal
        open={open}
        title="DELETE MOVIE"
        onCancel={closeModal}
        footer={[
            <Button primary onClick={editMovie}>CONFIRM</Button>
        ]}
    >
            <p>Are you sure you want to delete this movie?</p>
    </Modal> 
    )
}

export default DeleteMovieModal