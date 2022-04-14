import { Link } from 'react-router-dom';
import { Logo, StyledNav } from './Navbar.styled';
import { AiFillCalculator, AiFillHome, AiFillQuestionCircle } from 'react-icons/ai';
import { FC } from 'react';
import ThemeToggler from '../../atoms/ThemeToggler';

export const Navbar: FC = (props) => {
  const iconSize = '2rem';
  return (
    <StyledNav id="main-navigation" {...props}>
      <Logo>Idx Stock App</Logo>
      <ul>
        <li>
          <Link to="/">
            <div className="icon-wrapper">
              <AiFillHome size={iconSize} />
            </div>
            <span className="desktop-only">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            <div className="icon-wrapper">
              <AiFillCalculator size={iconSize} />
            </div>
            <span className="desktop-only">Calculator</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className="icon-wrapper">
              <AiFillQuestionCircle size={iconSize} />
            </div>
            <span className="desktop-only">About</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/company">
            <div className="icon-wrapper">
              <AiFillQuestionCircle size={iconSize} />
            </div>
            <span className="desktop-only">Company</span>
          </Link>
        </li> */}
        {/* TEMPORARY */}
        {/* <li>
          <Link to="/login">
            <div className="icon-wrapper">
              <AiFillQuestionCircle size={iconSize} />
            </div>
            <span className="desktop-only">Login</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <div className="icon-wrapper">
              <AiFillQuestionCircle size={iconSize} />
            </div>
            <span className="desktop-only">Dashboard</span>
          </Link>
        </li> */}
      </ul>
      <ThemeToggler />
    </StyledNav>
  );
};
