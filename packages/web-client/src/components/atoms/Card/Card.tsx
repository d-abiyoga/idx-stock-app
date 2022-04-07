import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';

interface Props extends HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  flex?: boolean;
  extendWidth?: boolean;
  padding?: string;
  asElement?: 'form' | 'div';
}

export const Card: FC<Props> = ({ asElement, ...props }) => {
  return <CardWrapper as={asElement} {...props}></CardWrapper>;
};

const CardTheme = theme('mode', {
  light: css`
    background-color: ${colors.neutral.white};
  `,
  dark: css`
    background-color: ${colors.slate.c800};
    border: 1px solid ${colors.slate.c700};
  `,
});

const CardWrapper = styled.div<Props>`
  /* background-color: ${(props) => props.bgColor || 'white'}; */
  ${CardTheme}
  width: ${(props) => (props.extendWidth ? `100%` : 'fit-content')};
  padding: ${(props) => props.padding || '1rem'};

  ${(props) =>
    props.flex &&
    `display: flex;
          flex-direction: column;
          gap: 1rem;`}

  flex-wrap: wrap;
  max-width: 100vw;

  border-radius: 1rem;

  @media only screen and (min-width: ${breakpoints.md}) {
    width: auto;
    max-width: 50%;
  }
`;
