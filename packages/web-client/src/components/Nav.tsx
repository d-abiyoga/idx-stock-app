import { Link } from "react-router-dom";
import { StyledNav } from "../styles/Nav.styled";

export const Nav = (props: {}) => {
  return (
    <StyledNav id="main-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
