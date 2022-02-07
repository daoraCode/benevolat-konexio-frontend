import React, { useContext } from 'react'

// react-router-dom
import { Link, useNavigate } from 'react-router-dom'

// styles
import styled from 'styled-components'

// components
import Layouts from '../components/Layouts'
import InputComponentLargeWd from '../components/InputComponentLargeWd'
import ButtonComponent from '../components/ButtonComponent'
import RightContainer from '../components/RightContainer'

// formik npm
import { useFormik } from "formik"
// yup npm
import * as Yup from 'yup'

// context
import { VolunteerContext } from '../contexts/Volunteer'


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

const LoginForm = styled.form`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
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


const Login = props => {

    const navigate = useNavigate()
    const { setUser, setConnected } = useContext(VolunteerContext)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            loginVolunteer(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            email: Yup.string().required("Adresse e-mail est requise."),
            password: Yup.string().required("Mot de passe requis.")
        })
    })

    const loginVolunteer = async values => {
        const response = await fetch('http://localhost:5000/auth/login/volunteer', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })

        const data = await response.json()

        setUser(data)
        setConnected(true)

        if (response.error) {
            alert(response.error)
            return
        }

        if (response.status >= 400) {
            alert(response.statusText)
        } else {
            console.log('141', response)
            navigate('/login')
        }
    }

    return (
        <RowDisplay>
            <Layouts>
                <ClContainer>
                    <MainContainer>
                        <MainTitle>Déjà inscrit.e ? Connectez-vous avec votre profil :</MainTitle>
                        <LoginForm onSubmit={formik.handleSubmit}>
                            <InputComponentLargeWd
                                isInvalid={formik.errors.email}
                                onChange={formik.handleChange}
                                placeholder="Adresse e-mail" 
                                name="email" 
                                type="text" 
                            />
                            <InputComponentLargeWd
                                isInvalid={formik.errors.password}
                                onChange={formik.handleChange}
                                placeholder="Mot de passe" 
                                name="password" 
                                type="password" 
                            />
                            <ButtonComponent 
                                type="submit" 
                                label="Se connecter" 
                                hover 
                            />
                        </LoginForm>
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