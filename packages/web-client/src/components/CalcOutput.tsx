import { OutputDiv } from "../styles/OutputDiv.styled";

type CalcOutputProps = {
  label: string;
  output: string;
  id?: string;
};

export const CalcOutput = (props: CalcOutputProps) => {
  return (
    <div className="output-item">
      <label className="output-label" htmlFor={props.id}>{props.label}</label>
      <OutputDiv id={props.id} className="output-box">
        {props.output}
      </OutputDiv>
    </div>
  );
};
