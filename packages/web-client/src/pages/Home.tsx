import { Link } from "react-router-dom";
export const Home = (props: {}) => {
  return (
    <main>
      <div>
        <h1>Welcome</h1>
      </div>
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
