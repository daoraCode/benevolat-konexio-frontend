import React from 'react'

// route
import { Link } from 'react-router-dom'

// styles
import styled from 'styled-components'

// components
import Layouts from '../components/Layouts'
import RightContainer from '../components/RightContainer'
import InputComponentSmallWd from '../components/InputComponentSmallWd'
import InputComponentLargeWd from '../components/InputComponentLargeWd'
import ButtonComponent from '../components/ButtonComponent'
import TextAreaComponent from '../components/TextAreaComponent'

// formik npm
import { useFormik } from 'formik'

// yup npm
import * as Yup from 'yup'

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

const SignupForm = styled.form`
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

const InputNameRowContainer = styled.div`
    display: flex;

    @media (max-width: 1300.98px) {
        flex-direction: column;
    }

    @media (max-width: 1090.98px) {
        /* flex-direction: column;  */
    }
`

const Span = styled.span`
    font-size: 25px;
    align-self: unset;
    position: relative;
    margin: 25px auto;
    padding-top: 60px;
`

const Subtitle = styled.span`
    font-size: 27px;
    align-self: unset;
    position: relative;
    margin: 25px auto;
    padding-top: 30px;
`

const Signup = props => {

    // const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            businessName: "",
            email: "",
            telephone: "",
            password: "",
            passwordConfirmation: ""
        },

        onSubmit: values => {
            signup(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name required."),
            lastName: Yup.string().required("Last name required."),
            businessName: Yup.string().required("Company/job name required."),
            email: Yup.string().required("Mail adress required.").email("Mail adress is invalid"),
            telephone: Yup.string().required("Phone number required"),
            password: Yup.string().required("Password required.").min(8, "Password too short."),
            passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Password must match.")
        })
    })

    const signup = async values => {
        const signupResponse = await fetch('http://localhost:5000/auth/signup', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                businessName: values.businessName,
                telephone: values.telephone,
                password: values.password,
            })
        })

        const volunteer = await signupResponse.json()

        if (volunteer.error) {
            alert(volunteer.error)
            return
        }

        const loginResponse = await fetch('http://localhost:5000/auth/login/volunteer', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email: volunteer.email,
                password: volunteer.password,
            })
        })

        if (loginResponse.status >= 400) {
            alert(loginResponse.statusText)
        } else {
            // navigate('')
            console.log('168', loginResponse)
        }

    }


    return (
        <RowDisplay>
            <Layouts>
                <ClContainer>
                    <MainContainer>
                        <MainTitle>Création du compte personnel</MainTitle>
                        <SignupForm onSubmit={formik.handleSubmit}>
                            <InputNameRowContainer>
                                <InputComponentSmallWd 
                                    isInvalid={formik.errors.firstName}
                                    onChnage={formik.handleChange}
                                    placeholder="Prénom*" 
                                    name="firstname" 
                                    type="text" 
                                />
                                <InputComponentSmallWd 
                                    isInvalid={formik.errors.lastName}
                                    onChnage={formik.handleChange}
                                    placeholder="Nom*" 
                                    name="lastname" 
                                    type="text" 
                                />
                            </InputNameRowContainer>

                            <InputComponentLargeWd 
                                isInvalid={formik.errors.businessName}
                                onChnage={formik.handleChange}
                                placeholder="Entreprise / Métier" 
                                name="firstname" 
                                type="text" 
                            />

                            <InputComponentLargeWd
                                isInvalid={formik.errors.email}
                                onChnage={formik.handleChange}
                                placeholder="Adresse e-mail*" 
                                name="email" 
                                type="text" 
                            />

                            <InputComponentLargeWd
                                isInvalid={formik.errors.telephone}
                                onChnage={formik.handleChange}
                                placeholder="Numéro de téléphone*" 
                                name="phoneNumber" 
                                type="text" 
                            />

                            <InputComponentLargeWd
                                isInvalid={formik.errors.password}
                                onChnage={formik.handleChange}
                                placeholder="Mot de passe*" 
                                name="password" 
                                type="password" 
                            />

                            <InputComponentLargeWd
                                isInvalid={formik.errors.passwordConfirmation}
                                onChnage={formik.handleChange}
                                placeholder="Confirmation du mot de passe*" 
                                name="password" 
                                type="password" 
                            />

                            <Span>Décrivez-nous comment vous avez connu Konexio :</Span>
                            <TextAreaComponent placeholder="Décrire" />

                            <ButtonComponent
                                type='submit'
                                label="Suivant" 
                                hover 
                            />
                            
                        </SignupForm>
                    </MainContainer>
                </ClContainer>
            </Layouts>
            <RightContainer>
                <MainTitle>Vous disposez d'un compte bénévole ?<Subtitle>Connectez-vous dès maintenant.</Subtitle></MainTitle>
                <Link to='/login'>
                    <ButtonComponent label="Se connecter" hover />
                </Link>
            </RightContainer>
        </RowDisplay>
    )
}

export default Signup