import {Link} from "react-router-dom"

export const Nav = (props : {}) => {
  return (
    <nav id="main-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Company List</Link>
        </li>
      </ul>
      
    </nav>
  )
}
