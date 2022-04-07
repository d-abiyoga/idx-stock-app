import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import colors from '../../../styles/colors';

export const StyledRoundButton = styled.button`
  --radius: 3rem;
  width: var(--radius);
  height: var(--radius);
  border-radius: var(--radius);
  border: none;
  color: #fff;
  background-color: green;
  box-shadow: 6px 3px 6px 3px rgba(21, 128, 61, 0.5);
  cursor: pointer;
`;

const ButtonTheme = theme('mode', {
  light: css`
    background-color: ${colors.primary.c500};
    color: ${colors.slate.c100};

    &:hover {
      background-color: ${colors.primary.c600};
    }

    &:focus {
      outline: 2px solid ${colors.slate.c600};
    }

    &:active {
      background-color: ${colors.primary.c400};
    }

    &:disabled {
      background-color: ${colors.slate.c100};
      color: ${colors.slate.c400};
      border: 1px solid ${colors.slate.c400};
    }
  `,
  dark: css`
    background-color: ${colors.primary.c500};
    color: ${colors.slate.c100};

    &:hover {
      background-color: ${colors.primary.c600};
    }

    &:focus {
      outline: 2px solid ${colors.slate.c600};
    }

    &:active {
      background-color: ${colors.primary.c400};
    }

    &:disabled {
      background-color: ${colors.slate.c800};
      color: ${colors.slate.c700};
      border: 1px solid ${colors.slate.c700};
    }
  `,
});

export const StyledButton = styled.button`
  --ring-color: rgba(110, 231, 183, 1);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),

  width: 10rem;
  border: none;
  border-radius: 0.75rem;
  display: block;
  padding: 0.5rem;
  cursor: pointer;

  ${ButtonTheme}

  /* box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow); */
`;
