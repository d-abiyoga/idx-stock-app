import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
    bgColor?: string;
    flex?: boolean;
    extendWidth?: boolean;
    padding?: string;
}

export const Card: FC<Props> = (props) => {
    return <CardWrapper {...props}>{props.children}</CardWrapper>;
};

const CardWrapper = styled.div<Props>`
    background-color: ${(props) => props.bgColor || 'white'};
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
    box-shadow: 1px 13px 13px 3px rgba(21, 128, 61, 0.2);
`;
