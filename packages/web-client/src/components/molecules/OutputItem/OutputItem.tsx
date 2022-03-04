import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import OutputBox from '../../atoms/OutputBox';
import { formatNumber } from '../../../utils/formatNumber';

interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string;
    output: number;
    id?: string;
    outputType: 'currency' | 'percentage';
}

export const OutputItem: FC<Props> = (props) => {
    const FormatNumber = new formatNumber();
    let formattedOutput;
    switch (props.outputType) {
        case 'currency':
            formattedOutput = FormatNumber.toCurrency(props.output);
            break;
        case 'percentage':
            formattedOutput = FormatNumber.toPercentage(props.output);
            break;
        default:
            formattedOutput = props.output;
    }

    return (
        <Wrapper>
            <label htmlFor={props.id}>{props.label}</label>
            <OutputBox id={props.id} negative={props.output < 0 ? true : false}>
                {formattedOutput}
            </OutputBox>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;

    label {
        min-width: 25ch;
    }
`;
