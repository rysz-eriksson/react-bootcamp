import React, {useState} from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { Button } from "../button";
import EditDeleteModal from "../../../edit_delete_modal/editDeleteModal";
import btnStyles from './detailsButton.module.scss'

const DetailsButton = ({movieId})  =>
{
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={btnStyles.container}>
            <Button onClick={() => setIsOpen(true)} btnClassName={btnStyles.button}>
                <HiEllipsisVertical />
            </Button>
            {isOpen && <EditDeleteModal setIsOpen={setIsOpen} movieId={movieId} />}
        </div>
    )
}

export default DetailsButton;