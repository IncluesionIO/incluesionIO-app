import "./sidebar.css";
import { ReactComponent as HouseIcon } from "./icons/house-solid.svg";
import { ReactComponent as UsersIcon } from "./icons/users-solid.svg";
import { ReactComponent as AnalyticsIcon } from "./icons/chart-line-solid.svg";
import { ReactComponent as SettingIcon } from "./icons/gear-solid.svg";
import { ReactComponent as HelpIcon } from "./icons/circle-question-solid.svg";
import { ReactComponent as UserIcon } from "./icons/user-solid.svg";
import { ReactComponent as LogoutIcon } from "./icons/right-from-bracket-solid.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="side-nav-container">
      <div className="side-nav-top">
        <SidebarSelection name="Home" link="/dashboard" icon={<HouseIcon />} />
        <SidebarSelection name="Users" link="/users" icon={<UsersIcon />} />
        <SidebarSelection
          name="Analytics"
          link="/analytics"
          icon={<AnalyticsIcon />}
        />
        <SidebarSelection
          name="Settings"
          link="/settings"
          icon={<SettingIcon />}
        />
      </div>
      <div className="side-nav-bottom">
        <SidebarSelection
          name="Help Center"
          link="/help-center"
          icon={<HelpIcon />}
        />
        <SidebarSelection
          name="Account"
          link="/myaccount"
          icon={<UserIcon />}
        />
        <SidebarSelection name="Log out" link="/logout" icon={<LogoutIcon />} />
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
  const windowLink = window.location.href;
  const isActive = windowLink.includes(props.link);
  const classes = `side-nav-link ${isActive ? "is-active" : ""}`;

  return (
    <div className="side-nav-link-container">
      <Link to={props.link} className={classes}>
        {props.icon}
        <p className="side-nav-link-text">{props.name}</p>
      </Link>
    </div>
  );
};

export default Sidebar;
