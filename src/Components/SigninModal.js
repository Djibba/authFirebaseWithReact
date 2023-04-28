import React, {useContext} from 'react'
import { UserContext } from '../Context/UserContext'

export default function SigninModal() {

    const {modal, toggle} = useContext(UserContext)

  return (
    <>
        {modal.signin && (
            <div className="position-fixed top-0 vw-100 vh-100">
                <div className="w-100 h-100 bg-dark bg-opacity-75" onClick={() => toggle('close')}>
                    <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: '400px' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign In</h5>
                                    <button className='btn-close' onClick={() => toggle('close')}></button>
                                </div>

                                <div className="modal-body">
                                    <form className='sign-in-form'>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="signInEmail" className="form-label">Email address</label>
                                            <input type="email" name='email' className="form-control" id="signInEmail" required/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signInPassword" className="form-label">Password</label>
                                            <input type="password" name='password' className="form-control" id="signInPassword" required/>
                                        <p className="text-danger mt-1"></p>

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
