import React from "react";
import Section from "../../layout/section/section";
import { Button } from "../../shared/button/button";
import BigModal from "../../big_modal/big_modal";

const AddMovieModal = ({setIsOpen}) =>
{
    return (
        <BigModal setIsOpen={setIsOpen} title={'ADD MOVIE'}>
            <Section>
                add movie
            </Section>
            <Section>
                <Button>
                    Reset
                </Button>
                <Button>
                    Submit
                </Button>
            </Section>
        </BigModal>
    )
}

export default AddMovieModal