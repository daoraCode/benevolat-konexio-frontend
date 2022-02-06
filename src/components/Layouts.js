import React from 'react'
import Header from './Header'
import styled from 'styled-components'




const Page = styled.div`
    display: flex;
    display: block;
    box-sizing: content-box;
    width: 100vw;
    
    /* min-width: 100vh; */
    /* position: relative; */

    @media (max-width: 1010.98px) {
        flex-direction: column;
    }
`

const Container = styled.form`
    padding: 30px;
    display: block !important;
`

const Layouts = ({ children }) => {
    return (
        <>
            <Page>
                <Header />
                <Container>
                    {children}
                </Container>
            </Page>
        </>
    )
}

export default Layouts