import React from 'react';
import {Button, Col, Image, Row} from 'antd'
import styled from "styled-components";
import logo from "../../assets/images/logo2.png"
import {reactLocalStorage} from 'reactjs-localstorage';
import {AppContext} from "../../Context/AppProvider";
import {NAME} from "../value_const";

const HeaderStyle = styled.div`
  background-color: #1976d2;
  height: 90px;
  box-shadow: 5px 5px 5px 5px #888888;
  margin-bottom: 5px;

  .home {
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
    color: white;
  }

  .btnDangXuat {
    margin-top: 30px;
    width: 100px;
    background-color: white;
    color: black;
  }

  .titleName {
    font-size: 15px;
    font-weight: bold;
    margin-top: 30px;
    color: white;
  }
`;


export default function Header() {
    const {setDangXuat} = React.useContext(AppContext)
    const name = reactLocalStorage.get(NAME)
    const signUp = () => {
        setDangXuat(true)
    }
    return (
        <HeaderStyle>
            <Row>
                <Col span={2}>
                    <Image src={logo} style={{
                        width: 65,
                        height: 80,
                        marginLeft: 10,
                        marginTop: 10
                    }}/>
                </Col>
                <Col span={16}>
                    <p className={"home"}>eFarm Admin</p>
                </Col>
                <Col span={4}>
                    <p className={"titleName"}>Tên tài khoản: {name}</p>
                </Col>
                <Col span={2}>
                    <Button className={"btnDangXuat"} type="primary" onClick={() => {
                        signUp()
                    }}>Đăng xuất</Button>
                </Col>
            </Row>

        </HeaderStyle>
    );
}
