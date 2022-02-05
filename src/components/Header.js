import React from 'react'
import styled from 'styled-components'
import Logo from '../images/konexio.png'

const FirstHeader = styled.header`
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

const Header = () => {
    return (
        <FirstHeader>
            <Img src={Logo} />
        </FirstHeader>
    )
}

export default Header