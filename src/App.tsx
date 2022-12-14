/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideBarComponent from './components/SideBarComponent';
import Router from './Router';
const MenuContainer = styled.div`
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100%;
        `;
const RightContainer = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: white;
        height: min-height;
        min-width: 100px;
        padding: 0 0 0 9.5rem;
        `;
function App(){
    
    const menuList = [
        {
            id: "0",
            text: "　HOME",
            path: "/home",
        },
        {
            id: "1",
            text: "　주간 보고　",
            path: "/weekly",
        },
        {
            id: "2",
            text: "　월간 보고",
            path: "/monthly",
        },
        {
            id: "3",
            text: "　BackUp",
            path: "/backup",
        },
        {
            id: "4",
            text: "　모니터링",
            path: "/monitoring",
        },
    ];

    const [currentMenu, setCurrentMenu] = useState(menuList[0].id);
    const changeState = (id: string) => {
        setCurrentMenu(id);
    };
    useEffect(() => {
        
    }, [currentMenu]);
    return(
        <MenuContainer className="menu">
            <BrowserRouter>
                <SideBarComponent 
                    currentMenu={currentMenu}
                    menuList={menuList}
                    changeState={changeState}
                />
                <RightContainer className="main">
                    <Router
                        currentMenu={currentMenu}
                        menuList={menuList}
                        changeState={changeState}
                        />
                </RightContainer>
            </BrowserRouter>
        </MenuContainer>
    );

}

export default App;