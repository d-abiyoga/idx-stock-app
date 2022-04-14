import { FormEvent, FormEventHandler, MutableRefObject, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Card from '../../components/atoms/Card';
import FlexColumn from '../../components/atoms/FlexColumn';
import Heading from '../../components/atoms/Heading/';
import Table from '../../components/atoms/Table';
import InputItem from '../../components/molecules/InputItem';
import OutputItem from '../../components/molecules/OutputItem';
import colors from '../../styles/colors';
import { truncFloat } from '../../utils/formatNumber';

export const Cagr = () => {
  const [result, setResult] = useState(0);
  const [growthArray, setGrowthArray] = useState([] as number[]);
  const startingValueRef = useRef() as MutableRefObject<HTMLInputElement>;
  const endValueRef = useRef() as MutableRefObject<HTMLInputElement>;
  const periodRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSubmit: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const startingValue = parseFloat(startingValueRef.current.value);
    const endValue = parseFloat(endValueRef.current.value);
    const period = parseInt(periodRef.current.value, 10);

    const cagr = ((endValue / startingValue) ** (1 / period) - 1) * 100;

    let growthTable = [startingValue];
    for (let i = 0; i < period; i++) {
      let prevPeriodValue = growthTable[i];
      let nextPeriodValue = prevPeriodValue + (prevPeriodValue * cagr) / 100;
      growthTable.push(truncFloat(nextPeriodValue));
    }

    setResult(cagr);
    setGrowthArray(growthTable);
  };
  return (
    <main>
      <Heading level={1}>Calculator</Heading>
      <div id="breadcrumb">
        <Link to="/calculator" style={{ color: colors.primary.c500 }}>
          Calculator
        </Link>
        <span>{' > CAGR'}</span>
      </div>
      <Heading level={2}>CAGR Calculator</Heading>
      <FlexColumn>
        <Card asElement="form" extendWidth flex onSubmit={handleSubmit}>
          <InputItem
            inputFor="startingValue"
            label="Starting Value"
            type="number"
            inputRef={startingValueRef}
            step={0.01}
            required
          />
          <InputItem
            inputFor="endValue"
            label="End Value"
            type="number"
            inputRef={endValueRef}
            step={0.01}
            required
          />
          <InputItem
            inputFor="period"
            label="Number of Period"
            type="number"
            inputRef={periodRef}
            min={3}
            required
          />
          <Button>Calculate</Button>
        </Card>
        <Card extendWidth flex>
          <OutputItem label="CAGR" outputType="percentage" output={result} />
          {growthArray.length > 2 && (
            <Table>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {growthArray.map((value, i) => (
                  <tr key={value + i}>
                    <td>{i}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>
      </FlexColumn>
    </main>
  );
};
