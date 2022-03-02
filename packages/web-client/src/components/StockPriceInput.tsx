import { MutableRefObject } from "react";
import { CalcBox } from '../styles/components/Input.styled'

type StockPriceInputProps = {
  inputFor: string;
  label: string;
  pholder: string;
  inputRef: MutableRefObject<HTMLInputElement>;
  step?: number;
};

export const StockPriceInput = (props: StockPriceInputProps) => {
  return (
    <div className="input-item">
      <label className="input-label" htmlFor={props.inputFor}>
        {props.label}
      </label>
      <CalcBox as="input"
        id={props.inputFor}
        type="number"
        placeholder={props.pholder}
        ref={props.inputRef}
        className="input-box"
        step={props.step}
        required
        min={50}
      />
    </div>
  );
};
