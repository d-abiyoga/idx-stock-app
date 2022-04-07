import { FC, HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import style from 'styled-theming';
import colors from '../../../styles/colors';

interface Props extends HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  textColor?: string;
  children: ReactNode;
  padding?: number;
  borderRadius?: string;
  negative?: boolean;
  theme?: { mode: 'dark' | 'light' };
}

export const OutputBox: FC<Props> = (props) => {
  return <Div {...props}>{props.children}</Div>;
};

const OutputBoxTheme = theme('mode', {
  light: css`
    background-color: ${colors.slate.c100};
    border: none;
  `,
  dark: css`
    background-color: ${colors.slate.c700};
    box-sizing: border-box;
  `,
});

const getThemeTextColor = style('mode', {
  light: colors.slate.c800,
  dark: colors.slate.c100,
});

const Div = styled.div<Props>`
  ${OutputBoxTheme}
  color: ${({ negative }) => (negative ? colors.error.c400 : getThemeTextColor)};
  border-radius: ${(props) => props.borderRadius || 0.75}rem;
  padding: ${(props) => props.padding || 0.5}rem;

  font-size: 0.875rem;
  min-width: 25ch;
  min-heigth: 1.75rem;
  line-height: 1.25rem;

  /*TODO: implement global breakpoint  */
  @media (max-width: 500px) {
    width: 100%;
  }
`;
