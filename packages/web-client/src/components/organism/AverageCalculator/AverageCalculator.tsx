import { MutableRefObject, useRef, useState, useEffect, FormEventHandler, FC } from 'react';
import { formatNumber } from '../../../utils/formatNumber';
import { calculate } from '../../..//utils/calculate';
import { Container } from './AverageCalculatorLayout.styled';
import { H2 } from '../../../styles/components/Headings.styled';
import InputItem from '../../molecules/InputItem';
import DropdownCombobox from '../../molecules/DropdownCombobox';
import Button from '../../atoms/Button';
import OutputItem from '../../molecules/OutputItem';

type companyType = {
    ticker: string;
    companyName: string;
};

type Props = {
    companyList: companyType[];
};

export const AverageCalculator: FC<Props> = (props) => {
    const [companies, setCompanies] = useState(props.companyList);
    const [output, setOutput] = useState({
        newAvgPrice: 0,
        currEquity: 0,
        additionalEquity: 0,
        totalEquity: 0,
        currPotGL: 0,
        newPotGL: 0,
        targetPotGL: 0,
    });

    useEffect(() => {
        setCompanies(props.companyList);
    }, [props.companyList]);

    const currAvgPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
    const currShareQuantityRef = useRef() as MutableRefObject<HTMLInputElement>;
    const addBuyPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
    const addBuyQuantityRef = useRef() as MutableRefObject<HTMLInputElement>;
    const targetPriceRef = useRef() as MutableRefObject<HTMLInputElement>;

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const currAvgPrice = parseFloat(currAvgPriceRef.current.value);
        const currShareQuantity = parseInt(currShareQuantityRef.current.value, 10);
        const addBuyPrice = parseInt(addBuyPriceRef.current.value, 10);
        const addBuyQuantity = parseInt(addBuyQuantityRef.current.value, 10);
        const targetPrice = parseInt(targetPriceRef.current.value, 10);

        setOutput({
            newAvgPrice: calculate.newAvgPrice(
                currAvgPrice,
                currShareQuantity,
                addBuyPrice,
                addBuyQuantity,
            ),
            currEquity: calculate.equity(currAvgPrice, currShareQuantity),
            additionalEquity: calculate.equity(addBuyPrice, addBuyQuantity),
            totalEquity: calculate.totalEquity(
                currAvgPrice,
                currShareQuantity,
                addBuyPrice,
                addBuyQuantity,
            ),
            currPotGL: calculate.currPotGL(addBuyPrice, currAvgPrice),
            newPotGL: calculate.newPotGL(
                addBuyPrice,
                calculate.newAvgPrice(currAvgPrice, currShareQuantity, addBuyPrice, addBuyQuantity),
            ),
            targetPotGL: calculate.targetPotGL(
                targetPrice,
                calculate.newAvgPrice(currAvgPrice, currShareQuantity, addBuyPrice, addBuyQuantity),
            ),
        });
    };

    return (
        <>
            <H2>Stock Average Price</H2>
            <Container className="calc-container">
                <form onSubmit={handleSubmit} className="input-container">
                    <DropdownCombobox
                        labelName="Ticker"
                        items={companies.map((company) => company.ticker)}
                    />

                    <InputItem
                        inputFor="currAvgPrice"
                        inputRef={currAvgPriceRef}
                        label="Current Average Price"
                        step={0.01}
                        stock
                        type="number"
                    />

                    <InputItem
                        inputFor="currShareQuantity"
                        inputRef={currShareQuantityRef}
                        label="Current Share Quantity"
                        type="number"
                        min={0}
                        required
                    />

                    <InputItem
                        inputFor="addBuyPrice"
                        inputRef={addBuyPriceRef}
                        label="Additional Buy Price"
                        step={1}
                        stock
                        type="number"
                    />

                    <InputItem
                        inputFor="addBuyQuantity"
                        inputRef={addBuyQuantityRef}
                        label="Additional Buy Quantity"
                        min={0}
                        required
                        type="number"
                    />

                    <InputItem
                        inputFor="targetPrice"
                        inputRef={targetPriceRef}
                        label="Target Price"
                        min={50}
                        type="number"
                    />
                    <Button>Calculate</Button>
                </form>

                <div className="output-container">
                    <OutputItem label="NewAveragePrice" output={formatNumber(output.newAvgPrice)} />
                    <OutputItem label="Current Equity" output={formatNumber(output.currEquity)} />
                    <OutputItem
                        label="Additional Equity"
                        output={formatNumber(output.additionalEquity)}
                    />
                    <OutputItem label="Total Equity" output={formatNumber(output.totalEquity)} />
                    <OutputItem
                        label="Current Pot. G/L"
                        output={`${output.currPotGL.toFixed(2)}%`}
                    />
                    <OutputItem label="New Pot. G/L" output={`${output.newPotGL.toFixed(2)}%`} />
                    <OutputItem
                        label="Target Pot. G/L"
                        output={`${output.targetPotGL.toFixed(2)}%`}
                    />
                </div>
            </Container>
        </>
    );
};