import React from 'react';
import {Button} from "antd";
import {PlusSquareOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {AppContext} from "../../Context/AppProvider";
import AccountList from "./AccountList";
import axios from "axios";
import {AppContextChanel} from "../../Context/AppChanel";
import EditAcc from "../Modals/EditAcc";

var array2 = []

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &_title {
      margin: 0;
      font-weight: bold;
    }

    &_decr {
      font-size: 12px;
    }
  }
`;


const ButtonGroupStyle = styled.div`
  justify-content: space-between;
  align-items: center;
  float: right;
`;
const MessListStyle = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;


export default function AccountManager() {
    const {setIsAddAcc} = React.useContext(AppContext)
    const {setAccId, aray3, listAcc, setListAcc, AccId} = React.useContext(AppContextChanel)
    const handleAddAcc = () => {
        setIsAddAcc(true)
    }
    React.useEffect(()=>{
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

    }, [])

    return (
        <div>
            <HeaderStyle>
                <ButtonGroupStyle>
                    <Button type={"text"} onClick={() => {
                        handleAddAcc()
                    }} icon={<PlusSquareOutlined></PlusSquareOutlined>}
                    >Add Account</Button>
                </ButtonGroupStyle>
            </HeaderStyle>
            <AccountList accid={null} accName={"Username"} AccPass={"Password"} AccQuyen={"Số điện thoai"}/>
            <MessListStyle key={'1'}>
                {
                    listAcc.map(val =>
                        <AccountList key={val.password} accName={val.username}
                                     AccQuyen={val.phoneNumber} accid={"0"}/>
                    )
                }
            </MessListStyle>
            <EditAcc/>
        </div>
    );

}

