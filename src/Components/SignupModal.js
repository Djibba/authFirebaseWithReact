import React from 'react'

export default function SignupModal() {
  return (
    <>
        <div className="position-fixed top-0 vw-100 vh-100">
            <div className="w-100 h-100 bg-dark bg-opacity-75">
                <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: '400px' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button className='btn-close'></button>
                            </div>

                            <div className="modal-body">
                                <form className='sign-up-form'>
                                    
                                    <div class="mb-3">
                                        <label htmlFor="signUpEmail" class="form-label">Email address</label>
                                        <input type="email" name='email' className="form-control" id="signUpEmail" required/>
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="signUpPassword" class="form-label">Password</label>
                                        <input type="password" name='password' className="form-control" id="signUpPassword" required/>
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="signUpRepeatPassword" class="form-label">Repeat Password</label>
                                        <input type="password" name='repeatPassword' className="form-control" id="signUpRepeatPassword" required/>
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
    </>
  )
}
