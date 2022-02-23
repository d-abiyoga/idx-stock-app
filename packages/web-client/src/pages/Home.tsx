import { Link } from "react-router-dom";
export const Home = (props: {}) => {
  return (
    <main>
      <div>
        <h1>This is Home</h1>
      </div>
      <nav>
          <Link to="/company">To Company</Link>
      </nav>
    </main>
  );
};
