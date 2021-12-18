import React, {useContext} from 'react';
import {Form, Input, message, Modal, Select} from 'antd'
import {AppContext} from "../../Context/AppProvider";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import {AppContextChanel} from "../../Context/AppChanel";

const Option = Select
var quyen;

export default function AddAccount() {
    const {isAddAcc, setIsAddAcc} = useContext(AppContext);
    const {aray3, setListAcc, listAcc} = useContext(AppContextChanel)

    const history = useHistory()


    const handleOK = () => {
        console.log({formData: form.getFieldsValue()});
        let user = form.getFieldsValue().user_name;
        let phone = form.getFieldsValue().phone_number;
        let password = form.getFieldsValue().pass_word;
        console.log({password})
        console.log({user})
        const requetLogin = async () => {
            const par = {
                username: user,
                password: password,
                phoneNumber: phone,
            }
            const result = await axios.post('http://159.223.56.85/api/auth/register', par)
            console.log({result})
            return result
        }

        requetLogin().then(res => {
            console.log()
            if (res.data.success === 1){
                message.success(`successfully added account ${user}`);
                const requet_acc = async () => {
                    const result = await axios.get('http://159.223.56.85/home')
                    return result
                }
                requet_acc().then(res => {
                    let data = res.data.data
                    for (let i = 0; i < res.data.data.length; i++) {
                        console.log(res.data.data[i])
                        setListAcc(res.data.data)
                    }
                    console.log({listAcc})
                })
            }
        })
        form.resetFields()
        setIsAddAcc(false)
    }
    const handleCancel = () => {
        form.resetFields()
        setIsAddAcc(false)
    }

    function onChange(value) {
        console.log({value});
        quyen = value;
    }

    const [form] = Form.useForm();
    return (
        <div>
            <Modal
                title={"Add Account"}
                visible={isAddAcc}
                onOk={handleOK}
                onCancel={handleCancel}
            >
                <Form form={form} layout={'vertical'}>
                    <Form.Item label={"Tên Đăng Nhập"} name={'user_name'}>
                        <Input placeholder={"tên đăng nhập"}/>
                    </Form.Item>
                    <Form.Item label={"Số điện thoại"} name={'phone_number'}>
                        <Input placeholder={"Số điện thoại"}/>
                    </Form.Item>
                    <Form.Item label={"Mật Khẩu"} name={'pass_word'}>
                        <Input.Password placeholder={"Mật Khẩu"}/>
                    </Form.Item>
                    <Form.Item label={"Quyền"} name={'quyen'}>
                        <Input.Group>
                            <Select defaultValue="Người dùng" style={{width: '30%'}} onChange={onChange}>
                                <Option value="Admin">Quản Trị</Option>
                                <Option value="User">Người Dùng</Option>
                            </Select>
                        </Input.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );

}
