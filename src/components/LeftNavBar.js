import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #F6BC4D;
    width: 450px;
    height: 100vh;
    right: 0;
    border-left: 6px solid #0375BB;
    box-sizing: content-box;

    @media (max-width: 1010.98px) {
        width: 100%;
        border: none;
        height: 90vh;
    }
`

const Title = styled.h1`
    color: #0375BB;
    font-size: 47px;
    font-weight: 700;
    text-align: center;
`

const Subtitle = styled.h3`
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
`

const ContainerTitle = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const ButtonSignup = styled.button`
    margin-top: 20px;
    height: 62px;
    width: 315px;
    color: #fff;
    align-self: center;
    border-radius: 81px;
    border-style: none;
    background: #0375BB;
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;
`

const SpanLink = styled.span`
    bottom: 30px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    position: relative;
    margin: 100px auto;
`

const LeftNavBar = () => {
    return (
        <Nav>
            <ContainerTitle>
                <Title>Tu veux devenir un bénévole ?</Title>
                <Subtitle>Rejoins-nous</Subtitle>
            </ContainerTitle>
            <ButtonSignup>S'inscrire</ButtonSignup>
            <SpanLink>Vous avez des questions ? Visitez notre page F.A.Q.</SpanLink>
        </Nav>
    );
};

export default LeftNavBar;