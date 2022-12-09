/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TemplateContainer from '../components/TemplateContainer';

function Home(props: any) {

    useEffect(() => {
        console.log(props.currentMenu);
    }, [props.currentMenu]);

    return (
        <>
            <TemplateContainer />
        </>
        
    );
}

export default Home;