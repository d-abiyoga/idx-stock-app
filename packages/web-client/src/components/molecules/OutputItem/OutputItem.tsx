import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import OutputBox from '../../atoms/OutputBox';

interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    output: string;
    id?: string;
}

export const OutputItem: FC<Props> = (props) => {
    return (
        <Wrapper>
            <label htmlFor={props.id}>{props.label}</label>
            <OutputBox id={props.id}>{props.output}</OutputBox>
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
