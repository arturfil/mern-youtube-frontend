import React from 'react';
import Navigation from './Navigation'

import "./Signup.css"

const Signup = () => {

  const signUpForm = () => (
    <form className="sign-box">
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          type='text'
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label className='text-muted'>email</label>
        <input
          type='email'
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'/>
      </div>
      <button className='btn btn-primary'>
        Sign Up
      </button>
    </form>
  );

  return (
    <>
      <Navigation/>
      <div className="mt-5">
        <h4 className="text-center mb-5">Signup form</h4>
        {signUpForm()}
      </div>
    </>
  )
}

export default Signup;
