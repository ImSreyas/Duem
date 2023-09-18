import { NavLink } from "react-router-dom"
import sunIconUrl from "/src/assets/sun.svg";
import "../style/nav.scss";

const Nav = () => {
  return (
      <nav>
        <div className="wrapper-first">
          <div className="nav-icon profile-btn-wrapper"></div>
        </div>
        <div className="wrapper-second">
          <div className="nav-wrapper">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? "active " : "") + "nav-item collection-wrapper"
              }
            >
              collection
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                (isActive ? "active " : "") + "nav-item history-wrapper"
              }
            >
              history
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                (isActive ? "active " : "") + "nav-item dashboard-wrapper"
              }
            >
              dashboard
            </NavLink>
          </div>
          <div className="nav-icon theme-changer-btn-wrapper">
            <img src={sunIconUrl} />
          </div>
          <div className="nav-icon profile-btn-wrapper"></div>
        </div>
      </nav>
  )
}

export default Nav