import React, {useState} from 'react';

export const AppContextChanel = React.createContext();
var arrayTl = []
var arrayChanel = []
var aray3 = []


export default function AppChanel({children}) {
    const [AccId, setAccId] = useState('')
    const [AccName, setAccName] = useState("")
    const [ChanelId, setChanelId] = useState('')
    const [Idtheloai, setIdtheLoai] = useState('')
    const [tenTheloai, setTenTheLoai] = useState('')
    const [nameChanel, setNameChanel] = useState('')
    const [url, setUrl] = useState('')
    const [idAcc, setIdAcc] = useState('')
    const [idChanel, setIdChanel] = useState('')
    const [list, setList] = React.useState([])
    const [listAcc, setListAcc] = React.useState([])
    const [listFarm, setListFarm] = React.useState([])
    const [listTree, setListTree] = React.useState([])
    const [listTheLoai, setListTheLoai] = React.useState([])

    return (
        <AppContextChanel.Provider value={{
            AccId,
            setAccId, ChanelId, setChanelId, arrayTl, Idtheloai,
            setIdtheLoai, arrayChanel, tenTheloai, setTenTheLoai, list,
            nameChanel, setNameChanel, url, setUrl, idAcc, setIdAcc,
            idChanel, setIdChanel, aray3, listAcc, setListAcc, listFarm,
            setListFarm, listTheLoai, setListTheLoai, AccName, setAccName, setListTree, listTree
        }}>
            {children}
        </AppContextChanel.Provider>
    );
}

