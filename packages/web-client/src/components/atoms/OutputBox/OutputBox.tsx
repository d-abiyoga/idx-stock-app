import { FC, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
    bgColor?: string;
    textColor?: string;
    children: ReactNode;
    padding?: number;
    borderRadius?: string;
}

export const OutputBox: FC<Props> = ({ ...props }) => {
    return <Div>{props.children}</Div>;
};

const Div = styled.div<Props>`
    --secondary-color: #f3f4f6;
    background-color: ${(props) => props.bgColor || 'var(--secondary-color)'};
    color: ${(props) => props.textColor || '#000'};
    border-radius: ${(props) => props.borderRadius || 0.75}rem;
    padding: ${(props) => props.padding || 0.5}rem;

    border: none;
    font-size: 0.875rem;
    min-width: 25ch;
    min-heigth: 1.75rem;
    line-height: 1.25rem;
`;
