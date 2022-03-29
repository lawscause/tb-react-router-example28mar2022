import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const UserLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Main Section
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users/"
                className="nav-link"
                activeClassName="active"
              >
                User's Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default UserLayout;
