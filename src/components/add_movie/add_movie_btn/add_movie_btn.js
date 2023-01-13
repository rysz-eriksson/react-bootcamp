import React, {useState} from 'react';
import Button from '../../shared/button/button';
import AddMovieModal from '../add_movie_modal/add_movie_modal';

const AddMovieBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                +Add movie
            </Button>
            {isOpen && <AddMovieModal setIsOpen={setIsOpen}/>}
        </>

       
    )
}

export default AddMovieBtn;