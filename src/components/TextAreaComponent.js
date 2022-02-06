import React from 'react'
import styled from 'styled-components'

const TextAreaSignUp = styled.textarea`
    height: ${props => props.height || '311px'};
    border-radius: 33px;
    line-height: 45px;
    font-size: 30px;
    background: #F4F4F4;
`

const TextAreaTextAreaComponent = ({ name, placeholder, height, onChange, value, height }) => {
    return (
        <TextAreaSignUp
            as='textarea'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}   
            height={height}
        />
    )
}

export default TextAreaTextAreaComponent