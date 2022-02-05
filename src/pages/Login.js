import React from 'react'
import styled from 'styled-components'
import Layouts from '../components/Layouts'

const RowDisplay = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1010.98px) {
        flex-direction: column;
    }
`


const Login = ({ props }) => {

    return (
        <RowDisplay>
            <Layouts 
                
            />
        </RowDisplay>
    );
};

export default Login;