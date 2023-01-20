import React from "react";
import { Modal } from 'antd';
import Button from "../shared/button/button";


const EditMovieModal = ({open, setIsOpen, movieId}) =>
{
    const editMovie = () => {
        console.log(`Edit movie with id: ${movieId}`)
        setIsOpen(false)
    }

    const resetForm = () => {
        console.log("reset form")
        setIsOpen(false)
    }

    return (
    <Modal
        open={open}
        title="EDIT MOVIE"
        onCancel={resetForm}
        footer={[
            <Button secondary onClick={resetForm}>RESET</Button>,
            <Button primary onClick={editMovie}>SAVE</Button>
        ]}
    >
    </Modal> 
    )
}

export default EditMovieModal