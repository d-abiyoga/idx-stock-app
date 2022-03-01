import {
  MutableRefObject,
  useRef,
  useState,
  useEffect,
  FormEventHandler,
  FC,
} from "react";
import { DropdownCombobox } from "../components/DropdownCombobox";
import { formatNumber } from "../utils/formatNumber";
import { calculate } from "../utils/calculate";
import { CalcInput } from "./CalcInput";
import { CalcOutput } from "./CalcOutput";
import { Container } from "../styles/AverageCalculatorLayout.styled";
import { CalcBox } from "../styles/components/Input.styled";
import { Button } from "../styles/components/Button.styled";
import { H2 } from "../styles/components/Headings.styled";

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
  });

  const currAvgPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const currShareQuantityRef = useRef() as MutableRefObject<HTMLInputElement>;
  const addBuyPriceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const addBuyQuantityRef = useRef() as MutableRefObject<HTMLInputElement>;
  const targetPriceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const currAvgPrice = parseInt(currAvgPriceRef.current.value);
    const currShareQuantity = parseInt(currShareQuantityRef.current.value);
    const addBuyPrice = parseInt(addBuyPriceRef.current.value);
    const addBuyQuantity = parseInt(addBuyQuantityRef.current.value);
    const targetPrice = parseInt(targetPriceRef.current.value);

    setOutput({
      newAvgPrice: calculate.newAvgPrice(
        currAvgPrice,
        currShareQuantity,
        addBuyPrice,
        addBuyQuantity
      ),
      currEquity: calculate.equity(currAvgPrice, currShareQuantity),
      additionalEquity: calculate.equity(addBuyPrice, addBuyQuantity),
      totalEquity: calculate.totalEquity(
        currAvgPrice,
        currShareQuantity,
        addBuyPrice,
        addBuyQuantity
      ),
      currPotGL: calculate.currPotGL(addBuyPrice, currAvgPrice),
      newPotGL: calculate.newPotGL(
        addBuyPrice,
        calculate.newAvgPrice(
          currAvgPrice,
          currShareQuantity,
          addBuyPrice,
          addBuyQuantity
        )
      ),
      targetPotGL: calculate.targetPotGL(
        targetPrice,
        calculate.newAvgPrice(
          currAvgPrice,
          currShareQuantity,
          addBuyPrice,
          addBuyQuantity
        )
      ),
    });
  };

  return (
    <>
      <H2>Stock Average Price</H2>
      <Container className="calc-container">
        <form onSubmit={handleSubmit} className="input-container">
          <div className="input-item">
            <DropdownCombobox
              labelName="Ticker"
              items={companies.map((company) => company.ticker)}
            />
          </div>

          <CalcInput
            inputFor="currAvgPrice"
            label="Current Average Price"
            pholder="50"
            inputRef={currAvgPriceRef}
          />
          <CalcInput
            inputFor="currShareQuantity"
            label="Current Share Quantity"
            pholder="0"
            inputRef={currShareQuantityRef}
          />
          <CalcInput
            inputFor="addBuyPrice"
            label="Additional Buy Price"
            pholder="50"
            inputRef={addBuyPriceRef}
          />

          <CalcInput
            inputFor="addBuyQuantity"
            label="Additional Buy Quantity"
            pholder="0"
            inputRef={addBuyQuantityRef}
          />
          <div className="input-item">
            <label className="input-label" htmlFor="targetPrice">
              Target Price
            </label>
            <CalcBox
              as="input"
              id="targetPrice"
              placeholder="0"
              ref={targetPriceRef}
              className="input-box"
            />
          </div>

          <Button>Calculate</Button>
        </form>

        <div className="output-container">
          <CalcOutput
            label="New Average Price"
            output={formatNumber(output.newAvgPrice)}
          />
          <CalcOutput
            label="Current Equity"
            output={formatNumber(output.currEquity)}
          />
          <CalcOutput
            label="Additional Equity"
            output={formatNumber(output.additionalEquity)}
          />
          <CalcOutput
            label="Total Equity"
            output={formatNumber(output.totalEquity)}
          />
          <CalcOutput
            label="Current Pot. G/L"
            output={`${output.currPotGL.toFixed(2)}%`}
          />
          <CalcOutput
            label="New Pot. G/L"
            output={`${output.newPotGL.toFixed(2)}%`}
          />
          <CalcOutput
            label="Target Pot. G/L"
            output={`${output.targetPotGL.toFixed(2)}%`}
          />
        </div>
      </Container>
    </>
  );
};
