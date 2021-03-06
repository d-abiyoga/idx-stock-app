import { Link, Outlet } from 'react-router-dom';
import Heading from '../../components/atoms/Heading';
import { Main, Section } from './Calculator.styled';
import { FaCalculator } from 'react-icons/fa';
import LinkIconCard from '../../components/atoms/LinkIconCard';

export const Calculator = () => {
  return (
    <>
      <Main>
        <Heading level={1}>Calculator</Heading>
        <Section>
          <Link to="/calculator/average">
            <LinkIconCard>
              <FaCalculator />
              <p>Average Calculator</p>
            </LinkIconCard>
          </Link>
          <Link to="/calculator/cagr">
            <LinkIconCard>
              <FaCalculator />
              CAGR Calculator
            </LinkIconCard>
          </Link>
        </Section>
        <Outlet />
      </Main>
    </>
  );
};
