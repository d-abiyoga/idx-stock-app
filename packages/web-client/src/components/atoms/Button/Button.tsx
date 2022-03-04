import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  --ring-color: rgba(110, 231, 183, 1);
  --bg-opacity: 1;
  --text-opacity: 1;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),

  width: 10rem;
  border: none;
  border-radius: 0.75rem;
  background-color: rgba(5, 150, 105, var(--bg-opacity));
  display: block;
  padding: 0.5rem;
  cursor: pointer;

  color: rgba(236, 253, 245, var(--text-opacity));
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);

  &:hover {
    background-color: rgba(110, 231, 183, var(--bg-opacity));
  }

  &:focus {
    outline: 1px solid var(--ring-color);
  }

  &:active {
    background-color: rgba(4, 120, 87, var(--bg-opacity));
  }
`;
