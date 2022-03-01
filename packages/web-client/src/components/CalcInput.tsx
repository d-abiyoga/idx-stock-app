import { MutableRefObject } from "react";
import { CalcBox } from '../styles/components/Input.styled'

type CalcInputProps = {
  inputFor: string;
  label: string;
  pholder: string;
  inputRef: MutableRefObject<HTMLInputElement>;
};

export const CalcInput = (props: CalcInputProps) => {
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
        required
      />
    </div>
  );
};
