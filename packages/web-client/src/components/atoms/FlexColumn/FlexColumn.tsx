import { FC } from 'react';
import styled from 'styled-components';

export const FlexColumn: FC = (props) => {
  return <Div {...props} />;
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
