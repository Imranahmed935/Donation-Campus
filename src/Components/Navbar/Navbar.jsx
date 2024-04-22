import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to={"/"}>
          <a className="btn btn-success text-white text-xl">Donation-Campus</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <NavLink to={"/"}>
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to={"/donation"}>
            <li>
              <a>Donation</a>
            </li>
          </NavLink>
          <NavLink to={"/statistics"}>
            <li>
              <a>Statistics</a>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
