import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillCalculator, AiFillHome, AiFillQuestionCircle } from 'react-icons/ai';

export const Navbar = () => {
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
                <li>
                    <Link to="/company">
                        <div className="icon-wrapper">
                            <AiFillQuestionCircle size={'2x'} />
                        </div>
                        <span className="desktop-only">Company</span>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    background-color: rgb(21 128 61);

    @media (min-width: 500px) {
        height: 100vh;
        position: fixed;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        @media (min-width: 500px) {
            flex-direction: column;
        }

        li {
            list-style: none;
            a {
                display: flex;
                gap: 0.5rem;
                align-items: end;
                padding: 1rem;
                --text-opacity: 1;
                color: rgba(243, 244, 246, var(--text-opacity));
                text-decoration: none;

                .icon-wrapper {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }
`;
