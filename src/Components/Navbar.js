import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <h1>Yo, Where You At?</h1>
    <NavLink to="/">Enter</NavLink>
    <NavLink to="locations-list">Locations</NavLink>
  </nav>
);

export default Navbar;
