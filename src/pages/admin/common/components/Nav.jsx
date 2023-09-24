import { NavLink } from "react-router-dom";
import sunIconUrl from "/src/assets/sun.svg";
import notificationIconUrl from "/src/assets/bell.svg";
import userIconUrl from "/src/assets/user.svg";
import "../style/nav.scss";
import useWindowSize from "/src/hooks/useWindowSize";

const Nav = () => {
  const { width } = useWindowSize();

  return (
    <nav>
      <div className="wrapper-first">
        <div className="nav-icon profile-btn-wrapper">
          <img src={userIconUrl} />
        </div>
      </div>
      <div className="wrapper-second">
        {width > 920 ? 
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
        </div> : <div className="nav-menu-icon"></div>
        }
        <div className="nav-icon theme-changer-btn-wrapper">
          <img src={sunIconUrl} />
        </div>
        <div className="nav-icon profile-btn-wrapper">
          <img src={notificationIconUrl} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
