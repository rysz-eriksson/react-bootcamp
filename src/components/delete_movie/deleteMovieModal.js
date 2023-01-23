import React from "react";
import { Modal } from 'antd';
import { useMutation } from "@apollo/client";
import { DELETE_MOVIE_MUTAION } from "../../graphql/queries";
// import { useDeleteMovie } from "../../graphql/hooks";
import Button from "../shared/button/button";


const DeleteMovieModal = ({open, setIsOpen, movieId}) =>
{
    const [deleteMovie, {data, loading, error}] = useMutation(DELETE_MOVIE_MUTAION)
    const onDeleteMovie = () => {
        // const data = await useDeleteMovie(movieId)
        deleteMovie({variables: {id: movieId}})
        console.log(`Deleted movie with id: ${movieId}`)
        console.log(data)
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
            <Button primary onClick={onDeleteMovie}>CONFIRM</Button>
        ]}
    >
            <p>Are you sure you want to delete this movie?</p>
    </Modal> 
    )
}

export default DeleteMovieModal