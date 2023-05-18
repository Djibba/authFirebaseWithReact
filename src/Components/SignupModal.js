import React, {useContext, useRef, useState} from 'react'
import { UserContext } from '../Context/UserContext'

export default function SignupModal() {

    const {modal, toggle, signUp} = useContext(UserContext)
    const [validation, setValidation] = useState('')
    const inputs = useRef([])
    const addInputs = (el) => {
        if(el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    const handleForm = (e) => {
        e.preventDefault()

        if((inputs.current[1].value.length < 6) || (inputs.current[2].value.length < 6)) {
            setValidation('Password must be at least 6 characters')
            return
        } else if(inputs.current[1].value !== inputs.current[2].value) {
            setValidation('Passwords do not match')
            return
        }

        try {
            const user = signUp(inputs.current[0].value, inputs.current[1].value)
            formRef.current.reset()
            setValidation("")
            console.log(user)
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                setValidation('Email already in use')
            }
            if(error.code === "auth/invalid-email") {
                setValidation('Invalid email')
            }
        }

    }

    const closeModel = () => {
        setValidation("")
        toggle('close')
    }

  return (
    <>
        {modal.signup && (
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
                                            <label htmlFor="signUpEmail" className="form-label">Email address</label>
                                            <input ref={addInputs} type="email" name='email' className="form-control" id="signUpEmail" required/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpPassword" className="form-label">Password</label>
                                            <input ref={addInputs} type="password" name='password' className="form-control" id="signUpPassword" required/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpRepeatPassword" className="form-label">Repeat Password</label>
                                            <input ref={addInputs} type="password" name='repeatPassword' className="form-control" id="signUpRepeatPassword" required/>
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
