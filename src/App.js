import './App.css';

import Index from "./components/Admin";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import AppProvider from "./Context/AppProvider";
import AddFarm from "./components/Modals/AddFarm";
import AddAccount from "./components/Modals/AddAccount";
import DangXuat from "./components/Modals/DangXuat"
import Addtheloai from "./components/Modals/Addtheloai";
import XoaAcc from "./components/Modals/XoaAcc";
import AppChanel from "./Context/AppChanel";
import XoaChanle from "./components/Modals/XoaChanle";
import {ADMIN, LOGIN} from "./components/value_const";

function App() {
    return (
        <BrowserRouter>
            <AppChanel>
                <AppProvider>
                    <Switch>
                        <Route component={Index} path={ADMIN}/>
                        <Route component={Login} path={LOGIN}/>
                    </Switch>
                    <AddFarm/>
                    <AddAccount/>
                    <DangXuat/>
                    <Addtheloai/>
                    <XoaAcc/>
                    <XoaChanle/>
                </AppProvider>
            </AppChanel>
        </BrowserRouter>
    );
}

export default App;
