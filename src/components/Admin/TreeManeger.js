import React from 'react';
import {Button, Input} from "antd";
import {PlusSquareOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {AppContext} from "../../Context/AppProvider";
import FarmList from "./FarmList";
import axios from "axios";
import EditChanel from "../Modals/EditChanel";
import {AppContextChanel} from "../../Context/AppChanel";


var array2 = []
var obj;
const { Search } = Input;
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
  .timkiem{
    width: 400px;
    margin-right: 30px;
  }
`;
const ButtonGroupStyle = styled.div`
  align-items: center;
  float: right;
`;

export default function TreeManeger() {
    const {setIsAddChanel, setTheloai} = React.useContext(AppContext)
    const {listTree} = React.useContext(AppContextChanel)
    const handleAddChanel = () => {
        setIsAddChanel(true)
    }
    const handleAddTL = () => {
        setTheloai(true)
    }
    const onSearch = value => console.log(value);
    return (
        <div>
            <HeaderStyle>
                <ButtonGroupStyle>
                    <Button type={"text"} onClick={() => {
                        handleAddTL()
                    }} icon={<PlusSquareOutlined></PlusSquareOutlined>}
                    >Thêm Cây</Button>
                </ButtonGroupStyle>
                <Search className={"timkiem"} placeholder="tìm kiếm tên chủ vườn" onSearch={onSearch} enterButton />
            </HeaderStyle>

            {
                listTree.map(val =>
                    <FarmList name={val.chanel_name} idChanel={val.id}/>
                )
            }
            <EditChanel/>
        </div>
    );

}

