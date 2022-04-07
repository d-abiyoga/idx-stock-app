import Heading from '../../components/atoms/Heading';

export const About = () => {
  return (
    <main>
      <Heading level={1}>About</Heading>
      <p>
        Website ini dibuat untuk keperluan pribadi saya yang aktif berinvestasi di pasar saham.
        Kenapa website ini dibuat? Karena belum ada website open source serupa yang dapat membantu
        investor Indonesia dalam berinvestasi (dalam hal ini fundamental analysis).Umumnya platform
        serupa menitikberatkan fokus platform tersebut pada fitur-fitur trading.
      </p>

      <p>
        Fitur yang tersedia saat ini baru calculator saja. Ke depannya, direncakan akan ada beberapa
        fitur seperti:
      </p>
      <ul>
        <li>Portofolio dengan &lsquo;Login with Google&lsquo;</li>
        <li>Company Information (tidak semua company)</li>
      </ul>
    </main>
  );
};
