import React from 'react';
import styled from 'styled-components';
import Logo from '../images/konexio.png';

const Header = styled.header`
    box-sizing: content-box;

    @media (max-width: 510.98px) {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
    }
`

const Img = styled.img` 
    width: 220px;
    min-height: auto;
    padding-left: 50px;

    @media (max-width: 510.98px) {
        width: 300px;
        padding-left: 0;
    }
`

const HeaderAuth = () => {
    return (
        <Header>
            <Img src={Logo} />
        </Header>
    );
};

export default HeaderAuth;