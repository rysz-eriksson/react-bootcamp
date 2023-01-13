import React from "react";
import BigModal from "../../big_modal/big_modal";
import Button from "../../shared/button/button";

const AddMovieModal = ({setIsOpen}) =>
{
    const onAddMovie = () => setIsOpen(false)
    const onReset = () => setIsOpen(false)
    return (
        <BigModal setIsOpen={setIsOpen} title={'ADD MOVIE'}>
            <section>
                <Button secondary onClick={onReset}>RESET</Button>
                <Button primary onClick={onAddMovie}>SUBMIT</Button>

            </section>
        </BigModal>
    )
}

export default AddMovieModal