import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #F6BC4D;
    width: 590px;
    height: 100vh;
    top: 0;
    right: ${props => props.right || '0'};
    border-left: 6px solid #0375BB;
    box-sizing: content-box;
    transition: box-shadow .3s;
    
    :hover {
    box-shadow: -10px 0 90px rgba(33, 33, 33, .4    );
    /* box-shadow: 0 0 70px rgba(33, 33, 33, .5); */
  }

    @media (max-width: 1010.98px) {
        width: 100%;
        height: 90vh;
        border-left: none;
        border-top: 6px solid #0375BB;

        :hover {
            box-shadow: none;
        }
    }
`

const Span = styled.span`
    font-size: 16px;
    align-items: center;
    text-align: center;
    position: relative;
    margin: 50px;
`

const RightNavbar = ({ right, children }) => {
    return (
        <Nav right={right}>
            {children}
            <Span>En savoir plus ? Visitez la page F.A.Q.</Span>
        </Nav>
    );
};

export default RightNavbar