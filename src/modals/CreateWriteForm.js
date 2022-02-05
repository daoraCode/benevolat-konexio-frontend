import React from 'react';
// import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'



// import { UserContext } from "../../contexts/User"

const Message = styled.div`
.message {
    color: red;

}
`

const CreateWriteForm = () => {
    // const { signup } = useContext(UserContext)
   

    const formik = useFormik({
        initialValues: {
            password: "",
            email: "",
            bio: "",
        },
    })

    return (
        <div>
            <form className='mt-3' onSubmit={formik.handleSubmit}> 
                <div className="mb-3">
                    <input 
                    type="text" disabled="disabled" 
                    className="form-control"  
                    placeholder='Konexio'
                    name="konexio" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Objet:' 
                    name="objet"
                    value={formik.values.objet}
                    onChange={formik.handleChange}
                    />
                </div>
                
                <Message />
                <div className="message">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Tapez votre texte...' 
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    />
                    </div>
            </form>

            
        </div>
    );
};

export default CreateWriteForm;