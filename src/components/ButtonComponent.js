import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    color: #FFF;
    margin: 63px;
    border-radius: 81px;
    border-style: none;
    background: #16A8E0;
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
          color: #16A8E0;
          background-color: white;
          border: 3px solid #16A8E0;
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