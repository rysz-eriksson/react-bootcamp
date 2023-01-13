import React, {useState} from "react";
import styled from "styled-components";
import { HiEllipsisVertical } from "react-icons/hi2";
import EditDeleteModal from "../../../edit_delete_modal/editDeleteModal";

const Div = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

const DetailsButton = ({handleModals})  =>
{
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(true)
        // handleModals('editDelete')
    }
    return (
        <Div>
            <button onClick={handleOnClick}>
                <HiEllipsisVertical />
            </button>
            {isOpen && <EditDeleteModal setIsOpen={setIsOpen} handleModals={handleModals} />}
        </Div>
    )
}

export default DetailsButton;