import { NavLink } from "react-router-dom";
import sunIconUrl from "/src/assets/sun.svg";
import notificationIconUrl from "/src/assets/bell.svg";
import userIconUrl from "/src/assets/user.svg";
import "../style/nav.scss";
import useWindowSize from "/src/hooks/useWindowSize";
import { useEffect, useState } from "react";

const Nav = () => {
  const { width } = useWindowSize();
  const [navMenu, setNavMenu] = useState(false);
  const handleOptionClick = () => {
    setNavMenu((prev) => !prev);
  };
  const handleClick = () => {
    setNavMenu(false)
  }

  useEffect(() => {
    if(width > 920) setNavMenu(false)
  }, [width])

  return (
    <>
      <nav>
        <div className="wrapper-first">
          <div className="nav-icon profile-btn-wrapper">
            <img src={userIconUrl} />
          </div>
        </div>
        <div className="wrapper-second">
          {width > 920 ? (
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
          ) : null}
          <div className="nav-icon theme-changer-btn-wrapper">
            <img src={sunIconUrl} />
          </div>
          <div className="nav-icon profile-btn-wrapper">
            <img src={notificationIconUrl} />
          </div>
          {width < 920 ? (
            <div
              className={navMenu ? "nav-menu-icon active" : "nav-menu-icon"}
              onClick={handleOptionClick}
            ></div>
          ) : null}
        </div>
      </nav>
      <div className={navMenu ? "nav-menu-low active" : "nav-menu-low"} onClick={handleClick}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "active " : "") + "nav-item collection-wrapper"
          }
        >
          collection{" "}
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            (isActive ? "active " : "") + "nav-item history-wrapper"
          }
        >
          history
        </NavLink>{" "}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            (isActive ? "active " : "") + "nav-item dashboard-wrapper"
          }
        >
          dashboard
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
