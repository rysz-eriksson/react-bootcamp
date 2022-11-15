import React from "react";
import BigModal from "../../big_modal/big_modal";
import SubmitButton from "../../shared/button/submit_button/submitButton";
import ResetButton from "../../shared/button/reset_button/resetButton";

const AddMovieModal = ({setIsOpen}) =>
{
    const onAddMovie = () => setIsOpen(false)
    const onReset = () => setIsOpen(false)
    return (
        <BigModal setIsOpen={setIsOpen} title={'ADD MOVIE'}>
            <section>
                <ResetButton onClick={onReset} />
                <SubmitButton onClick={onAddMovie}/>
            </section>
        </BigModal>
    )
}

export default AddMovieModal