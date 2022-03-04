import { FC, MutableRefObject, HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import InputBox from '../../atoms/InputBox/';

interface Props extends HTMLAttributes<HTMLInputElement> {
    inputFor: string;
    inputRef?: MutableRefObject<HTMLInputElement>;
    label: string;
    min?: number;
    required?: boolean;
    stock?: boolean;
    step?: number;
    type?: HTMLInputTypeAttribute;
    autoComplete?: 'off' | 'on';
}

export const InputItem: FC<Props> = (props) => {
    return (
        <Wrapper>
            <label htmlFor="example">{props.label}</label>
            <InputBox
                inputRef={props.inputRef}
                id={props.inputFor}
                placeholder={props.stock ? '50' : '0'}
                min={props.stock ? '50' : '0'}
                autoComplete="off"
                {...props}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    label {
        min-width: 25ch;
    }
`;
