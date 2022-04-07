import { FC } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import colors from '../../../styles/colors';

export const Table: FC = (props) => {
  return <StyledTable>{props.children}</StyledTable>;
};

const TableTheme = theme('mode', {
  light: css`
    thead {
      background-color: ${colors.primary.c100};
    }
    tr:nth-child(even) {
      background-color: ${colors.slate.c100};
    }
  `,
  dark: css`
    thead {
      background-color: ${colors.primary.c600};
    }
    tr:nth-child(even) {
      background-color: ${colors.slate.c700};
    }
  `,
});

const StyledTable = styled.table`
  thead {
    text-align: left;
  }

  tr:nth-child(even) {
    border: none;
  }

  td,
  th {
    padding-left: 1rem;
  }

  ${TableTheme}
`;
