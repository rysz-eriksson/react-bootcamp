import React,  {useState} from "react";
import { Modal } from 'antd';
import Button from "../../shared/button/button";

const AddMovieModal = () =>
{
    const [open, setIsOpen] = useState(false)
    const addMovie = () => {
        console.log("movie added")
        setIsOpen(false)
    }
    
    const resetForm = () => {
        console.log("reset form")
        setIsOpen(false)
    }
    
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                +Add movie
            </Button>
            <Modal
                open={open}
                title="ADD MOVIE"
                onOk={addMovie}
                onCancel={resetForm}
                footer={[
                    <Button secondary onClick={resetForm}>RESET</Button>,
                    <Button primary onClick={addMovie}>SUBMIT</Button>
                ]}

            >
            </Modal> 
        </>
    )
}

export default AddMovieModal