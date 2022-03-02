import { Link } from "react-router-dom";
import { StyledNav } from "../styles/Nav.styled";
import { AiFillCalculator , AiFillHome,AiFillQuestionCircle } from "react-icons/ai";

export const Nav = (props: {}) => {
  return (
    <StyledNav id="main-navigation">
      <ul>
        <li>
          <Link to="/">
            <div className="icon-wrapper">
              <AiFillHome size={'2x'} />
            </div>
            <span className="desktop-only">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            <div className="icon-wrapper">
              <AiFillCalculator size={'2x'} />
            </div>
            <span className="desktop-only">Calculator</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <div className="icon-wrapper">
              <AiFillQuestionCircle size={'2x'} />
            </div>
            <span className="desktop-only">About</span>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};
