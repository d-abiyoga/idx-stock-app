import { FunctionComponent, ReactNode } from 'react';
import { H1, H2, H3, H4 } from './Heading.styled';

interface Props {
  level?: 1 | 2 | 3 | 4 | undefined;
  children: ReactNode;
}

export const Heading: FunctionComponent<Props> = (props) => {
  switch (props.level) {
    case 1:
      return <H1 {...props}></H1>;
    case 2:
      return <H2 {...props}></H2>;
    case 3:
      return <H3 {...props}></H3>;
    case 4:
      return <H4 {...props}></H4>;
    default:
      return <></>;
  }
};
