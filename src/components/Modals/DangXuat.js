import React, {useContext} from 'react';
import {Modal} from 'antd'
import {AppContext} from "../../Context/AppProvider";
import {useHistory} from "react-router-dom"
import {reactLocalStorage} from 'reactjs-localstorage';
import {SIGNIN} from "../value_const";


export default function EditChanel() {
    const history = useHistory();
    const {dangXuat, setDangXuat} = useContext(AppContext);
    const handleOK = () => {
        setDangXuat(false)
        reactLocalStorage.clear()
        history.push(SIGNIN)
    }
    const handleCancel = () => {
        setDangXuat(false)
    }

    return (
        <div>
            <Modal
                title={"Bạn có muốn đăng xuất"}
                visible={dangXuat}
                onOk={handleOK}
                onCancel={handleCancel}
            >
            </Modal>
        </div>
    );

}
