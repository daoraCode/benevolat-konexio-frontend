import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    color: #FFF;
    margin: 30px;
    border-radius: 81px;
    border-style: none;
    background: #0375BB;
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    text-align: center;
    height: 62px;
    width: 315px;
    align-items: center;
    align-self: center;

    ${props => {
    if (props.hover) {
      return (
        `&:hover {
          color: #0375BB;
          background-color: white;
          border: 3px solid #0375BB;
        }`
      )
    }
  }}
`

const ButtonComponent = ({ hover, onClick, type, label }) => {
    return (
        <Btn
            hover={hover}
            onClick={onClick}
            type={type}
        >
            {label}      
        </Btn>
    );
};

export default ButtonComponent;