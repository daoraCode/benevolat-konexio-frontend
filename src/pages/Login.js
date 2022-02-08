import React, { useContext } from 'react'

// react-router-dom
import { Link } from 'react-router-dom'

// styles
import styled from 'styled-components'

// components
import Layouts from '../components/Layouts'
import RightContainer from '../components/RightContainer'
import ButtonComponent from '../components/ButtonComponent'


// context
import { VolunteerContext } from '../contexts/Volunteer'
import LoginForm from '../components/LoginForm'


const RowDisplay = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1010.98px) {
        flex-direction: column;
    }
`

const MainContainer = styled.div`
    flex: 1; // allow to display all the rest of width necessary
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
    font-size: 48px;
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
    font-weight: 600;
    text-align: center;
    padding: 8px;
`

const ContainerTitle = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
`


const Login = () => {

    // const navigate = useNavigate()
    const { setUser, setConnected } = useContext(VolunteerContext)

    return (
        <RowDisplay>
            <Layouts>
                <ClContainer>
                    <MainContainer>
                        <MainTitle>Déjà inscrit.e ? Connectez-vous avec votre profil :</MainTitle>
                        <LoginForm />
                    </MainContainer>
                </ClContainer>
            </Layouts>
            <RightContainer>
                <ContainerTitle>
                    <Title>Vous souhaitez devenir bénévole ?</Title>
                    <Subtitle>Rejoignez-nous.</Subtitle>
                </ContainerTitle>
                <Link to='/signup'>
                    <ButtonComponent label="S'inscrire" hover />
                </Link>
            </RightContainer>
        </RowDisplay>
    );
};

export default Login