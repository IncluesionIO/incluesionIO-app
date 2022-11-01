import "./sidebar.css";
import { ReactComponent as HouseIcon } from "./icons/house-solid.svg";
import { ReactComponent as UsersIcon } from "./icons/users-solid.svg";
import { ReactComponent as AnalyticsIcon } from "./icons/chart-line-solid.svg";
import { ReactComponent as SettingIcon } from "./icons/gear-solid.svg";
import { ReactComponent as HelpIcon } from "./icons/circle-question-solid.svg";
import { ReactComponent as UserIcon } from "./icons/user-solid.svg";
import { ReactComponent as LogoutIcon } from "./icons/right-from-bracket-solid.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = (props:any) => {
  const [activeRoute, setActiveRoute] = useState(window.location.href);
  //In case of a redirect
  useEffect(() =>
  { 
    setActiveRoute(window.location.href)
  },[window.location.href])

  return (
    <nav className="side-nav-container">
      <div className="side-nav-top">
        <SidebarSelection
          name="Home"
          link="/admin/home"
          icon={<HouseIcon />}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
        <SidebarSelection
          name="Users"
          link="/admin/users"
          icon={<UsersIcon />}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
        <SidebarSelection
          name="Analytics"
          link="/admin/analytics"
          icon={<AnalyticsIcon />}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
        <SidebarSelection
          name="Settings"
          link="/admin/settings"
          icon={<SettingIcon />}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
      </div>
      <div className="side-nav-bottom">
        <SidebarSelection
          name="Help Center"
          link="/admin/help-center"
          icon={<HelpIcon />}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
        <SidebarSelection
          name="Account"
          link="/admin/myaccount"
          icon={<UserIcon />}
          activeRoute={activeRoute}
          setActiveRoute={setActiveRoute}
        />
        <SidebarSelection name="Log out" onClick={props.logout} icon={<LogoutIcon />} />
      </div>
    </nav>
  );
};

/**
 * Component for showing the links in the sidebar
 *
 * @param {String} props.link - Link for the URL to link to
 * @param {ReactComponent} props.icon - Icon to be displayed, SVGs only.
 * @param {String} props.name - The string that will be displayed next to the icon
 * @returns {ReactComponent} Links for the sidebar
 *
 * @example
 * return (
 * <SidebarSelection
 *        name="Account"
 *        link="/myaccount"
 *        icon={<UserIcon />}
 *      />
 *  )
 */
const SidebarSelection = (props: any) => {
  //Check if the URL has the link of the location to set it as active

  const getActive = () => {
    const windowLink = window.location.href;
    props.setActiveRoute(windowLink);
  };
  return (
    <div className="side-nav-link-container" onClick={getActive}>
      {props.link ? 
      <Link
        to={props.link}
        className={`side-nav-link ${
          props.activeRoute?.includes(props.link) ? "is-active" : ""
        }`}
      >
        {props.icon}
        <p className="side-nav-link-text">{props.name}</p>
      </Link> :
      <div className="side-nav-link" onClick={props.onClick}>
        {props.icon}
        <p className="side-nav-link-text">{props.name}</p>
      </div>
      }
    </div>
  );
};

export default Sidebar;
