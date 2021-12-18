import React, {useContext} from 'react';
import FarmManeger from "./FarmManeger";
import {AppContext} from "../../Context/AppProvider";
import AccountManager from "./accountManager";
import TreeManeger from "./TreeManeger";


export default function Menu() {
    const {selectedTabChanel, selectedTabAcc, isTreeMng} = useContext(AppContext);
    console.log({selectedTabChanel})
    return (
        <div>
            {
                isTreeMng ? (
                    <TreeManeger/>
                ) : null
            }
            {
                selectedTabChanel ? (
                    <FarmManeger/>
                ) : null
            }
            {
                selectedTabAcc ? (
                    <AccountManager/>
                ) : null
            }

        </div>
    );
}

