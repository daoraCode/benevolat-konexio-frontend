import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #F6BC4D;
    width: 590px;
    height: 100vh;

    top: 0;
    right: 0;
    right: ${props => props.right || '0'};
    border-left: 6px solid #0375BB;
    box-sizing: content-box;

    @media (max-width: 1010.98px) {
        width: 100%;
        height: 90vh;
        border-left: none;
        border-top: 6px solid #0375BB;
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

const SpanLink = styled.span`
    bottom: 30px;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    position: relative;
    margin: 50px;
`

const RightNavbar = ({ right }) => {
    return (
        <Nav
            right={right}
        >
            <ContainerTitle>
                <Title>Tu veux devenir un bénévole ?</Title>
                <Subtitle>Rejoins-nous</Subtitle>
            </ContainerTitle>
            <ButtonComponent label="S'inscrire" hover />
            <SpanLink>Vous avez des questions? Visitez la page F.A.Q.</SpanLink>
        </Nav>
    );
};

export default RightNavbar