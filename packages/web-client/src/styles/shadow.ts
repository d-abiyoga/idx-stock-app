import { css } from 'styled-components';

const md = css`
  --shadow-elevation-medium: 0.2px 0.2px 0.3px hsl(var(--shadow-color) / 0.44),
    0.8px 0.8px 1.2px -0.9px hsl(var(--shadow-color) / 0.42),
    2.1px 2px 3.2px -1.8px hsl(var(--shadow-color) / 0.4),
    5.2px 4.9px 7.8px -2.7px hsl(var(--shadow-color) / 0.38);

  box-shadow: var(--shadow-elevation-medium);
`;

export const shadow = {
  md,
};
