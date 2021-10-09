import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Header from './Header';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <form className='form__autorization' onSubmit={handleSubmit}>
          <h2 className='form__title form__title-autorization'>Log in</h2>
          <Input
            name='email'
            inputType='autorization'
            placeholder='Email'
            type='email'
            handleChange={handleEmailChange}
            value={email}
          />
          <Input
            name='password'
            inputType='autorization'
            placeholder='Password'
            type='password'
            handleChange={handlePasswordChange}
            value={password}
          />
          <button
            className='form__button form__button_autorization'
            type='submit'
          >
            Log in
          </button>
          <Link to='signup' className='form__text'>
            Not a member yet? Sign up here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
