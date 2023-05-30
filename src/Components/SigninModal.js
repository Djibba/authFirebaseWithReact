import React, {useContext, useRef, useState} from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';

export default function SignupModal() {

    const {modal, toggle, signIn} = useContext(UserContext)
    const [validation, setValidation] = useState('')
    const inputs = useRef([])
    const addInputs = (el) => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef()
    const navigate = useNavigate()

    const handleForm = async (e) => {
        e.preventDefault()

        try {
            const user = await signIn(inputs.current[0].value, inputs.current[1].value)
            formRef.current.reset()
            setValidation("")
            // console.log(user)
            navigate('/private/privateHome')
            toggle('close')
        } catch {
            setValidation('Invalid email or password')
        }

    }

    const closeModel = () => {
        setValidation("")
        toggle('close')
    }

  return (
    <>
        {modal.signin && (
            <div className="position-fixed top-0 vw-100 vh-100">
                <div className="w-100 h-100 bg-dark bg-opacity-75" >
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: '400px' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign Up</h5>
                                    <button className='btn-close' onClick={closeModel}></button>
                                </div>

                                <div className="modal-body">
                                    <form ref={formRef} onSubmit={handleForm} className='sign-up-form'>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="signInEmail" className="form-label">Email address</label>
                                            <input ref={addInputs} type="email" name='email' className="form-control" id="signInEmail" required/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signInPassword" className="form-label">Password</label>
                                            <input ref={addInputs} type="password" name='password' className="form-control" id="signInPassword" required/>
                                            <p className="text-danger mt-1">{validation}</p>

                                        </div>

                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        
    </>
  )
}
