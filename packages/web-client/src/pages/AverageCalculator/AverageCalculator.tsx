import { useState, useEffect, MouseEvent } from 'react';
import AverageCalculatorCard from '../../components/organism/AverageCalculatorCard';
import axios from 'axios';
import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const AverageCalculator = () => {
  const [calcCount, setCalcCount] = useState(1);
  const [companies, setCompanies] = useState([{ ticker: '', companyName: '' }]);

  useEffect(() => {
    // TODO: Set up the URL for dev/build
    try {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/company`).then((result) => {
        setCompanies(result.data.companies);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    setCalcCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <Heading level={1}>Calculator</Heading>
      <div id="breadcrumb">
        <Link to="/calculator" style={{ color: colors.primary.c500 }}>
          Calculator
        </Link>
        <span>{' > Stock Average Price'}</span>
      </div>
      <section>
        {[...Array(calcCount)].map((e, i) => (
          <AverageCalculatorCard key={i} companyList={companies} />
        ))}
        <Button onClick={handleClick}>Add new calculator</Button>
      </section>
    </main>
  );
};
