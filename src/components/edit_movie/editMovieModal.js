import React from "react";
import BigModal from "../big_modal/big_modal";

import modalStyles from './editMovieModal.module.scss';

const EditMovieModal = ({setIsOpen, movieId}) =>
{
    return (
        <BigModal setIsOpen={setIsOpen} title={'EDIT MOVIE'}>
        </BigModal>
    )
}

export default EditMovieModal