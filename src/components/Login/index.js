import React, {useState} from 'react';
import {Button, Col, Form, Image, Input, Row, Typography} from 'antd';
import {useHistory} from 'react-router-dom'
import {AppContextChanel} from "../../Context/AppChanel";
import styled from "styled-components";
import logo from "../../assets/images/logoblack.png"
import axios from "axios";
import {ADMIN, ID, NAME} from "../value_const";
import {reactLocalStorage} from 'reactjs-localstorage';

const {Title} = Typography;
// const logo = require("../../assets/images/logoblack.png")
const LoginStyle = styled.div`
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 150px;
  width: 1100px;
  height: 500px;
  margin-left: 420px;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 5px #888888;
`;


export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {setIdAcc, setAccName} = React.useContext(AppContextChanel)
    const history = useHistory()
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };
    const handleInputChange1 = (e) => {
        setPassword(e.target.value);
    };

    const logIn = () => {
        if (username === "" || password === "") {

        } else {
            const requetLogin = async () => {
                const param = {
                    username: username,
                    password: password
                }
                const result = await axios.post('http://159.223.56.85/api/auth/login', param)
                console.log({result})
                return result
            }

            requetLogin().then(res => {
                console.log(res.data.success)
                if (res.data.success === 1) {
                    history.push(ADMIN)
                    reactLocalStorage.set(ID, res.data.uuid)
                    reactLocalStorage.set(NAME, username)
                } else {
                    alert("Thông tin tài khoản mật khẩu không chính xác")
                }
            })
        }
    }
    return (
        <LoginStyle>
            <Row justify={"space-around"}>
                <Col span={8}>
                    <Image src={logo} style={{
                        width: "100%",
                        height: "100%",
                        marginTop: 50
                    }}/>
                </Col>
                <Col span={8}>
                    <div style={{
                        marginTop: 100,
                    }}>
                        <Title style={{textAlign: 'center'}} level={3}>eFarm</Title>

                        <Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{required: true, message: 'Bạn chưa nhập tên đăng nhập!',},]}
                            >
                                <Input onChange={handleInputChange}/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Bạn chưa nhập tài khoản!',},]}
                            >
                                <Input.Password onChange={handleInputChange1}/>
                            </Form.Item>

                            <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                                <Button type="primary" htmlType="submit" onClick={() => {
                                    logIn()
                                }}>Đăng nhập</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </LoginStyle>
    );
}

