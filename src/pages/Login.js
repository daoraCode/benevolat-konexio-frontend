import React from 'react'

// styles
import styled from 'styled-components'

// components
import Layouts from '../components/Layouts'
import InputComponentLargeWd from '../components/InputComponentLargeWd'
import ButtonComponent from '../components/ButtonComponent'
import RightNavbar from '../components/RightNavbar'


const RowDisplay = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1010.98px) {
        flex-direction: column;
    }
`

const MainContainer = styled.div`
    flex: 1; // allow to take all width necessary
    margin-top: 60px;
`

// container set in flex-direction-column
const ClContainer = styled.div`
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

const Title = styled.h1`
    color: #0375BB;
    font-size: 41px;
    font-weight: 700;
    text-align: center;
`

const Subtitle = styled.h3`
    font-size: 25px;
    color: darkslategrey;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    padding: 8px;
`

const ContainerTitle = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
`


const Login = ({ props }) => {

    console.log('57', props)

    return (
        <RowDisplay>
                <Layouts>
                    <ClContainer>
                        <MainContainer>
                            <MainTitle>Déjà inscrit.e ? Connectez-vous à votre profil :</MainTitle>
                            <LoginForm>
                                <InputComponentLargeWd placeholder="Adresse e-mail" name="email" type="text" />
                                <InputComponentLargeWd placeholder="Mot de passe" name="password" type="password" />
                                <ButtonComponent label="Se connecter" hover />
                            </LoginForm>
                        </MainContainer>
                    </ClContainer>
                </Layouts>
            <RightNavbar>
                <ContainerTitle>
                    <Title>Vous souhaitez devenir bénévole ?</Title>
                    <Subtitle>Rejoignez-nous</Subtitle>
                </ContainerTitle>
                <ButtonComponent label="S'inscrire" hover />
            </RightNavbar>
        </RowDisplay>
    );
};

export default Login;