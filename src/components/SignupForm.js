import React, { useContext } from 'react'

// components
import InputComponentSmallWd from '../components/InputComponentSmallWd'
import InputComponentLargeWd from '../components/InputComponentLargeWd'
import TextAreaComponent from '../components/TextAreaComponent'
import ButtonComponent from './ButtonComponent'
import styled from 'styled-components'

import { useFormik } from 'formik'

import * as Yup from 'yup'
import { VolunteerContext } from '../contexts/Volunteer'

const Form = styled.form`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 33px;
    padding: 25px;
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


const SignupForm = props => {

    const { user, signup } = useContext(VolunteerContext)

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
            console.log(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name required."),
            lastName: Yup.string().required("Last name required."),
            businessName: Yup.string().required("Company / job status required."),
            email: Yup.string().required("Mail adress required.").email("Mail adress is invalid"),
            telephone: Yup.string().required("Phone number required"),
            password: Yup.string().required("Password required.").min(8, "Password too short."),
            passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Password must match.")
        })
    })

    return (
        <>
            <MainTitle>Création du compte personnel</MainTitle>
            <Form onSubmit={formik.handleSubmit}>
                <InputNameRowContainer>
                    <InputComponentSmallWd
                        isInvalid={formik.errors.firstName}
                        onChange={formik.handleChange}
                        placeholder="Prénom*"
                        name="firstName"
                        type="text"
                        autoFocus
                    />
                    <InputComponentSmallWd
                        isInvalid={formik.errors.lastName}
                        onChange={formik.handleChange}
                        placeholder="Nom*"
                        name="lastName"
                        type="text"
                    />
                </InputNameRowContainer>
                <InputComponentLargeWd
                    isInvalid={formik.errors.businessName}
                    onChange={formik.handleChange}
                    placeholder="Entreprise / Métier"
                    name="businessName"
                    type="text"
                />
                <InputComponentLargeWd
                    isInvalid={formik.errors.email}
                    onChange={formik.handleChange}
                    placeholder="Adresse e-mail*"
                    name="email"
                    type="text"
                />
                <InputComponentLargeWd
                    isInvalid={formik.errors.telephone}
                    onChange={formik.handleChange}
                    placeholder="Numéro de téléphone*"
                    name="telephone"
                    type="text"
                />
                <InputComponentLargeWd
                    isInvalid={formik.errors.password}
                    onChange={formik.handleChange}
                    placeholder="Mot de passe*"
                    name="password"
                    type="password"
                />
                <InputComponentLargeWd
                    isInvalid={formik.errors.passwordConfirmation}
                    onChange={formik.handleChange}
                    placeholder="Confirmation du mot de passe*"
                    name="passwordConfirmation"
                    type="password"
                />
                <Span>Décrivez-nous comment vous avez connu Konexio :</Span>
                <TextAreaComponent placeholder="Décrire" />

                <ButtonComponent
                    type='submit'
                    label="Confirmer"
                    hover
                />
            </Form>
        </>
    )
}


export default SignupForm