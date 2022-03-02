import { useState, useEffect, MouseEvent } from "react";
import { H1, H2 } from "../styles/components/Headings.styled";
import { AverageCalculator } from "../components/AverageCalculator";
import { CalculaterPage } from "../styles/pages/Calculator.styled";
import { CircularButton } from "../styles/components/Button.styled";
import axios from "axios";

export const Calculator = () => {
  const [calcCount, setCalcCount] = useState(1);
  const [companies, setCompanies] = useState([{ ticker: "", companyName: "" }]);

  useEffect(() => {
    // TODO: Set up the URL for dev/build
    axios.get("http://localhost:3001/company").then((result) => {
      setCompanies(result.data.companies);
    });
  }, []);

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    setCalcCount((prevCount) => prevCount + 1);
  };

  return (
    <CalculaterPage>
      <H1>Calculator</H1>
      <section>
        {[...Array(calcCount)].map((e, i) => (
          <AverageCalculator key={i} companyList={companies} />
        ))}
        <CircularButton onClick={handleClick}>Add</CircularButton>
      </section>
    </CalculaterPage>
  );
};
