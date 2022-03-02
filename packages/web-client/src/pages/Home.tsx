import { Link } from "react-router-dom";
import {H1 } from "../styles/components/Headings.styled"

export const Home = (props: {}) => {
  return (
    <main>
        <H1>Welcome</H1>
      <p>
        Hai, website ini dibuat untuk keperluan pribadi saya yang aktif
        berinvestasi di pasar saham. Semoga dapat bermanfaat bagi teman-teman
        investor lainnya. Saat ini fitur yang tersedia adalah kalkulator
        averaging.
      </p>
      <Link to="/calculator">Lihat calculator</Link>
    </main>
  );
};
