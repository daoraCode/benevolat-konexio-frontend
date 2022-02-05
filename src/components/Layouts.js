import React from 'react';
import Header from './Header';
import RightNavbar from './RightNavbar';
import styled from 'styled-components';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';


const Page = styled.main`
    display: flex;
    display: block;
    box-sizing: content-box;
    width: 100vw;
    /* min-width: 100vh; */
    /* position: relative; */

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
    margin: 20px;

    @media (max-width: 1300.98px) {
        font-size: 47px;
    }

    @media (max-width: 1150.98px) {
        font-size: 44px;
    }
`

const LoginForm = styled.form`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
`

const Layouts = ({ }) => {
    return (
        <>
            <Page>
                <Header />
                <SigninContainer>
                    <ContainerSignin>
                        <MainTitle>Déjà inscrit.e ? Connectez-vous à votre profil :</MainTitle>
                        <LoginForm>
                            <InputComponent placeholder="Adresse e-mail" name="email" type="text" />
                            <InputComponent placeholder="Mot de passe" name="password" type="password" />
                            <ButtonComponent label="Se connecter" hover />
                        </LoginForm>
                    </ContainerSignin>
                </SigninContainer>
            </Page>
            <RightNavbar />
        </>
    );
};

export default Layouts;