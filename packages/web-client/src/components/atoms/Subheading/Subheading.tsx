import { FunctionComponent, ReactNode } from 'react';
import { StyledSubheading } from './Subheading.styled';

interface Props {
  children: ReactNode;
  asElement?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Subheading: FunctionComponent<Props> = (props) => {
  return <StyledSubheading as={props.asElement} {...props}></StyledSubheading>;
};
