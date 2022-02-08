import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.main`
    display: flex;
    justify-content: center;
    display: flex;
    height: 100vh;
    width: 100vw;
    position: relative;
`

const MainTitle = styled.h1`
    color: #0375BB;
    position: absolute;
    align-items: center;
    align-self: center;
    font-size: 80px;
    top: 50%;
    left: 50%;
`

const Error404 = () => {
    return (
        <>
            <Header />
            <Container>
                <MainTitle>Page inexistante</MainTitle>
            </Container>
        </>

    );
};

export default Error404