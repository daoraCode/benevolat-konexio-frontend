import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #F6BC4D;
    width: 590px;

    // min-height 110vh allows this rightcontainer to take maximum height display screen
    min-height: 100vh !important;
    top: 0;
    right: ${props => props.right || '0'};
    border-left: 6px solid #0375BB;
    box-sizing: content-box;
    transition: box-shadow .3s;
    
    :hover {
    box-shadow: -10px 0 90px rgba(33, 33, 33, 1);
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

const RightContainer = ({ right, children }) => {
    return (
        <Nav right={right}>
            {children}
            <Span>En savoir plus ? Visitez la page F.A.Q.</Span>
        </Nav>
    );
};

export default RightContainer