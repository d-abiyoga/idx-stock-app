import { Link } from 'react-router-dom';
import Heading from '../../components/atoms/Heading/';

export const Home = () => {
  return (
    <main>
      <Heading level={1}>Welcome</Heading>
      <p>
        Hai, website ini dibuat untuk keperluan pribadi saya yang aktif berinvestasi di pasar saham.
        Semoga dapat bermanfaat bagi teman-teman investor lainnya. Saat ini fitur yang tersedia
        adalah kalkulator averaging.
      </p>
      <Link to="/calculator">Lihat calculator</Link>
    </main>
  );
};
