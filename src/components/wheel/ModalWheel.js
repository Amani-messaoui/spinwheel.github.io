import React from 'react'
import { Modal } from 'antd';
import 'antd/dist/antd.css';

function ModalWheel({ setIsModalVisible, isModalVisible, itemobject, pauseAnimation }) {
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        pauseAnimation()
    };
    return (
        <div>
            <Modal title= {
                <div>
                    <h5 className="NameOfChoise">Your choise was : 
                    <span> {itemobject[0].name}</span></h5>
                </div>
            }
                width={800}
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>
                <video width="750px" height="350px" controls autoPlay
                    src={itemobject[0].Video} type="video/mp4">
                </video>
            </Modal>
        </div>
    )
}

export default ModalWheel
