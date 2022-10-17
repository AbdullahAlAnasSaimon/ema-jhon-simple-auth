import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name='confirm' />
        </div>
        <input className='btn-submit' type="button" value='Sign Up' />
      <p>Already Have an Account? <Link to='/login'>Log In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;