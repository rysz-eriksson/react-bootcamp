import React, {useState} from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { Button } from "../button";
import EditDeleteModal from "../../../edit_delete_modal/editDeleteModal";
import btnStyles from './detailsButton.module.scss'

const DetailsButton = ({handleModals})  =>
{
    const [isOpen, setIsOpen] = useState(false)

    const handleOnClick = () => {
        setIsOpen(true)
        // handleModals('editDelete')
    }
    return (
        <div className={btnStyles.container}>
            <Button onClick={handleOnClick} btnClassName={btnStyles.button}>
                <HiEllipsisVertical />
            </Button>
            {isOpen && <EditDeleteModal setIsOpen={setIsOpen} handleModals={handleModals} />}
        </div>
    )
}

export default DetailsButton;