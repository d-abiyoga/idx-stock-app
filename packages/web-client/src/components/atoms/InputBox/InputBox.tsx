import { FC, HTMLAttributes, MutableRefObject } from 'react';
import styled from 'styled-components';

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
        <Input
            style={{
                padding: padding,
                borderRadius: `${borderRadius}px`,
            }}
            ref={props.inputRef}
            {...props}
        ></Input>
    );
};

const Input = styled.input<Props>`
    --primary-color: rgba(110, 231, 183, 1);
    --light-color: #d1fae5;

    background-color: ${(props) => props.bgColor || 'var(--light-color)'};
    color: ${(props) => props.textColor || '#000'};

    border: none;
    font-size: 0.875rem;
    min-width: 25ch;
    min-heigth: 1.75rem;
    line-height: 1.25rem;

    &:focus {
        outline: solid 1px var(--primary-color);
        --shadow-color: 103deg 54% 46%;
        --shadow-elevation-medium: 0.2px 0.2px 0.3px hsl(var(--shadow-color) / 0.44),
            0.8px 0.8px 1.2px -0.9px hsl(var(--shadow-color) / 0.42),
            2.1px 2px 3.2px -1.8px hsl(var(--shadow-color) / 0.4),
            5.2px 4.9px 7.8px -2.7px hsl(var(--shadow-color) / 0.38);

        box-shadow: var(--shadow-elevation-medium);
    }
    &:hover {
        outline: solid 2px var(--primary-color);
    }

    /*TODO: implement global breakpoint  */
    @media (max-width: 500px) {
        width: 100%;
    }
`;
