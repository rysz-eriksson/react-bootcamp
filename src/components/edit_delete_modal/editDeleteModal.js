import React, {useState} from "react";
import { Modal, List } from 'antd';
import styled from "styled-components";
import { HiEllipsisVertical } from "react-icons/hi2";

const BtnDiv = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

const ModalDiv = styled.div`
display: flex;
flex-direction: row;
`

const EditDeleteModal = ({handleModals}) => {
    const [open, setOpen] = useState(false)
    const modalKeys = ['Edit', 'Delete']
    const openModal = value => handleModals(value)
    return (
        <>
            <BtnDiv>
                <button onClick={() => {setOpen(true)}}>
                    <HiEllipsisVertical />
                </button>
            </BtnDiv>
            <Modal 
                open={open}
                footer={null}
                onCancel={() => {setOpen(false)}}
            >
                <ModalDiv>
                    <List
                        dataSource={modalKeys}
                        renderItem={(key) => (
                            <List.Item>
                                <a onClick={() => openModal(key)}>{key}</a>
                            </List.Item>
                        )}
                    />
                </ModalDiv>
            </Modal>
        </>
    )
}

export default EditDeleteModal