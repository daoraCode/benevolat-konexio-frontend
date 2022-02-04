import React from 'react';
import LeftNavBar from '../components/LeftNavBar';
import styled from 'styled-components';
import HeaderAuth from '../components/HeaderAuth';


const Main = styled.div`
    display: flex;
    box-sizing: content-box;

    @media (max-width: 1010.98px) {
        flex-direction: column;
    }

`


const ContainerSignin = styled.div`
    flex: 1;
    margin-top: 60px;
`

const SigninContainer = styled.div`
    flex-direction: column;
    flex: auto;
`

const MainTitle = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    display: flex;
    color: #0375BB;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1300.98px) {
        font-size: 44px;
    }

    @media (max-width: 1150.98px) {
        font-size: 36px;
    }
`

const SigninButton = styled.button`
    color: #FFF;
    margin: 20px;
    background: #16A8E0;
    border-radius: 81px;
    border-style: none;
    background: #0375BB;
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;
    height: 62px;
    width: 315px;
    align-items: center;
    margin-top: 2rem;
`

const LoginForm = styled.form`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 30px 0;
`

const Input = styled.input`
    border-radius: 81px;
    width: 720px;
    line-height: 45px;
    height: 62px;
    background: #ddd;
    border-style: none;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    font-size: 30px;
    margin-top: 15px;
    
    @media (max-width: 1300.98px) {
        width: 610px;
    }
    
    @media (max-width: 1150.98px) {
        width: 570px;
    }

    @media (max-width: 1090.98px) {
        width: 488px;
    }

    @media (max-width: 510.98px) {
        width: 390px;
    }
`

const Auth = () => {
    return (
        <>
            <Main>
                <SigninContainer>
                    <HeaderAuth />
                    <ContainerSignin>
                        <MainTitle>Se connecter à son profil :</MainTitle>
                        <LoginForm>
                            <Input type="text" name="email" placeholder="Email" />
                            <Input type="password" name="password" placeholder="Password" />
                            <SigninButton>Se connecter</SigninButton>
                        </LoginForm>
                    </ContainerSignin>
                </SigninContainer>
                <LeftNavBar />

            </Main>
        </>
    );
};

export default Auth;