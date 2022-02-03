import React from 'react';
import LeftNavBar from '../components/LeftNavBar';
import styled from 'styled-components';
import Logo from '../images/konexio.png';


const Container = styled.div`
    position: absolute;
    width: 71.5vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    /* background-color: #000; */

    @media (max-width: 1520px) {
        left: 0;
    }

    @media (max-width: 1500px) {
        display: none;
    }
`

const MainTitle = styled.h1`
    top: 2000rem;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    line-height: 75px;
    display: flex;
    color: #0375BB;
    justify-content: center;
    flex-direction: column;
    /* z-index: -10; */
`

const SigInButton = styled.button`
    color: #FFF;
    margin: 20px;
    background: #16A8E0;
    border-radius: 81px;
    border-radius: 80px;
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
    height: 200em;
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
`

const Img = styled.img` 
    width: 100%;
    width: 400px;  
    align-self: center;
    align-content: center;
    justify-content: center;    
`

const Login = () => {
    return (
        <>
            <Container>
                <Img src={Logo} />
                <MainTitle>Connectez-vous à votre profil</MainTitle>
                {/* INPUT */}
                <LoginForm>
                    <Input type="text" name="email" placeholder="Email" />
                    <Input type="password" name="password" placeholder="Password" />
                    <SigInButton>Se connecter</SigInButton>
                </LoginForm>
            </Container>
            <LeftNavBar />
        </>
    );
};

export default Login;