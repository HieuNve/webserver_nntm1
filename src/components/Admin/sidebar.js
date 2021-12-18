import React, {useContext} from 'react';
import {Row, Col, Button} from "antd";
import styled from "styled-components";
import {AppContext} from "../../Context/AppProvider";
import {useHistory} from 'react-router-dom'

const SidebarStyled = styled.div`
  background-image: linear-gradient(#1976d2, #569ce1);
  color: #1a1b1b;
  height: 100vh;
  border-radius: 10px;

  .chanel {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    margin-bottom: 3px;
  }
`;


export default function Sidebar() {
    const history = useHistory();
    const {setSelectedTabChanel, setSelectedTabAcc, setDangXuat, setIsTreeMnd} = useContext(AppContext);

    const dangXuat = () => {
        setDangXuat(true)
    }

    function openAccMng() {
        setSelectedTabChanel(false)
        setIsTreeMnd(false)
        setSelectedTabAcc(true)
    }

    function openTreeMng() {
        setSelectedTabChanel(false)
        setSelectedTabAcc(false)
        setIsTreeMnd(true)
    }

    function openFarmMng() {
        setSelectedTabChanel(true)
        setIsTreeMnd(false)
        setSelectedTabAcc(false)
    }

    return (
        <SidebarStyled>
            <Row justify={"center"}>

                <Col span={23}>
                    <Button className={"chanel"} onClick={() => {
                        openAccMng()
                    }}>Quản lý tài khoản</Button>
                </Col>
                <Col span={23}>
                    <Button className={"chanel"} onClick={() => {
                        openTreeMng()
                    }}>Quản lý cây trồng</Button>
                </Col>


            </Row>
        </SidebarStyled>
    );
}

