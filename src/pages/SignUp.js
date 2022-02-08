import React, { useState } from 'react'

// route
import { Link } from 'react-router-dom'

// styles
import styled from 'styled-components'

// components
import Layouts from '../components/Layouts'
import RightContainer from '../components/RightContainer'
import ButtonComponent from '../components/ButtonComponent'
import SignupForm from '../components/SignupForm'



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

const Subtitle = styled.span`
    font-size: 27px;
    align-self: unset;
    position: relative;
    margin: 25px auto;
    padding-top: 30px;
`

// container set in flex-direction-column
const ClContainer = styled.div`
    flex-direction: column;
    flex: auto;
`

const RightContainerMainTitle = styled.h1`
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

const Signup = props => {

    // state user to keep initial information of registering
    // const [ user, setUser ] = useState({})

    return (
        <RowDisplay>
            <Layouts>
                <ClContainer>
                    <MainContainer>
                        <SignupForm />                    
                    </MainContainer>
                </ClContainer>
            </Layouts>
            <RightContainer>
                <RightContainerMainTitle>Vous disposez d'un compte bénévole ?<Subtitle>Connectez-vous dès maintenant.</Subtitle></RightContainerMainTitle>
                <Link to='/login'>
                    <ButtonComponent label="Se connecter" hover />
                </Link>
            </RightContainer>
        </RowDisplay>
    )
}

export default Signup