import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { H1 } from '../styles/components/Headings.styled';
import { ThemeConsumer } from 'styled-components';
import ThemeToggler from '../components/molecules/ThemeToggler';

export const Home: FC<ReactElement> = (props) => {
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <main {...props}>
            <H1>Welcome</H1>
            <p>
              Hai, website ini dibuat untuk keperluan pribadi saya yang aktif berinvestasi di pasar
              saham. Semoga dapat bermanfaat bagi teman-teman investor lainnya. Saat ini fitur yang
              tersedia adalah kalkulator averaging.
            </p>
            <ThemeToggler />
            <p>Current Theme: {theme.mode}</p>
            <Link to="/calculator">Lihat calculator</Link>
          </main>
        )}
      </ThemeConsumer>
    </>
  );
};
