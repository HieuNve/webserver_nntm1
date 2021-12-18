import React, {useContext} from 'react';
import {Avatar, Button, Col, Row, Typography, Image} from "antd";
import styled from "styled-components";
import {AppContext} from "../../Context/AppProvider";
import {AppContextChanel} from "../../Context/AppChanel";
import EditAcc from "../Modals/EditAcc";
import logo from "../../assets/images/farmer.png"

const ChanelStyle = styled.div`
  margin-top: 10px;
  margin-left: 20px;

`;

export default function AccountList({accName, AccPass, AccQuyen, accid}) {
    const {setEditAcc, setXoaAcc, setSelectedTabChanel, setSelectedTabAcc} = useContext(AppContext)
    const {setAccId} = useContext(AppContextChanel)
    const onClickxoaAcc = () => {
        setXoaAcc(true)
        setAccId(accid)
    }
    const onClickEditAcc = () => {
        setEditAcc(true)
        setAccId(accid)
    }
    const onClickgetFarm = () => {
        setSelectedTabChanel(true)
        setSelectedTabAcc(false)
        setAccId(accid)
    }
    return (
        <div>
            <ChanelStyle>
                <Row>
                    <Col span={4}><Image src={logo} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30
                    }}></Image></Col>
                    <Col span={4}><Typography.Text>{accName}</Typography.Text></Col>
                    {/*<Col span={6}><Typography.Text>{AccPass}</Typography.Text></Col>*/}
                    <Col span={5}><Typography.Text>{AccQuyen}</Typography.Text></Col>
                    <Col span={2}> <Button onClick={onClickEditAcc}>Edit</Button></Col>
                    <Col span={2}> <Button onClick={onClickxoaAcc}>Detele</Button></Col>
                    <Col span={2}> <Button onClick={onClickgetFarm}>Xem vườn</Button></Col>

                </Row>
                <hr/>
            </ChanelStyle>

        </div>
    );
}

