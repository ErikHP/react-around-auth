import logo from '../images/header__logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header({ loggedIn, onLogout, email }) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Around US logo' />
      <ul className='header__menu'>
        <li>{loggedIn ? <p className='header__email'>{email}</p> : ''}</li>
        <li>
          {loggedIn ? <NavLink to='/signup' className='header__link'>
                Sign up
              </NavLink> : <NavLink to='/signup' className='header__link'>
          Log in
        </NavLink>}
        </li>
      </ul>
    </header>
  );
}
