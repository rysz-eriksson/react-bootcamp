import React from "react";
import BigModal from "../big_modal/big_modal";

import modalStyles from './deleteMovieModal.module.scss';

const DeleteMovieModal = ({setIsOpen, movieId}) =>
{
    return (
        <BigModal setIsOpen={setIsOpen} title={'DELETE MOVIE'}>
        </BigModal>
    )
}

export default DeleteMovieModal