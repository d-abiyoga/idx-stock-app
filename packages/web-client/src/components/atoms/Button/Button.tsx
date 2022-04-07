import { FC, HTMLAttributes, ReactNode } from 'react';
import { StyledButton, StyledRoundButton } from './Button.styled';
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'floating-round';
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ variant = 'default', ...props }) => {
  if (variant == 'floating-round')
    return <StyledRoundButton {...props}>{props.children}</StyledRoundButton>;
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
