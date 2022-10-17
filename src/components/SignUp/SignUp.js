import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    
    if(password.length < 6 && confirm.length < 6){
      setError('*Password Must be 6 character or more!');
      return;
    }
    if(confirm !== password){
      setError("*Password did not match!");
      return;
    }
  }



  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
        <p className='error-text'>{error}</p>
        <button className="btn-submit" type='submit'>Sign Up</button>
      <p>Already Have an Account? <Link to='/login'>Log In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;