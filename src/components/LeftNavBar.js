import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #F6BC4D;
    width: 509px;
    height: 100vh;
    right: 0;
    position: fixed;
    border-left: 4px solid #0375BB;
    box-sizing: border-box;
    z-index: 2;

    @media (max-width: 1500px) {
        width: 100%;
    }
`

const Title = styled.h1`
    color: #0375BB;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;
    -webkit-letter-spacing: 0em;
    -moz-letter-spacing: 0em;
    -ms-letter-spacing: 0em;
`

const Subtitle = styled.h3`
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    -webkit-letter-spacing: 0em;
    -moz-letter-spacing: 0em;
    -ms-letter-spacing: 0em;
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

    -webkit-align-self: center;
    -ms-flex-item-align: center;
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
            <ButtonSignup
                // onClick={}
            >
                S'inscrire
            </ButtonSignup>
            <SpanLink>Vous avez des questions ? Visiter la page F.A.Q.</SpanLink>
        </Nav>
    );
};

export default LeftNavBar;