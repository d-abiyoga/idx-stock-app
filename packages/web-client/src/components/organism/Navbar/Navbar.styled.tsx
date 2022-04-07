import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import colors from '../../../styles/colors';

const navTheme = theme('mode', {
  light: css`
    background: ${colors.primary.c500};
  `,
  dark: css`
    background: ${colors.primary.c700};
  `,
});

export const StyledNav = styled.nav`
  ${navTheme}

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
