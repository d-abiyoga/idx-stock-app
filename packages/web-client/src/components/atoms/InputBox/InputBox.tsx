import { FC, HTMLAttributes, MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import style from 'styled-theming';
import theme from 'styled-theming';
import colors from '../../../styles/colors';
import { shadow } from '../../../styles/shadow';

interface Props extends HTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  textColor?: string;
  padding?: string;
  borderRadius?: number;
  placeholder?: string;
  inputRef?: MutableRefObject<HTMLInputElement>;
}

export const InputBox: FC<Props> = ({ borderRadius = 12, padding = '0.5rem', ...props }) => {
  return (
    <ThemeConsumer>
      {() => (
        <Input
          style={{
            padding: padding,
            borderRadius: `${borderRadius}px`,
          }}
          ref={props.inputRef}
          {...props}
        ></Input>
      )}
    </ThemeConsumer>
  );
};

const InputBoxTheme = theme('mode', {
  light: css`
    background-color: ${colors.primary.c100};
  `,
  dark: css`
    background-color: ${colors.slate.c700};
    outline: solid 1px ${colors.primary.c200};
  `,
});

const getTextColor = style('mode', {
  light: colors.slate.c800,
  dark: colors.slate.c100,
});

const Input = styled.input<Props>`
  ${InputBoxTheme}

  --primary-color: rgba(110, 231, 183, 1);

  color: ${(props) => props.textColor || getTextColor};
  border: none;

  font-size: 0.875rem;
  min-width: 25ch;
  min-heigth: 1.75rem;
  line-height: 1.25rem;

  &:focus {
    outline: solid 1px var(--primary-color);
    --shadow-color: 103deg 54% 46%;
    ${shadow.md}
  }
  &:hover {
    outline: solid 2px var(--primary-color);
  }

  /*TODO: implement global breakpoint  */
  @media (max-width: 500px) {
    width: 100%;
  }
`;
