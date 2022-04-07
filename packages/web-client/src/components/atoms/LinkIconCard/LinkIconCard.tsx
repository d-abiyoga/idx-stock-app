import { FC } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import colors from '../../../styles/colors';

interface Props {
  to?: 'string';
}

export const LinkIconCard: FC<Props> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Theme = theme('mode', {
  light: css`
    background-color: ${colors.slate.c100};
    color: black;
  `,
  dark: css`
    background-color: ${colors.slate.c600};
    color: ${colors.slate.c100};
  `,
});

const Wrapper = styled.div`
  ${Theme}
  border: 1px solid ${colors.primary.c300};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 2rem;
  width: fit-content;
  min-width: 6rem;
  padding: 0.5rem;

  & > * {
    margin: 0;
  }

  &:hover: {
    transform: scale(1.1);
  }
`;
