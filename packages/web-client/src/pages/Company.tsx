import { Link , Outlet} from "react-router-dom"

export const Company = (props : {}) => {
  return (
    <main>
      <h1>This his Company</h1>
      <nav>
        <Link to="/">To Home</Link>
      </nav>
      {/* Test Fetch */}
      <button
        onClick={() => {
          fetch("http://localhost:3001/company", {})
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      >
        GET SOME DATA
      </button>
      <Link to="/company/add">Add new company</Link>
      <Outlet />
    </main>
  )
}
