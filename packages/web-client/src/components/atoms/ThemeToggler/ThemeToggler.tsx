import styled, { ThemeConsumer } from 'styled-components';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import breakpoints from '../../../styles/breakpoints';

export const ThemeToggler = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          aria-label={theme.mode === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'}
          onClick={() =>
            theme.setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' })
          }
        >
          {theme.mode === 'dark' ? (
            <BsFillSunFill size={32} color="#FFF" />
          ) : (
            <BsFillMoonStarsFill size={32} color="#FFF" />
          )}
        </Button>
      )}
    </ThemeConsumer>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;

  /* TEMPORARY */
  /* TODO: make proper themetoggler in mobile view */
  @media only screen and (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
