import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset();
      navigate('/');
    })
    .catch(error => console.log(error))
  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />
        </div>
        <button className='btn-submit' type='submit'>Log In</button>
      <p>New to Ema John? <Link to='/signup'>Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;