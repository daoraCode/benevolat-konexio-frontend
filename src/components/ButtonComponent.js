import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    color: #16A8E0;
    margin: 63px;
    border-radius: 81px;
    border-style: none;
    background: ${props => props.background || '#0B5074'};
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
    text-align: center;
    height: 62px;
    width: 315px;
    align-items: center;
    align-self: center;
    transition: .28s ease-in-out 0s;

    ${props => {
    if (props.hover) {
      return (
        `&:hover {
          color: #FFFFFF;
          background-color: #0B5074;
          cursor: pointer;
          transform: scale(1.09);
        }`
      )
    }
  }}
`

const ButtonComponent = ({ hover, onClick, type, label, background }) => {
    return (
        <Btn
            hover={hover}
            onClick={onClick}
            type={type}
            background={background}
        >
            {label}      
        </Btn>
    );
};

export default ButtonComponent;