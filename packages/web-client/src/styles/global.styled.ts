import * as styled from 'styled-components';
import style from 'styled-theming';
import colors from './colors';
import { cssReset } from './cssResets';

const getBodyBackground = style('mode', {
  light: colors.slate.c100,
  dark: colors.slate.c800,
});

const getTextColor = style('mode', {
  light: colors.slate.c800,
  dark: colors.slate.c100,
});

export const GlobalStyle = styled.createGlobalStyle`
  ${cssReset}

  /* GLOBAL THEME*/
  body {
    color: ${getTextColor};
    background-color: ${getBodyBackground};
  }

  /* classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  .desktop-only {
    @media (max-width: 700px) {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap; /* added line */
      border: 0;
    }
  }
`;
