import { useState, useEffect } from 'react';
import Heading from '../../components/atoms/Heading';
import DropdownCombobox from '../../components/molecules/DropdownCombobox';
import axios from 'axios';

/* type companyType = {
  ticker: string;
  companyName: string;
}; */

/* type Props = {
  companyList: companyType[];
}; */

export const Company = () => {
  const [companies, setCompanies] = useState([{ ticker: '', companyName: '' }]);

  useEffect(() => {
    // TODO: Set up the URL for dev/build
    try {
      axios.get('http://localhost:3001/company').then((result) => {
        setCompanies(result.data.companies);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <main>
      <Heading level={2}>Company Page</Heading>
      <DropdownCombobox
        labelName="Select Company Ticker"
        items={companies.map((company) => company.ticker)}
      />
    </main>
  );
};
